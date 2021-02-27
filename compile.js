 
var path = require('path');
var fs = require('fs');
var solc = require('solc');

var contractPath = path.resolve(__dirname,'contracts','Inbox.sol');
var contract = fs.readFileSync(contractPath,'utf8');


var input = {
  language: 'Solidity',
  sources: {
    'file.sol': {
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

var output = JSON.parse(solc.compile(JSON.stringify(input)));
var abi = output.contracts['file.sol']['Inbox']['abi']
var bytecode = output.contracts['file.sol']['Inbox']['evm']['bytecode']['object']

module.exports = {
	'bytecode':bytecode,
	'abi':abi
}




