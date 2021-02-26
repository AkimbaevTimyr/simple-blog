const NewsDescription = (props) => {
  return (
    <div class="card text-center">
      <div class="card-header">{props.postGroops}</div>
      <div class="card-body">
        <h5 class="card-title">{props.postHeading}</h5>
        <p class="card-text">
            {props.postDescription}
        </p>
      </div>
      <div class="card-footer text-muted">{props.postDate}</div>
    </div>
  );
};


export default NewsDescription