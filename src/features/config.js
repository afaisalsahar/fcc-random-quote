// redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const configInitialState = {
    mode: 0,
    start: false
};

export const configSlice = createSlice({
    name: 'config',
    initialState: { value: configInitialState },
    reducers: {
        setMode: (state, action) => {
            state.value.mode = action.payload
        },

        setStart: (state, action) => {
            state.value.start = action.payload
        }
    }
});

export const { setMode, setStart } = configSlice.actions;

export default configSlice.reducer;