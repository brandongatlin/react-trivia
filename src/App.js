import React, {useState} from 'react';
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
  const [currentQ, setCurrentQ] = useState(0);

  const handleAnswerClick = (e)=> {
    const guess = e.currentTarget.textContent;
    if(guess === questions[currentQ].correct){

    } else {
      
    }

  }


  return (
    <Container fluid className="App">
      {
        gameDone ?
        <ScoreCard />
        :
        <Timer />
      }
      
      {
      gameOn ? 
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
        handleClick={(e)=> setGameOn(true)}
      />
     }
    </Container>
  );
}

export default App;
