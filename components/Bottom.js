import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    HomeIcon,
    DocumentTextIcon,
    UserIcon
} from 'react-native-heroicons/outline'
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Bottom() {
    const navigation = useNavigation();
    return (
            <View className='sticky flex-row bg-white justify-around items-center p-4'>
                <TouchableOpacity
                    className='items-center'
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <HomeIcon>Home</HomeIcon>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className='items-center'
                    onPress={() => {
                        navigation.navigate('Orders');
                    }}
                >
                    <DocumentTextIcon />
                    <Text>Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className='items-center'
                    onPress={() => {
                        navigation.navigate('Profile');
                    }}
                >
                    <UserIcon />
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>

    );
}