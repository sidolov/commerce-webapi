"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4848],{44929:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return m},default:function(){return p}});var r=n(58168),t=n(80045),s=(n(88763),n(15680)),d=n(83407);const u=["components"],m={},o={_frontmatter:m},i=d.A;function p(e){let{components:a}=e,n=(0,t.A)(e,u);return(0,s.mdx)(i,(0,r.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"validatepurchaseorders-mutation"},"validatePurchaseOrders mutation"),(0,s.mdx)("p",null,"By default, Adobe Commerce validates purchase orders automatically. However, purchase orders can become stuck in certain circumstances, such as when the message queue system is down and the purchase order is in the PENDING state. You might need to run the ",(0,s.mdx)("inlineCode",{parentName:"p"},"validatePurchaseOrders")," mutation to manually validate purchase orders."),(0,s.mdx)("p",null,"You must specify one or more purchase order UIDs as input."),(0,s.mdx)("h2",{id:"syntax"},"Syntax"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    validatePurchaseOrders(\n        input: ValidatePurchaseOrdersInput!\n    ) {\n        ValidatePurchaseOrdersOutput\n    }\n}\n")),(0,s.mdx)("h2",{id:"reference"},"Reference"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-validatePurchaseOrders"},(0,s.mdx)("inlineCode",{parentName:"a"},"validatePurchaseOrders"))," reference provides detailed information about the types and fields defined in this mutation."),(0,s.mdx)("h2",{id:"headers"},"Headers"),(0,s.mdx)("p",null,"A valid ",(0,s.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token")," is required."),(0,s.mdx)("h2",{id:"example-usage"},"Example usage"),(0,s.mdx)("p",null,"The following example validates purchase orders."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  validatePurchaseOrders(\n    input: {\n        purchase_order_uids: ["Nw==", "OA=="]\n    }\n  ) {\n    purchase_orders {\n        number\n        status\n    }\n    errors {\n        message\n        type\n    }\n  }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "validatePurchaseOrders": {\n      "purchase_orders": [\n        {\n          "number": "000000007",\n          "status": "APPROVAL_REQUIRED"\n        },\n        {\n          "number": "000000008",\n          "status": "APPROVAL_REQUIRED"\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-purchase-order-rule-mutations-validate-md-1ca5455028763f14a815.js.map