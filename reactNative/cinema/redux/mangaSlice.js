import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchManga = createAsyncThunk('manga/searchManga', async (text) => {
    const response = await fetch('https://www.omdbapi.com/?apikey=a06e8fb3&t=' + text);
    const data = await response.json();
    return data;
});

const mangaSlice = createSlice({
    name: 'manga',
    initialState: { 
        popularListOfManga: [],
        searchResults: [], 
    },
    reducers: {
        clearSearchResults: (state) => {
            state.searchResults = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(searchManga.fulfilled, (state, action) => {
            if (action.payload) {
                console.log(action.payload)
                state.searchResults.push(action.payload)
            } else {
                console.log('Error');
            }
        });
    }
});

export const { clearSearchResults } = mangaSlice.actions;
export default mangaSlice.reducer;