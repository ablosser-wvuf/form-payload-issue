import React from 'react';

type ServerSideErrorsProps = {
    errorMessages: string[];
};

export default function ServerSideUseActionErrors({errorMessages}: ServerSideErrorsProps) {
    return (
        <ul className={"flex flex-col gap-2"}>
            {errorMessages.map((errorMessage, index) => {
                return (
                    <li key={`${errorMessage}-${index}`} className={'text-red-500'}>{errorMessage}</li>
                );
            })}
        </ul>
    );
}
