# state'in ortaya çıkma noktası

React uygulamalarda bileşen içerisinde kullanıcı etkileşimi sonucu arayüzde değişim olmasını isteyebiliriz. örneğin; butona tıklandığında tema değişimi gibi.

# state

state : bileşen içerisinde verileri saklamaya ve yönetmeye yarayan yapıdır.

state'in değeri her değiştiğinde bileşen otomatik olarak tekrardan render olur. (bileşenin fonksiyonu tekrar çalışır.) bu sayede state'e bağlı olarak görünümü değişecek olan arayüz yapıları güncellenmiş olur.

eğerki tuttuğumuz değişkenin değerinde, bir değişim olduğunda arayüzde de bir değişim olması gerekiyorsa state'i tercih ediyoruz.

useState(x): useState i kullanırken x yazılan yere "initial state" denir. initial state nedir: "başlangıç değeri anlamına gelir" yani state'in bileşen ekrana basıldığı ilk anda sahip olacağı değerdir.

useState ile tutulan bir değeri değiştirmenin tek yolu useState'in döndürdüğü satter fonksiyonunu kullanmaktır. örneği setAccordion gibi setCounter gibi SetHeader gibi.

```js
//! 1) obje dağıtma ÖZELLİĞİ | Object Destructuring
const deneme = {
  text: "merhabar",
  id: 5,
  title: "deneme",
};
// objelerde değerlere erişirken tanımlanan özellik ismi neyse o özellik ismini yazmak zorundayız.
const { id, text, title } = deneme;

//! 2) obje dağıtma yöntemini dizilerde de kullanabiliyoruz.
const dizi = [10, () => alert("merhabar")];

//dizilerde kullanırken isim vermekte özgürüz.
const [number, selamla] = dizi;

console.log(number);
selamla();
//
```
