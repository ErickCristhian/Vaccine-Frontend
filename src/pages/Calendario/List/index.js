import React, { useEffect, useState } from 'react';
import { Table, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import api from '../../../services/api';
import Header from '../../../components/Header';
import {MdEdit} from 'react-icons/md';
import {IoMdTrash} from 'react-icons/io';
import './style.css';

function List() {

  const [calendario, setCalendario] = useState([]);


  useEffect(() => {
    api.get('/calendario-vacinacao').then(response => {
      setCalendario(response.data);
    })
  }, [calendario]);
    return (
      <>
        <Header/>
        <h1 className="text-center">Calendarios Cadastrados</h1>
        <Container fluid>
          <Table striped responsive hover size="xs">
            <thead class="lista-vacina">
              <tr>
                <th></th>
                <th>Data Inicial</th>
                <th>Data Final</th>
                <th>Idade Inicial</th>
                <th>Idade Final</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {calendario?.map(cal => (
                <tr key={cal.idCalendario}>
                  <th scope="row">{cal.idCalendarioVacinacao}</th>
                  <td>{cal.dataInicio}</td>
                  <td>{cal.dataFinal}</td>
                  <td>{cal.faixaEtariaInicial}</td>
                  <td>{cal.faixaEtariaFinal}</td>
                  <td><Link to={`/calendario/editar/${cal.idCalendarioVacinacao}`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
    </>
    );
}

export default List;