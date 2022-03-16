import { FaGithub } from "react-icons/fa";

const GithubBtn = () => {
  const clickHandler = () => {
    console.log("Github login");
  };

  return (
    <button className="oauth-btn" onClick={clickHandler}>
      <FaGithub />
    </button>
  );
};

export default GithubBtn;
