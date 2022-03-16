import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";

const Register = () => {
  return (
    <div className="w-full h-screen p-4">
      Register
      <form className="flex flex-col">
        <label htmlFor="username" className="auth-label">
          <FaUser className="w-6 h-6" />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="outline-none text-black"
          />
        </label>
        <label htmlFor="email" className="auth-label">
          <MdEmail className="w-6 h-6" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="outline-none text-black"
          />
        </label>
        <label htmlFor="password" className="auth-label">
          <AiFillLock className="w-6 h-6" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="outline-none text-black"
          />
        </label>
        <button className="p-2 bg-blue-500 text-white rounded my-2 font-medium hover:bg-blue-600">
          Register
        </button>
      </form>
      <p>Or login with</p>
      <div></div>
    </div>
  );
};

export default Register;
