"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5596],{98420:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return p},default:function(){return l}});var t=r(58168),a=r(80045),o=(r(88763),r(15680)),m=r(83407);const d=["components"],p={},i={_frontmatter:p},s=m.A;function l(e){let{components:n}=e,r=(0,a.A)(e,d);return(0,o.mdx)(s,(0,t.A)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-10-place-the-order"},"Step 10. Place the order"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation places an order."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }")," is the unique shopping cart ID from ",(0,o.mdx)("a",{parentName:"p",href:"../../tutorials/checkout/add-product-to-cart.md"},"Step 2. Create empty cart"),"."),(0,o.mdx)("p",null,"Send the customer's authorization token in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization")," parameter of the header. See ",(0,o.mdx)("a",{parentName:"p",href:"../../usage/authorization-tokens.md"},"Authorization tokens")," for more information."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  placeOrder(input: {cart_id: "{ CART_ID }"}) {\n    orderV2 {\n      number\n    }\n    errors {\n      message\n      code\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "placeOrder": {\n      "orderV2": {\n        "number": "000000001"\n      },\n      "errors": []\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Sign in as a customer to the website using the email ",(0,o.mdx)("inlineCode",{parentName:"p"},"john.doe@example.com")," and password ",(0,o.mdx)("inlineCode",{parentName:"p"},"b1b2b3l@w+"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Go to ",(0,o.mdx)("strong",{parentName:"p"},"My Account")," > ",(0,o.mdx)("strong",{parentName:"p"},"My Orders"),". The order you created is displayed.  The order is also displayed on the Orders grid (",(0,o.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,o.mdx)("strong",{parentName:"p"},"Orders"),") in the Admin."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-tutorials-checkout-place-order-md-bf1e20a0b69cf9bfa012.js.map