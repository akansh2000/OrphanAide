import { useEffect } from "react";
import { useNavigate } from "react-router";
import { rejectOrphanage} from "../../Firebase";


export default function AcceptRequest() {
    const navigate = useNavigate();
    rejectOrphanage();
    useEffect(() => {
        navigate("/ReviewRequests")
  }, []);


  return (
        <>
        </>
      );
    }