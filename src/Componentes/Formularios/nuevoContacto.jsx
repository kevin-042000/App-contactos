import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../Componente JS/Class.contacto';


const NuevoContacto = ({prop_agregar}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function agregarContacto(e){
        e.preventDefault();
        const nuevoContacto = new Contacto (
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
        )

        prop_agregar(nuevoContacto)
    }


    return (
        <form onSubmit={agregarContacto}>
          <div>
             <input ref={nombreRef} id='inputNombre' type='text' required autoFocus placeholder='Nombre'/>
             <input ref={apellidoRef} id='inputApellido' type='text' required placeholder='Apellido'/>
             <input ref={emailRef} id='inputEmail' type='email' required placeholder='Email'/>
          </div>
          <button type='submit' className='btn btn-success' >Agregar</button>
        </form>
    );
};


NuevoContacto.propTypes = {
    prop_agregar: PropTypes.func.isRequired,

};


export default NuevoContacto;
