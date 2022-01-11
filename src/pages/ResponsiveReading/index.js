import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcAdd, IcBack } from '../../assets'

const ResponsiveReading = () => {
    return (
        <View style={styles.page}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <IcBack/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <IcAdd/>
                </TouchableOpacity>
            </View>
            <View style={styles.responsiveReadingDescWrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>The Ten Commandments / Sepuluh Hukum</Text>
                    <Text style={styles.subTitleText}>Exodus 20:1-17 / Keluaran 20:1-17</Text>
                </View>
            </View>
            <ScrollView style={styles.readingWrapper}>
                <View style={styles.readingContainer}>
                    <Text style={styles.readingText()}>20:1</Text>
                    <Text style={styles.readingText('#0D13A8')}>And God Spoke all these words.</Text>
                    <Text style={styles.readingText('#1AA80D')}>Lalu Allah mengucapkan segala firman ini:</Text>
                </View>
                <View style={styles.readingContainer}>
                    <Text style={styles.readingText()}>20:2</Text>
                    <Text style={styles.readingText('#0D13A8')}>“I am the LORD your God, who brought you out of Egypt, out of the land of slavery.</Text>
                    <Text style={styles.readingText('#1AA80D')}>“Akulah TUHAN, Allahmu, yang membawa engkau keluar dari tanah Mesir, dari tempat perbudakan.</Text>
                </View>
                <View style={styles.readingContainer}>
                    <Text style={styles.readingText()}>20:3</Text>
                    <Text style={styles.readingText('#0D13A8')}>“You shall have no other gods before me.</Text>
                    <Text style={styles.readingText('#1AA80D')}>Jangan ada padamu allah lain di hadapan-Ku.</Text>
                </View>
                <View style={styles.readingContainer}>
                    <Text style={styles.readingText()}>20:3</Text>
                    <Text style={styles.readingText('#0D13A8')}>“You shall have no other gods before me.</Text>
                    <Text style={styles.readingText('#1AA80D')}>Jangan ada padamu allah lain di hadapan-Ku.</Text>
                </View>
                <View style={styles.readingContainer}>
                    <Text style={styles.readingText()}>20:4</Text>
                    <Text style={styles.readingText('#0D13A8')}>You shall not make for yourself an idol in the form of anything in heaven above or on the earth beneath or in the waters below.</Text>
                    <Text style={styles.readingText('#1AA80D')}>Jangan membuat bagimu patung yang menyerupai apapun yang ada di langit di atas, atau yang ada di bumi di bawah, atau yang ada di dalam air di bawah bumi.</Text>
                </View>
                <View style={styles.readingContainer}>
                    <Text style={styles.readingText()}>20:4</Text>
                    <Text style={styles.readingText('#0D13A8')}>You shall not make for yourself an idol in the form of anything in heaven above or on the earth beneath or in the waters below.</Text>
                    <Text style={styles.readingText('#1AA80D')}>Jangan membuat bagimu patung yang menyerupai apapun yang ada di langit di atas, atau yang ada di bumi di bawah, atau yang ada di dalam air di bawah bumi.</Text>
                </View>
            </ScrollView>
            <View style={styles.borderFooter}/>
            <View style={styles.borderFooter}/>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Unklab Hymnal</Text>
            </View>
        </View>
    )
}

export default ResponsiveReading

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
    responsiveReadingDescWrapper:{
        marginHorizontal:24,
        marginTop:10
    },
    titleContainer:{
        alignItems:'center',
        marginBottom:8,
        width:'100%'
    },
    titleText:{
        fontSize:16,
        textAlign:'center'
    },
    subTitleText:{
        fontSize:14,
        color:'rgba(0,0,0,0.75)'
    },
    readingWrapper:{
        flex:1,
        marginTop:14,
        paddingHorizontal:30,
        marginHorizontal:20,
        marginBottom:14,
        borderWidth:1,
        borderColor:'#B0B0B0'
    },
    readingContainer:{
        alignItems:'center',
        marginVertical:4,
    },
    readingText:(color) => ({
        color:color ? color : 'black',
        textAlign:'center',
        fontSize:12.5
    }),
    borderFooter:{
        marginBottom:2,
        marginHorizontal:20,
        borderTopWidth:0.5,
        borderTopColor:'#B4B4B4'
    },
    footerContainer:{
        alignItems:'center',
        marginBottom:10,
        marginHorizontal:20,
    },
    footerText:{
        letterSpacing:0.8,
        color:'#B0B0B0',
        fontSize:10
    },   
})
