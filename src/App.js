import React, {useState, useEffect} from 'react';
import './App.css';

import QuestionDiv from './components/QuestionDiv';
import Timer from './components/Timer'
import ScoreCard from './components/ScoreCard';
import Start from './components/Start';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

import questions from './data/questions.json';



function App() {
  const [gameOn, setGameOn] = useState(false);
  const [gameDone, setGameDone] = useState(false);
  // const [timeUp, setTimeUp] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  const [remaining, setRemaining] = useState(10);

  const clockTick = () => {
    const newRemaining = remaining - 1;
    setRemaining(newRemaining);
}

  useEffect(()=> {
    const interval = window.setInterval(clockTick, 1000);
    return () => window.clearInterval(interval);
  });

  
  

  const handleAnswerClick = (e)=> {
    setRemaining(10);

    const guess = e.currentTarget.textContent;
    const answer = questions[currentQ].correct;

    if(guess === answer){
      const newScore = score + 1;
      setScore(newScore);
    }

    if(currentQ < questions.length - 1){
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
    } else {
      setGameDone(true);
      setGameOn(false);
      setCurrentQ(0);
    }
  }


  return (
    <Container fluid className="App">
      {
        gameDone ?
        <ScoreCard score={score}/>
        :
        <Timer time={remaining}/>
      }
      
      {
      gameOn && !gameDone? 
      <>
        <QuestionDiv 
          question={questions[currentQ].q}/> 
        <ListGroup>
          {questions[currentQ].a.map((a, idx)=> {
            return(
              <ListGroupItem key={idx} onClick={handleAnswerClick} className="answer-option" tag="li" value={a}>{a}</ListGroupItem>
            )               
          })}
        </ListGroup>
      </>
      : 
      <Start 
        handleClick={(e)=> {
          setGameOn(true);
          setGameDone(false);
          setScore(0);
          setRemaining(10);
        }
      }
      />
     }
    </Container>
  );
}

export default App;
