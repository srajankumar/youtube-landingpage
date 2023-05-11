// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Header from "./components/Header";
// import Sidebar from "../pages/components/Sidebar";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main>
//       <div className="fixed">
//         <Header />
//         <Sidebar />
//       </div>
//     </main>
//   );
// }

import dynamic from "next/dynamic";

// const DynamicComponentWithNoSSR = dynamic(() => import("../../components/main"), {
//   ssr: false,
// });

// const HomePage = () => (
//   <main>
//     <div className="fixed">
{
  /* <DynamicComponentWithNoSSR /> */
}
{
  /* <Sidebar /> */
}
{
  /* </div>
  </main>
);

export default HomePage; */
}

import React from "react";
// import Post from "../components/Post";
import { Sidenav, initTE } from "tw-elements";

initTE({ Sidenav });

const Home = () => {
  return (
    <div>
      <div>
        {/* <!-- Sidenav --> */}
        <div className="container mx-auto flex flex-wrap pl-2 pt-4 flex-row items-center">
          <div className="flex pt-2 pb-5">
            <button
              class=" inline-block rounded bg-primary px-5 py-0 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              data-te-sidenav-toggle-ref
              data-te-target="#sidenav-1"
              aria-controls="#sidenav-1"
              aria-haspopup="true"
            >
              <span class="block [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div className="pt-1 px-3">
              <img className="h-5 w-auto" src="/img/yt-sidebar.png" />
            </div>
          </div>
        </div>
        <nav
          id="sidenav-1"
          class="absolute left-0 top-15 z-[1035] h-auto w-60 -translate-x-full overflow-hidden bg-black shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
          data-te-sidenav-init
          data-te-sidenav-hidden="false"
          data-te-sidenav-position="absolute"
        >
          {/* <button
          class="mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-1"
          aria-controls="#sidenav-1"
          aria-haspopup="true"
        >
          <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button> */}
          <ul
            class="relative m-0 list-none px-[0.2rem]"
            data-te-sidenav-menu-ref
          >
            <div className="pl-2">
              {" "}
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                      d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"
                    />
                  </svg>
                  <div className="font-semibold px-5">Home</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                      d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"
                    />
                  </svg>
                  <div className="font-semibold px-5">Shorts</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
              </li>
            </div>
            <div className="p-1" />
            <hr />
            <div className="p-1" />
            <div className="pl-2">
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                      d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z"
                    />
                  </svg>
                  <div className="font-semibold px-5">History</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M8.765 7.076A.5.5 0 0 0 8 7.5v5.15a.5.5 0 0 0 .776.417l4-2.649a.5.5 0 0 0-.01-.84l-4-2.502ZM4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 15.5 3h-11ZM3 5.5A1.5 1.5 0 0 1 4.5 4h11A1.5 1.5 0 0 1 17 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v-9Z"
                    />
                  </svg>
                  <div className="font-semibold px-5">Your videos</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
                    />
                  </svg>
                  <div className="font-semibold px-5">Watch later</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                      d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"
                    />
                  </svg>
                  <div className="font-semibold px-5">Liked videos</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                      d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"
                    />
                  </svg>
                  <div className="font-semibold px-5">Playlist 1</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                      d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"
                    />
                  </svg>
                  <div className="font-semibold px-5">Playlist 2</div>
                </a>
              </li>
            </div>
            <div className="p-1" />
            <hr />
            <div className="p-1" />
            <div className="pl-6 py-2">Subscriptions</div>
            <div className="pl-2">
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                  <div className="font-semibold px-5">Name 1</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                  <div className="font-semibold px-5">Name 2</div>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[10px] px-4 py-0 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                  <div className="font-semibold px-5">Name 2</div>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
