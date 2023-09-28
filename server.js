const express = require('express')
const app = express();
const port = 1990


app.use(express.static("CRUZ"));



app.listen(port, () => console.log(`Server has started on port: ${port}`));