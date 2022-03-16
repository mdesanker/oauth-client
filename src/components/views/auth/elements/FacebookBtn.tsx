import { FaFacebookF } from "react-icons/fa";

const FacebookBtn = () => {
  const clickHandler = () => {
    console.log("Facebook login");
  };

  return (
    <button className="oauth-btn" onClick={clickHandler}>
      <FaFacebookF />
    </button>
  );
};

export default FacebookBtn;
