import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'
import { useNavigation } from '@react-navigation/native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import Header from '../components/Header'

export default function OrdersScreen() {
  const navigation = useNavigation();
  return (
    <View>
      {/* <Header /> */}
      <Text className='text-lg font-bold items-center p-2 px-8 bg-gray-100'>
        Last Orders
      </Text>

      <TouchableOpacity
        className='flex-row bg-white mt-2 items-center space-x-4 p-4 px-6 border border-gray-200 shadow'
      >
        <Image
          className='h-10 w-10 bg-gray-300 p-4 rounded-full'
          source={require('../assets/tomato.jpg')}
        />
        <View className='flex-1'>
          <Text className='font-bold text-xl'>
            Last Order
          </Text>
        </View>
        <ArrowRightIcon />
      </TouchableOpacity>
      <Bottom />
    </View>
  )
}