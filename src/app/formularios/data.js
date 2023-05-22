export const primerFormulario = [
  {
    label: 'Integrande',
    name: 'integrante',
    type: 'int',
    required: true,
  },
  {
    label: 'Sexo',
    name: 'sexo',
    type: 'select',
    options: [
      { value: 'masculino', label: 'Masculino' },
      { value: 'femenino', label: 'Femenino' },
    ],
    required: true,
  },
  {
    label: 'Edad',
    name: 'edad',
    type: 'int',
    required: true,
  },
  {
    label: 'Parentesco',
    name: 'parentesco',
    type: 'select',
    options: [
      { value: 'encuestado', label: 'Encuestado' },
      { value: 'esposo', label: 'Esposo' },
      { value: 'esposa', label: 'Esposa' },
      { value: 'padre', label: 'Padre' },
      { value: 'madre', label: 'Madre' },
      { value: 'hijo', label: 'Hijo' },
      { value: 'hermano', label: 'Hermano' },
      { value: 'abuelo', label: 'Abuelo' },
      { value: 'tio', label: 'Tío' },
      { value: 'primo', label: 'Primo' },

      { value: 'noresponde', label: 'Prefiere no responder' },
    ],
    required: true,
  },
  {
    label: 'Nivel escolar',
    name: 'nivelEscolar',
    type: 'select',
    options: [
      { value: 'noresponde', label: 'Prefiere no responder' },
      { value: 'ninguno', label: 'Ninguno' },
      { value: 'primaria', label: 'Primaria' },
      { value: 'secundaria', label: 'Secundaria' },
      { value: 'preparatoria', label: 'Preparatoria' },
      { value: 'universidad', label: 'Universidad' },
      { value: 'posgrado', label: 'Posgrado' },
    ],
    required: true,
  },
  {
    label: 'Trabaja',
    name: 'trabaja',
    type: 'select',
    options: [
      { value: 'si', label: 'Sí' },
      { value: 'no', label: 'No' },
      { value: 'prefiere no responder', label: 'Prefiere no responder' },
    ],
    required: true,
  },
  {
    label: 'Cuantas horas al día',
    name: 'horasDia',
    type: 'int',
    required: true,
  },
  {
    label: 'Cuantos días a la semana',
    name: 'diasSemana',
    type: 'int',
    required: true,
  },
  {
    label: 'A qué se dedica',
    name: 'dedicacion',
    type: 'text',
    required: true,
  },
  {
    label: 'Es fumador',
    name: 'fumador',
    type: 'select',
    options: [
      { value: 'si', label: 'Sí' },
      { value: 'no', label: 'No' },
      { value: 'no aplica', label: 'No aplica' },
    ],
    required: true,
  },
  {
    label: 'Hace cuanto vive en la ciudad',
    name: 'tiempoCiudad',
    type: 'text',
    required: true,
  },
];

// ###########################################################
// caracteristicas de la vivienda
// ###########################################################
export const segundoFormulario = [
  {
    label: 'Tiene electricidad',
    name: 'electricidad',
    type: 'select',
    options: [
      { value: 'si', label: 'Sí' },
      { value: 'no', label: 'No' },
    ],
    required: true,
  },
  {
    label: 'Fuente agua potable',
    name: 'agua',
    type: 'select',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'pozo', label: 'Pozo' },
      { value: 'otro', label: 'Otro' },
    ],
    required: true,
  },
  {
    label: 'Tiene gas',
    name: 'gas',
    type: 'select',
    options: [
      { value: 'si', label: 'Sí' },
      { value: 'no', label: 'No' },
    ],
    required: true,
  },
  {
    label: 'Ubicación baño', 
    name: 'baño',
    type: 'select',
    options: [
      { value: 'dentro', label: 'Dentro' },
      { value: 'fuera', label: 'Fuera' },
    ],
    required: true,
  },
  {
    label: 'Tipo drenaje',
    name: 'drenaje',
    type: 'select',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'fosa', label: 'Fosa' },
      { value: 'otro', label: 'Otro' },
    ],
    required: true,
  },
  {
    label: 'Material de techo',
    name: 'techo',
    type: 'select',
    options: [
      { value: 'concreto', label: 'Concreto' },
      { value: 'lamina', label: 'Lámina' },
      { value: 'otro', label: 'Otro' },
    ],
    required: true,
  },
  {
    label: 'Material de paredes',
    name: 'paredes',
    type: 'select',
    options: [
      { value: 'concreto', label: 'Concreto' },
      { value: 'lamina', label: 'Lámina' },
      { value: 'otro', label: 'Otro' },
    ],
    required: true,
  },
  {
    label: 'Material de piso',
    name: 'piso',
    type: 'select',
    options: [
      { value: 'concreto', label: 'Concreto' },
      { value: 'tierra', label: 'Tierra' },
      { value: 'otro', label: 'Otro' },
    ],
    required: true,
  },
  {
    label: 'Número de cuartos',
    name: 'cuartos',
    type: 'int',
    required: true,
  },
  {
    label: 'Olores desagradables',
    name: 'olores',
    type: 'select',
    options: [
      { value: 'si', label: 'Sí' },
      { value: 'no', label: 'No' },
    ],
    required: true,
  }
];

// ###########################################################
// que agua consume? para beber y cocinar
// ###########################################################
export const tercerFormulario = [
  {
    label: 'garrafón',
    name: 'garrafon',
    type: 'int',
    required: true,
  },
  {
    label: 'llave',
    name: 'llave',
    type: 'int',
    required: true,
  },
  {
    label: 'llave comunitaria',
    name: 'llaveComunitaria',
    type: 'int',
    required: true,
  },
  {
    label: 'tiempo de consumo',
    name: 'tiempoConsumo',
    type: 'select',
    options: [
      { value: 'menos de 1 año', label: 'Menos de 1 año' },
      { value: '1 a 5 años', label: '1 a 5 años' },
      { value: '5 a 10 años', label: '5 a 10 años' },
      { value: '10 a 15 años', label: '10 a 15 años' },
      { value: 'más de 15 años', label: 'Más de 15 años' },
    ],
    required: true,
  }
];

// ###########################################################
// Donde se dirige para atenderse de salud
// ###########################################################
export const cuartoFormulario = [
  {
    label: 'IMSS',
    name: 'imss',
    type: 'int',
    required: true,
  },
  {
    label: 'ISSSTE',
    name: 'issste',
    type: 'int',
    required: true,
  },
  {
    label: 'Particular',
    name: 'particular',
    type: 'int',
    required: true,
  },
  {
    label: 'Otro',
    name: 'otro',
    type: 'int',
    required: true,
  },
  {
    label: 'No se atiende en esta localidad',
    name: 'noAtiende',
    type: 'int',
    required: true,
  }
];


// ###########################################################
// Problemas de salud entre los integrantes de la familia en los últimos 12 meses
// ###########################################################
export const quintoFormulario = [
  {
    label: 'Integrante',
    name: 'integrante',
    type: 'int',
    required: true,
  },
  {
    label: 'Problema (referido)',
    name: 'referido',
    type: 'text',
    required: true,
  },
  {
    label: 'Problema (recabado)',
    name: 'recabado',
    type: 'text',
    required: true,
  },
  {
    label: 'CIE-10',
    name: 'cie10',
    type: 'text',
    required: true,
  }
];