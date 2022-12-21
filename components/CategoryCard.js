import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function CategoryCard({imgUrl, title}) {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image 
            source={require('../assets/fruit.jpg')}
            className='h-20 w-20 rounded bg-gray-500'
        />
      <Text className='absolute bottom-1 left-1 text-black font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}