import bell from "../images/bell icon.webp";

const Alert = (props) => {
  return (
    <h3 className={`alert ${props.theme}`}>
      {/* icon */}
      {props.icon === true && <img width={30} src={bell} />}

      {/* koşulla metin içeriğini belirledik */}
      {props.theme === "uyari"
        ? "işleminiz devam ediyor"
        : props.theme === "hata"
        ? "üzgünüz bir hata oluştu"
        : props.theme === "bilgi"
        ? "işlem başariyla gerçekleşti"
        : "tema bilgisi verilmedi"}
    </h3>
  );
};
export default Alert;
