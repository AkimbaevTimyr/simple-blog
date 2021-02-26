import { deletePost } from "../actions/main";
import { useDispatch } from "react-redux";
const MainPagePost = (props) => {
  const dispatch = useDispatch();
  const Delete = (index) => {
    dispatch(deletePost(index));
  };
  return (
    <div class="card">
      <div class="card-header">{props.theme}</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{props.text}</p>
          <footer class="blockquote-footer">{props.authorName}</footer>
        </blockquote>
        <div className="button-mainPage">
          <button
            onClick={() => Delete(props.index)}
            type="button"
            class="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPagePost;
