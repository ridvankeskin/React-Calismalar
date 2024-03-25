/*
! React Bileşenleri (React COMPONENTLERİ(BİLEŞENLERİ))
* Kullanıcı arayüyü oluşturmak için kullanılan temel yapı parçalarıdır.
* (örneğin : yapboz parçası gibi)

* Bileşen oluşturmayı nasıl yaparız
* 1) Bir tane fonksiyon oluştururuz.

* 2) Fonksiyonun ismine bileşenin ismine veriyoruz. yani header mı, footer mı, card mı nedir bu bunu veriyoruz

! Bileşen isminin ilk harfi mutlaka büyük olmalıdır. Örneğin; Header, NavMenu gibi.

! Birden fazla kelimeden oluşuyorsa bitişik yazılmalı ve her kelimenin ilk harfi mutlaka büyük olmalıdır

* 3) Bileşen return satırında kullanıcının göreceği arayüz kodunu döndürmek zorundadır. (jsx)

* Döndürdüğümüz (return) ettiğimiz JSX kodu her zaman tek bir kapsayıcıya sahip olmalıdır.

* 4) Bileşeni farklı dosyalarda kullanabilmek için export etmeliyiz.

*/
import Button from "./button";

function Header() {
  // Eğerki kullanıcı giriş yapmışsa hesap ismi çıkış ve abone ol butonu ekrana gelsin
  // Eğer ki kullanıcı hesabına girmemişse o zaman giriş yap ve kaydol butonu ekrana gelsin
  const isAuth = true; // API ' den geldiğini düşünelim.
  return (
    <header>
      <h1>REACT</h1>

      <nav>
        {isAuth === true ? (
          <>
            <p>Rıdvan Keskin</p>
            <Button title="Çıkış Yap" />
          </>
        ) : (
          <>
            <Button title="Giriş Yap" color="green" />
            <Button title="Kayıt Ol" color="blue" />
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
