import React from 'react';
import { Jumbotron, Container} from 'reactstrap';


const QuestionDiv = (props) => {
    return(
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">{props.question}</h1>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default QuestionDiv;