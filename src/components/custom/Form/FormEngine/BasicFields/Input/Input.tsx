// import React from 'react';
//
// import {Input as InputComponent} from "@/components/ui/input"
// import {Label} from "@/components/ui/label"
//
// import {define, string, array} from "@react-form-builder/core";
// import {FormEngineValueChangeProps} from "@/components/Form/FormEngine/FormEngine";
//
//
// type FormEngineInputProps = {
//     id: string;
//     label: string;
//     placeholder?: string;
//     description?: string;
//     value: string;
//     test: [];
// } & FormEngineValueChangeProps;
//
// function FormEngineInput({id, label, placeholder, description, value, onChange}: FormEngineInputProps): JSX.Element {
//     return (
//         <div className="grid w-full max-w-sm items-center gap-1.5">
//             <Label htmlFor={id}>{label}</Label>
//             <InputComponent id={id} placeholder={placeholder} value={value} onChange={(event) => {
//                 onChange?.(event.target.value);
//             }}/>
//             <p className={"text-sm text-muted-foreground"}>{description}</p>
//         </div>
//     );
// }
//
//
// export const formEngineInput = define(FormEngineInput, 'FormEngineInput')
//     // component name displayed in the component panel in the designer
//     .name('Shadcn Input')
//     .category('Custom Fields')
//     // define the component properties that we want to edit in the designer
//     .props({
//         id: string.required.named('Unique Id').hinted('the id'),
//         label: string.required,
//         placeholder: string.required.named("Placeholder"),
//         description: string.named("Description"),
//         value: string.valued.default(""),
//         test: array
//     });
//
