import { useEffect, useState } from "react";
import Card   from "./components/card";
import Header from "./components/header";
import Footer from "./components/footer";
import Filter from "./components/filter";


function App() {
  {/* manejo de estados de la app */}
  const [beneficios, setBeneficios] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const categorias = [...new Set(beneficios.map((b) => b.categoria_beneficio))];
  const beneficiosFiltrados = categoriaSeleccionada
    ? beneficios.filter((b) => b.categoria_beneficio === categoriaSeleccionada)
    : beneficios;


  useEffect(() => {
    fetch("http://127.0.0.1:5000/beneficios")
      .then((res) => res.json())
      .then((data) => setBeneficios(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 w-1980px bg-dark">
          <Header />
              <div className="container-fluid my-4">
                <h1 className="mb-4 text-center">Beneficios</h1>
                {/* filtro por categorias, funcional pero falta Css para que no rompa el diseño 
                    <Filter
                      categorias={categorias}
                      selected={categoriaSeleccionada}
                      onSelect={setCategoriaSeleccionada}
                    />*/}

                      <div className="row w-100">
                          {beneficiosFiltrados.map((b) => (
                            <div className="col" key={b.id}>
                              <Card beneficio={b} />
                            </div>))}
                      </div>
      </div>
          <Footer />
    </div>
  );
}

export default App;

