import React from "react";
import { useNavigate } from "react-router-dom";

const SettingComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form>
        <div class="bg-white rounded-xl shadow">
          <div class="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
            <div class="absolute top-0 end-0 p-4">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Upload header
              </button>
            </div>
          </div>

          <div class="pt-0 p-4 sm:pt-0 sm:p-7">
            <div class="space-y-4 sm:space-y-6">
              <div>
                <label class="sr-only">Product photo</label>

                <div class="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
                  <img
                    class="-mt-8 relative z-10 inline-block size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white"
                    src="https://preline.co/assets/img/160x160/img1.jpg"
                    alt="Avatar"
                  />

                  <div class="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <svg
                        class="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                      Upload logo
                    </button>
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-app-project-name"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Fill name
                </label>

                <input
                  id="af-submit-app-project-name"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter project name"
                />
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-project-url"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Index number
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="https://example.so"
                />
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-app-category"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Category
                </label>

                <select
                  id="af-submit-app-category"
                  class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option selected>Select a category</option>
                  <option>Ecommerce</option>
                  <option>Finance</option>
                  <option>Marketplace</option>
                  <option>Social</option>
                  <option>Others</option>
                </select>
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-app-description"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Description
                </label>

                <textarea
                  id="af-submit-app-description"
                  class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="6"
                  placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                ></textarea>
              </div>
            </div>

            <div class="mt-5 flex justify-center gap-x-2">
              <button
                onClick={handleLogout}
                type="button"
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingComponent;
