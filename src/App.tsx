import React, { useState } from 'react';
import { Button, Typography, Box, Link } from '@mui/material';
import questions from './assets/questions.json';

interface Question {
  question: string;
  answer: string;
  regulation: string;
}

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const question: Question = questions[currentQuestionIndex];

  const handleAnswer = () => {
    setIsAnswered(true);
  };

  const handleNext = () => {
    setIsAnswered(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", width: "100vw", mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        {question.question}
      </Typography>

      {isAnswered && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body1" color="success">
            Correct answer: {question.answer}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Regulation: <Link href={`https://wca.link/${question.regulation}`} target="_blank">{question.regulation}</Link>
          </Typography>
        </Box>
      )}

      <Box sx={{ display: 'flex', gap: 2, justifyContent: "center", mt: 2 }}>
        {!isAnswered && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAnswer}
          >
            Check answer
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default App;
