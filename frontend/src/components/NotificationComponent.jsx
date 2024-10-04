import React from "react";

const NotificationComponent = () => {
  return (
    <div className="border-2 rounded-lg p-5">
      <div class="flex items-center gap-x-3 ">
        <div class="shrink-0">
          <img
            class="shrink-0 size-16 rounded-full"
            src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
          />
        </div>

        <div class="grow">
          <h1 class="text-lg font-medium text-gray-800">Eliana Garcia</h1>
          <p class="text-sm text-gray-600">
            Graphic Designer, Web designer/developer
          </p>
        </div>
      </div>

      <div class="mt-8">
        <p class="text-sm text-gray-600">
          I am a seasoned graphic designer with over 14 years of experience in
          creating visually appealing and user-centric designs. My expertise
          spans across UI design, design systems, and custom illustrations,
          helping clients bring their digital visions to life.
        </p>

        <ul class="mt-5 flex flex-col gap-y-3">
          <li class="flex items-center gap-x-2.5">
            <svg
              class="shrink-0 size-3.5"
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
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a
              class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
              href="#"
            >
              elianagarcia997@about.me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationComponent;
