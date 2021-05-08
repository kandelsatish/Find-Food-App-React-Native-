import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import yelp from '../api/yelp'
export default function ResultShowScreen({route}) {
      const {id}=route.params;
      const [result,setResult]=useState(null);
      const getResults= async(id)=>{
          try{
            const response=await  yelp.get(`/${id}`);
            setResult(response.data.photos);
          }
          catch(err){
              console.log(err);
          }
        
      }
      useEffect(()=>{
          getResults(id);
      }
      ,[])

      if(!result){
          return null;
      }

    return (
        <View>
            <FlatList
            data={result}
            keyExtractor={(photo)=> photo}
            renderItem={({item})=>{
                return <Image source={{uri:item}} style={styles.image}/>
            }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        height:150,
        width:'90%',
        marginTop:20,
        marginLeft:20
    }
})
