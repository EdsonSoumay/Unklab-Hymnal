import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HomescreenBG } from '../../assets';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <Image source={HomescreenBG} style={styles.background}/>
                <View style={styles.titleWrapper}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Unklab Hymnal</Text>
                    </View>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitlOe}>Mobile App</Text>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.buttonContainer('rgba(151,24,14,0.1)')}>
                        <Text style={styles.buttonText}>Cari Lagu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer('rgba(151,24,14,0.5)')}>
                        <Text style={styles.buttonText}>Playlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer('rgba(204,159,0,0.8)')}>
                        <Text style={styles.buttonText}>Lagu Favorit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer('rgba(100,100,100,0.5)')}>
                        <Text style={styles.buttonText}>Bacaan Bersahutan</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.aboutWrapper}>
                    <TouchableOpacity style={styles.aboutContainer}>
                        <Text style={styles.aboutText}>About</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex:1,
    },
    background: {
        position:'absolute',
        width:'100%',
        height:'100%',
    },
    titleWrapper:{
        marginTop:27,
        marginBottom:107
    },
    titleContainer: {
        alignItems:'center',
    },
    title: {
        fontSize:38,
        letterSpacing:0.5
    },
    subTitleContainer:{
        marginTop:-5,
        marginHorizontal:50,
        alignItems:'flex-end'
    },
    subTitle:{
        fontSize:15,
    },
    buttonWrapper:{
        flex:1,
        alignItems:'center',
        marginHorizontal:55,
    },
    buttonContainer : (color) => ({
        width:280,
        backgroundColor:color,
        marginBottom:24,
        alignItems:'center',
        borderWidth:1,
        borderRadius:4
    }),
    buttonText:{
        paddingVertical:12,
        fontSize:18,
    },
    aboutWrapper:{

        alignItems:'flex-end',
        
    },
    aboutContainer:{
        backgroundColor:'#4D0000',
        marginBottom:8,
        marginRight:8,
        borderWidth:1,
        borderRadius:8
    },
    aboutText:{
        fontSize:12,
        paddingVertical:6,
        paddingHorizontal:12,
        color:'#E0E0E0'
    }
})
