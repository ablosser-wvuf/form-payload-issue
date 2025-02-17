//
// 'use client'
// import React from 'react';
// import {rSuiteComponents} from '@react-form-builder/components-rsuite'
// import {BuilderView, FormBuilder} from '@react-form-builder/designer'
// //import ComplexFieldDefinition from './Fields/ComplexField';
// import { PayloadFormStorage } from '@/lib/PayloadFormStorage';
//
//
//
// // This is where you can define the custom storage for the designer
//
// let components = rSuiteComponents.map(c => c.build())
// //components.push(ComplexFieldDefinition.build());
// const builderView = new BuilderView(components)
//
//
// interface Props {
//
// }
//
// const Builder: React.FC<Props> = (props) => {
//     console.log("INSIDE BUILDER", props);
//     let testForm = new PayloadFormStorage();
//     console.log("testForm", testForm);
//     console.log("Get Form Names",testForm.getFormNames());
//
//     return (
//
//         <div>
//            <FormBuilder  view={builderView}/>
//         </div>
//     );
// };
//
// export default Builder;