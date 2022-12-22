import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

const StoreCard = ({ name }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            className='flex-row bg-white mt-2 items-center space-x-4 p-4 px-6 border border-gray-200 shadow'
            onPress={() => {
                navigation.navigate('Store', { 
                    name 
                })
            }}
        >
            <Image
                className='h-10 w-10 bg-gray-300 p-4 rounded-full'
                source={require('../assets/store/metfresh.png')}
            />
            <View className='flex-1'>
                <Text className='font-bold text-xl'>
                    {name}
                </Text>
                <Text className='text-gray-500'>Delivery Pick up</Text>
            </View>
            <ArrowRightIcon />
        </TouchableOpacity>
    )
}

export default StoreCard