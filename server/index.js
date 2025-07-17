import express from "express"
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
import restaurantRouter from "./routers/restaurant.router.js"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Restaurant Restful AsIs');
});
//use router
app.use("/api/v1/restaurant", restaurantRouter)
app.listen(PORT , () => {
    console.log("litsening too http:\\localhost:" + PORT);
});