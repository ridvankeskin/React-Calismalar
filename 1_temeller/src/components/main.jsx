/*

! JSX (Javascript XML) NEDİR:
*react tarafından kullanılan bir söz dizimi
* JSX javascript içerisinde HTML benzeri bir yapıyla kullanıcı arayüzünü tanımlamaya yarar.

* HTM JSX Farkları nelerdir ? 
* JSX Html deki bütün etiketlere sahiptir.
* 1) {} süslü parantez doğrudan jsx içerisine js kodu yazabiliyoruz.
* 2) className : sınıf tanımlarken class yerine className kullanıyoruz.
* 3) inlineCSS : {{}} çift süslü parantez içerisine yazarız.
* 4) <div/> : bütün etiketler self closing olabilir.
* 5) Bütün etiketlerin kapanışını söylememiz lazım. (hr, br, input, img) özellikle bunlarda dikkat etmeliyiz.
* 6) Olay izleme : izlemek istediğimiz olayı direk etikette tanımlıyoruz.
* 7) <></> : fragment özelliği


*/

const Main = () => {
  const text = "Sayfamıza Hoşgeldiniz...";

  const formatPrice = (price) => price * 31.15 + "₺";

  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpoVWtyBhz_9XWuw1QsBmMdBE1-CfUFsP-w&usqp=CAU";

  // olay izleyiciye verdiğimiz fonksiyon
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <main>
      <h1>{text}</h1>

      <p>{formatPrice(300000)}</p>

      <img
        style={{
          borderRadius: "40px",
          boxShadow: "0 0 20px white",
          width: 300,
        }}
        src={url}
      />

      <br />

      <div
        className="card"
        onClick={() => alert("Tıklandı...")}
        style={{
          width: "300px",
          height: "300px",
          background: "blue",
          boxShadow: "0 0 20px yellow",
        }}
      />

      <input onChange={handleChange} />
    </main>
  );
};
export default Main;
