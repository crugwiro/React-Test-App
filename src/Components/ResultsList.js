import React from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";
import ResultDetail from "./ResultDetail";


const ResultsList = ({title, result}) => {
 return <View style={styles.container}>
    <Text style={styles.title}> {title}</Text>
     <FlatList
     horizontal
     showsHorizontalScrollIndicator = 'false'
     data={result}
     keyEtractor={result => result.id}
     renderItem={({ item }) => {
         return <ResultDetail result={item}/>
     }}
     />
 </View>

};

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 15
    },
    container: {
        marginBottom: 10
    }
});


export default ResultsList;