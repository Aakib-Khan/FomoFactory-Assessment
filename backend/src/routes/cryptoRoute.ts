import {Router} from "express";
import { getCryptoDropDownList, getLatestCryptoData } from "../controllers/cryptoControllers";
const router = Router();

router.post("/get-latest-crypto-data", getLatestCryptoData);
router.post("/crypto-dropdown-list", getCryptoDropDownList);


export default router;
