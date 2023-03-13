import app from "./app"; //aqui vale al codigo que está en app
import './database';
import { PORT } from "./config";

app.listen(PORT);
console.log("Servidor en Puerto", PORT);
