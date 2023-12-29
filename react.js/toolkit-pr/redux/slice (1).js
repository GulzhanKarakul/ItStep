import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'counter/fetchData', // имя слайса/имя редьюсера
    async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const dogsSlice = createSlice({
    name: 'picture',
    initialState: null,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            for (let book of action.payload.books) {
                console.log(book)
                state.books.push(book)
            }
        })
    }
});

export const { increment, decrement } = counterSlice.actions; // Экспорт actions
export default counterSlice.reducer; // Reducer'ы слайса