import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import FilterArea from "./components/FilterArea";

const App = () => {
  // tarayıcıda ki url'e göre ekrana hangi bileşenin basılacağını belirle
  //! önemli mülakatta çıkan bir soru//: react router dom url'imize nasıl erişiyor? //Cevabı// react router dom tarayıcıdaki url'e window nesnesi üzerinden erişir.
  return (
    <BrowserRouter>
      {/* Routes dışında: bütün sayfalar için ortak */}
      <Header />
      {/* Projedeki sayfaları tanımladığımız bir kapsayıcı */}
      <Routes>
        {/* Route: Projedeki her bir sayfa için tanımlanır.
         * Route'a yol ve o yol için ekrana basılacak olan bileşen verilir.
         */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />

        {/*DyNAMİC ROUTE */}

        <Route path="/ürün/:id" element={<DetailPage />} />

        {/* nested routes= iç içe yollar */}
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>

        {/*undefined Route: tanımsız bir route'a yönlenirse */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Routes dışında: bütün sayfalar için ortak */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
