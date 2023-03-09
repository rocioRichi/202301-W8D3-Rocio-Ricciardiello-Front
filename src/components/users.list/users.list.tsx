import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { UserApiRepo } from "../../services/repository/users.api.repo";
import { asyncLoadUsers } from "../../reducer/thunks";

export function UserList() {
  const { users, userLogged } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const token = userLogged?.token as string;
  const repo = new UserApiRepo();

  useEffect(() => {
    dispatch(asyncLoadUsers({ token, repo }));
  }, [token, repo, dispatch]);
  return (
    <section>
      <h2>Usuarios</h2>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
}
