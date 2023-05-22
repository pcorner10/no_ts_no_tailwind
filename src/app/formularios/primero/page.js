"use client";
import styles from '../formularios.module.css'

import { useState } from 'react';

const formFields = [{ sexo: '', edad: '', parentesco: '', nivelEscolar: '', trabaja: '', horasDia: '', diasSemana: '', dedicacion: '', fumador: '', tiempoCiudad: '' }];

export default function Encuesta() {
  const [numFamiliares, setNumFamiliares] = useState(1);
  const [isEditable, setIsEditable] = useState(true);
  const [form, setForm] = useState(formFields);

  const handleChangeFamiliares = (e) => {
    setNumFamiliares(e.target.value);
  };

  const handleSubmitFamiliares = (e) => {
    e.preventDefault();
    setIsEditable(false);
    setForm(Array.from({ length: numFamiliares }, () => (formFields)));
  };

  const handleEdit = () => {
    if (window.confirm('Cambiar el número de familiares borrará tus progresos. ¿Estás seguro de que quieres continuar?')) {
      setIsEditable(true);
      setForm([]);
    }
  };


  const handleChange = (e, index) => {
    const updatedForm = [...form];
    updatedForm[index][e.target.name] = e.target.value;
    setForm(updatedForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/encuesta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Encuesta</h1>
      <form onSubmit={handleSubmitFamiliares}>
        <label>
          Número de familiares:
          <input type="number" value={numFamiliares} onChange={handleChangeFamiliares} min="1" disabled={!isEditable} />
        </label>
        <button type="submit" disabled={!isEditable}>Enviar</button>
        {!isEditable && <button type="button" onClick={handleEdit}>Editar</button>}

        {form.map((familiar, index) => (
          <div key={index} className='familiar'>
            <h2>Familiar {index + 1}</h2>
            <label>
              Sexo:
              <select name="sexo" value={familiar.sexo} onChange={(e) => handleChange(e, index)}>
                <option value="">Selecciona...</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
                <option value="prefiere no responder">Prefiere no responder</option>
              </select>
            </label>
            <label>
              Edad:
              <input type="number" name="edad" value={familiar.edad} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Parentesco:
              <input type="text" name="parentesco" value={familiar.parentesco} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Nivel escolar:
              <input type="text" name="nivelEscolar" value={familiar.nivelEscolar} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Trabaja:
              <select name="trabaja" value={familiar.trabaja} onChange={(e) => handleChange(e, index)}>
                <option value="">Selecciona...</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
                <option value="prefiere no responder">Prefiere no responder</option>
              </select>
            </label>
            <label>
              Cuantas horas al día:
              <input type="number" name="horasDia" value={familiar.horasDia} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Cuantos días a la semana:
              <input type="number" name="diasSemana" value={familiar.diasSemana} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              A qué se dedica:
              <input type="text" name="dedicacion" value={familiar.dedicacion} onChange={(e) => handleChange(e, index)} />
            </label>
            <label>
              Es fumador:
              <select name="fumador" value={familiar.fumador} onChange={(e) => handleChange(e, index)}>
                <option value="">Selecciona...</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
                <option value="no aplica">No aplica</option>
              </select>
            </label>
            <label>
              Hace cuanto vive en la ciudad:
              <input type="number" name="tiempoCiudad" value={familiar.tiempoCiudad} onChange={(e) => handleChange(e, index)} />
            </label>
            
          </div>

          // agrega un separador entre cada familiar
          // <hr key={index} />


        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
