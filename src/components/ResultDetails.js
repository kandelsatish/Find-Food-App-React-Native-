import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'

export default function ResultDetails({item}){
    return(
        <View style={styles.container}>
            <Image
            source={{uri: item.image_url}}
            style={styles.imageStyles}
            />
            <Text style={styles.text}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginLeft:10
    },
    imageStyles:{
        height:150,
        width:200,
        borderRadius:5,
        marginBottom:5
    },
    text:{
        fontWeight:'bold'
    }
})