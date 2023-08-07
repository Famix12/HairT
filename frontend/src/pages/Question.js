import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../index.css';


const QuestionPage = () => {
  const [mcqAnswer, setMcqAnswer] = useState('');
  const [sliderAnswer, setSliderAnswer] = useState(5);
  const [yesNoAnswer, setYesNoAnswer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('MCQ Answer:', mcqAnswer);
    console.log('Slider Answer:', sliderAnswer);
    console.log('Yes/No Answer:', yesNoAnswer);
  };

  return (
    <>
    <Container className='text-light'>
      <h1>Question Page</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='xl'>MCQ Question</Form.Label>
          <Form.Check
            type="radio"
            label="Option 1"
            name="mcq"
            value="option1"
            checked={mcqAnswer === 'option1'}
            onChange={(e) => setMcqAnswer(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Option 2"
            name="mcq"
            value="option2"
            checked={mcqAnswer === 'option2'}
            onChange={(e) => setMcqAnswer(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Slider Question</Form.Label>
          <Form.Control
            type="range"
            min="1"
            max="10"
            style={{width: '20vh'}}
            value={sliderAnswer}
            onChange={(e) => setSliderAnswer(parseInt(e.target.value))}
          />
          <p>{sliderAnswer}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Yes/No Question</Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="yesno"
            value="yes"
            checked={yesNoAnswer === true}
            onChange={() => setYesNoAnswer(true)}
          />
          <Form.Check
            type="radio"
            label="No"
            name="yesno"
            value="no"
            checked={yesNoAnswer === false}
            onChange={() => setYesNoAnswer(false)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </>
  );
};

export default QuestionPage;