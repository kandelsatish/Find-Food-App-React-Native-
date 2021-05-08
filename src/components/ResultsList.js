import React from 'react'
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native'
import ResultDetails from './ResultDetails'
export default function ResultsList({ title, results,navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>{results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                   return(
                       <TouchableOpacity onPress={()=>navigation.navigate('Result Show Screen')}>
                           <ResultDetails item={item} navigation={navigation}/>
                       </TouchableOpacity>
                   ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:10,
        marginBottom:5
    }
})
