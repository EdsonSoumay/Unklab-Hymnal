import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import { IcBack } from '../../assets'

const Playlist = ({navigation}) => {

    const deleteSong = () => 
    Alert.alert(
        "Konfirmasi",
        "Apakah anda ingin menghapus lagu ini dari playlist?",
        [
            {
            text: "Tidak",
            onPress: () => console.log("Tidak"),
            style: "cancel"
            },
            { text: "Ya", onPress: () => console.log("Hapus lagu") }
        ]
    );

    return (
        <View style={styles.page}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.backButtonContainer}>
                    <IcBack/>
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerText}>Playlist</Text>
                </View>
            </View>
            <ScrollView style={styles.playlistWrapper}>
                <View style={styles.playlistContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Song')}} style={styles.listContainer}>
                        <Text style={styles.listText}>1. Before Jehovah's Awful Throne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteSong} style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlistContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Song')}} style={styles.listContainer}>
                        <Text style={styles.listText}>2. Di hadapan hadirathu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteSong} style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlistContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Song')}} style={styles.listContainer}>
                        <Text style={styles.listText}>4. The Lord Is in His Holy Temple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteSong} style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlistContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Song')}} style={styles.listContainer}>
                        <Text style={styles.listText}>7. Tread softly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteSong} style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlistContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Song')}} style={styles.listContainer}>
                        <Text style={styles.listText}>8. Berdiam, berdiam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteSong} style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlistContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Song')}} style={styles.listContainer}>
                        <Text style={styles.listText}>11. Dengar Ya Tuhan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteSong} style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlistContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Song')}} style={styles.listContainer}>
                        <Text style={styles.listText}>12. Ya Tuhan, Iringlah Kami</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteSong} style={styles.buttonContainer}>
                        <Text>Del.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Playlist

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'rgba(151,24,14,0.10)'
    },
    headerWrapper:{
        backgroundColor:'rgba(151,24,14,0.85)',
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
    playlistWrapper:{
        flex:1,
        margin:5,
        backgroundColor:'rgba(196,196,196,0.2)',
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.25)',
        borderRadius:2
    },
    playlistContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:8,
        paddingVertical:4,
        borderBottomWidth:1,
    },
    listContainer:{
        width:290,
        height:42,
        justifyContent:'center'
    },
    listText:{
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