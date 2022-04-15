
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadOrphanageTitle } from "../../Firebase";


export default function SpecificOrphanage() {
    
    useEffect(() => {
        localStorage.setItem("Orphanage Name","Mother teresas home");
        let name = localStorage.getItem("Orphanage Name");
        loadOrphanageTitle(name);
      }, [])
    
    return (
        <>
        <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest" id="orphanageState"> </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4" id="orphanageName"> </h1>
                <div class="flex mb-4">
                {/* <a href="#" class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1"> </a> */}
                </div>
                    {/* <p class="leading-relaxed mb-4" >Address: C-5/10, Tata Steel Officers Enclave, Beta -1, Greater Noida
                    </p> */}
                <div class="flex border-gray-200 py-2">
                <span class="text-gray-500">Address</span>
                <span class="ml-auto text-gray-900" id="addressOrphanage"></span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Contact No.</span>
                <span class="ml-auto text-gray-900" id="contactnoOrphanage"></span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">No. of Children</span>
                <span class="ml-auto text-gray-900" id="noofchildrenOrphanage"></span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Current Status</span>
                <span class="ml-auto text-gray-900" id="currentstatusOrphanage"></span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Founder</span>
                <span class="ml-auto text-gray-900" id="founderOrphanage"></span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Founded</span>
                <span class="ml-auto text-gray-900" id="foundedOrphanage"></span>
                </div>
                <Link to="/Payment">
                <div className="flex">
                <span class="title-font font-medium text-2xl text-gray-900" id="donationrecieved">Donation Recieved: $58.00</span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" id="Donate">Donate</button>
                </div>
                </Link>
            </div>
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="" id="imageOrphanage"/>
            </div>
        </div>
        </section>
        </>
    );
}