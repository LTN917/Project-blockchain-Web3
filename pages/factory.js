import web3 from "./web3";
import CampaignFactory from "../ethereum/build/CampaignFactory.json";

//先前已經從錢包部屬合約到address 0x38...4a8E
//取得address 0x38...4a8E的合約物件, 並且可以使用合約中的功能
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x47C2fe43bc1Bef4Deb2E1479Bf3Cb7450853C832"
);

export default instance;