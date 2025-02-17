export const demoForm = {
    version: "1",
    actions: {
        logevent: {
            body: `
                console.log("SUBMIT");
                console.log("e", e);
                console.log("args", args);
                console.log("store",e.store.formData.data);
                
            `,
            params: {}
        }
    },
    form: {
        key: "Screen",
        type: "Screen",
        props: {},
        children: [
            {
                key: "rsInput1",
                type: "RsInput",
                props: {
                    label: {
                        value: "Input 1"
                    }
                }
            },
            {
                key: "rsInput2",
                type: "RsInput",
                props: {
                    label: {
                        value: "Input 2"
                    }
                }
            },
            {
                key: "rsButton1",
                type: "RsButton",
                props: {
                    children: {
                        value: "Submit"
                    },
                    color: {
                        value: "cyan"
                    },
                    appearance: {
                        value: "primary"
                    }
                },
                events: {
                    onClick: [
                        {
                            name: "log",
                            type: "common"
                        },
                        {
                            name: "logevent",
                            type: "code"
                        }
                    ]
                }
            }
        ]
    },
    localization: {},
    languages: [
        {
            code: "en",
            dialect: "US",
            name: "English",
            description: "American English",
            bidi: "ltr"
        }
    ],
    defaultLanguage: "en-US"
};