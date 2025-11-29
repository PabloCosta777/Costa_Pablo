import React from "react";

function Card({ beneficio }) {
  return (
    <div className="card m-3 shadow-sm bg-light" style={{ width: "18rem" }}>
      <img
        src={beneficio.url_img_beneficio}
        className="card-img-top"
        alt={beneficio.name_beneficio}
      />
      <div className="card-body">
        <h5 className="card-title">{beneficio.name_beneficio}</h5>
        <p className="card-text">
          Categoría: <strong>{beneficio.categoria_beneficio}</strong>
        </p>
        <p className="card-text">
          <small className="text-muted">Creado: {beneficio.date_created}</small>
        </p>
      </div>
    </div>
  );
}

export default Card;

