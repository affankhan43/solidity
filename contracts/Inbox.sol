pragma solidity >=0.7.22 <0.8.1;

contract Inbox{
    string public message;
    string public me = "My First Contract";
    constructor(string memory Initialmsg){
        message = Initialmsg;
    }
    
    function setMessage(string memory newMessage) public{
        message = newMessage;
    }
    
    function getMessage() public view returns (string memory){
        
        return string(abi.encodePacked(me,message));
    }
    
}

