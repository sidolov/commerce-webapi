"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4941],{2273:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return l}});var a=t(87462),i=t(45987),r=(t(35776),t(3905)),d=t(65663);const o=["components"],m={},p={_frontmatter:m},s=d.Z;function l(e){let{components:n}=e,t=(0,i.Z)(e,o);return(0,r.mdx)(s,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-6-set-the-delivery-method"},"Step 6. Set the delivery method"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"setShippingMethodsOnCart")," mutation defines the delivery methods for your order. It requires these input parameters:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"cart_id")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"carrier_code")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"method_code"))),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }")," is the unique shopping cart ID from ",(0,r.mdx)("a",{parentName:"p",href:"../../tutorials/checkout/add-product-to-cart.md"},"Step 2. Create empty cart"),"."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"carrier_code")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"method_code")," values come from the response of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setShippingAddressesOnCart")," mutation on the ",(0,r.mdx)("a",{parentName:"p",href:"set-shipping-address.md"},"Set the shipping address")," step."),(0,r.mdx)("p",null,"For logged-in customers, send the customer's authorization token in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization")," parameter of the header. See ",(0,r.mdx)("a",{parentName:"p",href:"../../usage/authorization-tokens.md"},"Authorization tokens")," for more information."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("p",null,"The following mutation assigns Table Rate method."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setShippingMethodsOnCart(input: {\n    cart_id: "{ CART_ID }"\n    shipping_methods: [\n      {\n        carrier_code: "tablerate"\n        method_code: "bestway"\n      }\n    ]\n  }) {\n    cart {\n      shipping_addresses {\n        selected_shipping_method {\n          carrier_code\n          method_code\n          carrier_title\n          method_title\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setShippingMethodsOnCart": {\n      "cart": {\n        "shipping_addresses": [\n          {\n            "selected_shipping_method": {\n              "carrier_code": "tablerate",\n              "method_code": "bestway",\n              "carrier_title": "Best Way",\n              "method_title": "Table Rate"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Sign in as a customer to the website using the email ",(0,r.mdx)("inlineCode",{parentName:"p"},"john.doe@example.com")," and password ",(0,r.mdx)("inlineCode",{parentName:"p"},"b1b2b3l@w+"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Go to Checkout.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The selected delivery method is displayed in the Shipping Methods section on the Shipping step."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-tutorials-checkout-set-shipping-method-md-524b9ce68b73dd7917d0.js.map