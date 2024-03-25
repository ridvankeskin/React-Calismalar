import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";
import { data } from "./constant";
import Alert from "./components/alert";
function App() {
  // 1) Bir bileşeni nasıl kullanırız ?

  // 2) çoklu eleman renderlama olayı
  // data dizisindeki her bir nesne için ekrana bir kart basmak istiyoruz buna renderlama denir.

  // Bu verinin gelmeme ihtimali de olsun ama. yani ya tanım ya da tanımsız olabilir.
  const title = ""; // API' dan gelen veri
  return (
    <div>
      <Header />
      <Alert theme="uyari" icon={true} />
      <Alert theme="hata" />
      <Alert theme="bilgi" icon={true} />
      <Alert theme="" />

      {/* koşullu renderlamanın 1. yöntemi. 1. yöntemde hem if hem else durumunu da söyleyeceksek bu koşulu kullanırız. terneray ?: */}
      {title !== "" ? <h3>{title}</h3> : <h3 className="baslik">başlık verisi alınamadı</h3>}
      {/* koşullu renderlamanın 2. yöntemi 2. yöntemde else durumunu söylememize gerek yoksa bu koşulu kullanmalıyız. && end */}
      {title && <h3>{title}</h3>}
      <div className="wrapper">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
