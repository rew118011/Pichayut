const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

const restaurantRouter = require('./routes/restaurant');
const indexRouter = require('./routes/index');
//creater Server
const app = express();

//template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//Middleware เพื่ออ่าน req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Use Router
app.use('/api',restaurantRouter);
app.use('/',indexRouter);

//Middleware
app.use(express.static(path.join(__dirname,'public')));

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  