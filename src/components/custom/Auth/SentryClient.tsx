// 'use client'
// import React, {useEffect} from 'react';
// import * as Sentry from '@sentry/react';
//
// interface SentryClientProps {
//     session: any
// }
//
// const SentryClient: React.FC<SentryClientProps> = ({session}) => {
//
//     console.log("INSIDE SENTRY CLIENT COMPONENT");
//
//     useEffect(() => {
//         console.log("SENTRY SESSION", session)
//         //    Sentry.setUser({
//         //     id: session?.user?.wvuID,
//         //  email: session?.user?.email,
//
//         // });
//         //    Sentry.setContext("user", {user: session?.user});
//         //   Sentry.setContext("name", {user: session?.user.name});
//     }, [session]);
//
//     return (
//         <div className="alert alert-danger" role="alert">
//             You are {session.user?.name} and your email is {session.user?.email}
//         </div>
//     );
// };
//
// export default SentryClient;