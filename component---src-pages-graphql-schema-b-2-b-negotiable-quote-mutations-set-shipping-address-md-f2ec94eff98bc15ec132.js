"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2583],{1198:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return u}});var a=t(87462),s=t(45987),i=(t(35776),t(3905)),o=t(91515);const d=["components"],p={},r={_frontmatter:p},m=o.Z;function u(e){let{components:n}=e,t=(0,s.Z)(e,d);return(0,i.mdx)(m,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"setnegotiablequoteshippingaddress-mutation"},"setNegotiableQuoteShippingAddress mutation"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"setNegotiableQuoteShippingAddress")," mutation assigns the shipping address for the specified negotiable quote. You can assign an address from the company user's address book, or define a new one. The negotiable quote must be in the UPDATED state to successfully set a shipping address."),(0,i.mdx)("p",null,"To return a list of valid shipping addresses, construct a ",(0,i.mdx)("a",{parentName:"p",href:"../../company/queries/company.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"company")," query")," that includes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"user")," input attribute."),(0,i.mdx)("p",null,"This query requires a valid ",(0,i.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n    setNegotiableQuoteShippingAddress(\n        input: SetNegotiableQuoteShippingAddressInput!\n    ): SetNegotiableQuoteShippingAddressOutput\n}\n")),(0,i.mdx)("h2",{id:"reference"},"Reference"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setNegotiableQuoteShippingAddress"},(0,i.mdx)("inlineCode",{parentName:"a"},"setNegotiableQuoteShippingAddress"))," reference provides detailed information about the types and fields defined in this mutation."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following example adds a predefined shipping address to a negotiable quote."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setNegotiableQuoteShippingAddress(input: {\n    quote_uid: "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS"\n    shipping_addresses: {\n      customer_address_uid: "MQ=="\n    }\n  }) {\n    quote {\n      shipping_addresses {\n        company\n        firstname\n        lastname\n        street\n        city\n        region {\n          label\n          code\n        }\n        country {\n          label\n          code\n        }\n      }\n    }\n  }\n}\n\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setNegotiableQuoteShippingAddress": {\n      "quote": {\n        "shipping_addresses": [\n          {\n            "company": "TestCo",\n            "firstname": "Taina",\n            "lastname": "Garofalo",\n            "street": [\n              "100 Big Oak Tree Dr"\n            ],\n            "city": "San Francisco",\n            "region": {\n              "label": "California",\n              "code": "CA"\n            },\n            "country": {\n              "label": "US",\n              "code": "US"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-negotiable-quote-mutations-set-shipping-address-md-f2ec94eff98bc15ec132.js.map