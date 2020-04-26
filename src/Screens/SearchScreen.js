import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from "../Components/SearchBar";
import yelp from '../Api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [err, setErr] = useState('');

    const searchApi = async () => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch (err) {

    }
};

    return <View>
        <SearchBar term={term}
                   onTermChange={setTerm}
                   onTermSubmit={searchApi}
        />
        <Text>{err}</Text>
        <Text> we got {results.length} results</Text>
    </View>
};


const styles = StyleSheet.create({});

export default SearchScreen;