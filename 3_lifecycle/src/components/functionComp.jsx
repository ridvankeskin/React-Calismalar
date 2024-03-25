import { useState, useEffect } from "react";

const FunctionComp = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");

  //* 1) bileşenin ekrana basılma olayını izle
  useEffect(() => {
    console.log("bileşen ekrana basıldı");
  }, []);

  //* 2) bileşenin ekrandan gitme olayını izle
  useEffect(() => {
    // bu fonksiyon bileşenin ekrandan ayrıldığıu anda çalışır. (unMount)
    return () => {
      console.log("Ekrandan gitti");
    };
  }, []);

  //* 3) hem ekrana gelme hemde ekrandan gitme olayını izle
  useEffect(() => {
    console.log("ekrana geldi");

    return () => console.log("ekrandan gitti");
  }, []);

  //* 4) bileşenin render olma olayını izle
  useEffect(() => {
    console.log("bileşen render oldu. state veya prop değişti");
  });

  //* 5) belirli bir state veya prop'un değişimini izleme
  useEffect(() => {
    console.log("sayfa değişti", page);
  }, [page, name]);

  return (
    <div className="d-flex justify-content-center my-5 gap-5">
      <button
        disabled={page === 0}
        onClick={() => setPage(page - 1)} //
        className="btn btn-danger"
      >
        {"< Geri"}
      </button>

      <p className="lead">Sayfa: {page}</p>

      <button
        onClick={() => setPage(page + 1)} //
        className="btn btn-primary"
      >
        {"İleri >"}
      </button>
      <input onChange={(e) => setName(e.target.value)} type="text" />
    </div>
  );
};

export default FunctionComp;
