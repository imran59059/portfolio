import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light',
        themeClass: 'theme-light',
    },
    reducers: {
        setTheme: (state, action) => {
            state.mode = action.payload
        },
        setThemeClass: (state, action) => {
            state.themeClass = action.payload;
        },
    }
})

export const { setTheme, setThemeClass } = themeSlice.actions
export default themeSlice.reducer