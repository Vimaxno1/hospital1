/**************************/
/* MAIN SECTION */
/**************************/

exports.getIndex = (req, res, next) => {
  res.render('index', {
    path: '/',
    pageTitle: ':: Hospital :: Home',
  });
};

/**************************/
/* DOCTORS SECTION */
/**************************/

exports.getAlldoctor = (req, res, next) => {
  res.render('doctors/all-doctor', {
    path: '/all-doctor',
    pageTitle: ':: Hospital :: All Doctors',
  });
};

exports.getAdddoctor = (req, res, next) => {
  res.render('doctors/add-doctor', {
    path: '/add-doctor',
    pageTitle: ':: Hospital :: Add Doctors',
  });
};

exports.getDoctorprofile = (req, res, next) => {
  res.render('doctors/doctor-profile', {
    path: '/doctor-profile',
    pageTitle: ':: Hospital Admin :: Profile',
  });
};

/**************************/
/* PATIENTS SECTION */
/**************************/

exports.getAllpatient = (req, res, next) => {
  res.render('patients/all-patients', {
    path: '/all-patient',
    pageTitle: ':: Hospital :: All Patients',
  });
};

exports.getPatientprofile = (req, res, next) => {
  res.render('patients/patient-profile', {
    path: '/patient-profile',
    pageTitle: ':: Hospital :: Patient Profile',
  });
};
