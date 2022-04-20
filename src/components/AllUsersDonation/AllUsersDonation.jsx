import { FaUserAlt } from "react-icons/fa";
import logo from "../images/logo1.png";
import { useEffect } from "react";
import {
    allUserDonationDetails,
  } from "../../Firebase";
export default function Dummy_dashboard() {

  useEffect(() => {
    allUserDonationDetails();
  }, []);

  return (
    <>
      <ul className="flex flex-col py-4">
        <li>
          <section className="text-gray-600 body-font">
            <div
              className="bg-white p-8 rounded-md w-full my-auto"
              style={{ marginTop: "2rem" }}
            >
              <div className=" flex items-center justify-between pb-6 ">
                <div>
                  <h2 className="text-gray-60 font-semibold">
                    All Users' Donation
                  </h2>
                  <span className="text-xs">All donations till now</span>
                </div>
              </div>
              <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Users' Name
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Donated Amount
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Donation time
                          </th>
                        </tr>
                      </thead>
                      <tbody id="table-dataUser"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
      </ul>


    </>
  );
}
