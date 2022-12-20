"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[683],{42919:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(15007),n(64983)),m=n(91515),d=n(65551),l=["components"],p={},s={_frontmatter:p},g=m.Z;function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)(g,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"giftregistrytypesearch-query"},"giftRegistryTypeSearch query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"giftRegistryTypeSearch")," query returns a list of gift registries that match the specified registrant name and, optionally, registry type ID. Use the ",(0,i.mdx)("a",{parentName:"p",href:"types.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"giftRegistryTypes")," query")," to return list of registry type IDs."),(0,i.mdx)("h2",{id:"syntax"},"Syntax"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"giftRegistryTypeSearch(\n    firstName: String!\n    lastName: String!\n    giftRegistryTypeUid: String\n): [GiftRegistrySearchResult]\n")),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("p",null,"The following example returns all gift registries in which the specified person is a registrant."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Request:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'query{\n  giftRegistryTypeSearch(firstName: "Stacey", lastName: "Gaines"){\n    event_date\n    event_title\n    gift_registry_uid\n    name\n    type\n  }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "giftRegistryTypeSearch": [\n      {\n        "event_date": "2021-01-28",\n        "event_title": "Theo\'s 45th Birthday",\n        "gift_registry_uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",\n        "name": "Stacey Gaines",\n        "type": "Birthday"\n      }\n    ]\n  }\n}\n')),(0,i.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"giftRegistryTypeSearch")," query accepts the following input attributes."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"firstName")),(0,i.mdx)("td",{parentName:"tr",align:null},"String!"),(0,i.mdx)("td",{parentName:"tr",align:null},"The first name of the registrant")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"lastName")),(0,i.mdx)("td",{parentName:"tr",align:null},"String!"),(0,i.mdx)("td",{parentName:"tr",align:null},"The last name of the registrant")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"giftRegistryTypeUid")),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},"The type UID of the registry")))),(0,i.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,i.mdx)(d.default,{mdxType:"GiftRegistrySearchResult"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-gift-registry-queries-type-search-md-dfdec9d1148435324fea.js.map