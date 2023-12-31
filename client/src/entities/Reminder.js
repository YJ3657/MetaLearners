class Reminder {
  constructor() {
    this.courseId = '';
    this.reviewMaterials = new Map();
  }

  Reminder(courseId, reviewMaterials) {
    this.courseId = courseId;
    this.reviewMaterials = reviewMaterials;
  }

  // getter
  getCourseId() {
    return this.courseId;
  }
  getReviewMaterials() {
    return this.reviewMaterials;
  }

  // setter
  setCourseid(courseId) {
    this.courseId = courseId;
  }
  setReviewMaterials(reviewMaterials) {
    this.reviewMaterials = reviewMaterials;
  }
}
