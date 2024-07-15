import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCryptoDropDownList, setSelectedCryptos } from "../redux/cryptoSlice";
import "../styles/dialog.css";
import { fetchDropDownListData } from "../utils/functions";
import { RootState } from "../redux/store";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: { code: string; name: string }[];
  onSubmit: (selectedCryptos: string[]) => void;
  selectedCryptos: string[];
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  data,
  onSubmit,
  selectedCryptos,
}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isOpen) {
      fetchDropDownListData(dispatch, setCryptoDropDownList);
    }
  }, [dispatch, setCryptoDropDownList, isOpen]);

  const dropDownData = useSelector((state: RootState) => state.crypto.cryptoDropDownList);
console.log("dropDownData",dropDownData);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(setSelectedCryptos([...selectedCryptos, value]));
    } else {
      dispatch(setSelectedCryptos(selectedCryptos.filter((name) => name !== value)));
    }
  };

  const handleSubmit = () => {
    onSubmit(selectedCryptos);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Select Cryptocurrencies</h2>
        <div className="crypto-select">
          {dropDownData?.map((entry) => (
            <label key={entry?.name} className="checkbox-label">
              <input
                type="checkbox"
                value={entry.name}
                onChange={handleCheckboxChange}
                checked={selectedCryptos.includes(entry.name)}
              />
              {entry.name}
            </label>
          ))}
        </div>
        <div className="dialog-buttons">
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
          <button
            onClick={() => {
              dispatch(setSelectedCryptos([]));
              onClose();
            }}
            className="close-button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
