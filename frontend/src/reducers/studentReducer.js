// import { createSlice } from "@reduxjs/toolkit";

// const studentSlice = createSlice({
//   name: "student",
//   initialState: {
//     studentData: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     // Actions for fetching student data
//     fetchStudentRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchStudentSuccess: (state, action) => {
//       state.loading = false;
//       state.studentData = action.payload;
//     },
//     fetchStudentFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Actions for updating student data
//     updateStudentRequest: (state, action) => {
//       state.loading = true;
//       state.error = null;
//     },
//     updateStudentSuccess: (state, action) => {
//       state.loading = false;
//       state.studentData = action.payload;
//     },
//     updateStudentFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   fetchStudentRequest,
//   fetchStudentSuccess,
//   fetchStudentFailure,
//   updateStudentRequest,
//   updateStudentSuccess,
//   updateStudentFailure,
// } = studentSlice.actions;

// export default studentSlice.reducer;
