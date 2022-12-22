import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import sanityClient from '../sanity'
import { useNavigation } from '@react-navigation/native';

export default function CategoryCard({ imgUrl, title }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className='relative mr-2'
      onPress={() => {
        navigation.navigate('Items');
    }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className='h-20 w-20 rounded bg-gray-500'
      />
      <Text className='absolute bottom-1 left-1 text-black font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}