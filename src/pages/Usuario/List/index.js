import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import api from '../../../services/api';
import { Table, Container } from 'reactstrap';
import Header from '../../../components/Header';
import {MdEdit} from 'react-icons/md';
import {IoMdTrash} from 'react-icons/io';

function List() {
    const [usuarios, setUsuarios] = useState();
    useEffect(() => {
      api.get('/usuarios')
        .then(response => setUsuarios(response.data));
    }, [])

    return (
      <>
      <Header/>
      <h1 className="text-center">Usuários Cadastrados</h1>
      <Container fluid>
        <Table striped>
          <thead class="lista-vacina">
            <tr>
              <th>#</th>
              <th>Nome do usuário</th>
              <th>Idade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          {usuarios?.map(usuario => (
                <tr key={usuario.idUsuario}>
                  <th scope="row">{usuario.idUsuario}</th>
                  <td>{usuario.nome}</td>
                  <td>{usuario.idade}</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
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