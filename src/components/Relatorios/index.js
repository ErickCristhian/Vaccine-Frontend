import React, { useState } from 'react';
import { Table, Container } from 'reactstrap';
import Header from '../Header';
import './style.css';

function List() {

  const [vacinacao, setVacinacao] = useState([]);
    return (
      <>
        <h1 className="text-center">Resultado</h1>
        <Container fluid>
          <Table striped responsive hover size="xs">
            <thead class="lista-vacinacao">
              <tr>
                <th></th>
                <th>Nome do Usuário</th>
                <th>Nome da vacinacao</th>
                <th>Senha</th>
                <th>Primeira Dose</th>
                <th>Segunda Dose</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {vacinacao?.map(vacinacao => (
                <tr key={vacinacao.idVacinacao}>
                  <th scope="row">{vacinacao.idVacinacao}</th>
                  <td>{vacinacao.nomeUsuario}</td>
                  <td>{vacinacao.nomeVacina}</td>
                  <td>{vacinacao.senha}</td>
                  <td>{vacinacao.primeiraDose}</td>
                  <td>{vacinacao.segundaDose}</td>
                  <td>{vacinacao.localVacinacao}</td>
                </tr>
              ))}
                <tr>
                  <th scope="row">1</th>
                  <td>João</td>
                  <td>Astrazeneca</td>
                  <td>1254668ABC</td>
                  <td>Não</td>
                  <td>Não</td>
                  <td>Ponto 400</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                  <td>Maria</td>
                  <td>Astrazeneca</td>
                  <td>216515KJDJK</td>
                  <td>Sim</td>
                  <td>Sim</td>
                  <td>Ponto 220</td>
                </tr>
            </tbody>
          </Table>
        </Container>
    </>
    );
}

export default List;