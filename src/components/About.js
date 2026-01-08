import User from "./User";
import { Link } from "react-router-dom";

const About = () => {
  const users = ["Ansh411", "namastedev", "akshaymarch7"]; // Array of GitHub usernames

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white px-6 py-16">
      {/* Heading Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About <span className="text-orange-600">Us</span>
        </h1>
        <h2 className="text-lg text-gray-700 leading-relaxed">
          Hey! This is an online food ordering platform —{" "}
          <Link to="/" className="font-semibold text-orange-500">
            BiteNow
          </Link>
          🤤. Order your favourite food instantly with fast delivery.
        </h2>
      </div>

      {/* User Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {users.map((username) => (
          <User key={username} username={username} />
        ))}
      </div>
    </div>
  );
};

export default About;
