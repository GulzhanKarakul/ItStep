import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieComp = ({ movie }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text style={styles.title}>{movie.Title}</Text>
            <Text style={styles.year}>{movie.Year}</Text>
            <Text style={styles.plot}>{movie.Plot}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    poster: {
        width: 200,
        height: 300,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    year: {
        fontSize: 16,
        marginBottom: 5,
    },
    plot: {
        textAlign: 'center',
        fontSize: 14,
    },
});

export default MovieComp;