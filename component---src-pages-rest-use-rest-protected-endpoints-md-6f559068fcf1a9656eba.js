"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7518],{29530:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(58168),r=a(80045),d=(a(88763),a(15680)),m=a(83407);const o=["components"],l={},p={_frontmatter:l},i=m.A;function s(e){let{components:t}=e,a=(0,r.A)(e,o);return(0,d.mdx)(i,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"protected-endpoints"},"Protected endpoints"),(0,d.mdx)("p",null,"If CAPTCHA or reCAPTCHA is enabled on pages requiring shopper input, then in most cases, the corresponding endpoints that send requests to the Adobe Commerce server must include an HTTP header that contains a value entered by the shopper (for CAPTCHA) or generated by the Google API (for reCAPTCHA). These headers are generated by UI Web form widgets during interactions with the shopper. However, if you specify an integration authorization token in the header of the endpoint, then you do not supply a header specific to CAPTCHA or reCAPTCHA."),(0,d.mdx)("p",null,"Even when Adobe Commerce is used in a headless way, like with PWA, the merchant must have their own Web UI that renders the correct Captcha or reCAPTCHA web form widget, captures the proper ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-Captcha")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-ReCaptcha")," HTTP header, and sends it in the API request in the background only."),(0,d.mdx)("p",null,"The HTTP ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-Captcha")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-ReCaptcha")," headers:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Cannot be received by an automated script or a non-UI API call. They are captured and returned by the UI Web form only."),(0,d.mdx)("li",{parentName:"ul"},"Are optional in protected mutation API calls that provide ",(0,d.mdx)("strong",{parentName:"li"},(0,d.mdx)("em",{parentName:"strong"},"integration authorization"))," tokens only. They cannot be skipped when you provide an Admin or Bearer token.")),(0,d.mdx)("h2",{id:"captcha"},"CAPTCHA"),(0,d.mdx)("p",null,"The following table lists the forms that can be configured to require CAPTCHA. Go to ",(0,d.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,d.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,d.mdx)("strong",{parentName:"p"},"Customers")," > ",(0,d.mdx)("strong",{parentName:"p"},"Customer Configuration")," > ",(0,d.mdx)("strong",{parentName:"p"},"CAPTCHA")," > ",(0,d.mdx)("strong",{parentName:"p"},"Forms")," to enable or disable CAPTCHA on these forms."),(0,d.mdx)("p",null,"The endpoint that corresponds to a CAPTCHA-enabled form must include the HTTP ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-Captcha")," header, along with the text the shopper entered in response to the CAPTCHA challenge."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Form name"),(0,d.mdx)("th",{parentName:"tr",align:null},"REST endpoint"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Add Gift Card Code"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/carts/mine/giftCards")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/carts/guest-carts/:cartId/giftCards"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Applying Coupon Code"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/carts/:cartId/coupons/:couponCode")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/guest-carts/:cartId/coupons/:couponCode"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Change password"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/customers/me/password"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Checkout/Placing Order"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/carts/mine/payment-information")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/carts/mine/set-payment-information")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/guest-carts/:cartId/payment-information")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/guest-carts/:cartId/set-payment-information"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Contact Us"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Create company"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/company"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Create user"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/customers"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Forgot password"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/customers/resetPassword"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/customers/password"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Login"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/integration/customer/token"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Payflow Pro"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Send to Friend Form"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Share Wishlist Form"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")))),(0,d.mdx)("h2",{id:"recaptcha"},"reCAPTCHA"),(0,d.mdx)("p",null,"The following table lists the forms that can be configured to require reCAPTCHA. Go to ",(0,d.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,d.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,d.mdx)("strong",{parentName:"p"},"Security")," > ",(0,d.mdx)("strong",{parentName:"p"},"Google reCAPTCHA Storefront")," > ",(0,d.mdx)("strong",{parentName:"p"},"Storefront")," to enable or disable reCAPTCHA on these forms. If reCAPTCHA is enabled, unless an integration token is provided, always specify the HTTP ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-ReCaptcha")," header and the value generated by the Google API."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Field name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Mutation"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Customer Login"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/integration/customer/token"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Forgot Password"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/customers/me/password"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Create New Customer Account"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/customers"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Edit Customer Account"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/customers/me"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Contact Us"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Product Review"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Newsletter Subscription"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Send To Friend"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for PayPal PayflowPro payment form"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Braintree payment form"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Checkout/Placing Order"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/carts/mine/payment-information")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/carts/mine/set-payment-information")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/guest-carts/:cartId/payment-information")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/guest-carts/:cartId/set-payment-information"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enable for Coupon Codes"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/carts/:cartId/coupons/:couponCode")," ",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"PUT /V1/guest-carts/:cartId/coupons/:couponCode"))))),(0,d.mdx)("h3",{id:"related-topics"},"Related topics"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/gs-web-api-request"},"Construct a request")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-use-rest-protected-endpoints-md-6f559068fcf1a9656eba.js.map