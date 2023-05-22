#!/bin/bash

# Array con los nombres de las carpetas
carpetas=("primero" "segundo" "tercero" "cuarto" "quinto" "sexto" "septimo" "octavo" "noveno" "decimo" "onceavo" "doceavo" "treceavo" "catorceavo")

# Recorre cada nombre de carpeta en el array
for carpeta in "${carpetas[@]}"
do
  # Crea la carpeta si no existe
  mkdir -p $carpeta

  # Crea el archivo page.js dentro de la carpeta
  touch $carpeta/page.js
done
