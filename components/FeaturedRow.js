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
        {items && (
          <ItemCard
            key={items[0]._id}
            id={items[0]._id}
            imgUrl={items[0].image}
            title={items[0].name}
            description={items[0].short_description}
            price={items[0].price}
          />
        )}
        {items && items[1] && (
          <ItemCard
            key={items[1]._id}
            id={items[1]._id}
            imgUrl={items[1].image}
            title={items[1].name}
            description={items[1].short_description}
            price={items[1].price}
          />
        )}

        {items && items[2] && (
          <ItemCard
            key={items[2]._id}
            id={items[2]._id}
            imgUrl={items[2].image}
            title={items[2].name}
            description={items[2].short_description}
            price={items[2].price}
          />
        )}

      </ScrollView>
    </View>
  )
}