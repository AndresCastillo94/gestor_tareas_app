import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id?: number|null;
    name?: string|null;
}

const initialState: UserState = {
    id: 0,
    name: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserState>) => {
            const { id, name } = action.payload; 
            state.id = id;
            state.name = name;
        },
        removeUser: (state) => {
            state.id = null;
            state.name = null;
        },
    },
});

export const { addUser,removeUser } = userSlice.actions;

export default userSlice.reducer;
