exports.get400 = (req, res, next) => {
  res.status(404).render('400', {
    pageTitle: 'Page Not Found',
    path: '/400',
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
  });
};
