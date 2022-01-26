import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash, HomeScreen, SearchSongs, Song, Playlist, FavoriteSong, ListResponsiveReading, ResponsiveReading, About} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SearchSongs"
                component={SearchSongs}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Song"
                component={Song}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Playlist"
                component={Playlist}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="FavoriteSong"
                component={FavoriteSong}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ListResponsiveReading"
                component={ListResponsiveReading}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ResponsiveReading"
                component={ResponsiveReading}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Router;
