"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6511],{71152:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return p}});var a=n(87462),d=n(63366),r=(n(15007),n(64983)),l=n(91515),m=["components"],o={},i={_frontmatter:o},u=l.Z;function p(e){var t=e.components,n=(0,d.Z)(e,m);return(0,r.mdx)(u,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"customerdownloadableproducts-query"},"customerDownloadableProducts query"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerDownloadableProducts")," query to retrieve the list of purchased downloadable products for the logged-in customer."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"{customerDownloadableProducts: {CustomerDownloadableProducts}}")),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example returns the list of purchased downloadable products for the logged-in customer."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customerDownloadableProducts {\n    items {\n      date\n      download_url\n      order_increment_id\n      remaining_downloads\n      status\n    }\n  }\n}\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customerDownloadableProducts": {\n      "items": [\n        {\n          "date": "2019-03-04 20:48:32",\n          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NTcwMTEwMCAxNTUxNzMyNTEyMTExNTE%2C/",\n          "order_increment_id": "000000004",\n          "remaining_downloads": "Unlimited",\n          "status": "pending"\n        },\n        {\n          "date": "2019-03-04 20:48:32",\n          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NzM0OTkwMCAxNTUxNzMyNTEyMjEyNTA%2C/",\n          "order_increment_id": "000000004",\n          "remaining_downloads": "Unlimited",\n          "status": "pending"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"CustomerDownloadableProducts")," object contains the following attribute."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"items")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#customerdownloadableproduct-object"},"[CustomerDownloadableProduct]")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of purchased downloadable items")))),(0,r.mdx)("h3",{id:"customerdownloadableproduct-object"},"CustomerDownloadableProduct object"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"CustomerDownloadableProduct")," object contains the following attributes:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"date")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The date and time the purchase was made")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"download_url")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The fully qualified URL to the download file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"order_increment_id")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The purchase order ID")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"remaining_downloads")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"Determines the number of times the customer can download the product")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"status")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"Determines the stage in the order workflow when the download becomes available. Options are ",(0,r.mdx)("inlineCode",{parentName:"td"},"Pending")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"Invoiced"))))),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,r.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table.")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-downloadable-products-md-8f599d14014cc761aae0.js.map