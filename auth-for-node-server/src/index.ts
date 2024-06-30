import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    msg: "hello world"
  })
})



app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})