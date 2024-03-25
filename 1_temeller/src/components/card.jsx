/*
!!!!!!!--Prop özelliği: Çok ÖNEMLİ-- !!!!!!!!!!
* bİR ÜST BİLEŞENDEN ALY BİLEŞENE VERİ AKTARMAYA YARIYOR.
* Prob özelliği sayesinde yazdığımız bileşenlerin yeniden kullanılabilir olmasını sağlıyoruz.
* Gönderilen prop verisi bileşenin parametre kısmında alınır.

*/
import Button from "./button";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.item.image} alt="" />
      <div className="body">
        <h4 className="category">{props.item.category}</h4>
        <h3>{props.item.title}</h3>

        <Button title="Sepete Ekle" color="orange" size={"90%"} padding="8px"/>
      </div>
    </div>
  );
};
export default Card;
