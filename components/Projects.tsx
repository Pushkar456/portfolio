// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import SectionHeading from "@/components/SectionHeading";

// const Projects = () => {
//   return (
//     <section id="projects" className=" px-6 max-w-6xl mx-auto ">
//       {/* <h2 className="text-4xl font-bold text-center mb-20">
//         Projects
//       </h2> */}
//       <SectionHeading title="Projects"  />

//       {/* ================= PROJECT 1 ================= */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="grid md:grid-cols-2 gap-12 items-center mb-24 px-10   flex flex-wrap overflow-wrap"
//       >
//         <Image
//           src="/project1.png"
//           alt="Real-Time Whiteboard"
//           width={450}
//           height={400}
//           className="rounded-xl shadow-xl hover:scale-105 lg:w-500 transition duration-300  "
//         />

//         <div>
//           <h3 className="text-2xl font-semibold mb-4">
//             Real-Time Collaborative Whiteboard
//           </h3>

//           <p className="text-gray-400 leading-7">
//             Engineered real-time synchronization using WebSockets enabling
//             concurrent multi-user collaboration. Implemented a
//             Last-Write-Wins strategy to maintain consistency across distributed
//             clients and optimized canvas rendering for efficient object state
//             management.
//           </p>

//           <div className="mt-4 flex flex-wrap gap-3 text-sm">
//             <span className="bg-gray-800 px-3 py-1 rounded">Node.js</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">WebSocket</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">PostgreSQL</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">Prisma</span>
//           </div>

//           <div className="mt-6 flex gap-6">
//             <a
//               href="https://anydraw-frontend.onrender.com/"
//               target="_blank"
//               className="text-green-500 hover:underline"
//             >
//               Live Demo
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* ================= PROJECT 2 ================= */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="grid md:grid-cols-2 gap-12 items-center mb-24 px-10   flex flex-wrap overflow-wrap"

//       >
//         <Image
//           src="/project2.png"
//           alt="SecureConnect"
//           width={450}
//           height={400}
//           className="rounded-xl shadow-xl hover:scale-105 lg:w-500 transition duration-300  "

//         />

//         <div>
//           <h3 className="text-2xl font-semibold mb-4">
//             SecureConnect – MERN Authentication System
//           </h3>

//           <p className="text-gray-400 leading-7">
//             Built a full-stack MERN application with secure JWT-based
//             authentication and protected routes. Implemented complete CRUD
//             operations following MVC architecture and secured credentials using
//             bcrypt hashing and environment variables.
//           </p>

//           <div className="mt-4 flex flex-wrap gap-3 text-sm">
//             <span className="bg-gray-800 px-3 py-1 rounded">MongoDB</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">Express.js</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">React.js</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">Node.js</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">JWT</span>
//           </div>

//           <div className="mt-6 flex gap-6">
//             <a
//               href="https://github.com/Pushkar456/MERN-Project"
//               target="_blank"
//               className="text-blue-500 hover:underline"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* ================= PROJECT 3 ================= */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="grid md:grid-cols-2 gap-12 items-center mb-24 px-10   flex flex-wrap overflow-wrap"

//       >
//         <Image
//           src="/project3.png"
//           alt="Scalable Food Ordering Backend"
//           width={450}
//           height={400}
//           className="rounded-xl shadow-xl hover:scale-105 lg:w-500 transition duration-300  "

//         />

//         <div>
//           <h3 className="text-2xl font-semibold mb-4">
//             Scalable Food Ordering Backend
//           </h3>

//           <p className="text-gray-400 leading-7">
//             Developed scalable backend services using Go and GraphQL.
//             Integrated Redis caching to reduce database load and improve
//             response time. Designed atomic PostgreSQL transactions ensuring
//             data consistency.
//           </p>

//           <div className="mt-4 flex flex-wrap gap-3 text-sm">
//             <span className="bg-gray-800 px-3 py-1 rounded">Go</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">GraphQL</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">PostgreSQL</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">Redis</span>
//             <span className="bg-gray-800 px-3 py-1 rounded">Docker</span>
//           </div>

