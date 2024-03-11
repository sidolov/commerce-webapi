"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1261],{58306:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return m}});var r=a(87462),t=a(45987),o=(a(35776),a(3905)),p=a(65663);const i=["components"],l={},u={_frontmatter:l},d=p.Z;function m(e){let{components:n}=e,a=(0,t.Z)(e,i);return(0,o.mdx)(d,(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"purchaseorderapprovalruleconditioninterface-attributes-and-implementations"},"PurchaseOrderApprovalRuleConditionInterface attributes and implementations"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PurchaseOrderApprovalRuleConditionInterface"},(0,o.mdx)("inlineCode",{parentName:"a"},"PurchaseOrderApprovalRuleConditionInterface"))," provides details about the approval rule conditions. It has the following implementations:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PurchaseOrderApprovalRuleConditionAmount"},(0,o.mdx)("inlineCode",{parentName:"a"},"PurchaseOrderApprovalRuleConditionAmount"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity"},(0,o.mdx)("inlineCode",{parentName:"a"},"PurchaseOrderApprovalRuleConditionQuantity")))),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following example returns information about the purchase order approval rule condition."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n    customer {\n        purchase_order_approval_rule(\n            uid: "Mg=="\n        ) {\n            condition {\n              attribute\n              operator\n              ... on PurchaseOrderApprovalRuleConditionAmount {\n                amount {\n                  value\n                  currency\n                }\n              }\n              ... on PurchaseOrderApprovalRuleConditionQuantity {\n                quantity\n              }\n            }\n        }\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "purchase_order_approval_rule": {\n        "condition": {\n          "attribute": "GRAND_TOTAL",\n          "operator": "MORE_THAN",\n          "amount": {\n            "value": 5,\n            "currency": "USD"\n          }\n        }\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-purchase-order-rule-interfaces-index-md-008dae03b789786670e0.js.map