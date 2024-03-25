import { useRef } from "react";

const RefExample = () => {
  // bir jsx elemanını referansını almak istiyorsak, yani js deki quaryselektör gibi. en üstteki kodu yazarız
  const inputRef = useRef();
  const buttonRef = useRef();
  // butona tıklanınca çalışır
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "gray";
  };
  return (
    <div className="d-flex gap-5 ">
      <input ref={inputRef} className="form-control shadow" type="text" />
      <button ref={buttonRef} onClick={handleClick} className="btn btn-primary">
        Odaklan
      </button>
    </div>
  );
};

export default RefExample;
