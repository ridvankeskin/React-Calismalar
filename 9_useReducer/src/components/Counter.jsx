import { useState } from "react";
import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const Counter = () => {
  // başlangıç satate i
  const initialState = {
    count: 0,
  };

  /*
 * useReducer: 
 * Bir bileşen içerisindeki state yönetimi useState ile birlikte zor bir hale geldiğinde useReducer i tercih ederiz.
 
 * Bizden istediği argümanlar: 
 

 * Bize döndürdüğü değerler:
 * reducer >> state in nasıl değişeceğine karar veren fonksiyon
 * initialState >> tutacağımız state in ilk değeri
 * count >> state in güncel hali
 *  dispatch >> state i güncellemek için kullandığımız method
*/

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="d-flex gap-4 align-items-center">
      <button
        onClick={() => dispatch("SIFIRLA")} //
        className="btn btn-secondary"
      >
        Sıfırla
      </button>

      <button
        onClick={() => dispatch("AZALT")} //
        className="btn btn-primary"
      >
        Azalt
      </button>

      <span className="lead fs-4">{state.count}</span>

      <button
        onClick={() => dispatch("ARTTIR")} //
        className="btn btn-success"
      >
        Arttır
      </button>
    </div>
  );
};

export default Counter;
