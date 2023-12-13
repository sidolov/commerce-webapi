"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3044],{12381:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return l}});var n=a(87462),r=a(45987),m=(a(35776),a(3905)),s=a(91515),u=a(19040);const o=["components"],d={},i={_frontmatter:d},p=s.Z;function l(e){let{components:t}=e,a=(0,r.Z)(e,o);return(0,m.mdx)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"updatecustomerv2-mutation"},"updateCustomerV2 mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCustomerV2")," mutation updates the personal information in an existing customer account. Use the ",(0,m.mdx)("a",{parentName:"p",href:"update-email.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"updateCustomerEmail")," mutation")," to update the customer's email address."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCustomerV2")," mutation supersedes the ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCustomer")," mutation as the means to update a customer account. The input objects differ between these two mutations. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCustomer")," mutation required the ",(0,m.mdx)("inlineCode",{parentName:"p"},"CustomerInput")," object, as did the ",(0,m.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation. Updating a customer does not require any specific attribute, while several attributes are required when you create a customer. You could not determine this by looking at the schema for those mutations. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCustomerV2")," mutation requires the ",(0,m.mdx)("inlineCode",{parentName:"p"},"CustomerUpdateInput")," object, which it does not share with the ",(0,m.mdx)("a",{parentName:"p",href:"create-v2.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"createCustomerV2")," mutation"),"."),(0,m.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,m.mdx)("p",null,"In keeping with current security and privacy best practices, if you include the ",(0,m.mdx)("inlineCode",{parentName:"p"},"date_of_birth")," input attribute, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data."),(0,m.mdx)(u.Z,{mdxType:"BetaNote"}),(0,m.mdx)("p",null,"As of version 2.4.7, you can use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"custom_attributes")," field to define an array of custom attributes to update."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"mutation: {updateCustomerV2(input: CustomerUpdateInput!) {CustomerOutput}}")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomerV2"},(0,m.mdx)("inlineCode",{parentName:"a"},"updateCustomerV2"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("h3",{id:"update-a-customer"},"Update a customer"),(0,m.mdx)("p",null,"The following call updates the first name and the newsletter subscription status for a specific customer."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCustomerV2(\n    input: {\n      firstname: "Robert"\n      is_subscribed: false\n    }\n  ) {\n    customer {\n      firstname\n      is_subscribed\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCustomerV2": {\n      "customer": {\n        "firstname": "Robert",\n        "is_subscribed": false\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h3",{id:"update-a-customer-with-custom-attributes"},"Update a customer with custom attributes"),(0,m.mdx)(u.Z,{mdxType:"BetaNote2"}),(0,m.mdx)("p",null,"The following call updates the first name, newsletter subscription status, and custom attribute values for a specific customer. The merchant has previously created the ",(0,m.mdx)("inlineCode",{parentName:"p"},"random_attribute")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"studies")," attributes for customer addresses."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCustomerV2(\n    input: {\n      firstname: "Robert"\n      is_subscribed: false\n      custom_attributes: [\n        {\n          attribute_code: "random_attribute"\n          value: "abc123"\n        },\n        {\n          attribute_code: "studies"\n          value: "502"\n          selected_options: [\n            {\n              uid: "NTEx"\n              value: "502"\n            }\n          ]\n        }\n      ]\n    }\n  ) {\n    customer {\n      firstname\n      is_subscribed\n      custom_attributes {\n        code\n        ... on AttributeValue {\n          value\n        }\n        ... on AttributeSelectedOptions {\n          selected_options {\n            label\n            value\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCustomerV2": {\n      "customer": {\n        "firstname": "Robert",\n        "is_subscribed": false,\n        "custom_attributes": [\n          {\n            "code": "random_attribute",\n            "value": "abc123"\n          },\n          {\n            "code": "studies",\n            "selected_options": [\n              {\n                "label": "MBA",\n                "value": "502"\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"create-v2.md"},"createCustomerV2 mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"create-address.md"},"createCustomerAddress mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"update-address.md"},"updateCustomerAddress mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"update-email.md"},"updateCustomerEmail mutation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"delete-address.md"},"deleteCustomerAddress mutation"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-update-v-2-md-c754d9ca6c6af7f6a2ea.js.map