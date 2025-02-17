// import React from 'react';
// import FeatherySubmissionView from "@/deprecated/Feathery/FeatherySubmissionView";
// import OrkesAPI from "@/lib/orkes";
//
//
// interface ServiceRequest {
//     workflowId: string;
//     // Add any other useful information here
// }
//
// /**
//  * Renders a service request card component.
//  *
//  * @component
//  * @param {Object} props - The component props.
//  * @param {string} props.workflowId - The ID of the workflow.
//  * @returns {JSX.Element} The rendered ServiceRequestCard component.
//  */
// const ServiceRequestCard: React.FC<ServiceRequest> = async ({
//     workflowId,
// }) => {
//     let orkes = new OrkesAPI();
//
//     let workflowData = await orkes.getOrkesWorkflow(workflowId);
//     console.log("DATA INPUT",workflowData.input);
//
//     return (
//         <div className=" shadow-md rounded-lg p-4">
//             <div className='text-xl font-bold mb-2'></div>
//             <div className="text-xs font-bold mb-2"> Reference ID: {workflowId}</div>
//             <FeatherySubmissionView submission={workflowData.input}></FeatherySubmissionView>
//             {/* Add any other useful information here */}
//         </div>
//     );
// };
//
// export default ServiceRequestCard;
