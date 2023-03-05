const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  '9b1cc62241369b6798a8b2f5e48d99188fdad7918fdd587df0ab55c0f89b7117',
  // remember to change this to your account's private key!
  'https://goerli.infura.io/v3/4a75fe23a2e042dcac2786712cd95e21'
  // remember to change this to your own endpoint!
);

const web3 = new Web3(provider);

const deploy = async () => {
  try{
    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting to deploy from account:',accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({ data: compiledFactory.evm.bytecode.object })
      .send({ gas: '1400000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
  }catch(e){
    console.log(e.message);
  }
  
};
deploy();
