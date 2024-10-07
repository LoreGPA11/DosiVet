import React, { useState, useEffect } from 'react';

const DosiVetForm = () => {
  // Estado para fecha y hora
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Usuario (puedes modificarlo según tu lógica)
  const [user, setUser] = useState('UsuarioActual');

  // Estado para habilitar campos del historial clínico
  const [isClinicalHistoryEnabled, setIsClinicalHistoryEnabled] = useState(false);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    especie: '',
    nombreDueno: '',
    direccion: '',
    telefonoDueno: '',
    tratamientoPrevio: '',
    detallesTratamientoPrevio: '',
    peso: '',
    unidadPeso: 'Kg',
    edad: '',
    unidadEdad: 'Años',
    sexo: '',
    enfermedadesCondiciones: '',
    raza: '',
    tipoConsulta: '',
    motivoConsulta: '',
    signosSintomas: '',
    estudiosPrevios: '',
    diagnostico: '',
    protocolo: '',
    notas: '',
  });

  // Actualizar fecha y hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Habilitar campos del historial clínico
  const enableClinicalHistory = () => {
    setIsClinicalHistoryEnabled(true);
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de campos obligatorios
    for (const key in formData) {
      if (!formData[key]) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }
    }
    // Procesar datos del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div>
      {/* Encabezado */}
      <header style={{ backgroundColor: 'olive', color: 'white', padding: '10px' }}>
        <h1>DosiVet</h1>
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <p>Usuario: {user}</p>
          <p>
            Fecha: {currentDateTime.toLocaleDateString()} Hora: {currentDateTime.toLocaleTimeString()}
          </p>
        </div>
      </header>

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <h2>Información del paciente</h2>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Especie:
          <input type="text" name="especie" value={formData.especie} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Nombre del dueño:
          <input type="text" name="nombreDueno" value={formData.nombreDueno} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Dirección:
          <input type="text" name="direccion" value={formData.direccion} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Teléfono del dueño:
          <input type="number" name="telefonoDueno" value={formData.telefonoDueno} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="button" onClick={enableClinicalHistory}>
          Ingresar datos del historial clínico
        </button>

        {/* Campos del historial clínico */}
        {isClinicalHistoryEnabled && (
          <>
            <h2>Historial clínico del paciente</h2>
            {/* Continúa con los demás campos de formulario */}
          </>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DosiVetForm;
