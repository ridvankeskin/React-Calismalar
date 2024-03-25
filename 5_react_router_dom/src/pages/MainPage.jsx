import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column gap-3">
      <h1 className="text-center">Hoşgeldiniz!!!</h1>
      <img className="w-100 rounded-3" src="/welcome.jpg" alt="" />

      <p>
        <Link to={"/ürünler"} >Ürünler sayfasında </Link>yeni çıkan bütün kitaplara
        ulaşabilişrsiniz.
      </p>
    </div>
  );
};

export default MainPage;
