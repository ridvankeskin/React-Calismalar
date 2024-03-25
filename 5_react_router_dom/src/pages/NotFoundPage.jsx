import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  // navigate ile aktarılan hata mesajına eriş
  const loc = useLocation();

  return (
    <div className="container py-6 d-flex flex-column align-items-center">
      {loc.state && <p className="bg-danger rounded p-2">{loc.state}</p>}
      <img className="img-fluid rounded w-75 my-4 " src="/book-404.gif" />
      <div>
        <h1>Aradığın sayfa bulunamadı</h1>

        <p>
          Böyle bir sayfa bulunamıyor. Ana Sayfa'ya dönüp başka bir şey
          arayabilirsin
        </p>
        <div className="d-flex justify-content-between">
          <Link to={"/"} className="btn btn-danger">
            Ana sayfaya dön
          </Link>
          <Link to={"/ürünler"} className="btn btn-danger">
            Ürünlere dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
