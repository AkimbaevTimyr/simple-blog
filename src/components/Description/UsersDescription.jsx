
const UsersDescription = (props) => {
  return (
    <div className="users">
      <div className="profile">
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      
                      <img
                        src={props.avatar}
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                     
                      <div className="mt-3">
                        <h4>{props.login}</h4>
                        <p className="text-secondary mb-1">{props.job}</p>
                        <p className="text-muted font-size-sm">
                          {props.livingPlace}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNameName="site-info">
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                     <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github mr-2 icon-inline"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          Github
                        </h6>
                        <a href={props.gitHubUrl} className="text-secondary">
                          {props.login}
                        </a>
                      </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDescription;
