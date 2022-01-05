import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { IcBack } from '../../assets'

const FavoriteSong = () => {
    return (
        <View style={styles.page}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.backButtonContainer}>
                    <IcBack/>
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerText}>Favorite Song</Text>
                </View>
            </View>
            <ScrollView style={styles.listSongsWrapper}>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songContainer}>
                        <Text style={styles.songText}>1. Before Jehovah's Awful Throne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songContainer}>
                        <Text style={styles.songText}>2. Di hadapan hadirathu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songContainer}>
                        <Text style={styles.songText}>4. The Lord Is in His Holy Temple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songContainer}>
                        <Text style={styles.songText}>7. Tread softly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songContainer}>
                        <Text style={styles.songText}>8. Berdiam, berdiam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songContainer}>
                        <Text style={styles.songText}>11. Dengar Ya Tuhan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songContainer}>
                        <Text style={styles.songText}>12. Ya Tuhan, Iringlah Kami</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default FavoriteSong

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'rgba(151,24,14,0.10)'
    },
    headerWrapper:{
        backgroundColor:'rgba(204,159,0,0.8)',
        flexDirection:'row',
        justifyContent:'space-between',
        height:58,
        paddingRight:58
    },
    backButtonContainer:{
        justifyContent:'center',
        alignItems:'center',
        width:58
    },
    headerTitleContainer:{
        justifyContent:'center',
        width:'100%',
        paddingRight:58
    },
    headerText:{
        textAlign:'center',
        width:'100%',
        fontSize:18
    },
    listSongsWrapper:{
        flex:1,
        margin:5,
        backgroundColor:'rgba(196,196,196,0.2)',
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.25)',
        borderRadius:2
    },
    listSongsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:8,
        paddingVertical:4,
        borderBottomWidth:1,
    },
    songContainer:{
        width:290,
        height:42,
        justifyContent:'center'
    },
    songText:{
        fontSize:15
    },
    buttonContainer:{
        backgroundColor:'#C4C4C4',
        height:28,
        justifyContent:'center',
        paddingHorizontal:2,
        borderWidth:1,
        borderRadius:6,
        borderColor:'rgba(196,196,196,0.2)'
    }
})