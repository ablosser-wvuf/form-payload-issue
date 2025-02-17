// 'use client'
// import React from 'react';
// import { VictoryArea, VictoryChart, VictoryLine, VictoryPie, VictoryScatter, VictoryTheme } from 'victory';
//
// const SecondaryWidget: React.FC = () => {
//     const getRandomNumber = () => {
//         return Math.floor(Math.random() * 10) + 1;
//     };
//     const sampleData = [
//         { x: getRandomNumber(), y: getRandomNumber() },
//         { x: getRandomNumber(), y: getRandomNumber() },
//         { x: getRandomNumber(), y: getRandomNumber() },
//         { x: getRandomNumber(), y: getRandomNumber() },
//         { x: getRandomNumber(), y: getRandomNumber() },
//     ];
//
//
//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };
//
//     return (
//         <div>
//             <VictoryChart
//                 theme={VictoryTheme.material}
//             >
//                 <VictoryArea
//                     style={{ data: { fill: getRandomColor() } }}
//                     data={sampleData.map((dataPoint) => ({
//                         x: getRandomNumber(),
//                         y: getRandomNumber(),
//                         fill: getRandomColor(),
//                     }))}
//                 />
//
//                 <VictoryPie
//                     data={[
//                         { x: "Cats", y: getRandomNumber(), fill: getRandomColor() },
//                         { x: "Dogs", y: getRandomNumber(), fill: getRandomColor() },
//                         { x: "Birds", y: getRandomNumber(), fill: getRandomColor() }
//                     ]}
//                 />
//             </VictoryChart>
//             <VictoryChart
//                 theme={VictoryTheme.material}
//                 domain={{ x: [0, 5], y: [0, 7] }}
//             >
//                 <VictoryScatter
//                     style={{ data: { fill: getRandomColor() } }}
//                     size={7}
//                     data={[
//                         { x: 1, y: 2, fill: getRandomColor() },
//                         { x: 2, y: 3, fill: getRandomColor() },
//                         { x: 3, y: 5, fill: getRandomColor() },
//                         { x: 4, y: 4, fill: getRandomColor() },
//                         { x: 5, y: 7, fill: getRandomColor() }
//                     ]}
//                 />
//             </VictoryChart>
//         </div>
//     );
// };
//
// export default SecondaryWidget;