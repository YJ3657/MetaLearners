class Student {
  constructor() {
    this.studentId = '';
    this.timeEnrolled = '';
  }

  Student(studentId, timeEnrolled) {
    this.studentId = studentId;
    this.timeEnrolled = timeEnrolled;
  }

  // getter
  getStudentId() {
    return this.StudentId;
  }
  getTimeEnrolled() {
    return this.timeEnrolled;
  }

  // setter
  setStudentId(studentId) {
    this.studentId = studentId;
  }
  setTimeEnrolled(timeEnrolled) {
    this.timeEnrolled = timeEnrolled;
  }
}
