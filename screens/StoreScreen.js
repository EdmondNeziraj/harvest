import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { useRoute } from '@react-navigation/native';
import sanityClient from '../sanity';

const StoreScreen = () => {
    // const navigation = useNavigation();
    const [featuredCat, setFeaturedCats] = useState([]);


    const {
        params: {
            name
        },
    } = useRoute();

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == 'featured'] {
            ...,
            items[]->{
              ...,
            }
          }`).then(data => {
            setFeaturedCats(data);
        });
    }, []);

    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* Header */}
            <Header />

            <Text className='text-lg font-bold items-center p-2 px-8 bg-gray-100'>
                Shopping @ {name}
            </Text>
            {/* Categories */}
            <Categories />

            {featuredCat?.map(category => 
                <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
            />
            )}

            {/* Body */}
            <Bottom />
        </SafeAreaView>
    )

}

export default StoreScreen;