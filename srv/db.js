const { Sequelize } = require("sequelize");

const { DataTypes } = require("sequelize-cockroachdb");
const crypto = require("crypto");

const sequelize = new Sequelize(process.env.DB_URL, { dialect: "postgres" });

const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wallet: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
  },
  {
    hooks: {
      beforeCreate: async function (user, options) {
        user.password = crypto
          .createHash("sha256")
          .update(user.password)
          .digest("hex");
      },
    },
  }
);

const Item = sequelize.define("Item", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.INTEGER,
  isLimitedEdtion: DataTypes.BOOLEAN,
  supply: DataTypes.INTEGER,
  description: DataTypes.TEXT,
});

const NFT = sequelize.define("NFT", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  image: DataTypes.STRING,
});

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cart: DataTypes.STRING,
});

sequelize.authenticate().then(() => sequelize.sync());x

module.exports = { User, Order, Item, NFT };
