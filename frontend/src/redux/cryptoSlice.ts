// redux/cryptoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CryptoData, CryptoDropDownData, CryptoState } from "./types";

const initialState: CryptoState = {
  data: [],
  isDialogOpen: false, // Add isDialogOpen to the initial state
  selectedCryptos: [], // Add selectedCryptos to the initial state
  cryptoDropDownList: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCryptoData: (state, action: PayloadAction<CryptoData[]>) => {
      state.data = action.payload;
    },
    setCryptoDropDownList: (state, action :PayloadAction<CryptoDropDownData[]> ) => {
      state.cryptoDropDownList = action.payload;
    },

    openDialog: (state) => {
      state.isDialogOpen = true;
    },
    closeDialog: (state) => {
      state.isDialogOpen = false;
    },
    setSelectedCryptos: (state, action: PayloadAction<string[]>) => {
      state.selectedCryptos = action.payload;
    },
  },
});

export const {
  setCryptoData,
  openDialog,
  closeDialog,
  setSelectedCryptos,
  setCryptoDropDownList,
} = cryptoSlice.actions;
export default cryptoSlice.reducer;

// Export the CryptoState type
export type { CryptoState };
