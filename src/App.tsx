// function App() {
//   return (
//     <>
//       <h1>Hello, I'm Diptangsu 👋</h1>
//       <p>My professional portfolio is under construction.</p>
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold">
//           Hello, I'm Diptangsu
//         </h1>

//         <p className="mt-6 text-xl text-slate-400">
//           Salesforce Developer & Consultant
//         </p>
//       </div>
//     </div>
//   )
// }

// export default App

// import Navbar from "./components/layout/Navbar";

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       <Navbar />

//       <main className="flex min-h-screen items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-6xl font-bold">
//             Hello, I'm Diptangsu
//           </h1>

//           <p className="mt-6 text-xl text-slate-400">
//             Salesforce Developer & Consultant
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";

import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#0ea5e920,transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" /> */}
      <Navbar />

      <Hero />

      {/* <About /> */}

      <Experience />

      <Skills />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;