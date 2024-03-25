import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import UserTable from "./UserTable";
const FilterUser = () => {
  // kullanıcı verisinin state'ini tut
  const [users, setUsers] = useState(null);

  // filtrelenen kullanıcıların verisi
  const [filtredUsers, setFiltredUsers] = useState(null);

  // inputun referansını al
  const inputRef = useRef();

  // bileşenin ekrana basılma anını izle
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setFiltredUsers(data.users);
      });
  }, []);

  const handleClick = () => {
    // inputun içerisinde ki yazıya eriş
    const text = inputRef.current.value.toLowerCase();

    // kullanıcılar arasından isminde veya soyisminde inputa yazdığımız yazı olanları alacağım. yani isminde Terr olanları alamak istiyorum gibi.
    const filtred = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(text) ||
        user.lastName.toLowerCase().includes(text)
    );
    // filtrelenen kullanıcıları state de aktar.
    setFiltredUsers(filtred);
  };
  // eğerki kullanıcı verisiapi'den gelmediyse ekrana yükleniyor bas
  // eğer geldiyse ekrana tablo bas ve kullanıcı verisini prop yöntemi ile tablo bileşenine aktar. örnek tablo bileşeni : <UserTable users={users} />
  return (
    <div>
      <div className="d-flex gap-4 mb-4">
        <input ref={inputRef} className="form-control shadow" type="text" />
        <button onClick={handleClick} className="btn btn-primary">
          Ara
        </button>
      </div>

      {users === null ? (
        <Loader /> //
      ) : (
        <UserTable users={filtredUsers} />
      )}
    </div>
  );
};

export default FilterUser;
