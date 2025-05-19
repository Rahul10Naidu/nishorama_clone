import { use } from "react";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const getSize = () => {
  return window.innerWidth;
};

export const ContextProvider = (props) => {
  const [screenWidth, setScreenWidth] = useState(getSize());
  const [isSearchActive, setIsSearchActive] = useState(false);

  const body = document.body;

  //----------------------------------------------------------------------------------------------------
  //Setting Screen Width

  const resized = () => {
    setScreenWidth(getSize());
  };

  useEffect(() => {
    resized();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resized);
    return () => {
      window.removeEventListener("resize", resized);
    };
  }, [screenWidth]);

  //------------------------------------------------------------------------------

  const rotate = (event) => {
    event.target.classList.toggle("arrow-reverse");

    // console.log(event.target.children);
    // target.classList.toggle("arrow-reverse");
  };

  // Search Header popping up

  const searchHeaderFunction = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    if (isSearchActive === true) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [isSearchActive]);

  return (
    <Context.Provider
      value={{
        screenWidth,
        getSize,
        rotate,
        searchHeaderFunction,
        isSearchActive,
        setIsSearchActive,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
