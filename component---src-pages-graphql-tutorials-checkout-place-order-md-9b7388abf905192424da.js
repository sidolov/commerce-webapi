"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4095],{52826:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return p},default:function(){return l}});var t=r(87462),a=r(45987),o=(r(35776),r(3905)),m=r(91515);const d=["components"],p={},i={_frontmatter:p},s=m.Z;function l(e){let{components:n}=e,r=(0,a.Z)(e,d);return(0,o.mdx)(s,(0,t.Z)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-10-place-the-order"},"Step 10. Place the order"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation places an order."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }")," is the unique shopping cart ID from ",(0,o.mdx)("a",{parentName:"p",href:"../../tutorials/checkout/add-product-to-cart.md"},"Step 2. Create empty cart"),"."),(0,o.mdx)("p",null,"Send the customer's authorization token in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization")," parameter of the header. See ",(0,o.mdx)("a",{parentName:"p",href:"../../usage/authorization-tokens.md"},"Authorization tokens")," for more information."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  placeOrder(input: {cart_id: "{ CART_ID }"}) {\n    order {\n      order_number\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "placeOrder": {\n      "order": {\n        "order_number": "000000001"\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Sign in as a customer to the website using the email ",(0,o.mdx)("inlineCode",{parentName:"p"},"john.doe@example.com")," and password ",(0,o.mdx)("inlineCode",{parentName:"p"},"b1b2b3l@w+"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Go to ",(0,o.mdx)("strong",{parentName:"p"},"My Account")," > ",(0,o.mdx)("strong",{parentName:"p"},"My Orders"),". The order you created is displayed.  The order is also displayed on the Orders grid (",(0,o.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,o.mdx)("strong",{parentName:"p"},"Orders"),") in the Admin."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-tutorials-checkout-place-order-md-9b7388abf905192424da.js.map