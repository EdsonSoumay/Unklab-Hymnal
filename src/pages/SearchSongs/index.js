import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SearchSongs = () => {
    return (
        <View style={styles.page}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Unklab Hymnal</Text>
            </View>
            <View style={styles.searchWrapper}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchText} placeholder='Cari lagu berdasarkan nomor/judul/isi'/>
                </View>
            </View>
            <ScrollView style={styles.listSongsWrapper}>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>1. Before Jehovah's Awful Throne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>2. Di hadapan hadirathu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>3. Praise God From Whom All Blessing Flow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>4. The Lord Is in His Holy Temple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>5. Kepada Allah Bri Puji</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>6. Tuhan Ada Dalam Kaabah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>7. Tread softly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>8. Berdiam, berdiam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>9. Hear our prayer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>10. The Lord Be with Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>11. Dengar Ya Tuhan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>12. Ya Tuhan, Iringlah Kami</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listSongsContainer}>
                    <TouchableOpacity style={styles.songsContainer}>
                        <Text style={styles.songsText}>13. Ya Tuhan, Iringlah Kami</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SearchSongs

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'rgba(248,248,248,0.9)'
    },
    headerContainer:{
        backgroundColor:'#97180E'
    },
    headerText:{
        fontSize:18,
        color:'rgba(248,248,248,0.95)',
        padding:6
    },
    searchWrapper:{
        backgroundColor:'rgba(151,24,14,0.5)',
        paddingVertical:8,
        paddingHorizontal:5,
    },
    searchContainer:{
        backgroundColor:'rgba(229,229,229,0.5)',
        borderWidth:1,
        borderRadius:2,
        borderColor:'rgba(0,0,0,0.2)',
        paddingHorizontal:8,
    },
    searchText:{
        fontSize:14,
        color:'rgba(0,0,0,0.5)'
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
    songsContainer:{
        width:290,
        height:42,
        justifyContent:'center'
    },
    songsText:{
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
