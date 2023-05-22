import React from 'react';

export const formularios = [
  {
    path: '/formularios/primero',
    title: 'Primer',
    description: 'Primer formulario',
  },
  {
    path: '/formularios/segundo',
    title: 'Segundo',
    description: 'Segundo formulario',
  },
  {
    path: '/formularios/tercero',
    title: 'Tercer',
    description: 'Tercer formulario',
  },
  {
    path: '/formularios/cuarto',
    title: 'Cuarto',
    description: 'Cuarto formulario',
  },
  {
    path: '/formularios/quinto',
    title: 'Quinto',
    description: 'Quinto formulario',
  },
  {
    path: '/formularios/sexto',
    title: 'Sexto',
    description: 'Sexto formulario',
  },
  {
    path: '/formularios/septimo',
    title: 'Septimo',
    description: 'Septimo formulario',
  },
  {
    path: '/formularios/octavo',
    title: 'Octavo',
    description: 'Octavo formulario',
  },
  {
    path: '/formularios/noveno',
    title: 'Noveno',
    description: 'Noveno formulario',
  },
  {
    path: '/formularios/decimo',
    title: 'Decimo',
    description: 'Decimo formulario',
  },
  {
    path: '/formularios/onceavo',
    title: 'Onceavo',
    description: 'Onceavo formulario',
  },
  {
    path: '/formularios/doceavo',
    title: 'Doceavo',
    description: 'Doceavo formulario',
  },
  {
    path: '/formularios/treceavo',
    title: 'Treceavo',
    description: 'Treceavo formulario',
  },
  {
    path: '/formularios/catorceavo',
    title: 'Catorceavo',
    description: 'Catorceavo formulario',
  }
];


export const SexoSelect = ({ value, onChange }) => (
  <select name="sexo" value={value} onChange={onChange}>
    <option value="">Selecciona...</option>
    <option value="hombre">Hombre</option>
    <option value="mujer">Mujer</option>
    <option value="prefiere no responder">Prefiere no responder</option>
  </select>
);

export const TrabajaSelect = ({ value, onChange }) => (
  <select name="trabaja" value={value} onChange={onChange}>
    <option value="">Selecciona...</option>
    <option value="si">Sí</option>
    <option value="no">No</option>
    <option value="prefiere no responder">Prefiere no responder</option>
  </select>
);

export const FumadorSelect = ({ value, onChange }) => (
  <select name="fumador" value={value} onChange={onChange}>
    <option value="">Selecciona...</option>
    <option value="si">Sí</option>
    <option value="no">No</option>
    <option value="no aplica">No aplica</option>
  </select>
);

export const NivelEscolarSelect = ({ value, onChange }) => (
  <select name="nivelEscolar" value={value} onChange={onChange}>
    <option value="">Selecciona...</option>
    <option value="noresponde">Prefiere no responder</option>
    <option value="ninguno">Ninguno</option>
    <option value="primaria">Primaria</option>
    <option value="secundaria">Secundaria</option>
    <option value="preparatoria">Preparatoria</option>
    <option value="universidad">Universidad</option>
    <option value="posgrado">Posgrado</option>
  </select>
);

export const ParentescoSelect = ({ value, onChange }) => (
  <select name="parentesco" value={value} onChange={onChange}>
    <option value="">Selecciona...</option>
    <option value="padre">Padre</option>
    <option value="madre">Madre</option>
    <option value="hijo">Hijo</option>
    <option value="hija">Hija</option>
    <option value="abuelo">Abuelo</option>
    <option value="abuela">Abuela</option>
    <option value="tio">Tío</option>
    <option value="tia">Tía</option>
    <option value="primo">Primo</option>
    <option value="prima">Prima</option>
    <option value="sobrino">Sobrino</option>
    <option value="sobrina">Sobrina</option>
    <option value="otro">Otro</option>
  </select>
);