import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

function NotFound() {
  return (<>
    <Container fluid="true">
        <div>
            Página não encontrada... Vá para <Link to="/">Home</Link>
        </div>
    </Container>
  </>);
}

export default NotFound;