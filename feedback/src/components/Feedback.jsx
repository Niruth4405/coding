import React from "react";

function submit() {
    let inputElement = document.getElementById("base-input");

    if (inputElement.ariaValueMax.length===0){
        alert("Please Enter all fields correctly");
    }
    else{
        alert("Submitted! Thank you for submitting your feedback!")
    }

}
function Feedback() {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-black h-screen w-screen">
        <div className="w-[600px] bg-gray-800 m-auto pt-[70px] p-3">
          <h1 className="text-white text-center tracking-widest ">
            FEEDBACK FORM
          </h1>
          <p className="text-white text-center mt-1 text-sm">
            Your valuable feedback will help us grow!
          </p>
          <div className="m-3 text-white p-">
            <label
              for="base-input"
              class="block mb-2 text-lg font-medium text-white dark:text-white"
            >
              Name:
            </label>
            <input
              type="text"
              id="base-input"
              placeholder="Enter name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
              required
            />
            <label
              for="base-input"
              class="block mb-2 text-lg font-medium text-white dark:text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="base-input"
              placeholder="Enter email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
              required
            />
            <label
              for="base-input"
              class="block mb-2 text-lg font-medium text-white dark:text-white"
            >
              Phone number:
            </label>
            <input
              type="tel"
              id="base-input"
              placeholder="Enter phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
              required
            />
            <label
              for="message"
              class="block mb-2 text-lg font-medium text-white dark:text-white"
            >
              Your Feedback:
            </label>
            <textarea
              id="base-input"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Leave a comment..."
            ></textarea>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-7.5 text-center me-2 mb-2 mt-3 ml-[43%]"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
