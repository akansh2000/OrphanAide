import { useEffect } from "react";
import { useNavigate } from "react-router";
import { acceptOrphanage, loadReviewRequest} from "../../Firebase";


export default function AcceptRequest() {
    const navigate = useNavigate();
    acceptOrphanage();
    useEffect(() => {
        navigate("/ReviewRequests")
  }, []);


  return (
        <>
        </>
      );
    }