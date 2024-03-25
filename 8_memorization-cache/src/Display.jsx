import React from "react";

/* 
-----------------------SORUN--------------------
* şuan display bileşenin içeriği değişmeyecek olsa dahi üst bileşen olan (newExample)
render edildiğinde bu bileşen gereksiz yere tekrardan render oluyor.
*gerçek bir projedeki kapsamlı bir sayfa olsaydı gereksiz yere render edilmesi performans sorunlarına yol açabilirdi.
*/

const Display = ({ count, updateCount }) => {
  console.log("bileşen renderlandı");
  return (
    <div
      style={{
        background: "crimson",
        padding: "5px",
        margin: "15px",
        borderRadius: "15px",
      }}
    >
      <h3>Sayacın Değeri ({count})</h3>
      <button style={{ marginTop: "30px" }} onClick={updateCount}>
        Sayacı Arttır
      </button>
    </div>
  );
};

/*
----------------------------ÇÖZÜM----------------------
*React.memo(), react uygulamalarında performans optimizasyonu sağlamak için kullanılır.
*bu fonksiyon bir önceki render sonucunu hafızada tutar.
* tekrar render edilmesi gerektiğinde eğer bileşenin aldığı proplar değişmediyse tekrar render işlemi yapıp bileşeni ekrana basmak yerine önceki renderdan elde ettiğimiz sonucu kullanırız.
*/

export default React.memo(Display);

/*

memo çalışma mantığı:

bileşeni render edip render sonucu oluşan html i hafızada tutar.
daha sonra üst bileşen render olduğunda ve alt bileşeninde render olması gerektiğinde eğer ki alt bileşene gönderilen proplar değişmediyse o zaman alt bileşenin tekrardan render etmez daha önceki render da oluşan html i kullanır. 
ama proplar farklı ise bileşeniş tekrar render eder cache deki veriyi günceller.


çalışma aşamasındaki açık:
string, number, boolean gibi proplarda sorun çıkmasa da function proplarının değişip değişmediğini tespit etmekte sorun yaşar.

*/
