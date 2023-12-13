"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7424],{69970:function(n,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return s}});var t=a(87462),r=a(45987),i=(a(35776),a(3905)),d=a(91515);const p=["components"],o={},m={_frontmatter:o},l=d.Z;function s(n){let{components:e}=n,a=(0,r.Z)(n,p);return(0,i.mdx)(l,(0,t.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"applyrewardpointstocart-mutation"},"applyRewardPointsToCart mutation"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"applyRewardPointsToCart")," mutation applies reward points to the customer's cart. You cannot specify a quantity of reward points. If the reward points balance is less than the cart total, the application applies the entire reward points balance. Otherwise, the application applies as many reward points needed to bring the total to 0. Fractional reward points are discarded."),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("a",{parentName:"p",href:"remove-reward-points.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"removeRewardPointsFromCart")," mutation")," to undo the results of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"applyRewardPointsToCart")," mutation."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"mutation: applyRewardPointsToCart(cartId: ID!): ApplyRewardPointsToCartOutput")),(0,i.mdx)("h2",{id:"reference"},"Reference"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-applyRewardPointsToCart"},(0,i.mdx)("inlineCode",{parentName:"a"},"applyRewardPointsToCart"))," reference provides detailed information about the types and fields defined in this mutation."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following example applies $5 to the cart. In this example, the exchange rate is defined as 25 reward points equals $5."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  applyRewardPointsToCart(cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz")\n  {\n    cart {\n      items {\n        quantity\n        product {\n          sku\n          name\n          price_range {\n            maximum_price {\n              final_price {\n                currency\n                value\n              }\n            }\n          }\n        }\n      }\n      applied_reward_points {\n        money {\n          currency\n          value\n        }\n        points\n      }\n      prices {\n        grand_total {\n          currency\n          value\n        }\n        applied_taxes {\n          amount {\n            currency\n            value\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "applyRewardPointsToCart": {\n      "cart": {\n        "items": [\n          {\n            "quantity": 1,\n            "product": {\n              "sku": "WJ04",\n              "name": "Ingrid Running Jacket",\n              "price_range": {\n                "maximum_price": {\n                  "final_price": {\n                    "currency": "USD",\n                    "value": 84\n                  }\n                }\n              }\n            }\n          }\n        ],\n        "applied_reward_points": {\n          "money": {\n            "currency": "USD",\n            "value": 5\n          },\n          "points": 25\n        },\n        "prices": {\n          "grand_total": {\n            "currency": "USD",\n            "value": 90.93\n          },\n          "applied_taxes": [\n            {\n              "amount": {\n                "currency": "USD",\n                "value": 6.93\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,i.mdx)("h2",{id:"errors"},"Errors"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Error"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'Required parameter "cart_id" is missing')),(0,i.mdx)("td",{parentName:"tr",align:null},"The mutation does not contain a ",(0,i.mdx)("inlineCode",{parentName:"td"},"cart_id")," argument.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,i.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,i.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," table.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-apply-reward-points-md-1adcce729e818d37d6b5.js.map