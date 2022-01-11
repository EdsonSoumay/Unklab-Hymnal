import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { IcBack } from '../../assets'

const ListResponsiveReading = () => {
    return (
        <View style={styles.page}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.backButtonContainer}>
                    <IcBack/>
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerText}>Bacaan Bersahutan</Text>
                </View>
            </View>
            <ScrollView style={styles.listWrapper}>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>The Ten Commandments / Sepuluh Hukum</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Exodus 20:1-17 / Keluaran 20:1-17</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Godly / Kesalehan Hidup</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Psalm 1:1-6 / Mazmur 1:1-6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Prayer / Doa</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Matthew 6:5-15; 7:7-11 / Matius 6:5-15; 7:7-11</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Love / Kasih</Text>
                        <Text style={styles.responsiveReadingSubtitle}>1 Corinthians 13:1-13 / 1 Korintus 13:1-13</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>The Good Shepherd / Gembala yang Baik</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Psalm 23:1-16 / Mazmur 23:1-6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Consecration / Pengabdian Diri</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Romans 12:1-3, 9-21/ Roma 12:1-3, 9-21</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>The Christian Life / Kehidupan Kristus</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Matthew 5:3-16 / Matius 5:3-16</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Repentance / Pertobatan</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Psalm 51:1-17 / Mazmur 51:1-17</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>The Sabbath / Hari Sabat</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Genesis 2:1-3; Isaiah 58:11-14 / Keluaran 2:1-3 ; Yesaya 58:11-14</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Christ’s Suffering and Death / Penderitaan dan Kematian Kristus</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Isaiah 53:1-12 / Yesaya 53:1-12</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Christ’s Second Coming / Kedatangan Yesus Kedua Kali</Text>
                        <Text style={styles.responsiveReadingSubtitle}>John 14:1-3; Matthew 24:42-51 / Yohanes 14:1-3; Matius 24:42-51</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.responsiveReadingContainer}>
                        <Text style={styles.responsiveReadingTitle}>Call to Youth / Panggilan kepada Pemuda</Text>
                        <Text style={styles.responsiveReadingSubtitle}>Ecclesiates 12:1-7, 13, 14 / Pengkhotbah 12:1-7, 13, 14</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default ListResponsiveReading

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'rgba(151,24,14,0.10)'
    },
    headerWrapper:{
        backgroundColor:'rgba(0,0,0,0.2)',
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
    listWrapper:{
        flex:1,
        margin:5,
        backgroundColor:'rgba(196,196,196,0.2)',
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.25)',
        borderRadius:2
    },
    listContainer:{
        marginHorizontal:8,
        borderBottomWidth:1,
        paddingVertical:10
    },
    responsiveReadingContainer:{
        width:'100%',
        justifyContent:'center'
    },
    responsiveReadingTitle:{
        fontSize:15
    },
    responsiveReadingSubtitle:{
        fontSize:12,
        color:'rgba(0,0,0,0.75)'
    },
})