import React from 'react';
import { Course } from '../../types/course'; // Ensure correct import

interface StudentDashboardProps {
  courses: Course[];  // Assuming courses are passed as props
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ courses }) => {
  return (
    <div className="student-dashboard">
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>  {/* Use title or name based on your preference */}
          <p>{course.description}</p>  {/* Access description */}
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
