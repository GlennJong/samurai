import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'walletStatus',
    initialState: {
        'status': 'disconnect',
        'connectId': null,
        'hint': "🦊 Connect to Metamask using the top right button.",
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
        },
        setHint: (state, action) =>{
            state.hint = action.payload;
        }
    }
});

export default appSlice;
