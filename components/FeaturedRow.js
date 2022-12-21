import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ItemCard from './ItemCard';
import sanityClient from '../sanity';


export default function FeaturedRow({ id, title }) {
  const [items, setItems] = useState();

  useEffect(() => {
    sanityClient.fetch(`
        *[_type == 'featured' && _id == $id] {
          ...,
          items[]->{
            ...,
          }
        }[0]
      `, { id }
    ).then(data => {
      setItems(data?.items);
    })
  }, [])

  console.log('items for id ', id, items);
  return (
    <View className='mb-2'>
      <View className='flex-col bg-white my-2 space-x-4 p-4 px-6 border border-gray-200 mb-2'>
        <View className='flex-row'>
          <Text className='font-bold text-lg flex-1'>{title}</Text>
          <ArrowRightIcon />
        </View>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* ItemCards */}
        {items?.map((item) => {
          <ItemCard
            key={item._id}
            id={item._id}
            imgUrl={item.image}
            title={item.name}
            description={item.short_description}
            price={item.price}
          />
        })}

      </ScrollView>
    </View>
  )
}