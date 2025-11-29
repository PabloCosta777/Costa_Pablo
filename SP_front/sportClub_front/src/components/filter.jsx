import React from "react";

function Filter({ categorias, selected, onSelect }) {
  return (
    <div className="mb-4 text-center">
      <select
        className="form-select w-auto d-inline-block"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;