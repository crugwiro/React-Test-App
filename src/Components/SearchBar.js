import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.background}>
        <EvilIcons style={styles.iconStyle} name='search'/>
        <TextInput style={styles.inputStyle}
                   autoCapitilize="none"
                   autoCorrect={false}
                   placeholder="Search"
                   value={term}
                   onChangeText={onTermChange}
                   onEndEditing={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#F0EEEF',
        height: 50,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;