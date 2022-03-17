import { FaFacebookF } from "react-icons/fa";

const FacebookBtn = () => {
  const clickHandler = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <button className="oauth-btn" onClick={clickHandler}>
      <FaFacebookF />
    </button>
  );
};

export default FacebookBtn;
