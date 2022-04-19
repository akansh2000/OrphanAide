import { useEffect } from "react";
import { acceptOrphanage, loadReviewRequest} from "../../Firebase";


export default function ReviewRequests() {

  const handleAcceptRequests = (e) => {
    e.preventDefault();
    acceptOrphanage();
  };

    useEffect(() => {
            loadReviewRequest();
      }, []);

  return (
        <>


<section class="container mx-auto p-6 font-mono">
  <div class="w-full mb-8 rounded-lg shadow-lg">
    <div class="w-full overflow-auto">
      <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Address</th>
            <th class="px-4 py-3">State</th>
            <th class="px-4 py-3">Phone</th>
            <th class="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody class="bg-white" id = "tableReviewRequest">
        </tbody>
      </table>
    </div>
  </div>
</section>
        </>
      );
    }