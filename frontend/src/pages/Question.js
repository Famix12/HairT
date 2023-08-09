import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../index.css";

const QuestionPage = () => {
  // const [mcqAnswer, setMcqAnswer] = useState("");
  // const [sliderAnswer, setSliderAnswer] = useState(5);
  // const [yesNoAnswer, setYesNoAnswer] = useState(null);
  const [Answer, SetAnswer] = useState({
    q1: "",
    q2: "",
    q3: [],
    q4: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Answer);
  };
  
  const Question1 = () => {
    return (
      <>
        <Form.Group key={`reverse-checkbox`}>
          <Form.Label className="xl">
            Q1 - Is there any visible hair loss?
          </Form.Label>
          <Form.Check
            type={"radio"}
            label="Option 1"
            name="mcq"
            value="No hair loss, wida parting line or receding hair line"
            // checked={mcqAnswer === "option1"}
            onChange={(e) => SetAnswer({ q1: e.target.value })}
          />
          <Form.Check
            type={"radio"}
            label="Option 3"
            name="mcq"
            value="option2"
            // checked={mcqAnswer === "option2"}
            onChange={(e) => SetAnswer({ q1: e.target.value })}
          />
          <Form.Check
            type={"radio"}
            label="Option 2"
            name="mcq"
            value="option2"
            // checked={mcqAnswer === "option2"}
            onChange={(e) => SetAnswer({ q1: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </>
    );
  };
  const Question2 = () => {
    return (
      <>
        <Form.Group>
          <Form.Label>
            Q2 - Does the hair loss appear in specific patches or across the
            whole hair?
          </Form.Label>
          <Form.Check
            type={"radio"}
            name="option 1"
            label="Patch"
            value="Patch"
            onChange={(e) => SetAnswer({ q2: e.target.value })}
          />

          <Form.Check
            type={"radio"}
            name="option 2"
            label="Whole"
            value="Whole"
            onChange={(e) => SetAnswer({ q2: e.target.value })}
          />
        </Form.Group>
      </>
    );
  };
  const Question3 = () => {
    return (
      <>
        <Form.Group>
          <Form.Label>
            Q3 - Are there any of the following symptoms ?
          </Form.Label>
          <Form.Check
            type="checkbox"
            name="option 1"
            label="Small, pus-filled bumps at the hair follicle base in these patchs"
            value={"1"}
            onChange={(e) => SetAnswer({ q3: [e.target.value] })}
          />
          <Form.Check
            type="checkbox"
            name="option 2"
            label="Broken hair, scaling, or oozing black dots or grey hair"
            value={"2"}
            onChange={(e) => SetAnswer({ q3: [e.target.value] })}
          />
          <Form.Check
            type="checkbox"
            name="option 3"
            value={"3"}
            label="Round patches and hair loss occur suddenly"
            onChange={(e) => SetAnswer({ q3: [e.target.value] })}
          />
          <Form.Check
            type="checkbox"
            name="option 4"
            value={"4"}
            label="Lacy white patches or shiny, flat bumps within the patches"
            onChange={(e) => SetAnswer({ q3: [e.target.value] })}
          />
        </Form.Group>
        <Button variant="primary" type="next">
          Submit
        </Button>
      </>
    );
  };
  const Question4 = () => {
    return <></>;
  };

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return <Question1 />;
      case 2:
        return <Question2 />;
      case 3:
        return <Question3 />;
      case 4:
        return <Question4 />;
      default:
        return null;
    }
  };

  return (
    <Container className="text-light QuestionsContainer">
      <Form onSubmit={handleSubmit}>{renderQuestion()}</Form>
    </Container>
  );
  // return (
  //   <>
  //     <Container className="text-light QuestionsContainer">
  //       <h1>Question Page</h1>

  //       <Form onSubmit={handleSubmit}>

  //           {/* if patch selectes then */}

  //       </Form>
  //     </Container>
  //   </>
  // );
};

export default QuestionPage;
