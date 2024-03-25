import { useState } from "react";
import { useEffect } from "react";
import UserCard from "./userCard";

const UserPage = () => {
  // kullanıcı state'i
  const [user, setUser] = useState(undefined);

  // sayfa state'i
  const [page, setPage] = useState(1);

  // bileşenin ekrana basılma olayını ve page state'inin değişimini izle
  useEffect(() => {
    // id'si 1 olan kullanıcıyı al
    fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
      // istek başarılı olursa gelen veriyi işle
      .then((res) => res.json())
      // işlenen veriyi state aktar
      .then((data) => setUser(data));
  }, [page]);

  console.log("değeri:", user);
  return (
    <div>
      {user === undefined ? (
        "Yükleniyor..." //
      ) : (
        <UserCard user={user} />
      )}

      <div className="d-flex justify-content-between align-items-center mt-5 ">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-secondary"
        >
          Önceki
        </button>

        <p className="lead fs-3">{page}</p>
        <button
          disabled={page === 10}
          onClick={() => setPage(page + 1)}
          className="btn btn-success"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default UserPage;
