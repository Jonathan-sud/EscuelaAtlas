import { config } from "dotenv";

config();

export const mongodb_URI = 
process.env.mongodb_URI ||"mongodb://localhost/test";

export const PORT = process.env.PORT || 5000;