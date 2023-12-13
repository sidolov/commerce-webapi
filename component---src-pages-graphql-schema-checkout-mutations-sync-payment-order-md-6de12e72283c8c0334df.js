"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7157],{63374:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return c}});var a=t(87462),r=t(45987),m=(t(35776),t(3905)),d=t(91515);const l=["components"],i={},o=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var p;const u={_frontmatter:i},s=d.Z;function c(e){let{components:n}=e,t=(0,r.Z)(e,l);return(0,m.mdx)(s,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"syncpaymentorder-mutation"},"syncPaymentOrder mutation"),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"This mutation is available only if you have installed ",(0,m.mdx)("a",{parentName:"p",href:"https://commercemarketplace.adobe.com/magento-payment-services.html"},"Payment Services for Adobe Commerce")," 2.3.0 or higher."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"syncPaymentOrder")," mutation synchronizes the payment order details for the PayPal Smart Buttons and Apple Pay payment methods. This mutation updates the quote with the shipping, billing, email, and phone number details. It returns a Boolean value indicating whether the synchronization was successful."),(0,m.mdx)("p",null,"You must run this mutation after running the ",(0,m.mdx)("a",{parentName:"p",href:"create-payment-order.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"createPaymentOrder"))," mutation."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  syncPaymentOrder(\n    input: syncPaymentOrderInput!\n  )\n}\n")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example runs the ",(0,m.mdx)("inlineCode",{parentName:"p"},"syncPaymentOrder")," mutation."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  syncPaymentOrder(input: {\n    cartId: "AJCY8dhIfuch9LcDHAxEkw7oG3DjGdKt"\n    id: "8J864634M9466143S"\n  })\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "syncPaymentOrder": true\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"SyncPaymentOrderInput")," object must contain the following input attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cartId")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique ID of the cart")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"id")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique order ID generated by PayPal")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-checkout-mutations-sync-payment-order-md-6de12e72283c8c0334df.js.map