import { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);

  /* React bileşendeki state de bir güncelleme olduğunda güncellemenin ekrana yansıması için bileşeni tekrar render et

****** ---------------------sorun-----------******
aşağıdaki hesplama bileşen her render olduğunda gereksiz yere en baştan tekrar hesaplıyor

***** ---------------------çözüm------------*******
useMemo kullanıp yaptığımız hesaplamanın sonucunu cache e atmak cve her render sırasında yeni sonuc uretmek yerine cache deki veriyi erişip kullanarak gereksiz ve maliyetli hesaplamaların onune gecmek.

*/

  const yeniDizi = useMemo(() => {
    console.log("hesaplama yapıldı");
    // 1) maliyetli işlem = 1.000.000 elemanlı dizi oluştur
    const dizi = new Array(1000).fill("merhaba");

    // 2) maliyetli işlem = diziyi dön ve yeni dizi oluştur
    return dizi.map((item) => item + "!");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Sayacı Arttır ({count})
      </button>
    </div>
  );
};

export default UseMemoExample;
