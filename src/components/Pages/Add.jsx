import { useDispatch } from "react-redux";
import {
  addPostText,
  addPost,
  addPostTheme,
  addAuthor,
  addNewsGroops,
  addNewsHeading,
  addNewsDescription,
  addNewsDate,
  addNews,
} from "../../actions/main";

const Add = () => {
  const dispatch = useDispatch();
  let addPostTexts = (e) => {
    let text = e.target.value;
    dispatch(addPostText(text));
  };
  let addPosts = () => {
    dispatch(addPost());
  };

  let addPostThemes = (e) => {
    let text = e.target.value;
    dispatch(addPostTheme(text));
  };

  let addAuthorr = (e) => {
    let text = e.target.value;
    dispatch(addAuthor(text));
  };

  const addNewsGroopss = (e) => {
    const { value } = e.target;
    dispatch(addNewsGroops(value));
  };

  const addNewsHeadingg = (e) => {
    const { value } = e.target;
    dispatch(addNewsHeading(value));
  };

  const addNewsDescriptions  = (e) =>{
    const {value} = e.target;
    dispatch(addNewsDescription(value))
  }

  const addNewsDates = (e) =>{
    const { value} = e.target;
    dispatch(addNewsDate(value))
  }

  const addNewss = () => {
    dispatch(addNews());
  };
  return (
    <div className="add-page">
      <div className="addPostGroups">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Тема поста"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={addPostThemes}
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Информация поста"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={addPostTexts}
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Имя Автора"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={addAuthorr}
          />
        </div>
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={addPosts}
          >
            Add
          </button>
        </div>
      </div>
      <div className="addNewsGroup">
        <div className="Add-News">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Группа Поста"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={addNewsGroopss}
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Заголовок Поста"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={addNewsHeadingg}
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Информация Поста"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={ addNewsDescriptions }
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Дата публикации"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={ addNewsDates }
            />
          </div>
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={addNewss}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Add;
