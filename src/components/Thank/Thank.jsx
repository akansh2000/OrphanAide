import { waitThenMove } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef} from "react";
export default function Dummy_dashboard() {

  useEffect(() => {
    waitThenMove();
  }, []);

  return (
    <>
      <h1>THANK YOU!</h1>
    </>
  );
}
