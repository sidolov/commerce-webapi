"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2618],{20014:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return l}});var a=t(87462),d=t(45987),i=(t(35776),t(3905)),r=t(91515);const s=["components"],p={},m={_frontmatter:p},o=r.Z;function l(e){let{components:n}=e,t=(0,d.Z)(e,s);return(0,i.mdx)(o,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"setshippingaddressesoncart-mutation"},"setShippingAddressesOnCart mutation"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"setShippingAddressesOnCart")," mutation sets one or more shipping addresses on a specific cart. The shipping address does not need to be specified in the following circumstances:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The cart contains only virtual items"),(0,i.mdx)("li",{parentName:"ul"},"When you defined the billing address, you set the ",(0,i.mdx)("inlineCode",{parentName:"li"},"same_as_shipping")," attribute to ",(0,i.mdx)("inlineCode",{parentName:"li"},"true"),". The application assigns the same address as the shipping address.")),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"mutation: {setShippingAddressesOnCart(input: SetShippingAddressesOnCartInput) {SetShippingAddressesOnCartOutput}}")),(0,i.mdx)("h2",{id:"reference"},"Reference"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setShippingAddressesOnCart"},(0,i.mdx)("inlineCode",{parentName:"a"},"setShippingAddressesOnCart"))," reference provides detailed information about the types and fields defined in this mutation."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setShippingAddressesOnCart(\n    input: {\n      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"\n      shipping_addresses: [\n        {\n          address: {\n            firstname: "Bob"\n            middlename: "Joe"\n            lastname: "Roll"\n            prefix: "Mr."\n            suffix: "Jr."\n            company: "Magento"\n            street: ["Magento Pkwy", "Main Street"]\n            city: "Austin"\n            region: "TX"\n            postcode: "78758"\n            country_code: "US"\n            telephone: "8675309"\n            fax: "8675311"\n            save_in_address_book: false\n          },\n          pickup_location_code: "txspeqs"\n        }\n      ]\n    }\n  ) {\n    cart {\n      shipping_addresses {\n        firstname\n        middlename\n        lastname\n        prefix\n        suffix\n        company\n        street\n        city\n        region {\n          code\n          label\n        }\n        postcode\n        telephone\n        fax\n        country {\n          code\n          label\n        }\n        pickup_location_code\n      }\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setShippingAddressesOnCart": {\n      "cart": {\n        "shipping_addresses": [\n          {\n            "firstname": "Bob",\n            "middlename": "Joe",\n            "lastname": "Roll",\n            "prefix": "Mr.",\n            "suffix": "Jr.",\n            "company": "Magento",\n            "street": [\n              "Magento Pkwy",\n              "Main Street"\n            ],\n            "city": "Austin",\n            "region": {\n              "code": "TX",\n              "label": "Texas"\n            },\n            "postcode": "78758",\n            "telephone": "8675309",\n            "fax": "8675311",\n            "country": {\n              "code": "US",\n              "label": "US"\n            },\n            "pickup_location_code": "txspeqs"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,i.mdx)("h2",{id:"errors"},"Errors"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Error"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,i.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,i.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," table.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Field SetShippingAddressesOnCartInput.cart_id of required type String! was not provided.")),(0,i.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"SetShippingAddressesOnCartInput"),".",(0,i.mdx)("inlineCode",{parentName:"td"},"cart_id")," argument is empty.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Field CartAddressInput.firstname of required type String! was not provided.")),(0,i.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"shipping_addresses"),".",(0,i.mdx)("inlineCode",{parentName:"td"},"firstname")," argument is empty.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Field CartAddressInput.lastname of required type String! was not provided.")),(0,i.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"shipping_addresses"),".",(0,i.mdx)("inlineCode",{parentName:"td"},"lastname")," argument is empty.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Field CartAddressInput.city of required type String! was not provided.")),(0,i.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"shipping_addresses"),".",(0,i.mdx)("inlineCode",{parentName:"td"},"city")," argument is empty.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Field CartAddressInput.street of required type String! was not provided.")),(0,i.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"shipping_addresses"),".",(0,i.mdx)("inlineCode",{parentName:"td"},"street")," argument is empty.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Field CartAddressInput.country_code of required type String! was not provided.")),(0,i.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"shipping_addresses"),".",(0,i.mdx)("inlineCode",{parentName:"td"},"country_code")," argument is empty.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Field SetShippingAddressesOnCartInput.shipping_addresses of required type [ShippingAddressInput]! was not provided.")),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"shipping_addresses")," input attribute of type ",(0,i.mdx)("inlineCode",{parentName:"td"},"ShippingAddressInput")," is missing.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'The current user cannot perform operations on cart "XXX"')),(0,i.mdx)("td",{parentName:"tr",align:null},"An unauthorized user (guest) tried to set a delivery method for an order on behalf of an authorized user (customer), or a customer tried to set a delivery method for an order on behalf of another customer.")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-set-shipping-address-md-a73a576bfb55cc54db73.js.map