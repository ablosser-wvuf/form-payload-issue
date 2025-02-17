// 'use client'
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
//
// interface DashboardProps {
//   primary: React.ReactNode[];
//   secondary: React.ReactNode[];
// }
//
// const Jobs = ["Budget Officer", "Finance Reporting", "Deans and Directors", "Helpdesk"];
//
// const Dashboard: React.FC<DashboardProps> = ({ primary, secondary }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === Jobs.length - 1 ? 0 : prevIndex + 1));
//   };
//
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? Jobs.length - 1 : prevIndex - 1));
//   };
//
//
//   return (
//     <div className="dashboard">
//
//         <div  className="h-screen w-screen bg-gray-100 flex flex-col">
//             {/* Top Bar */}
//             <div className="bg-blue-500 py-4">
//                 <div className="container mx-auto flex justify-center">
//                 <button  className="text-white bg-blue-700 px-4 py-2 rounded-lg" onClick={prevSlide}>Previous</button>
//                  <h1 className="text-white text-2xl font-bold mr-5 ml-5">{Jobs[currentIndex]}</h1>
//         <button  className="text-white bg-blue-700 px-4 py-2 rounded-lg" onClick={nextSlide}>Next</button>
//
//                 </div>
//             </div>
//
//             <AnimatePresence mode="wait" initial={false}>
//             <motion.div
//                 key={currentIndex}
//                 className="slide"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//             >
//
//             {/* Main Content */}
//             <div className="container mx-auto py-8 flex flex-col md:flex-row gap-8">
//                 {/* Left Column */}
//                 <div className="w-full md:w-3/4 bg-white p-4 rounded-lg">
//                 <h2 className="text-xl font-bold mb-4">{Jobs[currentIndex]} Main Widgets</h2>
//
//                 {primary[0]}
//                 </div>
//
//                 {/* Right Column */}
//                 <div className="w-full md:w-1/4 bg-white p-4 rounded-lg">
//                 <h2 className="text-xl font-bold mb-4">{Jobs[currentIndex]} Secondary Widgets</h2>
//                 {secondary[0]}
//                 </div>
//             </div>
//
//
//
//
//             </motion.div>
//         </AnimatePresence>
//         </div>
//
//     </div>
//   );
// };
//
// export default Dashboard;
