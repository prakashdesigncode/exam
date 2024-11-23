import React, { useEffect, useState } from "react";
import { fromJS, Map } from "immutable";
import axios from "axios";

const initailPage = { limit: 5, currentPage: 1 }; // declare variable pagination state inital value

const useApiCall = () => {
  const apiCall = async (argument) => {
    const [method, url, setState, payload, callBack] = argument;
    const options = { method, url, ...(payload && { data: payload }) };
    await axios(options)
      .then((res) => {
        setState && setState(fromJS(res.data.data));
        callBack && callBack();
      })
      .catch((error) => console.log(`something went wrong ${error}`));
  };
  return [apiCall];
}; //call api request use this custom hook
const useAutoSave = (answer, submmited) => {
  const [apiCall] = useApiCall();
  const save = (event, callBack) => {
    apiCall([
      "post",
      "http://18.232.156.74:5000/updateQuestion",
      "",
      answer,
      callBack,
    ]);
    event.preventDefault();
  };
  useEffect(() => {
    if (!submmited) window.addEventListener("beforeunload", save);
    return () => window.removeEventListener("beforeunload", save);
  }, [answer]);
  return [save];
}; // this hook enable autoSaveing feature on your application

const usePagenation = (questionSize) => {
  // const totalPages = Math.ceil(questionSize / limit);
  const [pagenation, setPagenation] = useState(Map(initailPage));
  const nextPage = () => {
    setPagenation((previous) =>
      previous.update("currentPage", (value) => value + 1)
    );
  };
  const previousPage = () => {
    setPagenation((previous) =>
      previous.update("currentPage", (value) => (value === 1 ? 1 : value - 1))
    );
  };
  return [pagenation, nextPage, previousPage];
}; // control pagination hook

const Exam = () => {
  const [questions, setQuestions] = useState(fromJS([]));
  const [answer, setAnswer] = useState(Map());
  const [summitated, setSummitated] = useState(false);

  const [pagenation, nextPage, previousPage] = usePagenation(questions.size);
  const [apiCall] = useApiCall();
  const [save] = useAutoSave(answer.toJS(), summitated);

  const limit = pagenation.get("limit", 0);
  const currentPage = pagenation.get("currentPage", 0);
  const startPage = currentPage * limit - limit;
  const endPage = currentPage * limit;
  const totalNumberOfPages = Math.ceil(questions.size / limit);
  const userInLastPage = totalNumberOfPages === currentPage;

  const callBack = () => {
    const isAnswered = questions.every((question) =>
      question.has("userAnswer")
    );
    if (isAnswered) setSummitated(true);
  };

  const handleChangeAnswer = (argument) => {
    const [questionId, optionIndex, questionIndex] = argument;
    setAnswer((previous) => previous.set(questionId, optionIndex));
    setQuestions((previous) =>
      previous.setIn([questionIndex + startPage, "userAnswer"], optionIndex)
    );
  };
  // get inital question on page after loaded && set auto save answer in your writed question && your exam writed or not
  useEffect(() => {
    apiCall(["get", "http://18.232.156.74:5000/getQuestion", setQuestions]);
    apiCall([
      "get",
      "http://18.232.156.74:5000/submittedStatus",
      setSummitated,
    ]);
  }, []); // eslint-disable-next-line
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      {summitated && <div className="">your response is already submmited</div>}
      {!summitated && (
        <div>
          <h3 className="mb-4">{`{ writing exams }`}</h3>
          {questions
            .slice(startPage, endPage)
            .map((question, questionIndex) => {
              const questionName = question.get("question", "");
              const questionOptions = question.get("options", "");
              const questionId = question.get("_id", "");
              const userAnswer = question.get("userAnswer", "");
              return (
                <div key={questionIndex}>
                  <h5>
                    {startPage + questionIndex + 1}.{questionName}
                  </h5>
                  {questionOptions.map((option, optionIndex) => {
                    return (
                      <div key={optionIndex}>
                        <input
                          className="ms-4"
                          type="radio"
                          key={optionIndex}
                          name={questionIndex}
                          checked={userAnswer === optionIndex}
                          onClick={() =>
                            handleChangeAnswer([
                              questionId,
                              optionIndex,
                              questionIndex,
                            ])
                          }
                        />
                        <label className="mx-1">{option}</label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          <br />
          {userInLastPage && (
            <button className="mb-5" onClick={(event) => save(event, callBack)}>
              submit your answer
            </button>
          )}
          <footer className="d-flex gap-3 justify-content-between ">
            <button onClick={previousPage}>previous</button>
            <div>
              {currentPage}/{totalNumberOfPages}
            </div>
            <button onClick={nextPage}>next</button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Exam;
