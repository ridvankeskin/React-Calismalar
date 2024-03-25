import Counter from "./components/counter";
import Accordion from "./components/Accordion";
import Header from "./components/header";
import { useState } from "react";

const App = () => {
  // koyu mod mu olacak state'i
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={`d-flex flex-column gap-4 vh-100 p-4 ${
        isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <Accordion
        title="BU Projede Hangi Teknolojiler Kullanıldı?"
        description="Bu projeyi geliştirken Javascrip React ve SCSS kullanıldı."
      />
      <Accordion
        title="Bu Projeyi Geliştirmesi Kaç Gün Sürdü"
        description="Bu projenin geliştirimlesi 1 hafta sürdü"
      />
      <Accordion
        title="Bu Projede Kaç Kişilik Bir Ekip Çalıştı"
        description="Bu projede 10 kişilik bir ekip çalıştı"
      />

      <Counter />

      <footer></footer>
    </div>
  );
};
export default App;
