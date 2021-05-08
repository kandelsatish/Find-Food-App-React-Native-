import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
export default function SearchScreen({navigation}) {
    //data to be searched
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(item => {
            return price === item.price;
        })
    }

    if(!results.length){
        return <ActivityIndicator size='large'/>
    }

    return (
        <>
            <SearchBar term={term}
                onChangeTerm={(newValue) => setTerm(newValue)}
                onTermSubmited={() => searchApi(term)} />
            <ScrollView>
                <ResultsList 
                title="Const Effective" 
                results={filterResultsByPrice('$')}
                navigation={navigation}
                 />
                <ResultsList
                 title="Bit Pricier" 
                results={filterResultsByPrice('$$')} 
                navigation={navigation}
                />
                <ResultsList 
                title="Big Spender" 
                results={filterResultsByPrice('$$')}
                navigation={navigation}
                 />
            </ScrollView>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
