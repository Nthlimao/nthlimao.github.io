import { useEffect, useState } from "react";

const Loading = () => {
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setDisplay("none");
    }, 800);
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        background: "#18181E",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        alignItems: "center",
        justifyContent: "center",
        animationDelay: "0.5s",
        animationDuration: "1s",
        animationName: "fadeOut",
        display,
      }}
    >
      <img src="assets/images/loading.svg" />
    </div>
  );
};

export default Loading;
