import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// 1. component
const DetailPage = () => {
  // dinamik sayfa
  // sayfadizaynı aynı kalırken içeriğinin dinamik bir şekilde genelde url'de parametreye göre değiştiği sayfalardır.
  // örneğin; youtube video sayfası, amazon ürün sayfası, netfilix film sayfası gibi. bunların tamamında sayfa dizaynı aynı kalırken url'de ki id değiştiği için gördüğümüz içerik değişiyor.

  const [book, setBook] = useState(null);

  // useNavigate fonksiyonunu çağırıp yönlendirme görevini yapacak olan fonksiyona erişmemiz gerek
  const yonlendir = useNavigate();

  //1) url'de ki id parametrersi al
  // useParams url'e eklenmiş olan pathParams'a erişim sağlar.
  const { id } = useParams();

  //2) id'sini bildiğimiz kitabın bilgilerini api'den al

  useEffect(() => {
    axios
      .get(`http://localhost:3040/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        // ürünün bilgisini apiden gelmediyse kullanıcıyı 404 sayfasına yönlendir
        // hata mesajını 404 sayfasına aktar
        yonlendir("/undefined", { state: err.message });
      });
  }, []);

  return (
    <div>
      {/*kitap verisi gelmediyse yükleniyor bas */}
      {!book && <p>Yükleniyor...</p>}

      {/*kitap verisi geldiyse içeriği ekrana bas */}
      {book && (
        <div className="row my-5 p-5">
          <div className="col md-6 d-flex justify-content-center align-items-center">
            <img
              style={{ maxHeight: "400px" }}
              className="rounded img-fluid shadow"
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>
            <div className="my-3">
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="Açıklama" value={book.description} />
              <BookInfo label="Yıl" value={book.year} />
              <BookInfo label="Sayfa Sayısı" value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

// 2. component
const BookInfo = ({ label, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{label}</span>
      <span>{value}</span>
    </p>
  );
};
