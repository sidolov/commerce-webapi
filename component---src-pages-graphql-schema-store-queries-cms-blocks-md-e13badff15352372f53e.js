"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2830],{9009:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return x}});var a,r=t(87462),d=t(63366),i=(t(15007),t(64983)),o=t(91515),m=["components"],l={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:l},c=o.Z;function x(e){var n=e.components,t=(0,d.Z)(e,m);return(0,i.mdx)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"cmsblocks-query"},"cmsBlocks query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"cmsBlocks")," query returns information about blocks that were developed with the Adobe Commerce or Magento Open Source Content Management System (CMS)."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("p",null,"Return the contents of one or more CMS blocks:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"cmsBlocks(identifiers: [String]): CmsBlocks")),(0,i.mdx)("h2",{id:"reference"},"Reference"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-cmsBlocks"},(0,i.mdx)("inlineCode",{parentName:"a"},"cmsBlocks"))," reference provides detailed information about the types and fields defined in this query."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following query returns information about the ",(0,i.mdx)("inlineCode",{parentName:"p"},"login-data")," block:"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  cmsBlocks(identifiers: "login-data") {\n    items {\n      identifier\n      title\n      content\n    }\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "cmsBlocks": {\n      "items": [\n        {\n          "identifier": "login-data",\n          "title": "Login Info Block",\n          "content": "<div class=\\"message info\\" style=\\"margin-top: 50px;\\">\\n    <p><strong>Try Demo Customer Access</strong></p>\\n    <p><span style=\\"display:inline-block; width: 80px; padding-right: 10px;\\">Email:</span>roni_cost@example.com</p>\\n    <p><span style=\\"display:inline-block; width: 80px; padding-right: 10px;\\">Password:</span>roni_cost3@example.com</p>\\n</div>"\n        }\n      ]\n    }\n  }\n}\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"content")," field may contain HTML markup and CSS styles. Hidden and system elements may be included in the response."),(0,i.mdx)("h2",{id:"errors"},"Errors"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Error"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'The CMS block with the "XXXX" ID doesn\'t exist')),(0,i.mdx)("td",{parentName:"tr",align:null},"The specified CMS block ID is invalid.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'"identifiers" of CMS blocks should be specified"')),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"identifiers")," array parameter is required for identifying the CMS blocks.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-store-queries-cms-blocks-md-e13badff15352372f53e.js.map