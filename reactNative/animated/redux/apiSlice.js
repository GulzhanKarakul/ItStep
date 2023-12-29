import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDog = createAsyncThunk('dog/fetchDog', async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data;
});

const counterSlice = createSlice({
    name: 'dog',
    initialState: { image: '' },
    extraReducers: (builder) => {
        builder.addCase(fetchDog.fulfilled, (state, action) => {
            if (action.payload) {
                state.image = action.payload.message;
                // console.log(action.payload);
                console.log(state.image);
            } else {
                console.log('Error')
            }
        })
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;