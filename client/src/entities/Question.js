class Question {
  constructor() {
    this.chapterNo = 0;
    this.question = '';
    this.answer = '';
  }

  Question(chapterNo, question, answer) {
    this.chapterNo = chapterNo;
    this.question = question;
    this.answer = answer;
  }

  // getter
  getChapterNo() {
    return this.chapterNo;
  }
  getQuestion() {
    return this.question;
  }
  getAnswer() {
    return this.answer;
  }

  // setter
  setChapterNo(chapterNo) {
    this.chapterNo = chapterNo;
  }
  setQuestion(question) {
    this.question = question;
  }
  setAnswer(answer) {
    this.answer = answer;
  }
}
