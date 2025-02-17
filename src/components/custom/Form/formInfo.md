
## Form Information

This contains information on how to use react hook form and zod. We will also be using form actions. This process is
slightly complicated so it will be explained here.

### React Hook Form & Zod

First, set up your zod schema. We set up a preprocess function that will be used later to "transform" the `FormData`
received in our
form action to a boolean value.

```typescript
import {z} from "zod";

//preprocess function that will come in handy in our form action
const zodPreprocessStringToBool = z.preprocess((val) => {
    if (typeof val === "string") {
        if (val.toLowerCase() === "true") {
            return true;
        }

        if (val.toLowerCase() === "false") {
            return false;
        }
    }

    return val;
}, z.boolean());

//schema
export const SearchConstituentFormSchema = z.object({
    constituentId: z.string().trim().max(15, {message: "ConstituentId cannot be more than 15 characters."}).or(z.literal('')),
    firstName: z.string().trim().max(50, {message: "First Name has a maximum of 50 characters."}).or(z.literal('')),
    middleName: z.string().trim().max(50, {message: "Middle Name has a maximum of 50 characters."}).or(z.literal('')),
    lastName: z.string().trim().max(50, {message: "Last Name has a maximum of 50 characters."}).or(z.literal('')),
    maidenNameAlias: z.string().trim().max(50, {message: "Maiden Name/Alias has a maximum of 50 characters."}).or(z.literal('')),
    organizationName: z.string().trim().max(50, {message: "Organization Name has a maximum of 50 characters."}).or(z.literal('')),
    email: z.string().trim().email().max(30, {message: "Email has a maximum of 30 characters."}).or(z.literal('')),
    phone: z.string().trim().max(20, {message: "Phone has a maximum of 20 characters."}).or(z.literal('')),
    address: z.string().trim().max(100, {message: "Address has a maximum of 100 characters."}).or(z.literal('')),
    city: z.string().trim().max(50, {message: "City has a maximum of 50 characters."}).or(z.literal('')),
    state: z.string().trim().max(50, {message: "State has a maximum of 50 characters."}).or(z.literal('')),
    zip: z.string().trim().max(50, {message: "Zip has a maximum of 50 characters."}).or(z.literal('')),
    dateOfBirth: z.coerce.date({message: "Date must be a valid date."}).or(z.literal('')), //exists as YYYYMMDD in crm. the dob shadcn field stores it as a literal date object
    primaryClassYear: z.string().trim().length(4, {message: "Primary Class Year must be a 4 digit year."}).or(z.literal('')),
    primaryBusinessName: z.string().trim().max(50, {message: "Primary Business has a maximum of 50 characters."}).or(z.literal('')),
    searchIndividual: zodPreprocessStringToBool,
    searchOrganization: zodPreprocessStringToBool,
    searchGroup: zodPreprocessStringToBool,
    includeDeceased: zodPreprocessStringToBool,
});

//export type, we will need this later for react hook form
export type TSearchConstituentZodFormSchema = z.infer<typeof SearchConstituentFormSchema>;
```

We need to import the `useForm` hook from `react-hook-form`. We will tell the useForm hook the type of our schema and
specify what resolver to use,
in this case we want to use the schema defined above. We will also set the default values for each form field value. The
type of the values depends
on which form components you use. If you are using the wrapper components for shadcn components they are
located in `/src/components/Form/ShadcnReactHookFields/Fields`.

```typescript
import {useForm} from "react-hook-form";

const form = useForm<TSearchConstituentZodFormSchema>({ //specify type of schema
    resolver: zodResolver(SearchConstituentFormSchema), //pass in resolver, which is our form schema 
    defaultValues: { //set default values
        constituentId: "",
        firstName: "",
        middleName: "",
        lastName: "",
        maidenNameAlias: "",
        organizationName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        primaryClassYear: "",
        primaryBusinessName: "",
        searchIndividual: true,
        searchOrganization: false,
        searchGroup: false,
        includeDeceased: true
    },
});
```

Below is an example of putting everything (and more) together.

