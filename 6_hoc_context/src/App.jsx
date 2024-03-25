import { useState } from "react";
import LoginModal from "./components/LoginModal";
import ThemeModal from "./components/ThemeModal";
import WarningModal from "./components/WarningModal";
import Modal from "./components/Modal";
import Tema from "./components/Tema";
import Uyari from "./components/Uyari";
import Giris from "./components/Giris";

const App = () => {
  const [isOpen, setIsOpen] = useState(null);

  // modal' kapatır
  const close = () => setIsOpen(false);
  return (
    <div className="p-5">
      <div className="d-flex justify-content-center gap-4 my-4">
        <button
          onClick={() => setIsOpen("login")}
          className="bg-danger rounded"
        >
          Giriş Yap
        </button>
        <button
          onClick={() => setIsOpen("darkmode")}
          className="bg-warning rounded"
        >
          Tema Seç
        </button>
        <button
          onClick={() => setIsOpen("warning")}
          className="bg-primary rounded"
        >
          Uyarı Fırlat
        </button>
      </div>

      {/*
      > 1. YOL 
      > NORMAL COMPONENT LER OLUŞTURDUK
      > AMACIMIZA ULAŞTIK
      > AMA ÇOK FAZLA KOD TEKRARI YAPILDI
      */}
      {isOpen === "login1" ? (
        <LoginModal close={() => setIsOpen(false)} />
      ) : isOpen === "darkmode1" ? (
        <ThemeModal close={() => setIsOpen(false)} />
      ) : isOpen === "warning1" ? (
        <WarningModal close={() => setIsOpen(false)} />
      ) : (
        ""
      )}

      {/*
       > 2. YOL 
       > KOD TEKRARINI ÖNLEMEK İÇİN HOC KULLANDIK

       */}

      {isOpen === "login" ? (
        <Modal close={close}>
          <Giris />
        </Modal>
      ) : isOpen === "darkmode" ? (
        <Modal close={close}>
          <Tema />
        </Modal>
      ) : isOpen === "warning" ? (
        <Modal close={close}>
          <Uyari />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
