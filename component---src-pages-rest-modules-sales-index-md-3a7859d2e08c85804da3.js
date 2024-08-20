"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6907],{27235:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return c}});var r=t(58168),i=t(80045),o=(t(88763),t(15680)),a=t(83407);const d=["components"],s={},m=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var l;const u={_frontmatter:s},p=a.A;function c(e){let{components:n}=e,t=(0,i.A)(e,d);return(0,o.mdx)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"refunds"},"Refunds"),(0,o.mdx)("p",null,"There are a couple of options to choose when issuing a refund using the Adobe Commerce API."),(0,o.mdx)("h2",{id:"salesrefundinvoicev1-service"},"salesRefundInvoiceV1 service"),(0,o.mdx)("p",null,"With this service, you can initiate and process a refund based on an invoice ID, created using an online payment method."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"salesRefundInvoice")," service allows you to:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Create a credit memo (complete or partial) for an invoice"),(0,o.mdx)("li",{parentName:"ul"},"Add details about the refunded items to the order"),(0,o.mdx)("li",{parentName:"ul"},"Change status and state of an order according to performed actions"),(0,o.mdx)("li",{parentName:"ul"},"Notify a customer about the performed refund operation"),(0,o.mdx)("li",{parentName:"ul"},"Designate whether the returned items are returned to stock")),(0,o.mdx)("h3",{id:"endpoint"},"Endpoint"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST V1/invoice/:invoiceId/refund")),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If you try to apply the service to an invoice created using an offline payment method, the system will return a validation error."),(0,o.mdx)("h2",{id:"salesrefundorderv1service"},"salesRefundOrderV1 service"),(0,o.mdx)("p",null,"This service performs the same operations as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"salesRefundInvoiceV1")," service, but based on an order ID. Use this service if the invoice was created using an offline payment method."),(0,o.mdx)("h3",{id:"endpoint-1"},"Endpoint"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST V1/order/:orderId/refund")),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If you try to apply the service to an invoice created using an online payment method, the system will return a validation error."),(0,o.mdx)("h2",{id:"other-services-for-issuing-refunds"},"Other services for issuing refunds"),(0,o.mdx)("p",null,"While we recommend you use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Refund")," services, Commerce also provides the following ",(0,o.mdx)("inlineCode",{parentName:"p"},"CreditmemoManagement")," services you can use to issue a credit:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"salesCreditmemoManagement")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"salesCreditmemoRepository"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-modules-sales-index-md-3a7859d2e08c85804da3.js.map