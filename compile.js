var path = require('path');
var fs = require('fs');
var solc = require('solc');


var contractPath = path.resolve(__dirname,'contracts','Inbox.sol')
var contract = fs.readFileSync(contractPath,'utf8')

var input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: contract
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};
var compiled  = JSON.parse(solc.compile(JSON.stringify(input)))
var abi  = compiled.contracts['Inbox.sol']['Inbox']['abi'];
var evm  = compiled.contracts['Inbox.sol']['Inbox']['evm']['bytecode']['object'];
console.log(evm)


