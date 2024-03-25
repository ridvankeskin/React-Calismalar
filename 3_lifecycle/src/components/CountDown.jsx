import { useEffect, useState } from "react";

const CountDown = () => {
  const [number, setNumber] = useState(10);
  // bileşenin ekrana basılma olayını izlemem gerek
  useEffect(() => {
    //her saniye bir fonksiyon çalıştırmam gerek
    const intervalId = setInterval(() => { // sayacı consolda sonnlandırmak için setInterval'ı const intervalId değişkenine atamamız gerek ve return satırında clearInterval(intervalId) tanımlamamız gerekiyor. bu saye de sayacı arka planda sonlandırabiliyoruz ve her yenilediğimizde belirlediğimiz değerden geriye sayıyor ve sonlandırıyor.
      setNumber((prev) => (prev !== 0 ? prev - 1 : 0));
    }, 1000);

    //bileşenin ekrandan ayrılma olayında sayacı temizle (kaldır)
    return () => clearInterval(intervalId); // clearInterval(intervalId) sayaçı sonlandırıyor
  }, []);

  const handleClick = () => {
    // fonksiyon çalıştığı andaki number değeri 10
    setNumber(number + 1); // 10 +1
    setNumber(number + 1); // 10 +1
    setNumber(number + 1); // 10 +1

    //sorunun çözümü
    // useState'in döndürdüğü setter methodunun 2. kullanımı
    // setter methoda eğerki parametre olarak bir fonksiyon tanımlarsak o fonksiyon kod satırı çalıştığı andaki en son state değeri neyse onu parametse olarak alır ve bu fonksiyonu return ettiği değer state'in yeni değeri olur. Bu yöntemi state'in bir döngü içerisinde veya interval ile sürekli güncellerken kullanırız. ayrıca alt bileşene prop olarak state'in değerini göndermeden en son değere erişmemizi sağlar.
    setNumber((prev) => prev + 1); // 10 + 1
    setNumber((prev) => prev + 1); // 11 + 1
    setNumber((prev) => prev + 1); // 12 + 1
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "90px",
          textAlign: "center",
        }}
      >
        {number}
      </h1>

      <button onClick={handleClick} className="btn btn-primary">
        Arttır
      </button>
    </div>
  );
};

export default CountDown;
