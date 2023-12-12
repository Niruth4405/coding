import React from "react";

function About() {
  return (
    <>
      <div className="bg-black">
        <h1 className="text-center text-3xl font-bold text-white tracking-widest">TEAM</h1>
        <p className="text-white text-center mt-2 text-sm">Meet the Founders & Developers of StudyBuddy</p>
        <div className="flex justify-evenly p-2">
          <div class="w-full max-w-sm bg-gray-800 border shadow-2xl border-black rounded-lg dark:bg-gray-800 dark:border-gray-700 mt-10">
            <div class="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span class="sr-only">Open dropdown</span>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul class="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="niruth_photo.jpg"
                alt=""
              />
              <h5 class="mb-1 text-xl font-medium text-white dark:text-white">
                Niruth Ananth
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Front-end developer
              </span>
              <div class="flex mt-4 md:mt-6">
                <a
                  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect+
                </a>
              </div>
            </div>
          </div>

          <div class="w-full max-w-sm bg-gray-800 border shadow-2xl border-black rounded-lg  dark:bg-gray-800 dark:border-gray-700 mt-10">
            <div class="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span class="sr-only">Open dropdown</span>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul class="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt=""
              />
              <h5 class="mb-1 text-xl font-medium text-white dark:text-white">
                Manavaditya
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Front-end developer
              </span>
              <div class="flex mt-4 md:mt-6">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect+
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
