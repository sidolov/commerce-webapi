"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9620],{75040:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return s},default:function(){return c}});var t=r(87462),a=r(45987),o=(r(35776),r(3905)),d=r(91515);const m=["components"],s={},i=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var u;const l={_frontmatter:s},p=d.Z;function c(e){let{components:n}=e,r=(0,a.Z)(e,m);return(0,o.mdx)(p,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"customerorders-query"},"customerOrders query"),(0,o.mdx)(i,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"customerOrders")," query has been deprecated. Specify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"orders")," object in the ",(0,o.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,o.mdx)("inlineCode",{parentName:"a"},"customer"))," query instead."),(0,o.mdx)("p",null,"The Sales module performs a wide variety of functions, including order, invoice, and shipment management. However, most of these functions are performed on the backend, and the customer does not have access to this information. By returning a list of customer orders, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"customerOrders")," query allows a customer to retrieve their order histories."),(0,o.mdx)("p",null,"We recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"{customerOrders {CustomerOrders}}")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerOrders"},(0,o.mdx)("inlineCode",{parentName:"a"},"customerOrders"))," reference provides detailed information about the types and fields defined in this query."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following query returns the order history of the logged in customer."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customerOrders {\n    items {\n      order_number\n      id\n      created_at\n      grand_total\n      status\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customerOrders": {\n      "items": [\n        {\n          "order_number": "000000001",\n          "id": 1,\n          "created_at": "2019-02-21 00:24:34",\n          "grand_total": 36.39,\n          "status": "processing"\n        },\n        {\n          "order_number": "000000002",\n          "id": 2,\n          "created_at": "2019-02-21 00:24:35",\n          "grand_total": 39.64,\n          "status": "closed"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"errors"},"Errors"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Error"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,o.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,o.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-orders-md-026b597d9870d6f8439a.js.map