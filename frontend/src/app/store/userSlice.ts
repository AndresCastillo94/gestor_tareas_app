import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id?: number;
    name?: string;
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
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
