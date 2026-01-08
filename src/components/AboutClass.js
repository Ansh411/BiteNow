import React from "react"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext";


class About extends React.Component{
  constructor(props){
    super(props);
    // console.log("Parent constructor called");
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount");
  }

  render() {

    // console.log("Parent Render called");
    
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-orange-100 px-6 py-16">
      {/* Heading Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About <span className="text-orange-600">Us</span>
        </h1>
        <h2 className="text-lg text-gray-700 leading-relaxed">
          Hey! This is an online food ordering platform —{" "}
          <span className="font-semibold text-orange-500">
            BiteNow
          </span>
          🤤. Order your favourite food instantly with fast delivery.
        </h2>
        <div className="text-black font-bold">
          <UserContext.Consumer>
            {({loggedInUser}) => (<h2>User : {loggedInUser}</h2>)}
          </UserContext.Consumer>
        </div>
      </div>

      {/* User Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <UserClass />
        <UserClass />
        <UserClass />
      </div>
    </div>
  );
  }

}


export default About;