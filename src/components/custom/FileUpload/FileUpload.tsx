// 'use client';
// import React, { useRef, useState } from 'react';
// import { FileOrigin, FilePondFile, FileStatus } from 'filepond';
// import { FilePond, registerPlugin } from 'react-filepond';
// //import { handleUploadS3 } from '@actions/fileUpload/actions';
// import 'filepond/dist/filepond.min.css';
//
// //plugins
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// import { auth } from '@/auth';
//
// // Register the necessary plugins
// registerPlugin(FilePondPluginFileValidateType,FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
//
//
//
//
// export async function handleUpload(file:any): Promise<void> {
// //return await handleUploadS3(file);
//
// }
//
// const FileUpload = () => {
//     const [files, setFiles] = useState<FilePondFile[]>([
//         {
//             source: '',
//             id: '',
//             serverId: '',
//             origin: FileOrigin.LOCAL,
//             status: FileStatus.PROCESSING_COMPLETE,
//             file: new File([], ""), // Create an empty File object
//             fileExtension: '',
//             fileSize: 0,
//             fileType: '',
//             filename: '',
//             filenameWithoutExtension: '',
//             abortLoad: function (): void {
//                 throw new Error('Function not implemented.');
//             },
//             abortProcessing: function (): void {
//                 throw new Error('Function not implemented.');
//             },
//             getMetadata: function (key?: string) {
//                 throw new Error('Function not implemented.');
//             },
//             setMetadata: function (key: string, value: any, silent?: boolean): void {
//                 throw new Error('Function not implemented.');
//             }
//         },
//     ]);
//
//     const pondRef = useRef(null);
//
//     const handleInit = () => {
//         console.log('FilePond instance has initialised', pondRef.current);
//     };
//
//     return (
//         <div className="App">
//             <form action="/src/app/(frontend)/api/files" method="post" encType="multipart/form-data">
//     <input type="file" name="file" />
//     <button type="submit">Upload</button>
// </form>
//             {/* Pass FilePond properties as attributes */}
//             <FilePond
//                 ref={pondRef}
//                 name="file"
//                 files={files.map((file) => file.source)}
//                 allowMultiple={true}
//                 maxFiles={3}
//                 server="/api/files"
//                 oninit={handleInit}
//                 onupdatefiles={setFiles}
//             ></FilePond>
//         </div>
//     );
// };
//
// export default FileUpload;
