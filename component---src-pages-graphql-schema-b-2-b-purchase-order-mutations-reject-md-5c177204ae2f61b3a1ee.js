"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1133],{81185:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return m},default:function(){return c}});var a=r(58168),t=r(80045),s=(r(88763),r(15680)),u=r(83407);const d=["components"],m={},o={_frontmatter:m},p=u.A;function c(e){let{components:n}=e,r=(0,t.A)(e,d);return(0,s.mdx)(p,(0,a.A)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"rejectpurchaseorders-mutation"},"rejectPurchaseOrders mutation"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"rejectPurchaseOrders")," mutation rejects one or more purchase orders. The specified purchase orders must have a status of PENDING."),(0,s.mdx)("h2",{id:"syntax"},"Syntax"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  rejectPurchaseOrders(\n    input: PurchaseOrdersActionInput!\n  ){\n    PurchaseOrdersActionOutput\n  }\n}\n")),(0,s.mdx)("h2",{id:"reference"},"Reference"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-rejectPurchaseOrders"},(0,s.mdx)("inlineCode",{parentName:"a"},"rejectPurchaseOrders"))," reference provides detailed information about the types and fields defined in this mutation."),(0,s.mdx)("h2",{id:"example-usage"},"Example usage"),(0,s.mdx)("p",null,"The following example rejects a purchase order."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  rejectPurchaseOrders(\n    input: {\n      purchase_order_uids: ["MTA="]\n    }\n  ) {\n    purchase_orders {\n      number\n      uid\n      status\n    }\n    errors {\n      message\n      type\n    }\n  }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "rejectPurchaseOrders": {\n      "purchase_orders": [\n        {\n          "number": "000000010",\n          "uid": "MTA=",\n          "status": "REJECTED"\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-purchase-order-mutations-reject-md-5c177204ae2f61b3a1ee.js.map