import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { loadSlice } from "./loadSlice";

export const store = configureStore({
    reducer: {
        //slices of store as reducers for use
        loading: loadSlice.reducer
    },
});

//type scema for the whole store and dispatcher
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;

//type action dispatch hook and selector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;