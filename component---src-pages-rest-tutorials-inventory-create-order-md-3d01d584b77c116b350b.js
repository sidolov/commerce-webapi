"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8538],{39672:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return l}});var a=t(58168),o=t(80045),r=(t(88763),t(15680)),m=t(83407);const i=["components"],d={},p={_frontmatter:d},s=m.A;function l(e){let{components:n}=e,t=(0,o.A)(e,i);return(0,r.mdx)(s,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-9-create-an-order"},"Step 9. Create an order"),(0,r.mdx)("p",null,"The shopping cart contains 71 items totaling $2462. The shipping charges are $350, making the grand total $2812. We're now ready to convert the quote to an order."),(0,r.mdx)("p",null,"When you create an order, Adobe Commerce enters reservations for the total amount of products. These reservations place a hold on that amount of inventory per stock, temporarily deducting the amount from the salable quantity. On the Products page of Admin, the ",(0,r.mdx)("strong",{parentName:"p"},"Salable Quantity")," column accounts for reservations. When an order is shipped, Commerce updates the quantities in the ",(0,r.mdx)("strong",{parentName:"p"},"Quantity per Source")," column."),(0,r.mdx)("h2",{id:"send-payment-information"},"Send payment information"),(0,r.mdx)("p",null,"When you submit payment information, Commerce creates an order and sends an order confirmation to the customer. Since we are using an offline payment method in this tutorial, we do not need to provide detailed payment information. The endpoint used in this example requires only the payment method and billing address information."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/carts/mine/payment-information")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <customer token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "paymentMethod": {\n    "method": "banktransfer"\n  },\n  "billing_address": {\n    "email": "jdoe@example.com",\n    "region": "New York",\n    "region_id": 43,\n    "region_code": "NY",\n    "country_id": "US",\n    "street": ["160 1st St."],\n    "postcode": "11501",\n    "city": "Mineola",\n    "telephone": "516-555-1111",\n    "firstname": "Jane",\n    "lastname": "Doe"\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"An ",(0,r.mdx)("inlineCode",{parentName:"p"},"orderID"),", such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"3")),(0,r.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Log in to the US store as the customer. The dashboard shows the order."),(0,r.mdx)("li",{parentName:"ol"},"Log in to Admin. Click ",(0,r.mdx)("strong",{parentName:"li"},"Sales")," > ",(0,r.mdx)("strong",{parentName:"li"},"Orders"),". The order is displayed in the grid. Its status is Pending."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Catalog")," > ",(0,r.mdx)("strong",{parentName:"li"},"Products"),". The ",(0,r.mdx)("strong",{parentName:"li"},"Salable Quantity")," column shows that fewer items of the ordered products are available. The values in the ",(0,r.mdx)("strong",{parentName:"li"},"Quantity per Source")," are not affected until shipment.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-create-order-md-3d01d584b77c116b350b.js.map