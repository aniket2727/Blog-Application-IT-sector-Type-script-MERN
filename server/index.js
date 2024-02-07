



const express=require('express');
const cors=require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors());

app.use(express.json());
require('./database/Aconfig');

// imported routers
const registerRouter=require('./router/Register.Router')  // register users



// use of that routers
app.use('/register',registerRouter);  // register users 


const PORT = 9009;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




