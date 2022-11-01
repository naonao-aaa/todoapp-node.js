const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");

const PORT = 5000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

// データベースと接続　　　　　　　　　　
const start = async () => {
  try {
    await connectDB("mongodb+srv://udemy:abc@cluster0.hpeeb2z.mongodb.net/todoapp?retryWrites=true&w=majority");
    app.listen(PORT, console.log("サーバーが起動しました"));
  } catch (err) {
    console.log(err);
  }
}

start();
