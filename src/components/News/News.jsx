
import { React, useEffect } from "react";
import { loadNewsData } from "../../Firebase";

export default function News(){
    
    useEffect(() => {
        loadNewsData();
      }, [])

    return (
        <>

            <section class="text-gray-600 ml-20 mr-20 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">LATEST NEWS</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
                </div>
                <div class="flex flex-wrap -m-4" id = "itemCards">
                </div>
            </div>
            </section>
            <script></script>
        </>
    );
}