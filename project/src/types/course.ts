export interface Course {
  id: string;            // ID of the course
  title: string;         // Title of the course
  description: string;   // Description of the course
  enrolledStudents: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'upcoming' | 'completed';  // Course status
  templateId: string;
}


export interface CourseFormData {
  name: string;  // This is 'title' from the `Course` type
  description: string;  // Description of the course
  startDate: string;
  endDate: string;
  status: 'active' | 'upcoming' | 'completed';
  enrolledStudents: number;
}
