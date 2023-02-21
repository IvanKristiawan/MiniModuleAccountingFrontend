import "./styles.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { screenSize, setScreenSize } = useStateContext();
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div></div>;
};

export default App;
