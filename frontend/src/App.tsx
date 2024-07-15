// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CryptoTable from './components/CryptoTable';
// import ChangeSymbolModal from './components/ChangeSymbolModal';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div >
        <CryptoTable />
        {/* <ChangeSymbolModal /> */}
      </div>
    </Provider>
  );
};

export default App;
