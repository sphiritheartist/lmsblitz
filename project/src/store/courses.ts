// src/store/courses.ts

import { useState } from 'react';
import { Course } from '../types/course';

export const useCourseStore = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    // Replace with your actual API request
    const response = await fetch('/api/courses');
    const data = await response.json();
    setCourses(data);
  };

  return { courses, fetchCourses };
};
