import express from 'express';

const app = express();

app.get('/api/test', (req, res) => {
    res.send(true)
});

app.listen(5000, () => {
    console.log("server started at port 5000")
})