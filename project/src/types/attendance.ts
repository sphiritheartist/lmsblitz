export interface AttendanceRecord {
  id: string;
  courseId: string;
  date: string;
  records: StudentAttendance[];
}

export interface StudentAttendance {
  studentId: string;
  studentName: string;
  status: 'present' | 'absent' | 'late';
  notes?: string;
}

export interface AttendanceState {
  records: AttendanceRecord[];
  loading: boolean;
  error: string | null;
  fetchAttendance: (courseId: string) => Promise<void>;
  markAttendance: (courseId: string, attendance: StudentAttendance[]) => Promise<void>;
}

// Sample initialization of AttendanceState (example):
const initialState: AttendanceState = {
  records: [],
  loading: false,
  error: null,
  fetchAttendance: async (courseId) => { 
    // Fetch logic for attendance data for the courseId 
  },
  markAttendance: async (courseId, attendance) => { 
    // Logic to mark attendance for the course
  },
};
