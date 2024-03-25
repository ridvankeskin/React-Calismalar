import { useState } from "react";

const Accordion = ({ title, description }) => {
  // camelCase İSİMLENDİRME TERCİH EDİYORUZ
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3 p-3 text-dark">
      <div className="d-flex justify-content-between align-items-center ">
        <h3>{title}</h3>
        <button
          onClick={() => {
            // isOpen değerini true'ya çekiyoruz tıklanınca
            // setIsOpen(isOpen === true ? false : true); 2. tercihimiz
            setIsOpen(!isOpen); // 1. rercihimiz ! tersini yap demek
          }}
          className="btn btn-primary btn-primary buton"
        >
          {isOpen ? "-" : "+"} {/* ternory operatörü */}
        </button>
      </div>

      {isOpen && (
        <p className="mt-3 lead">
         {description}
        </p>
      )}
    </div>
  );
};

export default Accordion;
