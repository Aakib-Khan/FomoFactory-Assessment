import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setCryptoData, openDialog, closeDialog } from "../redux/cryptoSlice";
import Dialog from "./Dialog";
import "../styles/CryptoTable.css";
import { fetchData } from "../utils/functions";

const CryptoTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.crypto.data);
  const isDialogOpen = useSelector(
    (state: RootState) => state.crypto.isDialogOpen
  );
  const selectedCryptos = useSelector(
    (state: RootState) => state.crypto.selectedCryptos
  );
  console.log("selectedCryptos", selectedCryptos);

  const handleDialogOpen = () => {
    dispatch(openDialog());
  };

  const handleDialogClose = () => {
    dispatch(closeDialog());
  };

  const handleDialogSubmit = () => {
    console.log("Selected Cryptocurrencies:", selectedCryptos);
    // Optionally, you can fetch data based on selected cryptos
    fetchData(dispatch, setCryptoData, selectedCryptos);
  };

  useEffect(() => {
    if (selectedCryptos.length === 0) {
      fetchData(dispatch, setCryptoData, selectedCryptos);
      const interval = setInterval(
        () => fetchData(dispatch, setCryptoData, selectedCryptos),
        5000
      );
      return () => clearInterval(interval);
    }
  }, [dispatch, selectedCryptos]);

  return (
    <div className="table-container">
      <div className="header">
        <h1>Crypto Data</h1>
        <button onClick={handleDialogOpen} className="dialog-button">
          Select Cryptos
        </button>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        data={data}
        onSubmit={handleDialogSubmit}
        selectedCryptos={selectedCryptos}
      />
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>All-Time High (USD)</th>
            <th>Rank</th>
            <th>Rate (USD)</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.code}>
              <td>{entry.code}</td>
              <td>{entry.name}</td>
              <td>{entry.allTimeHighUSD.toFixed(0)}</td>
              <td>{entry.rank}</td>
              <td>{entry.rate.toFixed(0)}</td>
              <td>
                <img
                  src={entry.webp64}
                  alt={entry.name}
                  className="crypto-image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
