import {ReactNode} from "react";
import {verifySession} from "@/lib/dal";

export default async function RequireAuth({children}: { children: ReactNode }) {

    // const {isAuth, userInformation} = await verifySession();

    return (
        <>
            {children}
        </>
    );

}

