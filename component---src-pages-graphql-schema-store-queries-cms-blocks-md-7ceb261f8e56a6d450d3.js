"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2830],{65228:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return x}});var a=t(87462),r=t(45987),o=(t(35776),t(3905)),d=t(65663);const i=["components"],m={},l=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var s;const p={_frontmatter:m},c=d.Z;function x(e){let{components:n}=e,t=(0,r.Z)(e,i);return(0,o.mdx)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"cmsblocks-query"},"cmsBlocks query"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"cmsBlocks")," query returns information about blocks that were developed with the Adobe Commerce or Magento Open Source Content Management System (CMS)."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("p",null,"Return the contents of one or more CMS blocks:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"cmsBlocks(identifiers: [String]): CmsBlocks")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-cmsBlocks"},(0,o.mdx)("inlineCode",{parentName:"a"},"cmsBlocks"))," reference provides detailed information about the types and fields defined in this query."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"The following query returns information about the ",(0,o.mdx)("inlineCode",{parentName:"p"},"login-data")," block:"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  cmsBlocks(identifiers: "login-data") {\n    items {\n      identifier\n      title\n      content\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "cmsBlocks": {\n      "items": [\n        {\n          "identifier": "login-data",\n          "title": "Login Info Block",\n          "content": "<div class=\\"message info\\" style=\\"margin-top: 50px;\\">\\n    <p><strong>Try Demo Customer Access</strong></p>\\n    <p><span style=\\"display:inline-block; width: 80px; padding-right: 10px;\\">Email:</span>roni_cost@example.com</p>\\n    <p><span style=\\"display:inline-block; width: 80px; padding-right: 10px;\\">Password:</span>roni_cost3@example.com</p>\\n</div>"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"content")," field may contain HTML markup and CSS styles. Hidden and system elements may be included in the response."),(0,o.mdx)("h2",{id:"errors"},"Errors"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Error"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},'The CMS block with the "XXXX" ID doesn\'t exist')),(0,o.mdx)("td",{parentName:"tr",align:null},"The specified CMS block ID is invalid.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},'"identifiers" of CMS blocks should be specified"')),(0,o.mdx)("td",{parentName:"tr",align:null},"The ",(0,o.mdx)("inlineCode",{parentName:"td"},"identifiers")," array parameter is required for identifying the CMS blocks.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-store-queries-cms-blocks-md-7ceb261f8e56a6d450d3.js.map