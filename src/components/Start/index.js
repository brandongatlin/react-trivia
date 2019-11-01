import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';


const Start = (props) => {
    return(
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Ready to play?!</h1>
                </Container>
            </Jumbotron>
            <Button onClick={props.handleClick} color='success'>Begin!</Button>
        </div>
    )
}

export default Start;