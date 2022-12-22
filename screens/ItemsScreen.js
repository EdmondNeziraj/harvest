import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { useRoute } from '@react-navigation/native';
import sanityClient from '../sanity';
import ItemCard from '../components/ItemCard';

const ItemsScreen = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == 'item'] {
            ...,
        }
        `).then(data => {
            setItems(data);
        })
    }, []);

    console.log('items in itemsscreen: ', items)

    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* Header */}
            <Header />

            <Text className='text-lg font-bold items-center p-2 px-8 bg-gray-100'>
                Shopping @ Met Fresh
            </Text>
            {/* Categories */}
            <Categories />
            <View className='flex-row m-2'>
                {items && items[0] && (
                    <ItemCard
                        key={items[0]._id}
                        id={items[0]._id}
                        imgUrl={items[0].image}
                        title={items[0].name}
                        description={items[0].short_description}
                        price={items[0].price}
                    />
                )}
                {items && items[3] && (
                    <ItemCard
                        key={items[3]._id}
                        id={items[3]._id}
                        imgUrl={items[3].image}
                        title={items[3].name}
                        description={items[3].short_description}
                        price={items[3].price}
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
                {items && items[5] && (
                    <ItemCard
                        key={items[5]._id}
                        id={items[5]._id}
                        imgUrl={items[5].image}
                        title={items[5].name}
                        description={items[5].short_description}
                        price={items[5].price}
                    />
                )}
            </View>
            {/* Body */}
            <Bottom />
        </SafeAreaView>
    )

}

export default ItemsScreen;