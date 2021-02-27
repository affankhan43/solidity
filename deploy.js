var Web3 = require('web3')
var HDWallet = require('truffle-hdwallet-provider');
var {bytecode, abi} = require('./compile.js');


var provider = new HDWallet('upper soldier cram advice ride couch dentist end copy assault leave release','https://ropsten.infura.io/v3/2c327e3276c54e609c310695044b534a')
var web3 = new Web3(provider)


async function deploy(){
	var account  = await web3.eth.getAccounts();
	console.log(account)	
	var balance = await web3.eth.getBalance(account[0])
	console.log(web3.utils.fromWei(balance, 'ether'))
	console.log('-----------------------------------')
	console.log('contract deployment using account---->' + account[0])
	inbox = await new web3.eth.Contract(abi)
	.deploy({'data':bytecode,'arguments':['Hi']})
	.send({
		from:account[0],
		gas: '547611',
		gasPrice: '30000000000'})
	console.log('contract deployed on address---->' + inbox.options.address)
}
deploy()
