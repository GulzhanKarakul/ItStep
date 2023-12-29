import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('counter/fetchData', async () => {
    const response = await fetch('https://demo.lapse.site/grohe/api.php?request=true');
    const data = await response.json();
    return data;
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0, api: [] },
    reducers: {
        increment(state) {
            ++state.value
        },
        decrement(state) {
            if (state.value > 0){
                --state.value
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if (action.payload) {
                console.log(action.payload);
                state.api = action.payload;
            } else {
                console.log('Error')
            }
        })
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;