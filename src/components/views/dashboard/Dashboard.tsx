import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import { DateTime } from "luxon";
import Logout from "./elements/Logout";

const Dashboard = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  const formattedDate =
    user &&
    DateTime.fromISO(user.date.toString()).toLocaleString(
      DateTime.DATETIME_MED
    );

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-4 max-w-[364px] sm:w-auto sm:h-auto sm:border border-gray-300 rounded-lg sm:px-8 sm:py-16">
      <img
        src={user?.avatar}
        alt={user?.username}
        className="h-48 w-48 rounded-full border shadow-lg"
      />
      <h1 className="text-4xl text-center py-4">
        Welcome, {user && user.username}!
      </h1>
      <p>Email: {user?.email}</p>
      <p>Member since: {formattedDate}</p>
      <Logout />
    </div>
  );
};

export default Dashboard;
