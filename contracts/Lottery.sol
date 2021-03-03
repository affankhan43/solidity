pragma solidity ^0.8.1;

contract Lottery{
    address public manager;
    address[] public players;
    constructor() public{
        manager = msg.sender;
    }
    
    function enter() public payable{
        require(msg.value > 0.1 ether);
        require(msg.sender != manager);
        players.push(msg.sender);
    }
    
    function players_list() public view returns (address[] memory){
        return players;
    }
    
    function random() private view returns (uint256){
        return uint256(keccak256(abi.encode(block.difficulty,block.timestamp,players)));
    }
    
    function pick_a_winner() public returns (address){
        require(msg.sender == manager);
        uint winner = random() % players.length;
        payable(players[winner]).transfer(address(this).balance);
        address wiiner = players[winner];
        players = new address[](0); // []
        return wiiner;
    }
    
    function balancer() public view returns (uint256){
        return address(this).balance;
    }
    function test() public view returns (bool){
        if(manager == msg.sender){
            return true;
        }else{
            return false;
        }
    }
}
