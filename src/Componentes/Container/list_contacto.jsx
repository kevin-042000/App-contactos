import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../Componente JS/Class.contacto'
import ComponenteContacto from '../Componente JSX/componente_contacto'
import NuevoContacto from '../Formularios/nuevoContacto'


const ListContacto = () => {

    const contacto1 = new Contacto('Kevin', 'Aranda', 'kekekee@gmil', false);
    const contacto2 = new Contacto('Ricardo', 'Aranda', 'rriririee@gmil', true);


    const [Contactos, setContactos] = useState([contacto1,contacto2])


    function eliminarContacto(contacto){
      console.log('Eliminaste este contacto:', contacto);
      const index = Contactos.indexOf(contacto);
      const tempContacto = [...Contactos];
      tempContacto.splice(index,1);
      setContactos(tempContacto);

    }

    function agregarContacto(contacto){
      console.log('Agregaste este contacto:', contacto);
      const index = Contactos.indexOf(contacto);
      const tempContacto = [...Contactos];
      tempContacto.push(contacto);
      setContactos(tempContacto);

    }


    return (
        <div>
          <div className='col-12'>
            <div className='card-header p-3'>
              <h5>
                Tus Contactos
              </h5>
            </div>

            <div className='card-body bo-card' data-mdb-perfect-scrollbar='true'>
               <table>
                  <thead>
                  <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Apellido</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Acciones</th>
                </tr>
                  </thead>
                  <tbody>
                    {Contactos.map((contacto, index) => (
                        <ComponenteContacto 
                        key={index} 
                        prop_contacto = {contacto}
                        prop_eliminar = {eliminarContacto}
                            
                        />
                        ) )}
                  </tbody>
                
               </table>
            </div>
            <div className='card-footer'>
            <i class="bi bi-person-plus accion "></i>
            </div>

            <NuevoContacto 
            prop_agregar={agregarContacto}

            />

          </div>
       

            
        </div>
    );
};





export default ListContacto;
