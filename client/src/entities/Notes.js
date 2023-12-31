class Notes {
  constructor() {
    this.userId = '';
    this.title = '';
    this.contents = '';
    this.chapterNo = 0;
    this.courseId = '';
  }

  // getter
  getUserId() {
    return this.userId;
  }
  getTitle() {
    return this.title;
  }
  getContents() {
    return this.contents;
  }
  getChapterNo() {
    return this.chapterNo;
  }
  getCourseId() {
    return this.courseId;
  }

  // setter
  setUserId(userId) {
    this.userId = userId;
  }
  setTitle(title) {
    this.title = title;
  }
  setContents(contents) {
    this.contents = contents;
  }
  setChapterNo(chapterNo) {
    this.chapterNo = chapterNo;
  }
  setCourseId(courseId) {
    this.courseId = courseId;
  }
}
