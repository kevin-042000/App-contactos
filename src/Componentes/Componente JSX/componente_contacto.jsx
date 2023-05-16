import React from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../Componente JS/Class.contacto'


const ComponenteContacto = ({prop_contacto, prop_eliminar, prop_nuevo, prop_editar}) => {

    function conectado_desconectado(){
        if(prop_contacto.conectado){
            return (<span className="badge bg-success">En Linea</span>)
        }else{
            return (<span className="badge bg-danger">Desconectado</span>)
        }
    }



    return (
        <tr className='fw-normal'>
          <th>
            <span className='ms-2'>{prop_contacto.nombre}</span>
          </th>
          <td className='align-middle'>
            <span className='ms-2'>{prop_contacto.apellido}</span>
          </td>
          <td className='align-middle'>
            <span className='ms-2'>{prop_contacto.email}</span>
          </td>
          <td className='align-middle'>
             {conectado_desconectado()}
          </td>
          <td  className='align-middle'>
            <div><i className="bi bi-pen accion"></i></div>
            <div><i className="bi bi-trash-fill accion" onClick={() => prop_eliminar(prop_contacto)}></i></div>
          </td>
          

        </tr>
      
    );
};


ComponenteContacto.propTypes = {
    prop_contacto: PropTypes.instanceOf(Contacto).isRequired,
    prop_eliminar: PropTypes.func.isRequired,

};


export default ComponenteContacto;
