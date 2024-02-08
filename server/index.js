



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
const loginRouter=require('./router/Login.Router')    // login router
const userRouter = require('./router/UserProfile.Router');  // user profile  all user oprtaions like get,post,put
const blogsRouter=require('./router/BlogRouter');   //  user blogs for data



// use of that routers
app.use('/register',registerRouter);  // register users 
app.use('/login',loginRouter);   // login router
app.use('/profile', userRouter);   // all user profile operations like get ,put .post
app.use('/blog',blogsRouter)

const PORT = 9009;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




