//replicamos lo mismo que index.js(suprimir.js) pero en TS
import dotenv from "dotenv";
import server from "./sra/server";
import { LogError, LogSuccess } from "./sra/utils/logger";

//configuration the .env file
dotenv.config();

//create Express APP
const port: string | number = process.env.PORT || 3001;


// Execute server and Listen Request to PORT
server.listen(port, () => {
    LogSuccess(`Server is running on http://localhost:${port}/api`)
});

//control server error
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
});