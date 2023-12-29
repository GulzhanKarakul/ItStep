import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchManga } from '../redux/mangaSlice';
import MovieComp from './MovieComponent';

export default function SearchScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const state = useSelector((state) => state.manga.searchResults);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(state);
    }, [state]); 

    const handleSearch = () => {
        console.log(searchText);
        dispatch(searchManga(searchText));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                  style={styles.input}
                  placeholder="Поиск..."
                  onChangeText={setSearchText}
                  value={searchText}
                />
                <TouchableOpacity style={styles.button} onPress={handleSearch}>
                    <Text style={styles.buttonText}>Поиск</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.contentContainer}>
                {state.map((movie, index) => (
                    <MovieComp key={index} movie={movie} />
                ))}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    contentContainer: {
        borderWidth: 3,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingTop: 30,
    },
  });