```typescript jsx
import React, {useActionState, useRef, useState, useTransition} from 'react';

import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ButtonLoader from "@/components/Button/ButtonLoader";
import {
    SearchConstituentFormSchema,
    TSearchConstituentZodFormSchema
} from "@/formsAndSchemas/constituentLookup/searchConstituent/searchConstituentZodFormSchema";
import RenderShadcnReactHookFields from "@/components/Form/ShadcnReactHookFields/RenderShadcnReactHookFields";
import {SearchConstituentFormConfig} from "@/formsAndSchemas/constituentLookup/searchConstituent/searchConstituentFormConfig";
import {searchConstituent} from "@actions/formEngineComponents/constituentLookup/actions";
import {Ban, Search} from "lucide-react";
import {Button} from "@/components/ui/button";
import SearchConstituentResults
    from "@/components/Form/FormEngine/CustomFields/Lookup/ConstituentLookup/SearchConstituent/SearchConstituentResults";
import useActionStateError from "@hooks/actionState/useActionStateError";
import ServerSideUseActionErrors from "@/components/Form/GenericFormComponents/ServerSideUseActionErrors";
import {
    ConstituentType
} from "@/components/Form/FormEngine/CustomFields/Lookup/ConstituentLookup/ConstituentInformation/ConstituentInformation";
import {hasOneValidValueInSubmissionData, parseFormSubmissionValuesToFormDataInstance} from "@/lib/utils";
import {searchConstituentInitialErrors} from "@/formsAndSchemas/constituentLookup/searchConstituent/initialErrors";


export type SearchConstituentResults = {
    constituentId: string | null;
    constituentType: ConstituentType | null;
    fullName: string | null;
    email: string | null;
    address: string | null;
    dateOfBirth: string | null;
    // primaryClassYear: string;
    primaryBusinessName: string | null;
}[];


export type SearchConstituentFormState = {
    errors: {
        validation: Record<keyof TSearchConstituentZodFormSchema, string>;
        other?: string;
    }
    searchResults: SearchConstituentResults;
};

const initialState: SearchConstituentFormState = {
    errors: {
        validation: searchConstituentInitialErrors,
        other: ""
    },
    searchResults: []
};


type SearchConstituentFormProps = {
    handleConstituentSearchSelectionClose: () => void;
    handleAdvancedConstituentSearchSelection: (constituentId: string) => void;
};


export default function SearchConstituentForm({
                                                  handleAdvancedConstituentSearchSelection,
                                                  handleConstituentSearchSelectionClose
                                              }: SearchConstituentFormProps) {

    const [state, submitAction] = useActionState(searchConstituent, initialState);
    const {isError, errorMessages} = useActionStateError(state.errors);
    const [isInitialSearch, setIsInitialSearch] = useState(true);
    const [isPending, startTransition] = useTransition();
    
    const form = useForm<TSearchConstituentZodFormSchema>({
        resolver: zodResolver(SearchConstituentFormSchema),
        defaultValues: {
            constituentId: "",
            firstName: "",
            middleName: "",
            lastName: "",
            maidenNameAlias: "",
            organizationName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            primaryClassYear: "",
            primaryBusinessName: "",
            searchIndividual: true,
            searchOrganization: false,
            searchGroup: false,
            includeDeceased: true
        },
    });

    return (
        <div className={"flex flex-col gap-4"}>
            <Form {...form}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    form.handleSubmit((values) => {

                        if (!hasOneValidValueInSubmissionData(values)) {
                            form.setError("root", {
                                type: "manual",
                                message: "Please enter at least one value to search on.",
                            });
                            return;
                        }
                        
                        form.clearErrors("root");

                        const formData = parseFormSubmissionValuesToFormDataInstance(values)

                        setIsInitialSearch(false);

                        startTransition(async () => {

                            submitAction(formData);
                        });
                    })(event);
                }}>
                    <div className={"flex flex-col gap-4"}>

                        {isError ? <ServerSideUseActionErrors errorMessages={errorMessages}/> : null}

                        {form.formState.errors.root &&
                            <p className={'text-destructive'}>{form.formState.errors.root.message}</p>}

                        <RenderShadcnReactHookFields config={SearchConstituentFormConfig}
                                                     formControls={form.control}/>

                        <div className={"flex gap-3"}>
                            <ButtonLoader isPending={isPending} buttonText={"Search Constituent"} icon={<Search/>}/>
                            <Button type="button" variant={"destructive"} disabled={isPending} onClick={() => {
                                form.reset();
                            }}>
                                <Ban/>Reset
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
            <SearchConstituentResults searchResults={state.searchResults}
                                      handleAdvancedConstituentSearchSelection={handleAdvancedConstituentSearchSelection}
                                      handleConstituentSearchSelectionClose={handleConstituentSearchSelectionClose}
                                      isLoading={isPending}
                                      isError={isError}
                                      isInitialSearch={isInitialSearch}

            />
        </div>
    );
}
```
A lot of things are happening here. We also need to do some whacky things as of now to get react hook form, zod, and server actions all working together. The important things are:
1. We pass a callback to the `onSubmit()` handler on the `<form>`. Inside the callback we will call `event.preventDefault()` to prevent the default events from happening. We then call `form.handleSubmit()`. The logic inside the `form.handleSubmit()` handler only runs if the initial form validation succeeded. By this point the zod resolver has already been called and transformed or preprocessed any values that were in the schema. So if you were transforming a boolean into a string, it should be a string by now.
2. We use a helper function `hasOneValidValueInSubmissionData()` to check to see if there is at least one value submitted before we continue. If there is isn't we set an error on the root of the form.
3. Our server action expects data as `FormData`. We then call a helper function `parseFormSubmissionValuesToFormDataInstance()` and pass in the form values to convert the data into an instance of `FormData`.
4. We need to make use of the new react 19 `useTransition()` hook to call our server action. Or more precisely it is the server action returned from passing in our server action to `useActionState`. 

