import { FaGoogle } from "react-icons/fa";

const GoogleBtn = () => {
  const clickHandler = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <button className="oauth-btn" onClick={clickHandler}>
      <FaGoogle />
    </button>
  );
};

export default GoogleBtn;
