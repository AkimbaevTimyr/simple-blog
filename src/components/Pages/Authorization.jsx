import { useSelector, useDispatch } from "react-redux";
import {
  auth,
  setEmail,
  setPassword,
  authValidator,
} from "../../actions/auth";

const Authorization = () => {
  const Password = useSelector((state) => state.authPage.password);
  const Login = useSelector((state) => state.authPage.login);
  const password = "12345";
  const login = "12345";
  const dispatch = useDispatch();

  if (Login === login && Password === password) {
    dispatch(authValidator(true));
  } else {
    dispatch(authValidator(false));
  }

  let setPasswords = (e) => {
    let text = e.target.value;
    dispatch(setPassword(text));
  };
  let setAuth = () => {
    dispatch(auth());
  };

  let setLogin = (e) => {
    let text = e.target.value;
    dispatch(setEmail(text));
  };

  return (
    <div>
      {Password === password && Login === login ? (
        <div className="authProfile">Вы авторизовались</div>
      ) : (
        <div className="input-auth">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1"></label>
              <input
                onChange={setLogin}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"></label>
              <input
                onChange={setPasswords}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="button-auth">
              <button onClick={setAuth} type="button" class="btn btn-primary ">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Authorization;
