const { useState, useEffect } = require("react")


const useOnlineStatus = () => {

    const [onlineStatus , setOnlineStatus] = useState(true);


    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;