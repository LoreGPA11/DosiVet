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
          <input
            type="number"
            name="telefonoDueno"
            value={formData.telefonoDueno}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="button" onClick={enableClinicalHistory}>
          Ingresar datos del historial clínico
        </button>

        {/* Campos del historial clínico */}
        {isClinicalHistoryEnabled && (
          <>
            <h2>Historial clínico del paciente</h2>
            <label>
              Tratamiento previo:
              <select name="tratamientoPrevio" value={formData.tratamientoPrevio} onChange={handleInputChange} required>
                <option value="">Seleccione</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
                <option value="Desconocido">Desconocido</option>
              </select>
            </label>
            <br />
            <label>
              Detalles del tratamiento previo:
              <input
                type="text"
                name="detallesTratamientoPrevio"
                value={formData.detallesTratamientoPrevio}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Peso:
              <input type="number" name="peso" value={formData.peso} onChange={handleInputChange} required />
              <select name="unidadPeso" value={formData.unidadPeso} onChange={handleInputChange}>
                <option value="Kg">Kg</option>
                <option value="g">g</option>
              </select>
            </label>
            <br />
            <label>
              Edad:
              <input type="number" name="edad" value={formData.edad} onChange={handleInputChange} required />
              <select name="unidadEdad" value={formData.unidadEdad} onChange={handleInputChange}>
                <option value="Años">Años</option>
                <option value="Meses">Meses</option>
              </select>
            </label>
            <br />
            <label>
              Sexo:
              <select name="sexo" value={formData.sexo} onChange={handleInputChange} required>
                <option value="">Seleccione</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </label>
            <br />
            <label>
              Enfermedades/condiciones:
              <input
                type="text"
                name="enfermedadesCondiciones"
                value={formData.enfermedadesCondiciones}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Raza:
              <input type="text" name="raza" value={formData.raza} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Tipo de consulta:
              <select name="tipoConsulta" value={formData.tipoConsulta} onChange={handleInputChange} required>
                <option value="">Seleccione</option>
                <option value="Internado">Internado</option>
                <option value="Urgencias">Urgencias</option>
                <option value="Consulta cotidiana">Consulta cotidiana</option>
                <option value="De seguimiento">De seguimiento</option>
              </select>
            </label>
            <br />
            <label>
              Motivo de consulta:
              <input
                type="text"
                name="motivoConsulta"
                value={formData.motivoConsulta}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Signos y síntomas:
              <input
                type="text"
                name="signosSintomas"
                value={formData.signosSintomas}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Estudios previos:
              <input
                type="text"
                name="estudiosPrevios"
                value={formData.estudiosPrevios}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Diagnóstico o posible diagnóstico:
              <input
                type="text"
                name="diagnostico"
                value={formData.diagnostico}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Protocolo seguido/a seguir:
              <input
                type="text"
                name="protocolo"
                value={formData.protocolo}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Notas:
              <input type="text" name="notas" value={formData.notas} onChange={handleInputChange} required />
            </label>
            <br />
          </>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DosiVetForm;
