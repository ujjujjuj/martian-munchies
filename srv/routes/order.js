const express = require("express");
const Web3 = require("web3");
const fs = require("fs");

const router = express.Router();

const web3 = new Web3(process.env.RPC_URL);
const contract = new web3.eth.Contract(
  require("../static/MartianMunchies.json").abi,
  process.env.CONTRACT_ADDRESS
);

let accounts;
web3.eth.getAccounts().then((ac) => (accounts = ac));
(async () => {
  // console.log(await web3.eth.getBalance((await web3.eth.getAccounts())[0]));
})();

router.post("/new", () => {
  // calculate order value from cart items
  // create new order object with paid = fanlse
  // return order id and
});

router.post("/status", () => {
  // return Order.findOne({id:req.body.orderId}).paid
});

router.post("/all", () => {
  // return orders
});

// console.log( });
router.post("/test", (req, res) => {
  contract.methods
    .purchase(69420)
    .send({ value: web3.utils.toWei("0.1", "ether"), from: accounts[1] })
    .on("transactionHash", (hash) => {
      return res.json({ txnHash: hash });
    });
});

// set paid = true for that order
// check if a limited edition item is in the order, if yes then check the number of items sold
// if number of items < threshold then award the user with an NFT of that item
contract.events["Order"]({ fromBlock: "earliest" }).on("data", (event) => {
  console.log("ORDER EVENT");
  console.log(event);
  const { orderId, amount } = event.returnValues;
  console.log(orderId, amount);
});

module.exports = router;
