"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5743],{61636:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return p}});var r=a(87462),t=a(45987),o=(a(35776),a(3905)),d=a(65663),l=a(19040);const m=["components"],i={},c={_frontmatter:i},s=d.Z;function p(e){let{components:n}=e,a=(0,t.Z)(e,m);return(0,o.mdx)(s,(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(l.Z,{mdxType:"BetaNote"}),(0,o.mdx)("h1",{id:"cancelorder-mutation"},"cancelOrder mutation"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"cancelOrder")," mutation allows a customer to cancel an order, passing its identifier and a cancellation reason."),(0,o.mdx)("p",null,"A customer can cancel an order only if the following conditions are true:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The customer has previously placed the order."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"order_cancellation_enabled")," configuration setting is ",(0,o.mdx)("inlineCode",{parentName:"li"},"true"),"."),(0,o.mdx)("li",{parentName:"ul"},"The order has a status of ",(0,o.mdx)("strong",{parentName:"li"},"RECEIVED"),", ",(0,o.mdx)("strong",{parentName:"li"},"PENDING"),", or ",(0,o.mdx)("strong",{parentName:"li"},"PROCESSING"),".")),(0,o.mdx)("p",null,"If the customer has been charged for the order, the order is placed in the CLOSED state, and the customer will be issued a refund. Otherwise, the status of the order is set to CANCELED."),(0,o.mdx)("p",null,"The mutation returns an error if the order cannot be cancelled."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"mutation: {cancelOrder(input: CanceOrderInput!) {CancelOrderOutput}}")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-cancelOrder"},(0,o.mdx)("inlineCode",{parentName:"a"},"cancelOrder"))," reference provides detailed information about the types and fields defined in this mutation."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following example cancels order ID ",(0,o.mdx)("inlineCode",{parentName:"p"},"99999999")," and includes the reason for its cancellation."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    cancelOrder(\n        input: {\n            order_id: "99999999",\n            reason: "The order was placed by mistake"\n        }\n    ){\n        error\n        order {\n            status\n        }\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "cancelOrder": {\n      "error": null,\n      "order": {\n        "status": "Canceled"\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"related-topics"},"Related topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/commerce-webapi/src/pages/graphql/schema/store/queries/store-config.md#query-a-stores-order-cancellation-configuration"},"order cancellation")," configuration example on ",(0,o.mdx)("inlineCode",{parentName:"li"},"storeConfig")," page.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-orders-mutations-cancel-order-md-a1ba5924afaf2ef28a42.js.map