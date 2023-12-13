"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5144],{99940:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return c}});var a=t(87462),r=t(45987),d=(t(35776),t(3905)),o=t(91515);const i=["components"],l={},m=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var s;const p={_frontmatter:l},u=o.Z;function c(e){let{components:n}=e,t=(0,r.Z)(e,i);return(0,d.mdx)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"cmspage-query"},"cmsPage query"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"cmsPage")," query returns information about content pages that were developed with the Adobe Commerce or Magento Open Source Content Management System (CMS)."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,"Return the contents of a CMS page:"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"cmsPage(identifier: String): CmsPage")),(0,d.mdx)("h2",{id:"reference"},"Reference"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-cmsPage"},(0,d.mdx)("inlineCode",{parentName:"a"},"cmsPage"))," reference provides detailed information about the types and fields defined in this query."),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,'You must include the CMS page identifier value to retrieve the content of a specific CMS page. The following query returns information about the "404 Not Found" CMS page:'),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  cmsPage(identifier: "no-route") {\n    identifier\n    url_key\n    title\n    content\n    content_heading\n    page_layout\n    meta_title\n    meta_description\n    meta_keywords\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "cmsPage": {\n      "identifier": "no-route"\n      "url_key": "no-route",\n      "title": "404 Not Found",\n      "content": "<dl>\\r\\n<dt>The page you requested was not found, and we have a fine guess why.</dt>\\r\\n<dd>\\r\\n<ul class=\\"disc\\">\\r\\n<li>If you typed the URL directly, please make sure the spelling is correct.</li>\\r\\n<li>If you clicked on a link to get here, the link is outdated.</li>\\r\\n</ul></dd>\\r\\n</dl>\\r\\n<dl>\\r\\n<dt>What can you do?</dt>\\r\\n<dd>Have no fear, help is near! There are many ways you can get back on track with the Store.</dd>\\r\\n<dd>\\r\\n<ul class=\\"disc\\">\\r\\n<li><a href=\\"#\\" onclick=\\"history.go(-1); return false;\\">Go back</a> to the previous page.</li>\\r\\n<li>Use the search bar at the top of the page to search for your products.</li>\\r\\n<li>Follow these links to get you back on track!<br /><a href=\\"http://magento2.vagrant193/\\">Store Home</a> <span class=\\"separator\\">|</span> <a href=\\"http://magento2.vagrant193/customer/account/\\">My Account</a></li></ul></dd></dl>\\r\\n",\n      "content_heading": "Whoops, our bad...",\n      "page_layout": "2columns-right",\n      "meta_title": null,\n      "meta_description": "Page description",\n      "meta_keywords": "Page keywords"\n    }\n  }\n}\n')),(0,d.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"content")," field may contain HTML markup and CSS styles. Hidden and system elements may be included in the response."),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'The CMS page with the "XXXX" ID doesn\'t exist')),(0,d.mdx)("td",{parentName:"tr",align:null},"The specified CMS page ID is invalid.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Page id/identifier should be specified"')),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"identifier")," parameter is required for identifying the CMS page.")))),(0,d.mdx)("h2",{id:"related-topics"},"Related topics"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"cms-blocks.md"},"cmsBlocks query")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-store-queries-cms-page-md-91aa0c1ec7272faed0dd.js.map