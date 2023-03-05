//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MartianMunchies is ERC1155, Ownable {
  uint256 public constant MUNCHIE_TOKEN = 0;

  constructor() ERC1155("https://martian-munchies.io/nfts/{id}.json") {}

  event Order(uint256 orderId, uint256 amount);

  function awardTokens(address account, uint256 amount) public onlyOwner {
    _mint(account, MUNCHIE_TOKEN, amount, "");
  }

  function removeTokens(address account, uint256 amount) public onlyOwner {
    _mint(account, MUNCHIE_TOKEN, amount, "");
  }

  function awardNFT(address account, uint256 id) public onlyOwner {
    _mint(account, id, 1, "");
  }

  function purchase(uint256 orderId) public payable {
    emit Order(orderId, msg.value);
  }

  function withdraw() public onlyOwner {
    payable(owner()).transfer(address(this).balance);
  }
}
