const express = require("express");
const Web3 = require("web3");
const fs = require("fs");
const { Order, Item, NFT, User } = require("../db");

const router = express.Router();

// const web3 = new Web3(process.env.RPC_URL);
const web3 = new Web3(
  "wss://polygon-testnet.blastapi.io/2e86a346-f986-44a6-b7e3-29417330ffd7"
);
const contract = new web3.eth.Contract(
  require("../static/MartianMunchies.json").abi,
  process.env.CONTRACT_ADDRESS
);

let ownerAccount;
let accounts;
// web3.eth.getAccounts().then((ac) => (accounts = ac));
(async () => {
  // console.log(await web3.eth.getBalance((await web3.eth.getAccounts())[0]));
  ownerAccount = await web3.eth.accounts.privateKeyToAccount(
    "0x" + process.env.WALLET_PRIVATE_KEY
  );
})();

router.post("/new", async (req, res) => {
  // calculate order value from cart items
  const itemIds = Object.keys(req.body.cart);
  const items = await Item.findAll();

  let value = itemIds.reduce(
    (prev, id) =>
      items.find((x) => x.id == id).price * req.body.cart[id] + prev,
    0
  );

  value *= 1.18;
  value += 42;
  value *= 1e5;
  value = Math.floor(value);

  // create new order object with paid = fanlse
  const order = await Order.create({
    user: req.body.user,
    cart: JSON.stringify(req.body.cart),
    isPaid: false,
    value,
  });

  await order.save();

  // return order id
  return res.json({ id: order.id });
});

router.post("/status", async () => {
  // return Order.findOne({id:req.body.orderId}).paid
  res.json({ confirmed: (await Order.findOne({ id: req.body.id })).isPaid });
});

router.post("/all", async () => {
  // return orders
  res.json({ orders: await Order.findAll() });
});

// console.log( });
router.post("/test", (req, res) => {
  contract.methods
    .purchase(4242)
    .send({ value: web3.utils.toWei("0.1", "ether"), from: accounts[1] })
    .on("transactionHash", (hash) => {
      return res.json({ txnHash: hash });
    });
});

// set paid = true for that order
// check if a limited edition item is in the order, if yes then check the number of items sold
// if number of items < threshold then award the user with an NFT of that item
contract.events.Order({ fromBlock: "earliest" }).on("data", async (event) => {
  console.log(event);
  // return;
  const { orderId, amount, from } = event.returnValues;
  const order = await Order.findOne({ id: parseInt(orderId) });
  // if (order.value !== parseInt(amount)) {
  //   console.log(
  //     `Invalid amount received for order-${orderId}: received ${amount} but expected ${order.value}`
  //   );
  //   return;
  // }

  order.isPaid = true;
  await order.save();
  const cart = JSON.stringify(order.cart);

  try {
    // reward user with tokens
    contract.methods.awardTokens(event.from, Math.floor(order.value * 0.05), {
      from: ownerAccount,
    });
  } catch {}

  const items = await Item.findAll({ where: { id: Object.keys(cart) } });
  for (const item in items) {
    if (item.isLimitedEdition && item.supply < 42) {
      item.supply++;
      item.save();

      // MINT NFT
      contract.methods.awardNFT(from, item.id, { from: ownerAccount });
    }
  }

  await order.save();
});

module.exports = router;
