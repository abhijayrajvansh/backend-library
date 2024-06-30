import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send({
    msg: "hello world"
  })
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})