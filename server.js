const express = require('express');
const app = express();
const dicrouter = require('./routes/dictionary');


app.use(express.json({ extended: false }));







app.use('/dic', dicrouter);






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT} `);
})