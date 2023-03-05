import web3 from './web3';
import Campaign from '../ethereum/build/Campaign.json'

const campaign = (address) => {
    return new web3.eth.Contract(Campaign.abi, address);
};
export default campaign;
  
