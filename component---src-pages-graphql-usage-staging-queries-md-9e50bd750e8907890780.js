"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2515],{61537:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return c}});var t=a(87462),r=a(45987),i=(a(35776),a(3905)),o=a(65663);const m=["components"],l={},s=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var d;const p={_frontmatter:l},u=o.Z;function c(e){let{components:n}=e,a=(0,r.Z)(e,m);return(0,i.mdx)(u,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"staging-queries"},"Staging queries"),(0,i.mdx)("p",null,"GraphQL allows you to use certain queries to return preview information for staged content. Staging, a Adobe Commerce feature, allows merchants to schedule a set of changes to the storefront that run for a prescribed time in the future. These changes, also known as a ",(0,i.mdx)("em",{parentName:"p"},"campaign"),", are defined within the Admin. Customers do not have access to staged content, and as a result, staging queries have requirements that do not apply to traditional queries and mutations."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://docs.magento.com/m2/ee/user_guide/cms/content-staging.html"},"Content Staging")," in the ",(0,i.mdx)("em",{parentName:"p"},"Merchant User Guide")," describes how to create a campaign."),(0,i.mdx)("p",null,"You can use the following queries to return staged preview information."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"categoryList")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"products"))),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," query does not support full text search in the context of staging, because staged content is not indexed. Therefore, omit the ",(0,i.mdx)("inlineCode",{parentName:"p"},"search")," input attribute in your staging ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," queries."),(0,i.mdx)("p",null,"A staging query requires two specialized headers:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Header name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Authorization Bearer: <authorization_token>")),(0,i.mdx)("td",{parentName:"tr",align:null},"An admin token. Use a 2FA REST endpoint such as  ",(0,i.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/google/authenticate")," to generate this token.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Preview-Version")),(0,i.mdx)("td",{parentName:"tr",align:null},"A timestamp (seconds since January 1, 1970) that is inside the range of dates of the campaign you are querying.")))),(0,i.mdx)("p",null,"The application returns an authorization error if you specify an invalid token or do not include both headers. If the specified timestamp does not correspond to a date in a scheduled campaign, the query results reflect the current storefront settings."),(0,i.mdx)("p",null,"The application also returns an error if you specify these headers with any other query or any mutation."),(0,i.mdx)("h2",{id:"example-campaign"},"Example campaign"),(0,i.mdx)("p",null,"The example staging queries in this section are based on a simple campaign that creates a custom category and catalog sales rule using the Luma sample data. By default, the custom category and sales rule are disabled but become enabled when the campaign takes effect."),(0,i.mdx)("p",null,"The following steps describe how to create this example campaign."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Create a subcategory of ",(0,i.mdx)("strong",{parentName:"li"},"Sale")," named ",(0,i.mdx)("strong",{parentName:"li"},"End of Year Sale"),". Set the ",(0,i.mdx)("strong",{parentName:"li"},"Enable Category")," field to ",(0,i.mdx)("strong",{parentName:"li"},"No"),"."),(0,i.mdx)("li",{parentName:"ol"},"Add several products to the subcategory."),(0,i.mdx)("li",{parentName:"ol"},"Schedule an update named ",(0,i.mdx)("strong",{parentName:"li"},"End of Year Sale Update")," for the subcategory that takes effect at a later date. Configure the update so that the ",(0,i.mdx)("strong",{parentName:"li"},"Enable Category")," field is set to ",(0,i.mdx)("strong",{parentName:"li"},"Yes"),"."),(0,i.mdx)("li",{parentName:"ol"},"Create a catalog sales rule with the following properties:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Set the ",(0,i.mdx)("strong",{parentName:"li"},"Active")," switch to ",(0,i.mdx)("strong",{parentName:"li"},"No"),"."),(0,i.mdx)("li",{parentName:"ul"},"In the ",(0,i.mdx)("strong",{parentName:"li"},"Conditions")," section, define the condition as ",(0,i.mdx)("strong",{parentName:"li"},"Category is <Subcategory_ID>"),"."),(0,i.mdx)("li",{parentName:"ul"},"In the ",(0,i.mdx)("strong",{parentName:"li"},"Actions")," section, set the ",(0,i.mdx)("strong",{parentName:"li"},"Apply")," field to ",(0,i.mdx)("strong",{parentName:"li"},"Apply a percentage of original")," and the ",(0,i.mdx)("strong",{parentName:"li"},"Discount Amount")," field to ",(0,i.mdx)("strong",{parentName:"li"},"25"),"."))),(0,i.mdx)("li",{parentName:"ol"},"Schedule an update for the catalog sales rule and assign it to the ",(0,i.mdx)("strong",{parentName:"li"},"End of Year Sale Update"),". In this update, set the ",(0,i.mdx)("strong",{parentName:"li"},"Active")," switch to ",(0,i.mdx)("strong",{parentName:"li"},"Yes"),".")),(0,i.mdx)("h3",{id:"staging-products-query"},"Staging ",(0,i.mdx)("inlineCode",{parentName:"h3"},"products")," query"),(0,i.mdx)("p",null,"The following query returns information about a product (",(0,i.mdx)("inlineCode",{parentName:"p"},"24-UG05"),") in the ",(0,i.mdx)("strong",{parentName:"p"},"End of Year Sale")," campaign. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Preview-Version")," header contains the timestamp for a date that is within the duration of the campaign. When you include the proper headers, the query returns prices with applied discounts. Without the headers, the query returns only default prices."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Headers:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"Authorization: Bearer hoyz7k697ubv5hcpq92yrtx39i7x10um\nPreview-Version: 1576389600\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  products(filter: {sku: {eq: "24-UG05"}}) {\n    items {\n      name\n      sku\n      price_range {\n        minimum_price {\n          discount {\n            percent_off\n            amount_off\n          }\n          final_price {\n            value\n            currency\n          }\n          regular_price {\n            value\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response with headers:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "products": {\n      "items": [\n        {\n          "name": "Go-Get\'r Pushup Grips",\n          "sku": "24-UG05",\n          "price_range": {\n            "minimum_price": {\n              "discount": {\n                "percent_off": 25,\n                "amount_off": 4.75\n              },\n              "final_price": {\n                "value": 14.25,\n                "currency": "USD"\n              },\n              "regular_price": {\n                "value": 19\n              }\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response without headers:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "products": {\n      "items": [\n        {\n          "name": "Go-Get\'r Pushup Grips",\n          "sku": "24-UG05",\n          "price_range": {\n            "minimum_price": {\n              "discount": {\n                "percent_off": 0,\n                "amount_off": 0\n              },\n              "final_price": {\n                "value": 19,\n                "currency": "USD"\n              },\n              "regular_price": {\n                "value": 19\n              }\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.mdx)("h3",{id:"staging-categorylist-query"},"Staging ",(0,i.mdx)("inlineCode",{parentName:"h3"},"categoryList")," query"),(0,i.mdx)("p",null,"In this example campaign, the ",(0,i.mdx)("strong",{parentName:"p"},"End of Year Sale")," subcategory and a catalog price rule are disabled when the campaign is not in effect. When you specify valid headers, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"categoryList"),"query returns full details about the custom category. Otherwise, the query returns an empty array."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Headers:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"Authorization: Bearer hoyz7k697ubv5hcpq92yrtx39i7x10um\nPreview-Version: 1576389600\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  categoryList(filters: {ids: {eq: "43"}}) {\n    name\n    level\n    products(\n      sort: {\n        price: ASC\n      }\n      pageSize: 20\n      currentPage: 1\n    ) {\n      total_count\n      items {\n        name\n        sku\n        price_range {\n          minimum_price {\n            discount {\n              amount_off\n              percent_off\n            }\n            final_price {\n              value\n            }\n            regular_price {\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response with headers:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "categoryList": [\n      {\n        "name": "End of Year Sale",\n        "level": 3,\n        "products": {\n          "total_count": 4,\n          "items": [\n            {\n              "name": "Solo Power Circuit",\n              "sku": "240-LV07",\n              "price_range": {\n                "minimum_price": {\n                  "discount": {\n                    "amount_off": 3.5,\n                    "percent_off": 25\n                  },\n                  "final_price": {\n                    "value": 10.5\n                  },\n                  "regular_price": {\n                    "value": 14\n                  }\n                }\n              }\n            },\n            {\n              "name": "Quest Lumaflex&trade; Band",\n              "sku": "24-UG01",\n              "price_range": {\n                "minimum_price": {\n                  "discount": {\n                    "amount_off": 4.75,\n                    "percent_off": 25\n                  },\n                  "final_price": {\n                    "value": 14.25\n                  },\n                  "regular_price": {\n                    "value": 19\n                  }\n                }\n              }\n            },\n            {\n              "name": "Go-Get\'r Pushup Grips",\n              "sku": "24-UG05",\n              "price_range": {\n                "minimum_price": {\n                  "discount": {\n                    "amount_off": 4.75,\n                    "percent_off": 25\n                  },\n                  "final_price": {\n                    "value": 14.25\n                  },\n                  "regular_price": {\n                    "value": 19\n                  }\n                }\n              }\n            },\n            {\n              "name": "Gabrielle Micro Sleeve Top",\n              "sku": "WS02",\n              "price_range": {\n                "minimum_price": {\n                  "discount": {\n                    "amount_off": 7.00,\n                    "percent_off": 25\n                  },\n                  "final_price": {\n                    "value": 21\n                  },\n                  "regular_price": {\n                    "value": 28\n                  }\n                }\n              }\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response without headers:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "categoryList": []\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-usage-staging-queries-md-9e50bd750e8907890780.js.map