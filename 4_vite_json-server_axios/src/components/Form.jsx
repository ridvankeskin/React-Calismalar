import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { v4 as generateId } from "uuid";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    // sayfanın yenilenmesini engelle
    e.preventDefault();

    // formda ki verilere erişme yöntemi
    const title = e.target[0].value;
    const status = e.target[1].value;

    // apiye kaydedilecek olan nesneyi hazırla
    const newTodo = {
      id: generateId(),
      title: title,
      status: status,
      date: new Date().toLocaleDateString(),
    };

    //! axios ile yapımı
    axios
      .post("http://localhost:3000/todos", newTodo)
      // api ye kaydedilirse state de ekle (arayüzün güncellenmesi için)
      .then(() => {
        toast.success("Todo Eklendi");
        setTodos((prev) => [...prev, newTodo]);
      })
      // istek başarısız olursa
      .catch((err) => toast.error("üzgünüz sorun oluştu"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-4"
    >
      <input className="form-control shadow" type="text" />

      <select className="form-select w-50 shadow">
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>

      <button className="btn btn-primary shadow">Gönder</button>
    </form>
  );
};

export default Form;
