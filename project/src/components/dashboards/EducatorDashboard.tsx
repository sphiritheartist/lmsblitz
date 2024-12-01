import React from 'react';
import { Course } from '../../types/course'; // Ensure correct import

interface EducatorDashboardProps {
  courses: Course[];  // Assuming courses are passed as props
}

const EducatorDashboard: React.FC<EducatorDashboardProps> = ({ courses }) => {
  return (
    <div className="educator-dashboard">
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>  {/* Use title or name based on your preference */}
          <p>{course.description}</p>  {/* Access description */}
          <p>Enrolled Students: {course.enrolledStudents}</p>
          <p>Start Date: {course.startDate}</p>
          <p>Status: {course.status}</p>
        </div>
      ))}
    </div>
  );
};

export default EducatorDashboard;
