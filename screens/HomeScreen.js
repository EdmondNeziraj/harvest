import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView>
            <Text className="text-red-600">
                {/* HomeScreen */}
                <View>
                    <Image 
                        source={require('../assets/user.png')}
                        className='h-10 w-10 bg-gray-200 p-4 rounded-full'
                    />
                </View>
                <View>
                    <Text className='font-bold text-gray-400 text-xs'>
                        Delivery
                    </Text>
                    <Text className='font-bold text-xl'>Current Location</Text>
                </View>
            </Text>
        </SafeAreaView>
    )

}