We now need to handle the `FormData` in our server action we defined.

```typescript
export async function searchConstituent(currentState: SearchConstituentFormState, formData: unknown): Promise<SearchConstituentFormState> {

    const {isAuth, userInformation} = await verifySession();
    
    if (!(formData instanceof FormData)) {
        return {
            errors: {
                validation: searchConstituentInitialErrors,
                other: "Invalid form data."
            },
            searchResults: []
        };
    }
    
    const rawFormData = Object.fromEntries(formData);
    
    const parsedFormData = SearchConstituentFormSchema.safeParse(rawFormData);
    
    let constituentSearchErrors = searchConstituentInitialErrors;

    //Return early if the form data failed parse
    if (!parsedFormData.success) {
        
        parsedFormData.error.issues.forEach((issue) => {
            constituentSearchErrors = {...constituentSearchErrors, [issue.path[0]]: issue.message}
        });
        
        return {
            errors: {
                validation: constituentSearchErrors,
            },
            searchResults: []
        };
    }

    //should have valid data now
    const data = parsedFormData.data;

    
    let results: SearchConstituentResults;

    try {
        results = await fastify.post<SearchConstituentResults>("/api/v1/form-field-lookups/constituent/advancedSearch", data);
    } catch (error) {

        const errorMessage = getErrorMessage(error);

        return {
            errors: {
                validation: searchConstituentInitialErrors,
                other: errorMessage
            },
            searchResults: []
        };
    }


    return {
        errors: {
            validation: constituentSearchErrors
        },
        searchResults: results
    };
    
}
```
This is a little more straightforward.
1. We make sure whomever is calling our action is authenticated. All server actions are converted into POST endpoints, meaning anyone could access them. Therefore, it is **critical** that we check authentication first.
2. We then make sure that the data being passed into our function is an instance of `FormData`. After that we extra the data and then parse it using our schema.
3. After the data is parsed, any preprocess or transformations are done on the data. Note that `FormData` values can only be strings, Files, or Blobs. This is where our `zodPreprocessStringToBool()` converts the string values of `'true'` and `'false'` to booleans (which is expected on our backend).
4. We check for errors, then if our data passes our schema validation we know we have valid data. We then can call our api and know we have the correct data. Note that at no point do we actually throw any errors. If there are any errors we return an object with an error property set and passing along the error message back to the application to display.
