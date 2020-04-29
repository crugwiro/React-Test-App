import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../Components/SearchBar";
import useResults from "../Hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const[searchApi, results, err] = useResults();

    const filterResultsByPrice = (price) =>{
         return results.filter(result => {
            return result.price === price;
        })
    };

    return <>
        <SearchBar term={term}
                   onTermChange={setTerm}
                   onTermSubmit={() => searchApi(term)}
        />
        {err ? <Text>{err}</Text> : null}
        <ScrollView>
        <ResultsList result={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList result={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList result={filterResultsByPrice('$$$')} title="Big Spender" />
        </ScrollView>
    </>
};


const styles = StyleSheet.create({});

export default SearchScreen;