import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { 
  Container,
  Row,
  Col
} from 'reactstrap';

import './style.css';

function Dashboard() {
  const [usuarios, setUsuarios] = useState();
  const [vacinas, setVacinas] = useState();
  const [vacinacoes, setVacinacoes] = useState();
  
  useEffect(() => {
    api.get('/dashboard/usuarios').then(response => {setUsuarios(response.data)})
    api.get('/dashboard/vacinas').then(response => {setVacinas(response.data)})
    api.get('/dashboard/vacinacoes').then(response => {setVacinacoes(response.data)})
  }, []);

  return (
      <>
        <Header/>
        <Container fluid className="container-dashboard">
          <Row xs="2">
            <Col>
              <div>
                  Usuários cadastrados atualmente
                  <br/>
                  {usuarios}  
              </div>
            </Col>
            <Col>
              <div>
                  Vacinas cadastradas atualmente
                  <br/>
                  {vacinas}
              </div>
            </Col>
          </Row>
          <Row className="row-vacinacao">
            <Col>
              <div>
                Vacinações Cadastradas
                <br />
                {vacinacoes}
              </div>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default Dashboard;