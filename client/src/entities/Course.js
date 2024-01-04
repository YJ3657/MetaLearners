class Course {
  constructor(courseId) {
      this.courseId = courseId;
      this.students = [];
      this.questions = [];
      this.definitions = [];
      this.contents = new Map();
  }

  getId() {
      return this.courseId;
  }

  getStudents() {
      return this.students;
  }

  addStudent(student) {
      this.students.push(student);
  }

  getQuestions() {
      return this.questions;
  }

  setQuestions(questions) {
      this.questions = questions;
  }

  setQuestion(question) {
      this.questions.push(question);
  }

  getQuestionQuestions() {
      return this.questions.map(ques => ques.getQuestion());
  }

  getDefinitions() {
      return this.definitions;
  }

  getDefinitionTerms() {
      return this.definitions.map(def => def.getWord());
  }

  setDefinitions(definitions) {
      this.definitions = definitions;
  }

  setDefinition(definition) {
      this.definitions.push(definition);
  }

  setContents(contents) {
      this.contents = new Map(contents);
  }

  getContents() {
      return this.contents;
  }
}