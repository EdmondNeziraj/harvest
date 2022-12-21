import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const ItemCard = ({
    id,
    imgUrl,
    title,
    price,
    description
}) => {
    return (
        <TouchableOpacity>
            <Image
                className='h-36 w-36 bg-gray-300 p-4 rounded'
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <Text className='text-sm text-gray-500 pt-2'>{description}</Text>
                <Text>{price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCard