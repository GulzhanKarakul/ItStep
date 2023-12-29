import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'counter/fetchData', // имя слайса/имя редьюсера
    async () => {
        const response = await fetch('https://www.dbooks.org/api/recent');
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        books: []
    },
    reducers: {
        increment: (state) => {state.counter += 1},
        decrement: (state) => {state.counter -= 1},
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