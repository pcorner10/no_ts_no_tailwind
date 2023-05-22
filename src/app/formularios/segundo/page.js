"use client";

import { useState } from 'react';
import { SexoSelect, TrabajaSelect, FumadorSelect, NivelEscolarSelect, ParentescoSelect } from '../formularios';


export default function Encuesta2() {
  const [numFamiliares, setNumFamiliares] = useState(1);
  const [isEditable, setIsEditable] = useState(true);
  const [form, setForm] = useState([]);

  const handleChangeFamiliares = (e) => {
    setNumFamiliares(e.target.value);
  };

  const handleSubmitFamiliares = (e) => {
    e.preventDefault();
    setIsEditable(false);
    setForm(Array.from({ length: numFamiliares }, () => ({ /* campos del formulario */ })));
  };

  const handleEdit = () => {
    if (window.confirm('Cambiar el número de familiares borrará tus progresos. ¿Estás seguro de que quieres continuar?')) {
      setIsEditable(true);
      setForm([]);
    }
  };

  const handleChangeCampo = (index, campo, valor) => {
    const newForm = [...form];
    newForm[index][campo] = valor;
    setForm(newForm);
  };

  // Resto del código...

  console.log(form);

  const handleChange = (e, index) => {
    const updatedForm = [...form];
    updatedForm[index][e.target.name] = e.target.value;
    setForm(updatedForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
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
      </form>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Integrante</th>
              <th>Sexo</th>
              <th>Edad</th>
              <th>Parentesco</th>
              <th>Nivel escolar</th>
              <th>Trabaja</th>
              <th>Cuantas horas al día</th>
              <th>Cuantos días a la semana</th>
              <th>A qué se dedica</th>
              <th>Es fumador</th>
              <th>Hace cuanto vive en la ciudad</th>
            </tr>
          </thead>
          <tbody>
            {form.map((familiar, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><SexoSelect value={familiar.sexo} onChange={(e) => handleChange(e, index)} /></td>
                <td><input type="number" value={familiar.edad} onChange={(e) => handleChangeCampo(index, 'edad', e.target.value)} /></td>
                <td><ParentescoSelect value={familiar.parentesco} onChange={(e) => handleChangeCampo(index, 'parentesco', e.target.value)} /></td>
                <td><NivelEscolarSelect value={familiar.nivelEscolar} onChange={(e) => handleChangeCampo(index, 'nivelEscolar', e.target.value)} /></td>
                <td><TrabajaSelect value={familiar.trabaja} onChange={(e) => handleChangeCampo(index, 'trabaja', e.target.value)} /></td>
                <td><input type="number" value={familiar.horasDia} onChange={(e) => handleChangeCampo(index, 'horasDia', e.target.value)} /></td>
                <td><input type="number" value={familiar.diasSemana} onChange={(e) => handleChangeCampo(index, 'diasSemana', e.target.value)} /></td>
                <td><input type="text" value={familiar.dedicacion} onChange={(e) => handleChangeCampo(index, 'dedicacion', e.target.value)} /></td>
                <td><FumadorSelect value={familiar.fumador} onChange={(e) => handleChangeCampo(index, 'fumador', e.target.value)} /></td>
                <td><input type="text" value={familiar.tiempoCiudad} onChange={(e) => handleChangeCampo(index, 'tiempoCiudad', e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
