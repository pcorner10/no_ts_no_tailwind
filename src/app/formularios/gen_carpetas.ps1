$carpetas = "primero", "segundo", "tercero", "cuarto", "quinto", "sexto", "septimo", "octavo", "noveno", "decimo", "onceavo", "doceavo", "treceavo", "catorceavo"

foreach ($carpeta in $carpetas) {
    if (!(Test-Path -Path $carpeta)) {
        New-Item -ItemType Directory -Path $carpeta
    }

    New-Item -ItemType File -Path "$carpeta/page.js"
}

