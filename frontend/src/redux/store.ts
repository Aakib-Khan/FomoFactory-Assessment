// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer, { CryptoState } from './cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

// Export the CryptoState type from this module if needed elsewhere
export type { CryptoState };
