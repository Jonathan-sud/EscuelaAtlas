import { connect } from "mongoose";
import { mongodb_URI } from "./config";

(async () => {
  try {
    const db = await connect(mongodb_URI);
    console.log("Databe connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
