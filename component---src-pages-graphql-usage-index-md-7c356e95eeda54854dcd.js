"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1313],{83539:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return c}});var t=a(87462),i=a(45987),r=(a(35776),a(3905)),o=a(91515);const l=["components"],s={},m=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var d;const u={_frontmatter:s},p=o.Z;function c(e){let{components:n}=e,a=(0,i.Z)(e,l);return(0,r.mdx)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"run-graphql-queries-and-mutations"},"Run Graphql queries and mutations"),(0,r.mdx)("h2",{id:"queries"},"Queries"),(0,r.mdx)("p",null,"A GraphQL query retrieves data from the application server in a similar manner as a REST GET call. The current set of Adobe Commerce and Magento Open Source GraphQL queries allow a mobile app or browser to render a wide variety of information, including the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A set of products to be displayed. This can include the entire catalog or those that match customer-specified criteria."),(0,r.mdx)("li",{parentName:"ul"},"Customer data. With a customer token, a query can retrieve basic information about a customer as well as billing and shipping addresses, wish lists, order history, and other sensitive data."),(0,r.mdx)("li",{parentName:"ul"},"Shopping cart contents. GraphQL supports both guest and logged-in customer carts."),(0,r.mdx)("li",{parentName:"ul"},"Store configuration values, including theme and CMS settings, the currency code, and supported countries.")),(0,r.mdx)("p",null,"The REST GET endpoints retrieve a wide variety of information on behalf of the merchant. Many of these endpoints are for retrieving backend information. For example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET /V1/customers/search")," endpoint can be used to find a subset of customers that meet certain criteria, such as those that live in a particular state or have a birthday this month. Likewise, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET /V1/invoices")," endpoint can return all the recently-generated invoices. This type of functionality is not required for the frontend, so it is not available in GraphQL queries. The queries are designed to improve the customer's user experience by quickly retrieving the data needed to render pages."),(0,r.mdx)("p",null,"Over time, the GraphQL queries will duplicate the functionality of all storefront-facing GET calls, while making it possible to query more data in one request. The main difference will be that GraphQL will support storefront use cases, while REST will support admin use cases."),(0,r.mdx)("h2",{id:"structure-of-a-query"},"Structure of a query"),(0,r.mdx)("p",null,"A query contains the following elements:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The optional keyword ",(0,r.mdx)("inlineCode",{parentName:"li"},"query"),". If no keyword is specified at the beginning of a request, the processor assumes the request is a query."),(0,r.mdx)("li",{parentName:"ul"},"An operation name for your local implementation. This name is required if you include variables. Otherwise, it is optional."),(0,r.mdx)("li",{parentName:"ul"},"The query name"),(0,r.mdx)("li",{parentName:"ul"},"The terms to search for. The terms can be in the form of objects, attributes, or a combination. Queries that don't require search terms obtain their context from the customer's authorization token or store ID, both of which are specified in the header of the call."),(0,r.mdx)("li",{parentName:"ul"},"The output object, which specifies which data the query returns.")),(0,r.mdx)("p",null,"The following example shows the structure of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cart")," query:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"query myCartQuery{\n  cart(cart_id: String!): Cart\n}\n")),(0,r.mdx)("p",null,"In the preceding example, ",(0,r.mdx)("inlineCode",{parentName:"p"},"myCartQuery")," identifies your implementation of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cart")," query. ",(0,r.mdx)("inlineCode",{parentName:"p"},"cart_id")," is a non-nullable string that defines the cart to query. (The exclamation point indicates the value is non-nullable.) The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Cart")," output object defines which fields to return."),(0,r.mdx)("p",null,"Now let's fully define a query:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'query myCartQuery{\n  cart(cart_id: "1WxKm8WUm3uFKXLlHXezew5WREfVRPAn") {\n    items {\n      id\n      quantity\n    }\n    billing_address {\n      firstname\n      lastname\n      postcode\n      }\n    shipping_addresses {\n      firstname\n      lastname\n      postcode\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"In this example, we've supplied a cart ID as input, (which was generated by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"createEmptyCart")," mutation). The output includes the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cart_id")," as well as selected information about the items in the cart and the billing and shipping addresses."),(0,r.mdx)("p",null,"The following example shows the query response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "cart": {\n      "items": [\n        {\n          "id": "5",\n          "quantity": 1\n        }\n      ],\n      "billing_address": {\n        "firstname": "Veronica",\n        "lastname": "Costello",\n        "postcode": "49628-7978"\n      },\n      "shipping_addresses": [\n        {\n          "firstname": "Veronica",\n          "lastname": "Costello",\n          "postcode": "49628-7978"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.mdx)(m,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Adobe Commerce and Magento Open Source will not run a query that is too complex. The number of fields, objects, and nodes are factors in determining the complexity of a query."),(0,r.mdx)("h2",{id:"query-variables"},"Query variables"),(0,r.mdx)("p",null,"Specifying variables in a query can help increase code re-use. Consider the following requirements when generating a query that contains one or more variables:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"All variables must be declared up-front, immediately after the operation name."),(0,r.mdx)("li",{parentName:"ul"},"Variables are typed: they can be scalar or an object."),(0,r.mdx)("li",{parentName:"ul"},"You must use all declared variables. Object variables are defined in JSON.")),(0,r.mdx)("p",null,"The following example declares the ",(0,r.mdx)("inlineCode",{parentName:"p"},"$cart_id")," variable. It is referenced in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"input")," statement."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"query myCartQueryWithVariable($cart_id: String!) {\n  cart(cart_id: $cart_id) {\n    items {\n      id\n      quantity\n    }\n    billing_address {\n      firstname\n      lastname\n      postcode\n    }\n    shipping_addresses {\n      firstname\n      lastname\n      postcode\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"Variables are defined separately in JSON:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "cart_id": "1WxKm8WUm3uFKXLlHXezew5WREfVRPAn"\n}\n')),(0,r.mdx)("h2",{id:"mutations"},"Mutations"),(0,r.mdx)("p",null,"While GraphQL queries perform read operations, mutations change the data. A mutation can create, update, or delete objects and fields. In REST terminology, queries operate like ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET")," requests, while mutations are similar to ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"PUT"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"DELETE"),"."),(0,r.mdx)("h3",{id:"structure-of-a-mutation"},"Structure of a mutation"),(0,r.mdx)("p",null,"A mutation contains the following elements:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The keyword ",(0,r.mdx)("inlineCode",{parentName:"li"},"mutation")),(0,r.mdx)("li",{parentName:"ul"},"An operation name for your local implementation. This name is required if you include variables. Otherwise, it is optional."),(0,r.mdx)("li",{parentName:"ul"},"The mutation name"),(0,r.mdx)("li",{parentName:"ul"},"The input object or attributes. Most mutations require an input object that contains data or individual attributes for the application server to process. However, some mutations, such as ",(0,r.mdx)("inlineCode",{parentName:"li"},"createEmptyCart"),", do not require an input object. In this particular case, the authorization token passed with the request provides the needed context."),(0,r.mdx)("li",{parentName:"ul"},"The output object, which specifies which data the mutation returns.")),(0,r.mdx)("p",null,"The following example shows the structure of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation myCreateCustomer {\n  createCustomer(\n    input: CustomerInput!\n  ) {\n    CustomerOutput\n  }\n}\n")),(0,r.mdx)("p",null,"In this example, ",(0,r.mdx)("inlineCode",{parentName:"p"},"myCreateCustomer")," identifies your implementation.  ",(0,r.mdx)("inlineCode",{parentName:"p"},"CustomerInput")," is a non-nullable object that defines a customer. (The exclamation point indicates the value is non-nullable.) The ",(0,r.mdx)("inlineCode",{parentName:"p"},"CustomerOutput")," object defines which fields to return."),(0,r.mdx)("p",null,"Now let's take a look at a fully-defined mutation. This time, we'll specify the minimum fields needed as input to create a customer (",(0,r.mdx)("inlineCode",{parentName:"p"},"firstname"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"lastname"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"email"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"password"),"). We could include the same fields in the output, but GraphQL allows you to return only the data you need, which is the customer ",(0,r.mdx)("inlineCode",{parentName:"p"},"email"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation myCreateCustomerNoVariables {\n  createCustomer(\n    input: {\n      firstname: "Melanie"\n      lastname: "Shaw"\n      email: "mshaw@example.com"\n      password: "Password1"\n    }\n  ) {\n    customer {\n      email\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"The mutation returns the customer email:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCustomer": {\n      "customer": {\n        "email" : "mshaw@example.com"\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"mutation-input"},"Mutation input"),(0,r.mdx)("p",null,"A mutation can require either an object as input (as shown above) or one or more scalar values. When specifying an object, you must include the ",(0,r.mdx)("inlineCode",{parentName:"p"},"input: {}")," keyword. When the mutation requires scalar values, specify the field name and value, as shown below:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation myGenerateCustomerToken {\n  generateCustomerToken(\n    email: "mshaw@example.com"\n    password: "Password1"\n  ) {\n    token\n  }\n}\n')),(0,r.mdx)("h3",{id:"mutation-variables"},"Mutation variables"),(0,r.mdx)("p",null,"Specifying variables in a mutation can help increase code re-use. Consider the following requirements when generating a mutation that contains one or more variables:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"All variables must be declared up-front, immediately after the operation name."),(0,r.mdx)("li",{parentName:"ul"},"Variables are typed: they can be scalar or an object."),(0,r.mdx)("li",{parentName:"ul"},"You must use all declared variables. Object variables are defined in JSON.")),(0,r.mdx)("p",null,"The following example declares the ",(0,r.mdx)("inlineCode",{parentName:"p"},"$CustomerInput")," variable. It is referenced in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"input")," statement."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation myCreateCustomerWithVariables($CustomerInput: CustomerInput!) {\n  createCustomer(\n    input: $CustomerInput\n  ) {\n    customer {\n      email\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"$CustomerInput")," variable is defined as a JSON object:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "CustomerInput": {\n    "firstname": "Melanie",\n    "lastname": "Shaw",\n    "email": "mshaw@example.com",\n    "password": "Password1"\n  }\n}\n')),(0,r.mdx)("p",null,"This example updates the customer's email using two scalar variables (",(0,r.mdx)("inlineCode",{parentName:"p"},"$email"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"$password"),")."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation myUpdateCustomer($email: String!, $password: String!) {\n  updateCustomer(\n    input: {\n      email: $email\n      password: $password\n    }\n  ) {\n    customer {\n      email\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"The variables are defined separately."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "melanie.shaw@example.com",\n  "password": "Password1"\n}\n')),(0,r.mdx)("h2",{id:"timestamps"},"Timestamps"),(0,r.mdx)("p",null,"Commerce stores timestamps as UTC (Coordinated Universal time) values and returns timestamp fields in query or mutation responses in this format. You must implement custom code to convert the timestamps to other values."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-usage-index-md-7c356e95eeda54854dcd.js.map