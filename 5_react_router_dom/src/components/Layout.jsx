// layout ekstra ayarlar ve kategoriler sayfasını kapsayan route'a verdiğimiz bir bileşen.
// kapsayıcı route'a bileşen verdiğimiz zaman alt route'lardan hangisine gidersek gidelim kapsayıcı route'unbileşeni ile karşılaşırız.
// nested route'un kullanım alanları
// 1.alan) sadece bir kaç sayfada ortak olarak kullanılacak alanları belirlemeye yarar
// 2.alan) projedeki bazı sayfaların hangi tipteki kullanıcılar tarafından erişilebilir olduğunu bilirlememizi sağlar.
import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();

  // api'den alındığını varsayalım
  const user = {
    name: "rıdvan",
    type: "user",
  };
  // eğer ki kullanıcı tipi admin değilse alt route'lara erişime izin verme
  if (user.type !== "admin") {
    //? 1) hook kullanımı
    // render işlemi bitmeden önce yönlendirdiği için uyarı veriyor.
    // navigate("/");
    //? 2) bileşen ile yönlendirme
    return <Navigate to={"/"} />;
  }
  return (
    <div className=" d-flex gap-5 p-4">
      <aside className="d-flex flex-column bg-light rounded p-3 ">
        <NavLink to={"/ekstra/kategoriler"}>Kategoriler</NavLink>
        <NavLink to={"/ekstra/kampanyalar"}>Kampanyalar</NavLink>
        <NavLink to={"/ekstra/ayarlar"}>Ayarlar</NavLink>
      </aside>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
