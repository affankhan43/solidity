var ganache = require('ganache-cli');
var Web3 = require('Web3');
var assert = require('assert');
var web3 = new Web3(ganache.provider())
var {bytecode, abi} = require('../compile.js');
// class mobile{

// 	call(){
// 		return 'Yes I can call';
// 	}

// 	message(){
// 		return 'Yes I can message';
// 	}
// }
// console.log('-------------------------')

//var m1;
// beforeEach(()=>{
// 	m1 = new mobile();
// })

// describe('Mobile',()=>{
// 	it('calling',()=>{
// 		assert.equal(m1.call(),'Yes I can cal')
// 	})

// 	it('message',()=>{
// 		assert.equal(m1.message(),'Yes I can message')
// 	})
// })
var accounts,inbox;
beforeEach(async ()=>{
	accounts = await web3.eth.getAccounts();
	inbox = await new web3.eth.Contract(abi)
	.deploy({'data':bytecode,'arguments':['Hi']})
	.send({from:accounts[0],gas: 1500000,
    gasPrice: '30000000000000'})
})

describe('Testing',()=>{
	it('accounts',async ()=>{
		console.log(accounts)
		console.log(await web3.eth.getBalance(accounts[0]))
	})

	it('contractDeployment',async ()=>{
		console.log(inbox.options.address)
		var data = await inbox.methods.message().call()
		console.log(data)
		assert.ok(inbox.options.address)

	})
})


// web3.eth.getAccounts().then(fetchedAccounts =>{

// 	console.log(fetchedAccounts)
// 	var balance = web3.eth.getBalance(fetchedAccounts[0]).then(balnc=>{

// 		console.log(balnc)

// 	}); //Will give value in.


// });



