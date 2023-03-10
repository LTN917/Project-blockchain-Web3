const path = require('path');
const fs = require('fs-extra'); //file system module
const solc = require('solc');

const buildPath = path.resolve(__dirname,'build');
//remove the file to build
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
      'Campaign.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

// compile and output two file : Campaign & CampaignFactory
const output =JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Campaign.sol'
];

fs.ensureDirSync(buildPath);

for (var contract in output){
    fs.outputJSONSync(
      path.resolve(buildPath,contract.replace(":",'')+'.json'),
      output[contract]
    );
}