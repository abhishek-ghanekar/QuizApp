import React, { useContext, useRef, useState } from "react";
import quizContext from "../context/quizs/quizContext";

const AddQuiz = (props) => {
  const context = useContext(quizContext);
  const { addQuiz, editCode } = context;
 
  const [select, setSelect] = useState("yes");
  const [quiz, setQuiz] = useState({
    id: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    title: "",
    mcq: select,
    code:""
  });

  const handleClick = (e) => {
    e.preventDefault(); //page doesn't get reload

    addQuiz(
      quiz.question,
      quiz.option1,
      quiz.option2,
      quiz.option3,
      quiz.option4,
      quiz.answer,
      quiz.title,
      select,
      code
    );
    setQuiz({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
      title: "",
      mcq: select
    });
    props.showAlert("Added Successfully", "success");
  };

  var code;
  const [gcode, setGcode] = useState("");

  const test = () => {
    const publish = () => {
      var len = 6;
      var arr = "1234567890qwertyuiopasdfghjklzxcvbnm";
      var ans= "";
      for (var i = len; i > 0; i--) {
        ans += arr[Math.floor(Math.random() * arr.length)];
      }
      console.log(ans);
      
      code = ans;
      console.log(code, "CODE");
      setGcode(code);
    }
    publish();

    const editTESTCode = () => {
      editCode(code);
      console.log(code, "INSIDE EDITCODE");
      props.showAlert("Quiz Published Successfully", "success");
    }
    editTESTCode();
  }

  const onChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Add Your Quiz</h2>
      <div className="d-flex justify-content-end mb-3">
        <button onClick={test} className="btn btn-success">Publish</button>
        <input type="text" name="code" value={gcode} className="form-control mx-3" readOnly />
      </div>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Question</label>
          <input
            type="text"
            className="form-control"
            id="question"
            name="question"
            onChange={onChange}
            value={quiz.question}
            minLength={5}
            required
            placeholder="Write your question here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            value={quiz.title}
            minLength={5}
            required
            placeholder="Enter the title"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="option1" className="form-label">Option 1</label>
            <input
              type="text"
              className="form-control"
              id="option1"
              name="option1"
              onChange={onChange}
              value={quiz.option1}
              minLength={5}
              required
              placeholder="Enter option 1"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="option2" className="form-label">Option 2</label>
            <input
              type="text"
              className="form-control"
              id="option2"
              name="option2"
              onChange={onChange}
              value={quiz.option2}
              minLength={5}
              required
              placeholder="Enter option 2"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="option3" className="form-label">Option 3</label>
            <input
              type="text"
              className="form-control"
              id="option3"
              name="option3"
              onChange={onChange}
              value={quiz.option3}
              minLength={5}
              required
              placeholder="Enter option 3"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="option4" className="form-label">Option 4</label>
            <input
              type="text"
              className="form-control"
              id="option4"
              name="option4"
              onChange={onChange}
              value={quiz.option4}
              minLength={5}
              required
              placeholder="Enter option 4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="answer" className="form-label">Answer</label>
          <input
            type="text"
            className="form-control"
            id="answer"
            name="answer"
            onChange={onChange}
            value={quiz.answer}
            minLength={5}
            required
            placeholder="Enter the answer"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mcq" className="form-label">Is this question MCQ:</label>
          <select
            name="mcq"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            className="form-select"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          disabled={
            quiz.question.length < 5 ||
            quiz.option1.length < 3 ||
            quiz.option2.length < 3 ||
            quiz.option3.length < 3 ||
            quiz.option4.length < 3 ||
            quiz.answer.length < 3
          }
        >
          Add Quiz
        </button>
      </form>
    </div>
  );
};

export default AddQuiz;
