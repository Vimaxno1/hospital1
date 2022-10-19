/**************************/
/* CONST SECTION */
/**************************/

const Admin = require('../models/admin');
const { validationResult } = require('express-validator');

/**************************/
/* SIGN-UP SECTION */
/**************************/

exports.getSignup = (req, res, next) => {
  res.render('auth/sign-up', {
    path: '/sign-up',
    pageTitle: ':: Hospital :: Sign Up',
    oldInput: {
      email: '',
      password: '',
    },
    validationErrors: [],
  });
};

exports.postSignup = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.redirect('/sign-up');
  }

  Admin.findOrCreate({
    where: {
      username: { username },
      email: { email },
    },
    defaults: {
      username: username,
      email: email,
      password: password,
    },
  })
    .then((result, created) => {
      if (result !== null && created === false) {
        req.flash('Email or Username Exist create a new one.');
      } else {
        req.flash('success', 'You have Successfully Sign up');
        res.redirect('/sign-in');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
};

/**************************/
/* SIGN-IN SECTION */
/**************************/

exports.getSignin = (req, res, next) => {
  res.render('auth/sign-in', {
    path: '/sign-in',
    pageTitle: ':: Hospital :: Sign In',
    // oldInput: {
    //   email: '',
    //   password: '',
    // },
    // validationErrors: [],
  });
  // console.log('empty', req.body);
};

exports.postSignin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.redirect('/sign-in');
  }

  User.findOne({
    where: {
      username: { username },
      password: { password },
    },
  })
    .then((user) => {
      if (!user) {
        return res.redirect('/sign-in');
      } else {
        (user) => {
          if (user) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save((err) => {
              console.log(err);
              res.redirect('/');
            });
          }
        };
      }
    })
    .catch((err) => console.log(err));
};
