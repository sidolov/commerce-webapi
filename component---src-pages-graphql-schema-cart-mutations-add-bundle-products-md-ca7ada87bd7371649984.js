"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8213],{33763:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return o},default:function(){return c}});var a=t(87462),d=t(45987),r=(t(35776),t(3905)),i=t(65663);const l=["components"],o={},m=(u="InlineAlert",function(n){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",n)});var u;const p={_frontmatter:o},s=i.Z;function c(n){let{components:e}=n,t=(0,d.Z)(n,l);return(0,r.mdx)(s,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"addbundleproductstocart-mutation"},"addBundleProductsToCart mutation"),(0,r.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"We recommend using the ",(0,r.mdx)("a",{parentName:"p",href:"add-products.md"},"addProductsToCart mutation")," to add any type of product to the cart."),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"addBundleProductsToCart")," mutation to add bundle products to a specific cart."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"mutation: {addBundleProductsToCart(input: AddBundleProductsToCartInput): {AddBundleProductsToCartOutput}}")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addBundleProductsToCart"},(0,r.mdx)("inlineCode",{parentName:"a"},"addBundleProductsToCart"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,'The following example uses a bundle product "Sprite Yoga Companion Kit" from Adobe Commerce and Magento Open Source sample data.\nThe SKU of this product is: ',(0,r.mdx)("strong",{parentName:"p"},"24-WG080")),(0,r.mdx)("p",null,"This example adds one bundle product with following children to the specified shopping cart:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Sprite Stasis Ball 65 cm (x1)"),(0,r.mdx)("li",{parentName:"ul"},"Sprite Foam Yoga Brick (x2)"),(0,r.mdx)("li",{parentName:"ul"},"Sprite Yoga Strap 10 foot (x1)"),(0,r.mdx)("li",{parentName:"ul"},"Sprite Foam Roller (x1)")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"cart_id")," used in this example was ",(0,r.mdx)("a",{parentName:"p",href:"create-empty-cart.md"},"generated")," by creating an empty cart."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addBundleProductsToCart(\n    input: {\n      cart_id: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"\n      cart_items: [\n      {\n        data: {\n          sku: "24-WG080"\n          quantity: 1\n        }\n        bundle_options: [\n          {\n            id: 1\n            quantity: 1\n            value: [\n              "2"\n            ]\n          },\n          {\n            id: 2\n            quantity: 2\n            value: [\n              "4"\n            ]\n          },\n          {\n            id: 3\n            quantity: 1\n            value: [\n              "7"\n            ]\n          },\n          {\n            id: 4\n            quantity: 1\n            value: [\n              "8"\n            ]\n          }\n        ]\n      },\n    ]\n  }) {\n    cart {\n      items {\n        uid\n        quantity\n        product {\n          sku\n        }\n        ... on BundleCartItem {\n          bundle_options {\n            uid\n            label\n            type\n            values {\n              id\n              label\n              price\n              quantity\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addBundleProductsToCart": {\n      "cart": {\n        "items": [\n          {\n            "uid": "MjI=",\n            "quantity": 1,\n            "product": {\n              "sku": "WSH12"\n            }\n          },\n          {\n            "uid": "MjQ=",\n            "quantity": 3,\n            "product": {\n              "sku": "24-WB01"\n            }\n          },\n          {\n            "uid": "MzI=",\n            "quantity": 1,\n            "product": {\n              "sku": "24-WG080"\n            },\n            "bundle_options": [\n              {\n                "uid": "YnVuZGxlLzE=",\n                "label": "Sprite Stasis Ball",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 2,\n                    "label": "Sprite Stasis Ball 65 cm",\n                    "price": 27,\n                    "quantity": 1\n                  }\n                ]\n              },\n              {\n                "uid": "YnVuZGxlLzI=",\n                "label": "Sprite Foam Yoga Brick",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 4,\n                    "label": "Sprite Foam Yoga Brick",\n                    "price": 5,\n                    "quantity": 2\n                  }\n                ]\n              },\n              {\n                "uid": "YnVuZGxlLzM=",\n                "label": "Sprite Yoga Strap",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 7,\n                    "label": "Sprite Yoga Strap 10 foot",\n                    "price": 21,\n                    "quantity": 1\n                  }\n                ]\n              },\n              {\n                "uid": "YnVuZGxlLzQ=",\n                "label": "Sprite Foam Roller",\n                "type": "radio",\n                "values": [\n                  {\n                    "id": 8,\n                    "label": "Sprite Foam Roller",\n                    "price": 19,\n                    "quantity": 1\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,r.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,r.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," database table.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Could not find a product with SKU "XXX"')),(0,r.mdx)("td",{parentName:"tr",align:null},"A simple product with the SKU specified in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"data.sku")," argument does not exist.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Required parameter "cart_id" is missing')),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"cart_id")," argument is omitted or contains an empty value.")))),(0,r.mdx)("h2",{id:"related-topics"},"Related topics"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../products/interfaces/types/bundle.md"},"Bundle product data types"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-add-bundle-products-md-ca7ada87bd7371649984.js.map