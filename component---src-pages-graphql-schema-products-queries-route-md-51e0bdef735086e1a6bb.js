"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3632],{82224:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return i}});var r=t(58168),a=t(80045),u=(t(88763),t(15680)),o=t(83407);const l=["components"],d={},m={_frontmatter:d},p=o.A;function i(e){let{components:n}=e,t=(0,a.A)(e,l);return(0,u.mdx)(p,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("h1",{id:"route-query"},"route query"),(0,u.mdx)("p",null,"A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address."),(0,u.mdx)("p",null,"The ",(0,u.mdx)("inlineCode",{parentName:"p"},"route")," query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page. To query for product and category pages, the ",(0,u.mdx)("inlineCode",{parentName:"p"},"url")," value must contain the URL key and suffix. For CMS page queries, the ",(0,u.mdx)("inlineCode",{parentName:"p"},"url")," value must contain the URL key only."),(0,u.mdx)("h2",{id:"syntax"},"Syntax"),(0,u.mdx)("p",null,(0,u.mdx)("inlineCode",{parentName:"p"},"{route(url: String!): RoutableInterface}")),(0,u.mdx)("h2",{id:"reference"},"Reference"),(0,u.mdx)("p",null,"The ",(0,u.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-route"},(0,u.mdx)("inlineCode",{parentName:"a"},"route"))," reference provides detailed information about the types and fields defined in this query."),(0,u.mdx)("h2",{id:"example-usage"},"Example usage"),(0,u.mdx)("p",null,"The following query returns information about the product with the URL key of ",(0,u.mdx)("inlineCode",{parentName:"p"},"joust-duffle-bag.html"),". The response indicates the URL key has been permanently redirected to ",(0,u.mdx)("inlineCode",{parentName:"p"},"new-joust-duffle-bag.html"),"."),(0,u.mdx)("p",null,(0,u.mdx)("strong",{parentName:"p"},"Request:")),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  route(url: "joust-duffle-bag.html") {\n    __typename\n    relative_url\n    redirect_code\n    type\n    ... on SimpleProduct {\n      sku\n      url_key\n      uid\n      url_rewrites {\n        url\n        parameters {\n          name\n          value\n        }\n      }\n      relative_url\n      redirect_code\n      type\n    }\n  }\n}\n')),(0,u.mdx)("p",null,(0,u.mdx)("strong",{parentName:"p"},"Response:")),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "route": {\n      "__typename": "SimpleProduct",\n      "relative_url": "new-joust-duffle-bag.html",\n      "redirect_code": 301,\n      "type": "PRODUCT",\n      "sku": "24-MB01",\n      "url_key": "new-joust-duffle-bag",\n      "uid": "MQ==",\n      "url_rewrites": [\n        {\n          "url": "new-joust-duffle-bag.html",\n          "parameters": [\n            {\n              "name": "id",\n              "value": "1"\n            }\n          ]\n        },\n        {\n          "url": "gear/new-joust-duffle-bag.html",\n          "parameters": [\n            {\n              "name": "id",\n              "value": "1"\n            },\n            {\n              "name": "category",\n              "value": "3"\n            }\n          ]\n        },\n        {\n          "url": "gear/bags/new-joust-duffle-bag.html",\n          "parameters": [\n            {\n              "name": "id",\n              "value": "1"\n            },\n            {\n              "name": "category",\n              "value": "4"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,u.mdx)("h2",{id:"related-topics"},"Related topics"),(0,u.mdx)("p",null,(0,u.mdx)("a",{parentName:"p",href:"../interfaces/routable.md"},"RoutableInterface")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-queries-route-md-51e0bdef735086e1a6bb.js.map