"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5586],{84565:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return c}});var o=t(87462),a=t(45987),m=(t(35776),t(3905)),u=t(65663);const r=["components"],i={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var p;const l={_frontmatter:i},s=u.Z;function c(e){let{components:n}=e,t=(0,a.Z)(e,r);return(0,m.mdx)(s,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"removenegotiablequoteitems-mutation"},"removeNegotiableQuoteItems mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"removeNegotiableQuoteItems")," mutation removes the specified products from a negotiable quote."),(0,m.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Removing the last product from a negotiable quote causes the quote to be in a terminal state. You cannot add products to the quote, nor can you modify the quantity of any items. You can only ",(0,m.mdx)("a",{parentName:"p",href:"close.md"},"close")," or ",(0,m.mdx)("a",{parentName:"p",href:"delete.md"},"delete")," the quote."),(0,m.mdx)("p",null,"This mutation requires a valid ",(0,m.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"    removeNegotiableQuoteItems(\n        input: RemoveNegotiableQuoteItemsInput!\n    ): RemoveNegotiableQuoteItemsOutput\n")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeNegotiableQuoteItems"},(0,m.mdx)("inlineCode",{parentName:"a"},"removeNegotiableQuoteItems"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example removes a product from a negotiable quote."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  removeNegotiableQuoteItems(\n    input: {\n      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"\n      quote_item_uids: ["MTc="]\n    }\n  ) {\n    quote {\n      uid\n      name\n      updated_at\n      items {\n        uid\n        product {\n          uid\n          sku\n          name\n        }\n        quantity\n        prices {\n          price {\n            value\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "removeNegotiableQuoteItems": {\n      "quote": {\n        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",\n        "name": "April 22 request",\n        "updated_at": "2021-04-23 18:21:44",\n        "items": [\n          {\n            "uid": "MTU=",\n            "product": {\n              "uid": "MjA=",\n              "sku": "24-UG01",\n              "name": "Quest Lumaflex&trade; Band"\n            },\n            "quantity": 7,\n            "prices": {\n              "price": {\n                "value": 19\n              }\n            }\n          },\n          {\n            "uid": "MTY=",\n            "product": {\n              "uid": "MTg=",\n              "sku": "24-UG02",\n              "name": "Pursuit Lumaflex&trade; Tone Band"\n            },\n            "quantity": 8,\n            "prices": {\n              "price": {\n                "value": 16\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-negotiable-quote-mutations-remove-items-md-093a58ee8dc25aec48d0.js.map