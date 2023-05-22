"use client";

import { useState } from 'react';

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
              {/* Resto de los encabezados */}
            </tr>
          </thead>
          <tbody>
            {form.map((familiar, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><select name="sexo" value={familiar.sexo} onChange={(e) => handleChangeCampo(index, 'sexo', e.target.value)}>
                  <option value="">Selecciona...</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                  <option value="prefiere no responder">Prefiere no responder</option>
                </select></td>
                <td><input type="number" value={familiar.edad} onChange={(e) => handleChangeCampo(index, 'edad', e.target.value)} /></td>
                {/* Resto de los campos */}
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
