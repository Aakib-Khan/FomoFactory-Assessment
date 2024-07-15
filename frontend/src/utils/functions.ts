import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Dispatch, UnknownAction } from "redux";
import { CryptoData, CryptoDropDownData } from "../redux/types";

export const fetchData = async (
  dispatch: Dispatch<UnknownAction>,
  setCryptoData: ActionCreatorWithPayload<CryptoData[]>,
  selectedCryptos: string[]
) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/crypto/get-latest-crypto-data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          names: selectedCryptos,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    dispatch(setCryptoData(result));
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(setCryptoData([])); // Clear data on error
  }
};

export const fetchDropDownListData = async (
  dispatch: Dispatch<UnknownAction>,
  setCryptoDropDownList: ActionCreatorWithPayload<CryptoDropDownData[]>
) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/crypto/crypto-dropdown-list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    dispatch(setCryptoDropDownList(result));
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(setCryptoDropDownList([])); // Clear data on error
  }
};
