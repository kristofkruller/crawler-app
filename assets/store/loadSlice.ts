import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

interface LoadingState {
    isLoading: boolean
}

const initialState: LoadingState = {
    isLoading: false
}

export const loadSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const selectLoadingState = createSelector(
    (state: RootState) => state.loading,
    (loading) => loading.isLoading
);

export const { setLoading } = loadSlice.actions;
export default loadSlice.reducer;