//           <div className="mt-6 flex gap-6">
//             <a
//               href="https://my-instamart-frontend.vercel.app/"
//               target="_blank"
//               className="text-green-500 hover:underline"
//             >
//               Live Demo
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;


const Projects = () => {
  return (

<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
  <div className="absolute top-40 left-10 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-40 right-10 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl"></div>
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/5 to-transparent"></div>
    <div className="text-center mb-16" style={{opacity: 1, transform: "none"}}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Projects
      </h2>
      <div className="w-24 h-1 bg-linear-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full mb-6"></div>
      <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto">A collection of projects showcasing my skills in full-stack development, real-time apps, and scalable architectures.</p>
    </div>


{/* this is project section */}

    <div className="space-y-16" style={{opacity: 1}}>
       
        {/* this is first project code section */}
      
      <div className="grid lg:grid-cols-2 gap-12 items-center " style={{opacity:1,transform:"none"}}>
        <div className="space-y-5 " style={{opacity:1,transform:"none"}}>
 
 
          <div className="space-y-4">     
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-neutral-400 font-medium text-xs uppercase tracking-wide">Full Stack / Real-time Collaboration</span>
              <span className="bg-linear-to-r from-neutral-600/30 to-neutral-500/30 border border-neutral-500/50 text-neutral-200 px-3 py-1 rounded-full text-xs font-medium">⭐ Featured</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">Real-Time Collaborative Whiteboard</h3>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">A full-stack real-time whiteboard application built using Next.js, TypeScript, and WebSockets. It allows multiple users to draw simultaneously on a shared canvas with tools like pencil, shapes, eraser, text, and resize. Every action syncs instantly via WebSockets and is persisted in a PostgreSQL database using Prisma. Features include smooth panning, zooming, selection, and a lag-free optimistic UI powered by a tempId-to-DB-ID mapping system.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-neutral-300">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Next.js</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">TypeScript</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">WebSocket</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Prisma</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Canvas API</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">PostgreSQL</span>
            </div>
          </div>
          
           {/* this is first project img description */}

          <div className="flex flex-wrap gap-4">
            <a href="https://anydraw-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-linear-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg" tabIndex={0}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
              </svg>
                Live Demo
            </a>
            <a href="https://github.com/Pushkar456/Real-Time-Collaborative-Whiteboard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-neutral-600 text-neutral-200 hover:bg-neutral-600/20 hover:border-neutral-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300" tabIndex={0}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              Source Code
            </a>
          </div>
        </div>
        <div className="relative group " style={{transform:"none"}}>
          <div className="absolute inset-0 bg-linear-to-r from-neutral-600/30 to-neutral-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
          <div className="relative bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 group-hover:border-neutral-600 transition-all duration-500 shadow-2xl">
            <div className="relative overflow-hidden rounded-xl">
              <img alt="Real-Time Collaborative Whiteboard screenshot" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" src="/execalidraw.png"></img>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <a href="https://anydraw-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="bg-linear-to-r from-neutral-600 to-neutral-700 text-white p-5 rounded-full shadow-2xl" style={{transform: "scale(0)"}}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-7 h-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                </svg>
              </a>
              </div>
            </div>
          </div>
       </div>
      </div>

{/* this is second project  */}

      <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense" style={{opacity:1,transform:"none"}}>
        <div className="space-y-5 lg:col-start-2" style={{opacity:1,transform:"none"}}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-neutral-400 font-medium text-xs uppercase tracking-wide">Full Stack</span>
              <span className="bg-linear-to-r from-neutral-600/30 to-neutral-500/30 border border-neutral-500/50 text-neutral-200 px-3 py-1 rounded-full text-xs font-medium">⭐ Featured</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">InstaMart</h3>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">InstaMart is a production-grade Swiggy-style food delivery system engineered with Go, GraphQL, PostgreSQL, Redis, and Next.js. It features transaction-safe order creation, Redis-backed cart management with TTL, secure JWT authentication, and a smooth checkout-to-payment-to-receipt flow. The frontend is built using Next.js, TailwindCSS, and Apollo Client for a responsive, modern user experience, while the backend leverages Go with gqlgen for reliability and scalability. The project include deployment on Render (backend) and Vercel (frontend), ensuring end-to-end integration between client and server.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-neutral-300">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Next.js</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Go</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">React</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">GraphQL</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Redis</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">PostgreSQL</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">TailwindCSS</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Vercel</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://my-instamart-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-linear-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg" tabIndex={0}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
              </svg>
              Live Demo
            </a>
            <a href="https://github.com/Pushkar456/my-instamart-frontend" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-neutral-600 text-neutral-200 hover:bg-neutral-600/20 hover:border-neutral-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300" tabIndex={0}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
                Source Code
            </a>
          </div>
        </div>
        <div className="relative group lg:col-start-1 lg:row-start-1" style={{transform:"none"}}>
            <div className="absolute inset-0 bg-linear-to-r from-neutral-600/30 to-neutral-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div className="relative bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 group-hover:border-neutral-600 transition-all duration-500 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl">
                <img alt="InstaMart screenshot" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" src="/instamart-web-img.png"></img>
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a href="https://my-instamart-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-linear-to-r from-neutral-600 to-neutral-700 text-white p-5 rounded-full shadow-2xl" style={{transform: "scale(0)"}}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-7 h-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                      </svg>
                    </a>
                  </div>
              </div>
            </div>
        </div>
      </div>

{/* this isthird project */}

      <div className="grid lg:grid-cols-2 gap-12 items-center " style={{opacity:1,transform:"none"}}>
        <div className="space-y-5 " style={{opacity:1,transform:"none"}}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-neutral-400 font-medium text-xs uppercase tracking-wide">Full Stack / AI Integration</span>
              <span className="bg-linear-to-r from-neutral-600/30 to-neutral-500/30 border border-neutral-500/50 text-neutral-200 px-3 py-1 rounded-full text-xs font-medium">⭐ Featured</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">Second Brain</h3>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">Second Brain is a full-stack productivity tool that helps users centralize their learning materials — articles, videos, audios, and images — all in one clean, searchable dashboard. It integrates AI embeddings via Cohere and stores them in Qdrant for semantic (meaning-based) search. Users can easily tag their content, organize it visually, and generate a secure share link (SHA-256 hash) to publicly showcase their collection. The app features JWT authentication, optimistic UI updates, Recoil-based state management, and a responsive, minimal UI built with Tailwind CSS.</p>
          </div>
          <div className="space-y-3">
            <h4  className="text-lg font-semibold text-neutral-300">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">React</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">TypeScript</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Recoil</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">MongoDB</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Qdrant</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Cohere</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">TailwindCSS</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">Express</span>
              <span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300">JWT</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://my-brain-frontend-k2nt.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-linear-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg" tabIndex={0}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
              </svg>
              Live Demo
            </a>
            <a href="https://github.com/Pushkar456/my-second-brain-frontend" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-neutral-600 text-neutral-200 hover:bg-neutral-600/20 hover:border-neutral-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300" tabIndex={0} style={{transform:"none"}}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
                Source Code
            </a>
          </div>
        </div>
        <div className="relative group " style={{transform:"none"}}>
          <div className="absolute inset-0 bg-linear-to-r from-neutral-600/30 to-neutral-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
          <div className="relative bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 group-hover:border-neutral-600 transition-all duration-500 shadow-2xl">
            <div className="relative overflow-hidden rounded-xl">
              <img alt="Second Brain screenshot" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" src="/my-second-brain-img.png"></img>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <a href="https://my-brain-frontend-k2nt.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-linear-to-r from-neutral-600 to-neutral-700 text-white p-5 rounded-full shadow-2xl" style={{transform: "scale(0)"}}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-7 h-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-neutral-400/60 to-transparent origin-top hidden lg:block z-0" style={{transform: "scaleY(1.12)"}}>
    </div>
    </div>
    <div className="text-center mt-20" style={{opacity:1,transform:"none"}}>
      <a href="https://github.com/Pushkar456" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-neutral-300 hover:text-neutral-100 font-semibold text-xl transition-colors duration-300 group" tabIndex={0} style={{transform:"none"}}>
        <span className="relative">View More Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-neutral-500 to-neutral-300 group-hover:w-full transition-all duration-300"></span>
        </span>
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
          </svg>
      </a>
    </div>
  </div>
</section>

  )}
export default Projects