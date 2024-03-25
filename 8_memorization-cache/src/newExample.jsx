import { useState, useCallback } from "react";
import Display from "./Display";

const NewExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("merhaba");

  ///----------------SORUN------------------///
  // bu bileşen her render edildiğinde bu fonksiyon tekrardan oluşturulur
  // tekrardan oluştuğu için bellekte yerini alır
  // biz bu fonksiyonu display prop olarak gönderdiğimizde fonksiyon içeriği aynı olmasına rağmen bellekte ki referansı farklı olduğundan React.memo() bunu farklı bir prop gibi algılar ve display bileşenini gereksiz yere render eder.

  //* const updateCount = () => {
  //*   setCount(count + 1);
  //* };

  ///--------------ÇÖZÜM--------------///
  // bileşen her render edildiğinde fonksiyonu yeniden oluşturmak yerine ilk
  // render sırasında oluşturulan versiyonunu bellekte tutyoruz ve
  // her render sırasında aynı fonksiyonu bellekten alıyoruz.
  // bu sayede yeni fonksiyon oluşturmamış oluyoruz.
  // ve bu fonksiyonuda prop olarak gönderdiğimizde React.memo her hangi bir sorun yaşamıyor.

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Sayaç</h2>

      <Display count={count} updateCount={updateCount} />

      <br />
      <br />
      <br />
      {/* sayactan bagımsız bir ınput tutalım */}

      <input
        className="input"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <p>{name}</p>
    </div>
  );
};

export default NewExample;
