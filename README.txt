# Proyecto Challenge tecnico SportClub

Este proyecto consiste en una aplicacion full stack que muestra beneficios de una empresa. El backend esta hecho en Python con Flask y el frontend en React con Vite y Bootstrap.

## Estructura del proyecto
- **SP_back**: contiene el backend en Flask. Incluye `app.py` y `data.json`.
- **SP_front/sportCenter_front**: contiene el frontend en React. Incluye componentes, estilos y configuracion de Vite.
- **requirements.txt**: lista de dependencias necesarias para el backend.

## Versiones utilizadas
- Python 3.11
- Flask 3.0
- Flask-Cors 4.0
- Node.js 18+
- React 18
- Bootstrap 5

## Como ejecutar el proyecto

1. Clonar el repositorio:

2. Backend:
- Entrar a la carpeta SP_back
- Crear y activar un entorno virtual:
  ```
  python -m venv .venv
  .\.venv\Scripts\Activate.ps1   (en PowerShell)
  ```
- Instalar dependencias:
  ```
  pip install -r requirements.txt
  ```
- Ejecutar el servidor:
  ```
  python app.py
  ```
- El backend estara disponible en `http://127.0.0.1:5000/beneficios`.

3. Frontend:
- Entrar a la carpeta `SP_front/sportCenter_front`.
- Instalar dependencias:
  ```
  npm install
  ```
- Ejecutar el servidor:
  ```
  npm run dev
  ```
- El frontend estara disponible en `http://localhost:5173`.

## Notas
- El backend sirve datos desde `data.json`.
- El frontend consume esos datos y los muestra en tarjetas.
- El proyecto esta pensado para pruebas locales, no requiere configuracion avanzada.



