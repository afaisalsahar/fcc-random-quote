// redux toolkit
import { createSlice } from '@reduxjs/toolkit';

const quoteInitialValue = {
    quote: 'quote text',
    author: 'quote author',
    rank: 'quote rank'
};

export const quotesSlice = createSlice({
    name: 'quote',
    initialState: { value: quoteInitialValue },
    reducers: {
        setQuote: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setQuote } = quotesSlice.actions;

export default quotesSlice.reducer;