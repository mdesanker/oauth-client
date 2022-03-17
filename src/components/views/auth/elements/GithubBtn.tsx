import { FaGithub } from "react-icons/fa";

const GithubBtn = () => {
  const clickHandler = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <button className="oauth-btn" onClick={clickHandler}>
      <FaGithub />
    </button>
  );
};

export default GithubBtn;
