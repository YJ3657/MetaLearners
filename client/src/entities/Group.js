class Group {
  constructor() {
    this.groupId = '';
    this.week = 0;
    this.courseId = '';
    this.member = [];
  }

  Group(groupId, week, courseId, member) {
    this.groupId = groupId;
    this.week = week;
    this.courseId = courseId;
    this.member = member;
  }

  // getter
  getGroupId() {
    return this.groupId;
  }
  getWeek() {
    return this.getWeek;
  }
  getCourseId() {
    return this.courseId;
  }
  getMember() {
    return this.member;
  }

  // setter
  setGroupId(groupId) {
    this.groupId = groupId;
  }
  setWeek(week) {
    this.week = week;
  }
  setCourseId(courseId) {
    this.courseId = courseId;
  }
  setMember(member) {
    this.member = member;
  }
}
