const express = require("express");
const cors = require("cors");
const app = express();

//import routes middleware
const doctorsRouter=require("./routes/doctors.routes")

//use  routes middlewares
app.use(
  cors({
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
    credentials: true,
  })
);
app.use(express.json());
app.use("/doctors", doctorsRouter)





app.listen(8082, () => {
  console.log("Listening on port " + 8082);
});
