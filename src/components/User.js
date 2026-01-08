import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = ({ username }) => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    location: "Unknown",
    login: "000",
    avatar_url: "https://i.ibb.co/JWxpDbDH/default-avatar.jpg"
  });

  useEffect(() => {
    if (username) getData(username);
  }, [username]);

  const getData = async (username) => {
    try {
      const data = await fetch(`https://api.github.com/users/${username}`);
      const json = await data.json();
      setUserInfo(json);
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  };

  const { name, location, avatar_url, login } = userInfo;

  return (
    <div
      className="
        bg-white p-6 rounded-2xl shadow-md border border-gray-200 
        flex flex-col items-center gap-4
        transition-all hover:shadow-2xl hover:-translate-y-1
        fade-in-up"
    >
      <img
        src={avatar_url}
        alt={name}
        className="
          w-24 h-24 rounded-full object-cover shadow-lg border-4 border-orange-500
          pop-in"
      />

      <h2 className="text-xl font-semibold text-gray-800">
        Name: <span className="font-medium text-gray-600">{name}</span>
      </h2>

      <p className="text-gray-600">
        📍 <span className="font-medium">{location}</span>
      </p>

      <p className="text-gray-800 font-semibold">
        Github: <Link to={`https://github.com/${username}`}><span className="font-medium text-gray-600">{login}</span></Link>
      </p>
    </div>
  );
};

export default User;
