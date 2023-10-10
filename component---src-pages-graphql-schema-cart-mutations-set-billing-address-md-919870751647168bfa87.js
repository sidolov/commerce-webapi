"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[506],{25811:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return x}});var a=n(87462),d=n(63366),r=(n(15007),n(64983)),l=n(91515),i=n(2989),m=n(48556),s=["components"],p={},o={_frontmatter:p},u=l.Z;function x(e){var t=e.components,n=(0,d.Z)(e,s);return(0,r.mdx)(u,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"setbillingaddressoncart-mutation"},"setBillingAddressOnCart mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"setBillingAddressOnCart")," mutation sets the billing address for a specific cart. If you set the ",(0,r.mdx)("inlineCode",{parentName:"p"},"same_as_shipping")," attribute to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),", the application assigns the billing address to be the same as the shipping address."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"mutation: {setBillingAddressOnCart(input: SetBillingAddressOnCartInput) {SetBillingAddressOnCartOutput}}")),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example creates a new billing address for a specific cart."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setBillingAddressOnCart(\n    input: {\n      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"\n      billing_address: {\n        address: {\n          firstname: "Bob"\n          middlename: "Joe"\n          lastname: "Roll"\n          prefix: "Mr."\n          suffix: "Jr."\n          company: "Magento"\n          street: ["Magento Pkwy", "Main Street"]\n          city: "Austin"\n          region: "TX"\n          postcode: "78758"\n          country_code: "US"\n          telephone: "8675309"\n          fax: "8675311"\n          save_in_address_book: true\n        }\n        same_as_shipping: false\n      }\n    }\n  ) {\n    cart {\n      billing_address {\n        firstname\n        middlename\n        lastname\n        prefix\n        suffix\n        company\n        street\n        city\n        region{\n          code\n          label\n        }\n        postcode\n        telephone\n        fax\n        country{\n          code\n          label\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setBillingAddressOnCart": {\n      "cart": {\n        "billing_address": {\n          "firstname": "Bob",\n          "middlename": "Joe",\n          "lastname": "Roll",\n          "prefix": "Mr.",\n          "suffix": "Jr.",\n          "company": "Magento",\n          "street": [\n            "Magento Pkwy",\n            "Main Street"\n          ],\n          "city": "Austin",\n          "region": {\n              "code": "TX",\n              "label": "Texas"\n            },\n          "postcode": "78758",\n          "telephone": "8675309",\n          "fax": "8675311",\n           "country": {\n             "code": "US",\n             "label": "US"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,r.mdx)("p",null,"The top-level ",(0,r.mdx)("inlineCode",{parentName:"p"},"SetBillingAddressOnCartInput")," object is listed first. All child objects are listed in alphabetical order."),(0,r.mdx)("h3",{id:"setbillingaddressoncartinput-object"},"SetBillingAddressOnCartInput object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"billing_address")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#billingaddressinput-object"},"BillingAddressInput!")),(0,r.mdx)("td",{parentName:"tr",align:null},"The billing address for a specific cart")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"cart_id")),(0,r.mdx)("td",{parentName:"tr",align:null},"String!"),(0,r.mdx)("td",{parentName:"tr",align:null},"The unique ID that identifies the customer's cart")))),(0,r.mdx)("h3",{id:"billingaddressinput-object"},"BillingAddressInput object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"address")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#cartaddressinput-object"},"CartAddressInput")),(0,r.mdx)("td",{parentName:"tr",align:null},"The billing address for the cart")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"customer_address_id")),(0,r.mdx)("td",{parentName:"tr",align:null},"Int"),(0,r.mdx)("td",{parentName:"tr",align:null},"The unique ID that identifies the customer's address")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"same_as_shipping")),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates whether to set the billing address based on the existing shipping address on the cart")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"use_for_shipping")),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates whether to additionally set the shipping address based on the provided billing address")))),(0,r.mdx)("h3",{id:"cartaddressinput-object"},"CartAddressInput object"),(0,r.mdx)(i.Z,{mdxType:"CartAddressInput"}),(0,r.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"SetBillingAddressOnCartOutput")," object contains the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Cart")," object."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"cart")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#cart-object"},"Cart!")),(0,r.mdx)("td",{parentName:"tr",align:null},"Describes the contents of the specified shopping cart")))),(0,r.mdx)("h3",{id:"cart-object"},"Cart object"),(0,r.mdx)(m.Z,{mdxType:"CartObject"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"../../cart/queries/cart.md#output-attributes"},"Cart query output")," provides more information about the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Cart")," object."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-set-billing-address-md-919870751647168bfa87.js.map