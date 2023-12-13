"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1018],{75357:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return p}});var i=t(87462),m=t(45987),r=(t(35776),t(3905)),a=t(91515);const s=["components"],o={},d={_frontmatter:o},u=a.Z;function p(e){let{components:n}=e,t=(0,m.Z)(e,s);return(0,r.mdx)(u,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"removegiftregistryitems-mutation"},"removeGiftRegistryItems mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"removeGiftRegistryItems")," mutation removes one or more items from the specified gift registry."),(0,r.mdx)("p",null,"This mutation requires a valid ",(0,r.mdx)("a",{parentName:"p",href:"../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  removeGiftRegistryItems(\n    giftRegistryUid: ID!,\n    itemsUid: [ID!]!\n  ) {\n    RemoveGiftRegistryItemsOutput\n  }\n}\n")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeGiftRegistryItems"},(0,r.mdx)("inlineCode",{parentName:"a"},"removeGiftRegistryItems"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example removes an item from the specified gift registry."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation{\n  removeGiftRegistryItems(\n    giftRegistryUid: "iSJHFdAtF8YBM5ALgNyNIgQmnbOW9t69",\n    itemsUid: ["MTM="]\n  ){\n    gift_registry {\n      uid\n      event_name\n      items {\n        uid\n        product {\n          sku\n        }\n        quantity\n        quantity_fulfilled\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "removeGiftRegistryItems": {\n      "gift_registry": {\n        "uid": "iSJHFdAtF8YBM5ALgNyNIgQmnbOW9t69",\n        "event_name": "Bill and Julie\'s wedding",\n        "items": [\n          {\n            "uid": "OQ==",\n            "product": {\n              "sku": "24-WB03"\n            },\n            "quantity": 3,\n            "quantity_fulfilled": 0\n          }\n        ]\n      }\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-gift-registry-mutations-remove-items-md-ae16cd811673306a17c6.js.map