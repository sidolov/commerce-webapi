"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[177],{77315:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(87462),r=a(45987),m=(a(35776),a(3905)),d=a(65663);const i=["components"],l={},o={_frontmatter:l},p=d.Z;function s(e){let{components:t}=e,a=(0,r.Z)(e,i);return(0,m.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"payment-services-minicart-workflow"},"Payment services minicart workflow"),(0,m.mdx)("p",null,"These steps describe the additional flow of requests and responses required to place an order after ",(0,m.mdx)("a",{parentName:"p",href:"../tutorials/checkout/add-product-to-cart.md"},"adding a product to your cart")," with the ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/guide-overview.html"},"Payment Services")," solution enabled."),(0,m.mdx)("h2",{id:"minicart-workflow"},"Minicart workflow"),(0,m.mdx)("p",null,(0,m.mdx)("img",{parentName:"p",src:"/commerce-webapi/assets/2c064191fe41c539293eb52c565c938b/payment-services-minicart.svg",alt:"Payment Services sequence diagram"})),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Run the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/checkout/queries/get-payment-config.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"getPaymentConfig"))," query to fetch the payment configuration needed to render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Adobe Commerce returns payment configuration information.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Run ",(0,m.mdx)("a",{parentName:"p",href:"../schema/checkout/mutations/create-payment-order.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"createPaymentOrder"))," to begin the authorization process.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Commerce forwards the request to PayPal.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"PayPal returns an ",(0,m.mdx)("inlineCode",{parentName:"p"},"id")," value.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Commerce generates an ",(0,m.mdx)("inlineCode",{parentName:"p"},"order_id")," and forwards the value in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mp_order_id")," field and in the PayPal response in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"id")," field.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Run the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/checkout/mutations/sync-payment-order.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"syncPaymentOrder"))," mutation to get payment details and update the quote with shipping, billing, email, and phone number details.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Commerce returns details about the payment order.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Run the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-shipping-method.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"setShippingMethodsOnCart")),"mutation to define the delivery methods for your order.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Commerce returns details about the delivery methods for your order.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Run the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/place-order.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"placeOrder"))," mutation.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Commerce sends an authorization request to PayPal.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"PayPal returns the result to Commerce.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Commerce creates an order."))),(0,m.mdx)("h2",{id:"setpaymentmethodoncartinput-object"},(0,m.mdx)("inlineCode",{parentName:"h2"},"setPaymentMethodOnCartInput")," object"),(0,m.mdx)("p",null,"For the PayPal Smart Buttons and Apple Pay payment methods, you do not need to run the ",(0,m.mdx)("a",{parentName:"p",href:"../schema/cart/mutations/set-payment-method.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"setPaymentMethodOnCart"))," mutation. The hosted fields payment method requires that you run the mutation only if one of the following conditions are true:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"You intend to vault a card by setting ",(0,m.mdx)("inlineCode",{parentName:"p"},"is_active_payment_token_enabler")," to ",(0,m.mdx)("inlineCode",{parentName:"p"},"true"),".")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"You have a stored payment method checkout where you intend to use a stored card by setting a ",(0,m.mdx)("inlineCode",{parentName:"p"},"public_hash")," value."))),(0,m.mdx)("p",null,"In these cases, the payment_method object must contain a ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_services_paypal_hosted_fields")," object."),(0,m.mdx)("h3",{id:"payment_services_paypal_hosted_fields-object"},(0,m.mdx)("inlineCode",{parentName:"h3"},"payment_services_paypal_hosted_fields")," object"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_services_paypal_hosted_fields")," can contain the following attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cardBin")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Card bin number")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cardExpiryMonth")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Expiration month of the card")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cardExpiryYear")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Expiration year of the card")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cardLast4")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Last four digits of the card")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"holderName")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Name on card")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"is_active_payment_token_enabler")),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"Indicates whether a customer-entered credit/debit card should be tokenized for later usage. The default value is false. Required only if vaulting is enabled for Payment Services payment integration")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"payments_order_id")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique order ID generated in Commerce if Payment Services is enabled after PayPal returns the ",(0,m.mdx)("inlineCode",{parentName:"td"},"paypal_order_id"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"paypal_order_id")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique order ID generated by PayPal when receiving the authorization request")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"payment_source")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The payment source for the payment method")))),(0,m.mdx)("h3",{id:"setpaymentmethodoncart-mutation-example"},(0,m.mdx)("inlineCode",{parentName:"h3"},"setPaymentMethodOnCart")," mutation example"),(0,m.mdx)("p",null,"The following example sets the payment method to ",(0,m.mdx)("inlineCode",{parentName:"p"},"payment_services_paypal_hosted_fields"),":"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    setPaymentMethodOnCart ( input: {\n      cart_id: "uocGxUi5H97XFAMhY3s66q4aFYG3Bmdr",\n      payment_method: {\n        code: "payment_services_paypal_hosted_fields",\n        payment_services_paypal_hosted_fields: {\n          payment_source: "cc",\n          payments_order_id: "mp-order-a4babd34-13d3-4ac0-b1b0-109bb7be1574",\n          paypal_order_id: "9R90936863877801D",\n          is_active_payment_token_enabler: true\n        }\n      }\n    }\n    ) {\n       cart {\n         id\n         selected_payment_method {\n           code\n         }\n       }\n    }\n  }\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setPaymentMethodOnCart": {\n      "cart": {\n        "id": "r8TKHa58b7Y8VaZHLyABNxrEdS8hJJTZ",\n        "selected_payment_method": {\n          "code": "payment_services_paypal_hosted_fields"\n        }\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-payment-services-minicart-md-cb45056a4e57e7dd36e0.js.map