import express from "express"
import {Register,Login} from "/controller/authCrud.js"


const runApp = express.Router();

runApp.post("/register",Register);
runApp.get("/login",Login);

export default runApp