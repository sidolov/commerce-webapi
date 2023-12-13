"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9710],{80860:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return s}});var m=a(87462),n=a(45987),o=(a(35776),a(3905)),r=a(91515);const u=["components"],d={},i={_frontmatter:d},l=r.Z;function s(e){let{components:t}=e,a=(0,n.Z)(e,u);return(0,o.mdx)(l,(0,m.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"updatecustomeremail-mutation"},"updateCustomerEmail mutation"),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateCustomerEmail")," mutation to change the email address for the logged-in customer."),(0,o.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"mutation: updateCustomerEmail(email: String! password: String!): CustomerOutput")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomerEmail"},(0,o.mdx)("inlineCode",{parentName:"a"},"updateCustomerEmail"))," reference provides detailed information about the types and fields defined in this mutation."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following call updates the customer's email address."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCustomerEmail(email: "new_email@example.com", password: "roni_cost3@example.com") {\n    customer {\n      email\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCustomerEmail": {\n      "customer": {\n        "email": "new_email@example.com"\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"related-topics"},"Related topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"create-v2.md"},"updateCustomerV2 mutation"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-update-email-md-e24eaac4329bd4ad6c01.js.map