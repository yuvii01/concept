import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [studentData, setStudentData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/student')
      .then((response) => response.json())
      .then((data) => {
        setStudentData(data);
      });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedData = {
      ...studentData,
      personalInfo: {
        name: event.target.name.value,
        age: event.target.age.value,
        email: event.target.email.value,
        contact: event.target.contact.value,
      },
      educationalHistory: Array.from(event.target.querySelectorAll('.education-group')).map((element) => ({
        institution: element.querySelector('.institution').value,
        degree: element.querySelector('.degree').value,
        years: element.querySelector('.years').value,
      })),
      enrolledCourses: Array.from(event.target.querySelectorAll('.course-group')).map((element) => ({
        course: element.querySelector('.course').value,
        instructor: element.querySelector('.instructor').value,
        duration: element.querySelector('.duration').value,
      })),
    };

    fetch('http://localhost:5000/api/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setStudentData(updatedData);
        setEditMode(false);
      });
  };

  const addEducation = () => {
    setStudentData((prevData) => ({
      ...prevData,
      educationalHistory: [...prevData.educationalHistory, { institution: '', degree: '', years: '' }],
    }));
  };

  const removeEducation = (index) => {
    setStudentData((prevData) => ({
      ...prevData,
      educationalHistory: prevData.educationalHistory.filter((_, i) => i !== index),
    }));
  };

  const addCourse = () => {
    setStudentData((prevData) => ({
      ...prevData,
      enrolledCourses: [...prevData.enrolledCourses, { course: '', instructor: '', duration: '' }],
    }));
  };

  const removeCourse = (index) => {
    setStudentData((prevData) => ({
      ...prevData,
      enrolledCourses: prevData.enrolledCourses.filter((_, i) => i !== index),
    }));
  };

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-5 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-5 text-center">Student Profile</h1>
      {editMode ? (
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" defaultValue={studentData.personalInfo.name} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium mb-2">Age</label>
            <input type="text" id="age" name="age" defaultValue={studentData.personalInfo.age} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="text" id="email" name="email" defaultValue={studentData.personalInfo.email} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium mb-2">Contact Number</label>
            <input type="text" id="contact" name="contact" defaultValue={studentData.personalInfo.contact} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Educational History</h3>
          <div>
            {studentData.educationalHistory.map((edu, index) => (
              <div key={index} className="mb-4 education-group">
                <label className="block text-sm font-medium mb-2">Institution</label>
                <input type="text" defaultValue={edu.institution} className="institution w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <label className="block text-sm font-medium mb-2">Degree</label>
                <input type="text" defaultValue={edu.degree} className="degree w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <label className="block text-sm font-medium mb-2">Years</label>
                <input type="text" defaultValue={edu.years} className="years w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <button type="button" onClick={() => removeEducation(index)} className="bg-red-500 text-white p-2 rounded-md">Remove</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addEducation} className="bg-blue-500 text-white p-2 rounded-md mb-4">Add Education</button>
          <h3 className="text-2xl font-bold mb-3">Enrolled Courses</h3>
          <div>
            {studentData.enrolledCourses.map((course, index) => (
              <div key={index} className="mb-4 course-group">
                <label className="block text-sm font-medium mb-2">Course</label>
                <input type="text" defaultValue={course.course} className="course w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <label className="block text-sm font-medium mb-2">Instructor</label>
                <input type="text" defaultValue={course.instructor} className="instructor w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <label className="block text-sm font-medium mb-2">Duration</label>
                <input type="text" defaultValue={course.duration} className="duration w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <button type="button" onClick={() => removeCourse(index)} className="bg-red-500 text-white p-2 rounded-md">Remove</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addCourse} className="bg-blue-500 text-white p-2 rounded-md mb-4">Add Course</button>
          <button type="submit" className="bg-green-500 text-white p-3 rounded-md w-full mt-5">Save</button>
        </form>
      ) : (
        <div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold mb-3">Personal Information</h2>
            <p className="mb-2"><strong>Name:</strong> {studentData.personalInfo.name}</p>
            <p className="mb-2"><strong>Age:</strong> {studentData.personalInfo.age}</p>
            <p className="mb-2"><strong>Email:</strong> {studentData.personalInfo.email}</p>
            <p className="mb-2"><strong>Contact:</strong> {studentData.personalInfo.contact}</p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold mb-3">Educational History</h2>
            <ul className="list-disc pl-5 space-y-1">
              {studentData.educationalHistory.map((edu, index) => (
                <li key={index} className="text-sm">{edu.institution}, {edu.degree} ({edu.years})</li>
              ))}
            </ul>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold mb-3">Enrolled Courses</h2>
            <ul className="list-disc pl-5 space-y-1">
              {studentData.enrolledCourses.map((course, index) => (
                <li key={index} className="text-sm">{course.course} by {course.instructor} ({course.duration})</li>
              ))}
            </ul>
          </div>
          <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white p-3 rounded-md w-full">Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
