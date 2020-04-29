import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultDetail from "./ResultDetail";
import {withNavigation} from "react-navigation";


const ResultsList = ({title, result, navigation}) => {
    if(!result.length){
        return null;
    }
 return <View style={styles.container}>
    <Text style={styles.title}> {title}</Text>
     <FlatList
     horizontal
     showsHorizontalScrollIndicator = 'false'
     data={result}
     keyExtractor={result => result.id}
     renderItem={({ item }) => {
         return (
             <TouchableOpacity onPress={() => navigation.navigate('Results', {id : item.id})}>
             <ResultDetail result={item}/>
             </TouchableOpacity>
         )
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


export default withNavigation(ResultsList);