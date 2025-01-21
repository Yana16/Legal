const data = require("./example.json");

/**
 * @returns {Object.<string,string>[][]}
 */
const testQuestioner = () => {
  const paths = [];

  const traverseQ = (currentQuestionId, path) => {
    const currentQuestion = data.questions.find(
      (q) => q.id === currentQuestionId
    );

    if (!currentQuestion) {
      return;
    }

    currentQuestion.answers.forEach((answer) => {
      const newPath = [
        ...path,
        {
          [currentQuestion.question]: answer.text1,
        },
      ];

      if (answer.next_question) {
        traverseQ(answer.next_question, newPath);
      } else {
        paths.push(newPath);
      }
    });
  };

  traverseQuestions(data.questions[0].id, []);

  return paths;
};

module.exports = { testQuestioner };
