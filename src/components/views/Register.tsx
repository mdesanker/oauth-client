import { Link } from "react-router-dom";
import { FaUser, FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";

const Register = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center p-4 max-w-[364px] sm:w-auto sm:h-auto sm:border border-gray-300 rounded-lg sm:p-8">
      <h1 className="font-semibold text-2xl mb-1">Register.</h1>
      <p className="text-gray-500 mb-4">Register a new account.</p>
      <form className="flex flex-col">
        <label htmlFor="username" className="auth-label">
          <FaUser className="text-lg" />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="outline-none text-black"
          />
        </label>
        <label htmlFor="email" className="auth-label">
          <MdEmail className="text-lg" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="outline-none text-black"
          />
        </label>
        <label htmlFor="password" className="auth-label">
          <AiFillLock className="text-lg" />
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
      <p className="text-center py-3 mt-3">Or register with</p>
      <div className="flex justify-center gap-6">
        <button className="oauth-btn">
          <FaGoogle />
        </button>
        <button className="oauth-btn">
          <FaFacebookF />
        </button>
        <button className="oauth-btn">
          <FaGithub />
        </button>
      </div>
      <p className="text-center py-6">
        Already a member?{" "}
        <Link to="#" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
