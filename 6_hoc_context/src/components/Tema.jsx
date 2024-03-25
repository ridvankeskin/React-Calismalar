import React from "react";

const Tema = () => {
  return (
    <div className="modal-body text-dark">
      <h2 className="text">Zevkinize uygun temayı seçiniz!</h2>

      <select className="form-select my-4">
        <option>Koyu</option>
        <option>Açık</option>
      </select>
    </div>
  );
};

export default Tema;
