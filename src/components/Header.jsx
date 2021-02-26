import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const authorization = useSelector((state) => state.authPage.auth);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <NavLink className="header-button" to="/">
            Главная
          </NavLink>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <NavLink className="header-button" to="/news">
                  Новости
                </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <NavLink className="header-button" to="/profile">
                  Профиль
                </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <NavLink className="header-button" to="/users">
                  Пользователи
                </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <NavLink className="header-button" to="/add">
                  Добавить
                </NavLink>
              </a>
            </li>
            <div className="signUp">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NavLink className="header-button" to="/authorization">
                    {authorization === true ? (
                      <div>
                       <div>Выйти</div>
                      </div>
                    ) : (
                      <div>Войти</div>
                    )}
                  </NavLink>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
