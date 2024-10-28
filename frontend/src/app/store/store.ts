import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth.slice';


const store = configureStore({
    reducer: {
        user: authReducer, // Agrega tus reducers aquí
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;