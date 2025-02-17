// 'use client';
// import React from 'react';
// import { VictoryChart, VictoryLine } from 'victory';
//
// const PrimaryWidget: React.FC = () => {
//     const getRandomNumber = () => {
//         return Math.floor(Math.random() * 10) + 1;
//     };
//
//     const getRandomColor = () => {
//         const colors = ["red", "blue", "green"];
//         return colors[Math.floor(Math.random() * colors.length)];
//     };
//
//     return (
//         <div>
//             <VictoryChart>
//                 <VictoryLine
//                     style={{
//                         data: { stroke: getRandomColor() },
//                     }}
//                     data={[
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                     ]}
//                 />
//             </VictoryChart>
//             <VictoryChart>
//                 <VictoryLine
//                     style={{
//                         data: { stroke: getRandomColor() },
//                     }}
//                     data={[
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                     ]}
//                 />
//             </VictoryChart>
//             <VictoryChart>
//                 <VictoryLine
//                     style={{
//                         data: { stroke: getRandomColor() },
//                     }}
//                     data={[
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                         { x: getRandomNumber(), y: getRandomNumber() },
//                     ]}
//                 />
//             </VictoryChart>
//         </div>
//     );
// };
//
// export default PrimaryWidget;