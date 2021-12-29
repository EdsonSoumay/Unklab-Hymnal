import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LogoUKHymnal } from '../../assets'

const Splash = () => {
    return (
        <View style={styles.page}>
            <LogoUKHymnal/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor:'#97180E',
        justifyContent:'center',
        alignItems:'center',
    },
})
