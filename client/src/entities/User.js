export class User {
  constructor() {
    this.userId = '';
    this.userPassword = '';

    this.groupId = [];
    this.courseId = [];
    this.notes = new Map();
    // {"couserId1" => [ "note1", "note2", ... ],
    //  "couserId2" => [ "note1", "note2", ... ]}
  }

  User(id, password) {
    this.userId = id;
    this.userPassword = password;
  }

  // getters
  getUserId() {
    return this.userId;
  }
  getUserPassword() {
    return this.userPassword;
  }
  getGroupId() {
    return this.groupId;
  }
  getCourseId() {
    return this.courseId;
  }
  getNotes() {
    return this.notes;
  }

  // setters
  setUserId(id) {
    this.userId = id;
  }
  setUserPassword(password) {
    this.password = password;
  }
  setNotes(courseId, note) {
    if (note === undefined) return;

    if (this.notes.has(courseId)) {
      this.notes.get(courseId).push(note);
    } else {
      this.notes.set(courseId, [note]);
    }
  }

  // special setters
  addCourse(newCourseId) {
    if (this.courseId.indexOf(newCourseId) === -1) {
      if (this.courseId.length < 8) {
        this.courseId.push(newCourseId);
      } else {
        console.log('No space');
      }
    }
    console.log('the given course already exits')
  }
  addGroupId(groupId) {

  }
  copyUser(user) {
    const copiedUser = new User();
    copiedUser.userId = user.getUserId();
    copiedUser.userPassword = user.getUserPassword();
    copiedUser.groupId = user.getGroupId();
    copiedUser.courseId = user.getCourseId();
    copiedUser.notes = user.getNotes();
    return copiedUser;
  }
}