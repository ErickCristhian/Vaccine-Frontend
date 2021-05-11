import React, { useEffect, useState } from 'react';
import { Table, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import api from '../../../services/api';
import Header from '../../../components/Header';
import {MdEdit} from 'react-icons/md';
import {IoMdTrash} from 'react-icons/io';
import './style.css';

function List() {

  const [vacinas, setVacinas] = useState([]);


  useEffect(() => {
    api.get('/vacinas').then(response => {
      setVacinas(response.data);
    })
  }, [vacinas]);
    return (
      <>
        <Header/>
        <h1 className="text-center">Vacinas Cadastradas</h1>
        <Container fluid>
          <Table striped responsive hover size="xs">
            <thead class="lista-vacina">
              <tr>
                <th></th>
                <th>Nome da Vacina</th>
                <th>Total de Doses</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {vacinas?.map(vacina => (
                <tr key={vacina.idVacina}>
                  <th scope="row">{vacina.idVacina}</th>
                  <td>{vacina.nomeVacina}</td>
                  <td>{vacina.totalDoses}</td>
                  <td><Link to={`/vacinas/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
              ))}
                <tr>
                  <th scope="row">1</th>
                  <td>Coronavac</td>
                  <td>150</td>
                  <td><Link to={`/vacinas/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Astrazenca</td>
                  <td>200</td>
                  <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
            </tbody>
          </Table>
        </Container>
    </>
    );
}

export default List;