from flask import Flask, jsonify
from flask_cors import CORS
import json
from pathlib import Path

app = Flask(__name__)
# habilita CORS para todas las rutas
CORS(app)  

# Ruta del JSON
DATA_PATH = Path(__file__).parent / "data.json"

# Cargar datos una vez al iniciar
try:
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        BENEFICIOS = json.load(f)
except FileNotFoundError:
    BENEFICIOS = []
except json.JSONDecodeError:
    BENEFICIOS = []

# Ruta raiz para que no de un 404 si no se entra en /beneficios 
@app.get("/")
def home():
    return "API de Sportclub: usa /beneficios para ver los datos"

# Ruta que devuelve la info de los beneficios para rellenar las card 
@app.get("/beneficios")
def get_beneficios():
    return jsonify(BENEFICIOS), 200

if __name__ == "__main__":
    app.run(debug=True)
