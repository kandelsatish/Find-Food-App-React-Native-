import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default function SearchBar({term,onChangeTerm,onTermSubmited}) {
    return (
        <View style={styles.SearchBar}>
            <Icon name="md-search-sharp" size={25}/>
            <TextInput placeholder="Search" 
            style={styles.TextInput}
            value={term}
            onChangeText={(value)=>onChangeTerm(value)}
            autoCorrect={false}
            autoCapitalize="none"
            onEndEditing={()=>onTermSubmited()}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    SearchBar:{
        marginTop:10,
        backgroundColor:'#d4d0c7',
        height:40,
        marginHorizontal:5,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        marginBottom:10
    },
    TextInput:{
        // borderWidth:1,
        flex:1,
        height:'100%',
        fontSize:18,
        marginHorizontal:5
    }
})
