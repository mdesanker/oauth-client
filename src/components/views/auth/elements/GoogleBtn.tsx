import { FaGoogle } from "react-icons/fa";

const GoogleBtn = () => {
  const clickHandler = () => {
    console.log("Google login");
  };

  return (
    <button className="oauth-btn" onClick={clickHandler}>
      <FaGoogle />
    </button>
  );
};

export default GoogleBtn;
