import { useAppDispatch } from "../../../../store/hooks";
import { logoutUser } from "../../../../store/slices/authSlice";

const Logout = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <button
      onClick={clickHandler}
      className="px-8 py-2 bg-blue-500 text-white rounded mt-8 font-medium hover:bg-blue-600"
    >
      Logout
    </button>
  );
};

export default Logout;
