const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('./util/database');
const session = require('express-session');
const csrf = require('csurf');
const flash = require('connect-flash');
const errorController = require('./controllers/error');
const Admin = require('./models/admin');

const app = express();

const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

const AddDoctor = require('./models/add-doctors');
const DoctorProfile = require('./models/doctorprofile');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  console.log('session', req.session.admin._id);
  if (!req.session.admin) {
    return next();
  }
  app.use((req, res, next) => {
    console.log('session', req.session.admin._id);
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
  });
  //
  //   Admin.findByPk(req.session.admin._id)
  //     .then((admin) => {
  //       console.log('session', req.session.admin._id);
  //       if (!admin) {
  //         return next();
  //       }
  //       req.admin = admin;
  //       next();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       throw new Error(err);
  //     });
});

app.use(adminRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get400);

app.use((error, req, res, next) => {
  // res.status(error.httpStatusCode).render(...);
  // res.redirect('/500');
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
  });
});

AddDoctor.belongsTo(Admin);
Admin.hasMany(AddDoctor);
Admin.hasOne(DoctorProfile);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
    console.log('server started');
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
