"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6179],{37705:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return l}});var a=n(58168),d=n(80045),r=(n(88763),n(15680)),m=n(83407);const s=["components"],o={},i={_frontmatter:o},u=m.A;function l(e){let{components:t}=e,n=(0,d.A)(e,s);return(0,r.mdx)(u,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"updatecustomeraddress-mutation"},"updateCustomerAddress mutation"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateCustomerAddress")," mutation to update the customer's address."),(0,r.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"mutation: {updateCustomerAddress(id: Int!, input: CustomerAddressInput) {CustomerAddress}}")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomerAddress"},(0,r.mdx)("inlineCode",{parentName:"a"},"updateCustomerAddress"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("h3",{id:"update-a-customer-address"},"Update a customer address"),(0,r.mdx)("p",null,"The following call updates the customer's city and postcode."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCustomerAddress(id:3, input: {\n    city: "New City"\n    postcode: "55555"\n  }) {\n    id\n    city\n    postcode\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCustomerAddress": {\n      "id": 3,\n      "city": "New City",\n      "postcode": 55555\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"update-a-customer-address-with-custom-attributes"},"Update a customer address with custom attributes"),(0,r.mdx)("p",null,"The following call updates the customer's city, postcode, and custom attributes. The merchant has previously created the ",(0,r.mdx)("inlineCode",{parentName:"p"},"station")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"services")," attributes for customer addresses."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCustomerAddress(id:3, input: {\n    city: "New City"\n    postcode: "55555"\n    custom_attributesV2: [\n      {\n        attribute_code: "station",\n        value: "Times Sq - 42 St"\n      },\n      {\n        attribute_code: "services"\n        value: "507"\n        selected_options: [\n          {\n            uid: "NTA3"\n            value: "507"\n          }\n        ]\n      }\n    ]\n  }) {\n    id\n    city\n    postcode\n    custom_attributesV2 {\n      code\n      ... on AttributeValue {\n        value\n      }\n      ... on AttributeSelectedOptions {\n        selected_options {\n          label\n          value\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCustomerAddress": {\n      "id": 3,\n      "city": "New City",\n      "postcode": 55555,\n      "custom_attributesV2": [\n        {\n          "code": "station",\n          "value": "Times Sq - 42 St"\n        },\n        {\n          "code": "services",\n          "selected_options": [\n            {\n              "label": "hospital",\n              "value": "507"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Address "id" value should be specified')),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," argument is zero.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Could not find a address with ID "XXX"')),(0,r.mdx)("td",{parentName:"tr",align:null},"The customer address specified in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," argument does not exist.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Current customer does not have permission to address with ID "XXX"')),(0,r.mdx)("td",{parentName:"tr",align:null},"The customer tries to update the address of another customer.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Field "updateCustomerAddress" argument "id" of type "Int!" is required but not provided.')),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," argument was omitted.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Field "updateCustomerAddress" argument "id" requires type Int!, found "XXX".')),(0,r.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," argument value has the wrong type.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'"input" value must be specified')),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"input")," argument was omitted or was specified but is empty.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Syntax Error: Expected Name, found )")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"input")," arguments are omitted.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,r.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")))),(0,r.mdx)("h2",{id:"related-topics"},"Related topics"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"create.md"},"createCustomer mutation")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"update.md"},"updateCustomer mutation")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"create-address.md"},"createCustomerAddress mutation")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"delete-address.md"},"deleteCustomerAddress mutation"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-update-address-md-a15b1bc1aa667c113bbd.js.map