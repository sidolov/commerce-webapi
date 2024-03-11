"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1806],{4750:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return d}});var m=n(87462),i=n(45987),l=(n(35776),n(3905)),t=n(65663);const r=["components"],p={},o={_frontmatter:p},s=t.Z;function d(e){let{components:a}=e,n=(0,i.Z)(e,r);return(0,l.mdx)(s,(0,m.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"iscompanyemailavailable-query"},"isCompanyEmailAvailable query"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"isCompanyEmailAvailable")," query checks whether the specified email is valid for company registration. The specified email can be the same as an existing customer or company administrator. If the email matches an existing company email, the query returns a ",(0,l.mdx)("inlineCode",{parentName:"p"},"false")," value."),(0,l.mdx)("p",null,"This query requires a valid ",(0,l.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"isCompanyEmailAvailable ( email String! ) IsCompanyEmailAvailableOutput")),(0,l.mdx)("h2",{id:"reference"},"Reference"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyEmailAvailable"},(0,l.mdx)("inlineCode",{parentName:"a"},"isCompanyEmailAvailable"))," reference provides detailed information about the types and fields defined in this query."),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("p",null,"The following example checks whether the email address ",(0,l.mdx)("inlineCode",{parentName:"p"},"roni_cost@example.com")," can be used to register a company."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'query{\n  isCompanyEmailAvailable(email: "roni_cost@example.com"){\n    is_email_available\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "isCompanyEmailAvailable": {\n      "is_email_available": true\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"related-topics"},"Related topics"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"is-company-admin-email-available.md"},"isCompanyAdminEmailAvailable query")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"is-company-user-email-available.md"},"isCompanyUserEmailAvailable query"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-queries-is-company-email-available-md-4fd8bf028cd04282cf39.js.map