import {Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config();

//conexion a la base de datos (investigar como se conecta a una db mysql en servidor)
const sequelize = new Sequelize(process.env.DATA_BASE_URL || 
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        pool: {
            max: 10,
            min: 0,
            idle: 60000
        },
        define: {
            freezeTableName: true,
            timestamps: false,
            defaultScope: {
                attributes: { exclude: ["createdAt", "updateAt" ] }
               }
            }
    }
);

export default sequelize;