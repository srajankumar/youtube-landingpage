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

const DynamicComponentWithNoSSR = dynamic(() => import("./components/Main"), {
  ssr: false,
});

const HomePage = () => (
  <main>
    <div className="fixed">
      <DynamicComponentWithNoSSR />
      {/* <Sidebar /> */}
    </div>
  </main>
);

export default HomePage;
