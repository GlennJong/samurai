import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'walletStatus',
    initialState: {
        'status': 'disconnect',
        'connectId': null
    },
    reducers: {
        connectWallet: (state) => {
            state.status = 'connect';
        },
        disconnectWallet: (state) => {
            state.status = 'disconnect';
        },
        setConnectId: (state, action) => {
          state.connectId = action.payload;
        }
    }
});

export default appSlice;
