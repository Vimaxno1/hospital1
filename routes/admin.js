const express = require('express');

const adminController = require('../controllers/admin');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

/**************************/
/* MAIN SECTION */
/**************************/

router.get('/', isAuth, adminController.getIndex);

/**************************/
/* DOCTORS SECTION */
/**************************/

router.get('/all-doctor', isAuth, adminController.getAlldoctor);

router.get('/add-doctor', isAuth, adminController.getAdddoctor);

router.get('/doctor-profile', isAuth, adminController.getDoctorprofile);

/**************************/
/* PATIENTS SECTION */
/**************************/

router.get('/all-patient', isAuth, adminController.getAllpatient);

router.get('/patient-profile', isAuth, adminController.getPatientprofile);

module.exports = router;
