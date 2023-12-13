"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7269],{90752:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return i},default:function(){return c}});var t=r(87462),a=r(45987),o=(r(35776),r(3905)),d=r(91515);const l=["components"],i={},p=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var u;const m={_frontmatter:i},s=d.Z;function c(e){let{components:n}=e,r=(0,a.Z)(e,l);return(0,o.mdx)(s,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"urlresolver-query"},"urlResolver query"),(0,o.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"urlResolver")," query has been deprecated. Use the ",(0,o.mdx)("a",{parentName:"p",href:"route.md"},"route")," query instead."),(0,o.mdx)("p",null,"A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"urlResolver")," query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"{urlResolver(url: String!): EntityUrl}")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-urlResolver"},(0,o.mdx)("inlineCode",{parentName:"a"},"urlResolver"))," reference provides detailed information about the types and fields defined in this query."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("h3",{id:"query-the-urls-information"},"Query the URL's information"),(0,o.mdx)("p",null,"The following query returns information about the URL containing ",(0,o.mdx)("inlineCode",{parentName:"p"},"joust-duffle-bag.html"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  urlResolver(url: "joust-duffle-bag.html") {\n    entity_uid\n    relative_url\n    redirectCode\n    type\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "urlResolver": {\n      "entity_uid": "MQ==",\n      "relative_url": "joust-duffle-bag.html",\n      "redirectCode": 0,\n      "type": "PRODUCT"\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"related-topics"},"Related topics"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"products.md"},"products query")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-queries-url-resolver-md-3099be08417861407f37.js.map