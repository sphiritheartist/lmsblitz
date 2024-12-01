import React from 'react';
import { Course } from '../../types/course'; // Import the Course type

interface CourseDetailsProps {
  course: Course;  // Define the expected course prop with the correct type
  onClose: () => void;  // Define a close function (you can customize this based on your needs)
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, onClose }) => {
  return (
    <div className="course-details">
      <button onClick={onClose}>Close</button>
      
      <h2>{course.title}</h2>
      <p><strong>Enrolled Students:</strong> {course.enrolledStudents}</p>
      <p><strong>Start Date:</strong> {course.startDate}</p>
      <p><strong>End Date:</strong> {course.endDate}</p>
      <p><strong>Status:</strong> {course.status}</p>
    </div>
  );
}

export default CourseDetails;
