import { Sequelize } from "sequelize-cockroachdb";
import { DataTypes } from "sequelize";
import crypto from "crypto";
const connectionString = process.env.DATABASE_URL;
const sequelize = new Sequelize(connectionString, {
  dialectOptions: {
    application_name: "Mars Munchies",
  },
});

const User = sequelize.define(
  "User",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    authToken: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wallet: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    // badges: {
    //     type: Sequelize.ARRAY(Sequelize.STRING),
    //     allowNull: true,
    // }
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
  isLimitedEdition: DataTypes.BOOLEAN,
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
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cart: DataTypes.STRING,
  isPaid: DataTypes.BOOLEAN,
  value: DataTypes.INTEGER,
});

export default sequelize;

export { User, Item, NFT, Order };
