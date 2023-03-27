import { config } from "dotenv";

config();

export const mongodb_URI = 
process.env.mongodb_URI || "mongodb://mongo:cxkfZOHKKHXzngfASgWP@containers-us-west-146.railway.app:7824";
//"mongodb://localhost/test";

export const PORT = process.env.PORT || 5000;