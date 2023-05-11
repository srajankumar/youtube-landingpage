import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul className="p-3">
        <li class="relative ">
          <a
            class="flex flex-col w-[5rem] my-6 h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" />
            </svg>
            <div className="font-semibold px-5">Home</div>
          </a>
        </li>
        <li class="relative">
          <a
            class="flex flex-col w-[5rem] my-5 h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" />
            </svg>
            <div className="font-semibold px-6">Shorts</div>
          </a>
        </li>
        <li class="relative">
          <a
            class="flex flex-col w-[5rem] my-6  h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z"
              />
            </svg>
            <div className="font-semibold px-5">Subscriptions</div>
          </a>
        </li>{" "}
        <li class="relative">
          <a
            class="flex flex-col w-[5rem] my-6 h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m11.5 14.5l7-4.5l-7-4.5v9ZM6 18V2h16v16H6Zm2-2h12V4H8v12Zm-6 6V6h2v14h14v2H2ZM8 4v12V4Z"
              />
            </svg>
            <div className="font-semibold px-5">Library</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
