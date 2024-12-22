import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  const timer = useRef(5);
  const navigator = useNavigate();
  useEffect(() => {
    setInterval(() => {
      timer.current -= 1;
      if (timer.current == 0) {
        navigator("/");
      }
    }, 1000);

  }, []);
  return (
    <>
      <div className="flex">
        <h3>ErrorComponent</h3>
        <br></br>
        <p>it automatically redirect to main page in few sec</p>
      </div>
    </>
  );
};

export default ErrorComponent;
