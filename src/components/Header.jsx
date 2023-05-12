import React from "react";

function Header() {
  return (
    <div className="fixed w-full h-full">
      <div id="menuToggle">
        {/* top bar bg */}
        <div className="bg-[#111111] fixed top-0 left-0 w-full p-16"></div>
        {/* sidebar 4 buttons */}
        <div className="fixed md:visible invisible top-14 left-0 pt-5 pb-96 pl-1 pr-4 bg-[#111111]">
          <div className="flex flex-col py-3 cursor-pointer items-center rounded-lg text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-50 hover:bg-[#252525] focus:bg-white/10 ">
            <div className="flex justify-center">
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
            </div>

            <div className="flex py-1 font-normal justify-center text-xs">
              Home
            </div>
          </div>
          <div className="flex flex-col py-3 cursor-pointer items-center rounded-lg text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-50 hover:bg-[#252525] focus:bg-white/10 ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 13V8l-5-3l-5 3l-5-3l-5 3v5l10 6l10-6M9 11H7v2H6v-2H4v-1h2V8h1v2h2v1m6 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1Z"
                />
              </svg>
            </div>

            <div className="flex py-1 font-normal justify-center text-xs">
              Shorts
            </div>
          </div>
          <div className="flex flex-col py-3 cursor-pointer items-center rounded-lg text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-50 hover:bg-[#252525] focus:bg-white/10 ">
            <div className="flex justify-center">
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
            </div>

            <div className="flex py-1 font-normal justify-center text-xs">
              Subscriptions
            </div>
          </div>{" "}
          <div className="flex flex-col py-3 cursor-pointer items-center rounded-lg text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-50 hover:bg-[#252525] focus:bg-white/10 ">
            <div className="flex justify-center">
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
            </div>
            <div className="flex py-1 font-normal justify-center text-xs">
              Library
            </div>
          </div>
        </div>
        {/* Top scroll bar kind of thing */}
        <div className="bg-[#111111] fixed top-20 md:left-20 left-0 w-full ">
          <ul className="flex ml-2">
            <li class="relative mx-2">
              <a class="flex bg-gray-100 w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#292929] focus:bg-white/10 ">
                <div className=" text-gray-800 hover:text-gray-200 font-semibold px-3">
                  All
                </div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">CSS</div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">
                  Javascript
                </div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">
                  Frameworks
                </div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">
                  One Piece
                </div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">Manhwa</div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">Anime</div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">
                  Pencil Sketch
                </div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">Tech</div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">MacBook</div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">
                  Smartphones
                </div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">Movies</div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">Pop</div>
              </a>
            </li>
            <li class="relative mx-2">
              <a class="flex bg-[#252525] w-auto h-8 cursor-pointer items-center truncate rounded-lg px-1 py-0 text-[0.875rem] outline-none transition duration-200 ease-linear  text-gray-300 hover:bg-[#414141] focus:bg-white/10 ">
                <div className=" text-gray-200 font-semibold px-3">Music</div>
              </a>
            </li>
          </ul>
        </div>
        {/* Top bar */}
        <input className="togglee" type="checkbox" />
        <div className="fixed top-0 left-2 container mx-auto flex flex-wrap pl-3.5 pt-4 flex-row items-center">
          <div className="flex pt-1 pb-5 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="pt-1 px-6">
              <img className="h-5 w-auto" src="/img/yt-sidebar.png" />
            </div>
          </div>
        </div>
        <div className="flex md:visible invisible w-full left-1/4 pl-14 pt-4 fixed top-0">
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            placeholder="Search"
            class="w-[34rem] bg-[#121212] px-5 bg-opacity-50 rounded-l-3xl border border-[#303030] focus:ring-1 focus:bg-transparent focus:ring-indigo-400 focus:border-0 text-base outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button class="inline-flex text-white bg-[#202020] border-l-0 border border-[#303030] py-2 px-5 focus:outline-none rounded-r-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
              />
            </svg>
          </button>
          <div className="px-1"></div>
          <button class="flex bg-[#181818] cursor-pointer items-center truncate rounded-full p-2 text-[0.875rem] outline-none transition duration-200 ease-linear hover:text-inherit hover:outline-none  text-gray-100 hover:text-gray-100 hover:bg-[#303030] focus:bg-white/10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm0 7q-.425 0-.713-.288T11 20v-2.1q-2.325-.3-3.95-1.925t-1.975-3.9q-.075-.425.225-.75T6.1 11q.35 0 .625.262t.35.638q.325 1.75 1.7 2.925T12 16q1.85 0 3.225-1.175t1.7-2.925q.075-.375.362-.638t.638-.262q.475 0 .775.325t.225.75q-.35 2.275-1.975 3.9T13 17.9V20q0 .425-.288.713T12 21Z"
              />
            </svg>
          </button>
        </div>
        <div className="fixed top-0 flex right-3 text-gray-100">
          <div className="px-4 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 16q.425 0 .713-.288T11 15v-2h2q.425 0 .713-.288T14 12q0-.425-.288-.713T13 11h-2V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v2H7q-.425 0-.713.288T6 12q0 .425.288.713T7 13h2v2q0 .425.288.713T10 16Zm-6 4q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.225-.225.537-.113T22 7.7v8.6q0 .35-.313.463t-.537-.113L18 13.5V18q0 .825-.588 1.413T16 20H4Zm0-2h12V6H4v12Zm0 0V6v12Z"
              />
            </svg>
          </div>
          <div className="px-4 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7Z"
              />
            </svg>
          </div>
          <div className="px-4 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
              />
            </svg>
          </div>
        </div>
        {/* Sidebar Contents */}
        <ul
          id="menu"
          class=" pl-8 pt-5 pr-10 w-auto relative m-0 list-none"
          data-te-sidenav-menu-ref
        >
          <div>
            <div className="container mx-auto flex flex-wrap pl-3.5 pt-5 flex-row items-center">
              <div className="flex pt-1 pb-5 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pt-1 px-6">
                  <img className="h-5 w-auto" src="/img/yt-sidebar.png" />
                </div>
              </div>
            </div>
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
                    d="M22 13V8l-5-3l-5 3l-5-3l-5 3v5l10 6l10-6M9 11H7v2H6v-2H4v-1h2V8h1v2h2v1m6 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1Z"
                  />
                </svg>
                <div className="font-semibold px-5">Shorts</div>
              </a>
            </li>
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
          <div>
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
          </div>
          <div className="p-1" />
          <hr />
          <div className="p-1" />
          <div>
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
                data-te-sidenav-link-ref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m5.23 2.25l.43-1.11A1 1 0 0 1 6.59.5h.82a1 1 0 0 1 .93.64l.43 1.11l1.46.84l1.18-.18a1 1 0 0 1 1 .49l.4.7a1 1 0 0 1-.08 1.13l-.73.93v1.68l.75.93a1 1 0 0 1 .08 1.13l-.4.7a1 1 0 0 1-1 .49l-1.18-.18l-1.46.84l-.43 1.11a1 1 0 0 1-.93.64h-.84a1 1 0 0 1-.93-.64l-.43-1.11l-1.46-.84l-1.18.18a1 1 0 0 1-1-.49l-.4-.7a1 1 0 0 1 .08-1.13L2 7.84V6.16l-.75-.93a1 1 0 0 1-.08-1.13l.4-.7a1 1 0 0 1 1-.49l1.18.18ZM5 7a2 2 0 1 0 2-2a2 2 0 0 0-2 2Z"
                  />
                </svg>
                <div className="font-semibold px-5">Settings</div>
              </a>
            </li>
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
                    d="M11 16h2v2h-2zm1-14C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
                  />
                </svg>
                <div className="font-semibold px-5">Help</div>
              </a>
            </li>
            <li class="relative ">
              <a
                class="flex h-12 cursor-pointer items-center rounded-[10px] px-4 py-0 text-[0.875rem]  outline-none transition duration-200 ease-linear hover:text-gray-50 hover:outline-none  text-gray-300 hover:bg-white/10 focus:bg-white/10 "
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
                    d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM4 18.385L5.763 17H20V5H4v13.385ZM11 13h2v2h-2v-2Zm0-6h2v5h-2V7Z"
                  />
                </svg>
                <div className="font-semibold px-5">Send feedback</div>
              </a>
            </li>
          </div>
          <div className="p-1" />
          <hr />
          <div className="text-xs font-semibold py-7 text-gray-300 pl-4 pr-0">
            © 2023 Google LLC
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
