"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[112],{12103:function(n,e,r){r.r(e),r.d(e,{_frontmatter:function(){return d},default:function(){return l}});var t=r(87462),i=r(45987),a=(r(35776),r(3905)),u=r(91515);const m=["components"],d={},s=(p="InlineAlert",function(n){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)});var p;const o={_frontmatter:d},c=u.Z;function l(n){let{components:e}=n,r=(0,i.Z)(n,m);return(0,a.mdx)(c,(0,t.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"updateproductsinwishlist-mutation"},"updateProductsInWishlist mutation"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"updateProductsInWishlist")," mutation changes the quantity, description and option information for the specified items in the customer's wish list."),(0,a.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"removeProductsFromWishlist")," mutation to remove an item from the wish list. Do not set the quantity of an item to 0."),(0,a.mdx)("p",null,"This mutation requires a valid ",(0,a.mdx)("a",{parentName:"p",href:"../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,a.mdx)("h2",{id:"syntax"},"Syntax"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  updateProductsInWishlist(\n    wishlistId: ID!\n    wishlistItems: [WishlistItemUpdateInput!]!\n  ){\n      UpdateProductsInWishlistOutput\n  }\n}\n")),(0,a.mdx)("h2",{id:"reference"},"Reference"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateProductsInWishlist"},(0,a.mdx)("inlineCode",{parentName:"a"},"updateProductsInWishlist"))," reference provides detailed information about the types and fields defined in this mutation."),(0,a.mdx)("h2",{id:"example-usage"},"Example usage"),(0,a.mdx)("p",null,"The following example changes the quantity of the product represented by wish list item ",(0,a.mdx)("inlineCode",{parentName:"p"},"16")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"2")," and adds a description for item ",(0,a.mdx)("inlineCode",{parentName:"p"},"17"),"."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Request:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateProductsInWishlist(\n  wishlistId: 2\n  wishlistItems: [\n    {\n      wishlist_item_id: 10\n      quantity: 2\n    }\n    {\n      wishlist_item_id: 11\n      description: "I love this!"\n    }\n  ]){\n    wishlist {\n      id\n      items_count\n      items_v2 {\n        items {\n          id\n          quantity\n          product {\n            name\n            sku\n            uid\n            price_range {\n              minimum_price {\n                regular_price {\n                  currency\n                  value\n                }\n              }\n              maximum_price {\n                regular_price {\n                  currency\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    user_errors {\n      code\n      message\n    }\n  }\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Response:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateProductsInWishlist": {\n      "wishlist": {\n        "id": "2",\n        "items_count": 8,\n        "items_v2": {\n          "items": [\n            {\n              "id": "8",\n              "quantity": 1,\n              "product": {\n                "name": "Advanced Pilates & Yoga (Strength)",\n                "sku": "240-LV08",\n                "uid": "NDk=",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 18\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 18\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "id": "10",\n              "quantity": 1,\n              "product": {\n                "name": "Layla Tee",\n                "sku": "WS04",\n                "uid": "MTQ1MA==",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 29\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 29\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "id": "11",\n              "quantity": 1,\n              "product": {\n                "name": "Radiant Tee",\n                "sku": "WS12",\n                "uid": "MTU2Mg==",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 22\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 22\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "id": "12",\n              "quantity": 1,\n              "product": {\n                "name": "Electra Bra Top",\n                "sku": "WB01",\n                "uid": "MTYxMA==",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 39\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 39\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "id": "13",\n              "quantity": 1,\n              "product": {\n                "name": "Celeste Sports Bra",\n                "sku": "WB03",\n                "uid": "MTY0Mg==",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 39\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 39\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "id": "15",\n              "quantity": 2,\n              "product": {\n                "name": "Nora Practice Tank",\n                "sku": "WT03",\n                "uid": "MTcyMg==",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 39\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 39\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "id": "24",\n              "quantity": 2,\n              "product": {\n                "name": "Layla Tee",\n                "sku": "WS04",\n                "uid": "MTQ1MA==",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 29\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 29\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "id": "25",\n              "quantity": 1,\n              "product": {\n                "name": "Radiant Tee",\n                "sku": "WS12",\n                "uid": "MTU2Mg==",\n                "price_range": {\n                  "minimum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 22\n                    }\n                  },\n                  "maximum_price": {\n                    "regular_price": {\n                      "currency": "USD",\n                      "value": 22\n                    }\n                  }\n                }\n              }\n            }\n          ]\n        }\n      },\n      "user_errors": []\n    }\n  }\n}\n')),(0,a.mdx)("h2",{id:"errors"},"Errors"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Error"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"The current user cannot perform operations on wishlist")),(0,a.mdx)("td",{parentName:"tr",align:null},"An unauthorized user (guest) tried to add an item to a wishlist, or an authorized user (customer) tried to add an item to a wishlist of another customer.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"The wishlist was not found.")),(0,a.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,a.mdx)("inlineCode",{parentName:"td"},"wishlistId")," field is invalid or does not exist for the customer.")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-wishlist-mutations-update-products-md-07a3c95b7eea6cfe4087.js.map