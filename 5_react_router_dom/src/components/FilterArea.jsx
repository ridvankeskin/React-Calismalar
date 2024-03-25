import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  // useSearchParams url deki arama parametrelerini yönetmemizi sağlar
  // geriye dizi içerisinde iki değer döndürür.
  // 1-) url deki arama parametreleri
  // 2-) bunları değiştirmeye yarayan method

  const [searchParams, setSearcParams] = useSearchParams();

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfa yenilenmeyi önle
    e.preventDefault();
    // aratılan terimi arama parametresi olarak ekler

    searchParams.set("aramaTerimi", e.target[0].value);

    // url i günceller

    setSearcParams(searchParams);
  };

  // select değişince
  const handleChange = (e) => {
    // eklenecek parametreyi belirle
    searchParams.set("sırala", e.target.value);

    // url i güncelle
    setSearcParams(searchParams);
  };

  return (
    <div className="mt-4 d-flex gap-3 align-items-center justify-content-between">
      <div className="d-flex gap-3  align-items-center">
        <label>Sırala</label>
        <select
          defaultValue={searchParams.get("sırala")}
          onChange={handleChange}
          className="form-select"
        >
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("aramaTerimi")}
          placeholder="aratılacak metin.."
          className="form-control shadow"
          type="text"
        />
        <button className="btn btn-danger shadow" id="btn-filter">
          Ara
        </button>
      </form>
    </div>
  );
};

export default FilterArea;
