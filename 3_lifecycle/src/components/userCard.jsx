const userCard = ({ user }) => {
  return (
    <div className="card p-5 shadow d-flex flex-column gap-1">
      <h1>{user.name}</h1>

      <h3>
        <span className="badge bg-danger">Kullanıcı Adı:</span>
        <span>{user.email}</span>
      </h3>

      <h3>
        <span className="badge bg-danger">Email:</span>
        <span>{user.username}</span>
      </h3>

      <h3>
        <span className="badge bg-danger">Adres:</span>
        <span>{user.address.city + "  " + user.address.street}</span>
      </h3>

      <h3>
        <span className="badge bg-danger">şirket:</span>
        <span>{user.company.name}</span>
      </h3>
    </div>
  );
};

export default userCard;
