import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <Text className='text-lg font-bold items-center p-2 px-8 bg-gray-100'>
        Profile
      </Text>
      <TouchableOpacity
            className='flex-row bg-white mt-2 items-center space-x-4 p-4 px-6 border border-gray-200 shadow'
            onPress={() => {
                navigation.navigate('Store')
            }}
        >
            <Image
                className='h-10 w-10 bg-gray-300 p-4 rounded-full'
                source={require('../assets/user.png')}
            />
            <View className='flex-1'>
                <Text className='font-bold text-xl'>
                    Nancy
                </Text>
                <Text className='text-gray-500'>Delivery Pick up</Text>
            </View>
        </TouchableOpacity>
    
      <Bottom />
    </SafeAreaView>
  )
}