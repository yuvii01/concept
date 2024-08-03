// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   fetchStudentRequest,
//   fetchStudentSuccess,
//   fetchStudentFailure,
//   updateStudentRequest,
//   updateStudentSuccess,
//   updateStudentFailure,
// } from '../reducers/studentReducer';

// // API Endpoints
// const API_URL = '/api/student';

// function* fetchStudent() {
//   try {
//     const response = yield call(axios.get, API_URL);
//     yield put(fetchStudentSuccess(response.data));
//   } catch (error) {
//     yield put(fetchStudentFailure(error.message));
//   }
// }

// function* updateStudent(action) {
//   try {
//     const response = yield call(axios.put, API_URL, action.payload);
//     yield put(updateStudentSuccess(response.data));
//   } catch (error) {
//     yield put(updateStudentFailure(error.message));
//   }
// }

// function* studentSaga() {
//   yield takeLatest('student/fetchStudentRequest', fetchStudent);
//   yield takeLatest('student/updateStudentRequest', updateStudent);
// }

// export default studentSaga;
