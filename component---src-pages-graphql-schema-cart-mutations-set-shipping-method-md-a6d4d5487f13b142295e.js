"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4882],{79958:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return x}});var a=n(58168),r=n(80045),d=(n(88763),n(15680)),m=n(83407);const i=["components"],l={},p=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var o;const s={_frontmatter:l},u=m.A;function x(e){let{components:t}=e,n=(0,r.A)(e,i);return(0,d.mdx)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"setshippingmethodsoncart-mutation"},"setShippingMethodsOnCart mutation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"setShippingMethodsOnCart")," mutation sets one or more delivery methods on a cart. By default, GraphQL supports the following delivery methods:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Label"),(0,d.mdx)("th",{parentName:"tr",align:null},"Carrier code"),(0,d.mdx)("th",{parentName:"tr",align:null},"Method code"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"DHL"),(0,d.mdx)("td",{parentName:"tr",align:null},"dhl"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Federal Express"),(0,d.mdx)("td",{parentName:"tr",align:null},"fedex"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Flat Rate"),(0,d.mdx)("td",{parentName:"tr",align:null},"flatrate"),(0,d.mdx)("td",{parentName:"tr",align:null},"flatrate")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Free Shipping"),(0,d.mdx)("td",{parentName:"tr",align:null},"freeshipping"),(0,d.mdx)("td",{parentName:"tr",align:null},"freeshipping")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Best Way"),(0,d.mdx)("td",{parentName:"tr",align:null},"tablerate"),(0,d.mdx)("td",{parentName:"tr",align:null},"bestway")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"United Parcel Service"),(0,d.mdx)("td",{parentName:"tr",align:null},"ups"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"United States Postal Service"),(0,d.mdx)("td",{parentName:"tr",align:null},"usps"),(0,d.mdx)("td",{parentName:"tr",align:null},"Varies")))),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Do not run the ",(0,d.mdx)("inlineCode",{parentName:"p"},"setShippingMethodsOnCart")," mutation on in-store pickup orders. Instead, specify the ",(0,d.mdx)("inlineCode",{parentName:"p"},"pickup_location_code")," attribute in the ",(0,d.mdx)("a",{parentName:"p",href:"set-shipping-address.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"setShippingAddressesOnCart")," mutation"),"."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"mutation: {setShippingMethodsOnCart(input: setShippingMethodsOnCartInput) {setShippingMethodsOnCartOutput}}")),(0,d.mdx)("h2",{id:"reference"},"Reference"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setShippingMethodsOnCart"},(0,d.mdx)("inlineCode",{parentName:"a"},"setShippingMethodsOnCart"))," reference provides detailed information about the types and fields defined in this mutation."),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"The following example sets the delivery method to Best Way."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setShippingMethodsOnCart(\n    input: {\n      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",\n      shipping_methods: [\n        {\n          carrier_code: "tablerate"\n          method_code: "bestway"\n        }\n      ]\n    }\n  ) {\n    cart {\n      shipping_addresses {\n        selected_shipping_method {\n          carrier_code\n          carrier_title\n          method_code\n          method_title\n          amount {\n            value\n            currency\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setShippingMethodsOnCart": {\n      "cart": {\n        "shipping_addresses": [\n          {\n            "selected_shipping_method": {\n              "carrier_code": "tablerate",\n              "carrier_title": "Best Way",\n              "method_code": "bestway",\n              "method_title": "Table Rate",\n              "amount": {\n                "value": 0,\n                "currency": "USD"\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,d.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,d.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," table.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Carrier with such method not found: carrier_code, method_code")),(0,d.mdx)("td",{parentName:"tr",align:null},"A specified carrier method was not found, or it is not applicable for the defined shipping address.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Required parameter "cart_id" is missing')),(0,d.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"cart_id")," argument is empty.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Required parameter "carrier_code" is missing.')),(0,d.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"shipping_methods"),".",(0,d.mdx)("inlineCode",{parentName:"td"},"carrier_code")," argument is empty.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Required parameter "method_code" is missing.')),(0,d.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"shipping_methods"),".",(0,d.mdx)("inlineCode",{parentName:"td"},"method_code")," argument is empty.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Required parameter "shipping_methods" is missing')),(0,d.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"shipping_methods")," argument is empty.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'The current user cannot perform operations on cart "XXX"')),(0,d.mdx)("td",{parentName:"tr",align:null},"An unauthorized user (guest) tried to set a delivery method for an order on behalf of an authorized user (customer), or a customer tried to set a delivery method for an order on behalf of another customer.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"The shipping method can't be set for an empty cart. Add an item to cart and try again.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The delivery method cannot be set for an empty cart.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"You cannot specify multiple shipping methods.")),(0,d.mdx)("td",{parentName:"tr",align:null},"You can set only one delivery method for an order.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-set-shipping-method-md-a6d4d5487f13b142295e.js.map