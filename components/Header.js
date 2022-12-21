import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    ChevronDownIcon,
    ShoppingCartIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline';
import StoreCard from '../components/StoreCard';

export default function Header(props) {
    return (
        <View className='shadow'>
            <View className='flex-row pb-2 items-center mx-3 space-x-2 px-3'>
                <Image
                    className='h-10 w-10 bg-gray-300 p-3 rounded-full'
                    source={require('../assets/user.png')}
                />
                <View className='flex-1'>
                    <Text className='font-bold text-xl'>
                        Current Address
                        <ChevronDownIcon size={20} color='#222' />
                    </Text>
                </View>
                <ShoppingCartIcon size={35} color='#222' />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-4 pb-2 mx-3 px-3'>
                <View className='flex-row rounded-full flex-1 space-x-2 bg-gray-200 p-3 mt-1 mb-1'>
                    <MagnifyingGlassIcon />
                    <TextInput
                        placeholder='Search'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsHorizontalIcon />
            </View>
        </View>
    )
}