// Ensure the correct import paths
import StudentDashboard from './components/dashboards/StudentDashboard';  // Correct path
import { Course } from './types/course';  // Correct path

// Sample course data for demonstration
const courses: Course[] = [
  {
    id: 1,
    title: "Math 101",
    description: "Basic Math Course for beginners",
  },
  {
    id: 2,
    title: "Science 101",
    description: "Introductory course to science",
  },
  // Add more course data here
];

const ParentComponent: React.FC = () => {
  return (
    <div>
      {/* Pass the courses prop to StudentDashboard component */}
      <StudentDashboard courses={courses} />
    </div>
  );
};

export default ParentComponent;
