import { Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import StoreCard from '../components/StoreCard';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import { Divider } from '@rneui/themed'

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* Header */}
            <Header />

            <Text className='text-lg font-bold items-center p-2 px-8 bg-gray-100'>
                All Stores Nearby
            </Text>

            {/* Body */}
            <ScrollView className='bg-gray-100' contentContainerStyle={{
                paddingBottom: 100,
            }}>
                <StoreCard
                    name={'Met Fresh'}
                    id={12}
                    // imgUrl='to get the image'
                />
                <StoreCard name={'Rite Aid'} />
                <StoreCard name={'Walgreens'} />
                <StoreCard name={'CTown Supermarket'} />
                <StoreCard name={'Aldi'} />
                <StoreCard name={'Key Food'} />
            </ScrollView>
            <Divider width={1} />
            <Bottom />
        </SafeAreaView>
    )

}

