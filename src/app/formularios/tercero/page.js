import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateForm, lockForm, unlockForm } from './formSlice'

const Formulario = ({ formId }) => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const { data, isLocked } = useSelector(state => state.form[formId])

  const onSubmit = (data) => {
    dispatch(updateForm({ formId, data }))
    dispatch(lockForm(formId))
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                <td><input type="number" value={familiar.edad} onChange={(e) => handleChange(index, 'edad', e.target.value)} /></td>
                <td><ParentescoSelect value={familiar.parentesco} onChange={(e) => handleChange(index, 'parentesco', e.target.value)} /></td>
                <td><NivelEscolarSelect value={familiar.nivelEscolar} onChange={(e) => handleChange(index, 'nivelEscolar', e.target.value)} /></td>
                <td><TrabajaSelect value={familiar.trabaja} onChange={(e) => handleChange(index, 'trabaja', e.target.value)} /></td>
                <td><input type="number" value={familiar.horasDia} onChange={(e) => handleChange(index, 'horasDia', e.target.value)} /></td>
                <td><input type="number" value={familiar.diasSemana} onChange={(e) => handleChange(index, 'diasSemana', e.target.value)} /></td>
                <td><input type="text" value={familiar.dedicacion} onChange={(e) => handleChange(index, 'dedicacion', e.target.value)} /></td>
                <td><FumadorSelect value={familiar.fumador} onChange={(e) => handleChange(index, 'fumador', e.target.value)} /></td>
                <td><input type="text" value={familiar.tiempoCiudad} onChange={(e) => handleChange(index, 'tiempoCiudad', e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;