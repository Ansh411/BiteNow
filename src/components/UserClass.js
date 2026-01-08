import React from "react";

class UserClass extends React.Component{
    constructor (props) {
        super(props);

        this.state = {
            userInfo : {
                name: "Dummy",
                location : "Default",
                login: "007",
                avatar_url:"https://i.ibb.co/JWxpDbDH/default-avatar.jpg",
            }
        }
        // console.log(this.props.name + "Child Constructor called");
    }

    async componentDidMount(){
        // console.log(this.props.name + "Child Component Did Mount");

        // API Call
        
        const data = await fetch("https://api.github.com/users/Ansh411");

        const json = await data.json();

        this.setState({
            userInfo : json
        })

        // console.log(json);     
        
    }

/* ### How to re-render according to the state variable updation in class based component

➡️ As componentDidUpdate is rendered after updating the rendering with the API data so if we want to re-render only once then there is no change in the componentDidUpdate code

but if we want to update according to change in state variable then , we use if-else statements for each update

like if the state variable is count , so we do like:

componentDidUpdate (prevProps, prevState) {
    if(this.state.count !== prevState.count){
        // then update
    }
}

and if there are two state variables (count_1 and count_2) then 

componentDidUpdate (prevProps, prevState) {
    if(this.state.count_1 !== prevState.count_1 || this.state.count_2 !== prevState.count_2){
        // then update
    }
}

and if there are different updates according to different state variables then we have to use different if-else conditons 

componentDidUpdate (prevProps, prevState) {
    if(this.state.count !== prevState.count){
        // then do something
    }

    if(this.state.count_2 !== prevState.count_2){
        // then do something
    }
}
*/
    // componentDidUpdate(prevProps, prevState) {
    //     this.timer = setInterval(() => {
    //         console.log("Ansh OP");
    //     }, 1000);
    //     console.log("Component Did Update");
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer);
    //     console.log("Component Will Unmount");    
    // }

/*    #### What is the main role of ComponentWillUnmount

➡️ To clear the backlogs of any other component

For Eg: If we have setInterval in componentDidMount like:

componentDidMount() {
    this.timer = setInterval(() => {
        console.log("Ansh OP")
    }, 1000);
}

So this will be running even if I move to other pages and if I return to the same page it will also start again this new setInterval and it will keep on going untill we clear it

So that is why we use ComponentWillUnmount to clear things that need to stop when we move to other page

ComponentWillUnmount(){
    clearInterval(this.timer);
}


#### In case of useEffect , how will we clear the setInterval if initiated

➡️ useEffect(() => {

    const timer = setInterval(() => {
        console.log("Ansh OP");
    }, 1000);
    console.log("useEffect");

    // Here we have a return function which will be rendered when we move to other pages after the useEffect so it kind of acts as componentWillUnmount

    return () => {
        clearInterval(timer);
        console.log("useEffect return");
    }
},[]);

console.log("render");

Output will be : 

-- render
-- useEffect
-- useEffect return

*/

    render() {
        
        // console.log(this.props.name + "Child Render Called");


  const { name, location, avatar_url, login } = this.state.userInfo;

  return (
    <div
      className="
        bg-white p-6 rounded-2xl shadow-md border border-gray-200 
        flex flex-col items-center gap-4
        transition-all hover:shadow-2xl hover:-translate-y-1
        fade-in-up
      "
    >
      <img
        src={avatar_url}
        alt="Avatar"
        className="
          w-24 h-24 rounded-full object-cover shadow-lg border-4 border-orange-500
          pop-in
        "
      />

      <h2 className="text-xl font-semibold text-gray-800">
        Name: <span className="font-medium text-gray-600">{name}</span>
      </h2>

      <p className="text-gray-600">
        📍 <span className="font-medium ">{location}</span>
      </p>

      <p className="text-gray-800 font-semibold">
        Contact: <span className="font-medium text-gray-600">{login}</span>
      </p>
    </div>
  );
    }
}

export default UserClass;