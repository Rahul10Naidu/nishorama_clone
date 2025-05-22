import { use } from "react";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const getSize = () => {
  return window.innerWidth;
};

export const ContextProvider = (props) => {
  const [screenWidth, setScreenWidth] = useState(getSize());
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isProdBoxAct, setIsProdBoxAct] = useState(false);

  const body = document.body;

  const stopScrolling = (state) => {
    if (state === true) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  };

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
  // -------------------------------------------------------

  const searchHeaderFunction = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    stopScrolling(isSearchActive);
  }, [isSearchActive]);

  // ---------------------------------------------------------------

  // Profile Box Activation

  const profileBoxActivation = () => {
    setIsProfileActive(!isProfileActive);
  };

  useEffect(() => {
    stopScrolling(isProfileActive);

    return () => {
      stopScrolling();
    };
  }, [isProfileActive]);

  // Product Box Activation
  const handleProductBox = () => {
    setIsProdBoxAct(!isProdBoxAct);
  };

  useEffect(() => {
    stopScrolling(isProdBoxAct);

    return () => {
      stopScrolling();
    };
  }, [isProdBoxAct]);

  return (
    <Context.Provider
      value={{
        screenWidth,
        getSize,
        rotate,
        searchHeaderFunction,
        isSearchActive,
        setIsSearchActive,
        isProfileActive,
        profileBoxActivation,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
