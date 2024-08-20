"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6496],{19982:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return s}});var n=t(58168),r=t(80045),m=(t(88763),t(15680)),l=t(83407);const p=["components"],o={},i={_frontmatter:o},d=l.A;function s(e){let{components:a}=e,t=(0,r.A)(e,p);return(0,m.mdx)(d,(0,n.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"klarna-payment-method"},"Klarna payment method"),(0,m.mdx)("p",null,"Klarna Payments enables your consumers to try before they buy, finance purchases on your store with Klarna, or let them pay directly. Klarna offers these payment methods through a widget that you can add inline on your checkout page."),(0,m.mdx)("h2",{id:"klarna-payments-workflow"},"Klarna payments workflow"),(0,m.mdx)("p",null,"The following diagram shows the workflow for placing an order when Klarna is the selected payment method."),(0,m.mdx)("p",null,"Klarna payments require cart information to initiate the session. For this reason, the following steps can be executed only after a cart has been created."),(0,m.mdx)("p",null,(0,m.mdx)("img",{parentName:"p",src:"/commerce-webapi/assets/99004e2b243d4724d967190eec282221/klarna-payments.svg",alt:"Klarna payments sequence diagram"})),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The PWA client calls the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/checkout/mutations/create-klarna-payments-session.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"createKlarnaPaymentsSession"))," mutation to generate the ",(0,m.mdx)("inlineCode",{parentName:"p"},"client_token")," and retrieve a list of ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_categories"),"."),(0,m.mdx)("p",{parentName:"li"},"This step can be executed at any time after the cart is created. However, we recommend that you add products to the cart and set the billing address, shipping address, and shipping method on the cart before you perform this step.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application forwards the request to Klarna.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Klarna returns the ",(0,m.mdx)("inlineCode",{parentName:"p"},"client_token")," and the ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_categories")," available to the shopper.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application forwards the token to the client.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The client sends the ",(0,m.mdx)("inlineCode",{parentName:"p"},"cart")," query to retrieve the available payment methods.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application must always retrieve the latest status information from Klarna before returning the Klarna payments method as an option to the shopper. This is important to ensure that the shopper is always shown the latest available payment options.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Klarna returns an updated list of ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_categories"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application returns all available payment methods, including Klarna payment methods.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The PWA client renders the Klarna payment widget."),(0,m.mdx)("p",{parentName:"li"},"The PWA client uses the ",(0,m.mdx)("inlineCode",{parentName:"p"},"client_token")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_categories")," to initialize the ",(0,m.mdx)("a",{parentName:"p",href:"https://docs.klarna.com/klarna-payments/in-depth-knowledge/klarna-payments-sdk-reference/"},"Klarna Payments JS SDK"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The PWA client sends the ",(0,m.mdx)("a",{parentName:"p",href:"https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-2-check-out/22-get-authorization/"},"authorization")," directly to Klarna."),(0,m.mdx)("p",{parentName:"li"},"On the checkout page, the shopper selects Klarna as the payment method and clicks ",(0,m.mdx)("strong",{parentName:"p"},"Place Order"),". When this happens, the PWA client must send the ",(0,m.mdx)("inlineCode",{parentName:"p"},"authorize()")," call to Klarna. Then the shopper follows the authorization steps on the Klarna inline modal. During this phase, the communication between the PWA client and Klarna is handled directly by the Klarna Payments JS SDK.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Klarna returns the ",(0,m.mdx)("inlineCode",{parentName:"p"},"authorization_token")," in response to the authorize call.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Set the Payment Method providing the ",(0,m.mdx)("inlineCode",{parentName:"p"},"authorization_token")," as part of the ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation."),(0,m.mdx)("p",{parentName:"li"},"The client uses the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation to set the payment method to ",(0,m.mdx)("inlineCode",{parentName:"p"},"klarna_<identifier-value>"),". The ",(0,m.mdx)("inlineCode",{parentName:"p"},"authorization_token")," is passed in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"klarna")," object.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application returns an updated ",(0,m.mdx)("inlineCode",{parentName:"p"},"cart")," object.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The PWA client runs the ",(0,m.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application sends the place order request to Klarna.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Klarna sends the response to Magento.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application creates an order and sends an order ID in response to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation."))),(0,m.mdx)("h2",{id:"how-to-handle-cart-updates"},"How to handle cart updates"),(0,m.mdx)("p",null,"During the purchase flow, the cart can be updated by adding additional products, applying coupons, and changing the billing or shipping address. All these events might cause a change in Klarna options for the specific shopper."),(0,m.mdx)("p",null,"In order to always present shoppers with the latest available payment options provided by Klarna, the PWA client must:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Perform a cart update.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application returns an updated ",(0,m.mdx)("inlineCode",{parentName:"p"},"cart")," object.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Send the ",(0,m.mdx)("inlineCode",{parentName:"p"},"cart")," query to retrieve the latest available payment methods.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application sends another request to Klarna with the latest information available from the cart.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Klarna returns new list of payment methods. Note that the list might contain different options for the shopper.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"The application returns an updated ",(0,m.mdx)("inlineCode",{parentName:"p"},"cart")," object.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("a",{parentName:"p",href:"https://docs.klarna.com/klarna-payments/integration-best-practices/purchase-experience/"},"Reload the widget")," on the client side."))),(0,m.mdx)("p",null,"The following diagram describes the workflow:"),(0,m.mdx)("p",null,(0,m.mdx)("img",{parentName:"p",src:"/commerce-webapi/assets/6f17184f43a03339daea54e50935bc68/klarna-payments-cart-updates.svg",alt:"Klarna payments cart updates sequence diagram"})),(0,m.mdx)("h2",{id:"setpaymentmethodoncart-mutation"},"setPaymentMethodOnCart mutation"),(0,m.mdx)("p",null,"When you set the payment method to Klarna in the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_method")," object must contain a ",(0,m.mdx)("inlineCode",{parentName:"p"},"klarna")," object."),(0,m.mdx)("h3",{id:"klarna-object"},"klarna object"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"klarna")," object must contain the following attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"authorization_token")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The one-time authorization token generated by the Klarna payment gateway based on shopper details collected during the purchase flow")))),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example shows the  ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation constructed for the Klarna payment method."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setPaymentMethodOnCart(input: {\n    cart_id: "3WxC8gQn4Fbo55yqVLSiUFJ9fmEwnlxG"\n    payment_method: {\n      code: "klarna_pay_later"\n      klarna: {\n        authorization_token: "e9abc610-6748-256f-a506-355626551326"\n      }\n    }\n  }) {\n  cart {\n    selected_payment_method {\n      code\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setPaymentMethodOnCart": {\n     "cart": {\n       "selected_payment_method": {\n         "code": "klarna_pay_later"\n        }\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-payment-methods-klarna-md-877f60f393be188ff061.js.map