/*

* reducer : useReducer ile yönetilen state in nasıl değişeceğine karar veren fonksiyon.
* aldığı parametreler: 
* 1. parametre >> state in son hali
* 2. parametre >> aldığı action (emir / eylem)

* reducer fonksiyonu gelen aksiyona göre state in nasıl değişeceğine karar verir

* aksiyon bileşenleri içerisinden dispatch methodu yardımıyla reducer a gönderebiliyoruz.

* reducer fonksiyonunun return ettiği değer satate in son hali olur

*/

const reducer = (state, action) => {
  if (action === "SIFIRLA") {
    return { count: 0 };
  }

  if (action === "ARTTIR") {
    return { count: state.count + 1 };
  }

  if (action === "AZALT") {
    return { count: state.count - 1 };
  }
};

export default reducer;
