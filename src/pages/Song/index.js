import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBack, IcPlay, IcStar, SongBG } from '../../assets'


const Song = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Image source={SongBG} style={styles.background}/>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <IcBack/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <IcStar/>
                </TouchableOpacity>
            </View>
            <View style={styles.songDescWrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>1. Before Jehovah’s Awful Throne</Text>
                </View>
                <View style={styles.kscContainer}>
                    <Text style={styles.titleDescText}>Do = D</Text>
                    <Text style={styles.titleDescText}>John Hatton</Text>
                </View>
                <Text style={styles.titleDescText}>Birama = 4/4</Text>
            </View>
            <ScrollView style={styles.songWrapper}>
                <View style={styles.songContainer}>
                    <Text style={styles.songText}>1/4</Text>
                    <Text style={styles.songText}>Before Jehovah's aweful throne, ye nations, bow with sacred joy; know that the Lord is God alone: he can create, and he destroy</Text>
                </View>
                <View style={styles.songContainer}>
                    <Text style={styles.songText}>Reff:</Text>
                    <Text style={styles.songText}>Before Jehovah's aweful throne, ye nations, bow with sacred joy; know that the Lord is God alone: he can create, and he destroy</Text>
                </View>
                <View style={styles.songContainer}>
                    <Text style={styles.songText}>2/4</Text>
                    <Text style={styles.songText}>Before Jehovah's aweful throne, ye nations, bow with sacred joy; know that the Lord is God alone: he can create, and he destroy</Text>
                </View>
                <View style={styles.songContainer}>
                    <Text style={styles.songText}>3/4</Text>
                    <Text style={styles.songText}>Before Jehovah's aweful throne, ye nations, bow with sacred joy; know that the Lord is God alone: he can create, and he destroy</Text>
                </View>
                <View style={styles.songContainer}>
                    <Text style={styles.songText}>4/4</Text>
                    <Text style={styles.songText}>Before Jehovah's aweful throne, ye nations, bow with sacred joy; know that the Lord is God alone: he can create, and he destroy</Text>
                </View>
            </ScrollView>
            <View style={styles.musicContainer}>
                <TouchableOpacity style={styles.buttonPlayContainer}>
                    <IcPlay/>
                </TouchableOpacity>
                <View style={styles.musicIndicatorContainer}>
                    <View style={styles.circleIndicator}/>
                </View>
            </View>
        </View>
    )
}

export default Song

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    headerContainer:{
        marginTop:20,
        paddingHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:28,
    },
    background:{
        position:'absolute',
        width:'100%',
        height:'100%'
    },
    songDescWrapper:{
        marginHorizontal:24,
        marginTop:10
    },
    titleContainer:{
        alignItems:'center',
        marginBottom:8
    },
    titleText:{
        fontSize:20,
        textAlign:'center'
    },
    kscContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    titleDescText:{ 
        fontSize:12
    },
    songWrapper:{
        flex:1,
        marginTop:14,
        paddingHorizontal:30,
        marginHorizontal:20,
        marginBottom:14,
    },
    songContainer:{
        alignItems:'center',
        marginVertical:7
    },
    songText:{
        textAlign:'center',
        fontSize:14
    },
    musicContainer:{
        backgroundColor:'rgba(0,0,0,0.75)',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        height:38,
        borderTopStartRadius:8,
        borderTopEndRadius:8,
        marginHorizontal:'24%',
        paddingHorizontal:8,
    },
    buttonPlayContainer:{
        backgroundColor:'rgba(204,159,0,0.9)',
        marginRight:8,
        borderRadius:2,
        padding:5
    },
    musicIndicatorContainer:{
        width: '80%',
        height:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#707070',
    },
    circleIndicator:{
        borderWidth:5,
        borderRadius:5,
        borderColor:'#00740C',
        position:'absolute'
    },
})
