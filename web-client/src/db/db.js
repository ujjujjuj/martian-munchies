import { Sequelize } from "sequelize-cockroachdb";
import crypto from "crypto";
const connectionString = process.env.DATABASE_URL
const sequelize = new Sequelize(connectionString, {
    dialectOptions: {
        application_name: "Mars Munchies"
    }
});

const User = sequelize.define("User",
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
        }
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

const Order = sequelize.define("Order", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

export default sequelize;

export { User };