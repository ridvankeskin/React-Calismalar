import { useState } from "react";

const Counter = () => {
  // useState'i tutulan değerin değişimi bileşen içerisindeki arayüzü de etkilesin istiyorsak veriyi depolamak için tercih ederiz.
  // useState'i çağırdığımız zaman dizi içerisinde iki değer döndürü.
  // 1. değer : tuttuğumuz veri.
  // 2. değer : tuttuğumuz veriyi değiştirmeye yarayan fonksiyondur.
  //!state'deki değer değiştiğinde react tekrardan render işlemini yapar. bu sayede arayüz güncel kalmış olur.

  const [count, setCount] = useState(0);

  // sayfa yüklendiği anda react "render" ismini verdiğimiz bir işlem gerçekleştirir.componentr return satırında yazdığımız jsx kodunu html koduna çevirir ve DOM'a gönderir. (yani ekrana basar).

  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      <button
        disabled={count === 0} // -' ye inmemesi için kullanılan kod(disabled)
        onClick={() => setCount(count - 1)}
        className="btn btn-danger"
      >
        Azalt
      </button>

      <p className="lead fs-1">{count}</p>

      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        Arttır
      </button>

      <button className="btn btn-primary" onClick={() => setCount(0)}>
        Sıfırla
      </button>
    </div>
  );
};
export default Counter;
