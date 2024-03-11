"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2899],{74089:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var a=t(87462),i=t(45987),r=(t(35776),t(3905)),l=t(65663);const m=["components"],d={},o={_frontmatter:d},u=l.Z;function p(e){let{components:n}=e,t=(0,i.Z)(e,m);return(0,r.mdx)(u,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"graphql-security-configuration"},"GraphQL security configuration"),(0,r.mdx)("p",null,"The Framework and ",(0,r.mdx)("inlineCode",{parentName:"p"},"GraphQl")," module ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," files define several security-related configuration values that you should review to ensure they align with types of mutations and queries that you run."),(0,r.mdx)("p",null,"To override these default values, create a custom module and provide a new value in the appropriate ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/dependency-injection-file/"},"di.xml")," file."),(0,r.mdx)("h2",{id:"input-limiting"},"Input limiting"),(0,r.mdx)("p",null,"In GraphQL, you can limit the maximum page size allowed. For information about how to enable and configure this feature, as well as additional arguments that are applicable to web APIs in general, see ",(0,r.mdx)("a",{parentName:"p",href:"../../get-started/api-security.md"},"API security"),"."),(0,r.mdx)("h2",{id:"graphql-module-configuration"},"GraphQl module configuration"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GraphQl/etc/di.xml")," file contains two arguments that can be overridden to enhance security and prevent performance bottlenecks:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default value"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"queryComplexity")),(0,r.mdx)("td",{parentName:"tr",align:null},"300"),(0,r.mdx)("td",{parentName:"tr",align:null},"Defines the maximum number of fields, objects, and fragments that a query can contain.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"queryDepth")),(0,r.mdx)("td",{parentName:"tr",align:null},"20"),(0,r.mdx)("td",{parentName:"tr",align:null},"Defines the maximum depth of nodes that query can return.")))),(0,r.mdx)("h3",{id:"query-complexity"},"Query complexity"),(0,r.mdx)("p",null,"A complex GraphQL query, such as the ",(0,r.mdx)("a",{parentName:"p",href:"../schema/cart/queries/cart.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"cart"))," or ",(0,r.mdx)("a",{parentName:"p",href:"../schema/products/queries/products.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"products"))," query, can potentially generate a heavy workload on the server. Complex queries can potentially be used to create distributed denial of service (DDoS) attacks by overloading the server with specious requests."),(0,r.mdx)("p",null,"Each instance of the following items adds 1 to the complexity score:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A field and parent field in the body of the query."),(0,r.mdx)("li",{parentName:"ul"},"A field in an inline fragment."),(0,r.mdx)("li",{parentName:"ul"},"A field in a fragment spread. If a fragment spread is used multiple times, each field within is counted that number of times.")),(0,r.mdx)("p",null,"The following items do not count toward the complexity score:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The root ",(0,r.mdx)("inlineCode",{parentName:"li"},"query")," field"),(0,r.mdx)("li",{parentName:"ul"},"Fragment declarations"),(0,r.mdx)("li",{parentName:"ul"},"Fragment spread declarations")),(0,r.mdx)("p",null,"The following sample query contains all of the items listed above."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"query {\n  countries {\n    full_name_english\n    name1: full_name_english\n    ...on Country {\n        two_letter_abbreviation\n    }\n    ...myFrag\n    ...myFrag\n  }\n}\nfragment myFrag on Country {\n    three_letter_abbreviation\n}\n")),(0,r.mdx)("p",null,"The complexity count for the query is 6. These lines contributed to the count:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"countries {}")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"full_name_english")," (first instance)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"name1: full_name_english")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"two_letter_abbreviation")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"three_letter_abbreviation")," (first instance of ",(0,r.mdx)("inlineCode",{parentName:"li"},"...myFrag"),")"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"three_letter_abbreviation")," (second instance of ",(0,r.mdx)("inlineCode",{parentName:"li"},"...myFrag"),")")),(0,r.mdx)("p",null,"Creating the ",(0,r.mdx)("inlineCode",{parentName:"p"},"name1")," alias did not cause the system to double count the entry."),(0,r.mdx)("p",null,"If the count does not exceed the threshold set by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"queryComplexity")," attribute, the application validates and processes the query."),(0,r.mdx)("h3",{id:"query-depth"},"Query depth"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"queryDepth")," attribute specifies the maximum depth a query can return. This can be an issue for queries that return objects that show a hierarchy, such as ",(0,r.mdx)("a",{parentName:"p",href:"../schema/products/queries/categories.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"CategoryTree")),", or queries that return detailed data on complex ",(0,r.mdx)("a",{parentName:"p",href:"../schema/products/queries/products.md"},"products"),". The default value of 20 allows for deep hierarchies and products, but you might want to reduce this number if you know that legitimate queries will never reach that depth."),(0,r.mdx)("p",null,"The following query has a maximum depth of 5."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  categories(\n    filters: {\n      parent_id: {in: ["2"]}\n    }\n  ) {\n    total_count\n    items {\n      uid\n      level\n      name\n      path\n      children_count\n      children {\n        uid\n        level\n        name\n        path\n        children_count\n        children {\n          uid\n          level\n          name\n          path\n          children_count\n          children {\n            uid\n            level\n            name\n            path\n          }\n        }\n      }\n    }\n    page_info {\n      current_page\n      page_size\n      total_pages\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"These fields contribute to the depth:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"items")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"children")," (first instance)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"children")," (second instance)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"children")," (third instance)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"uid")," and other fields in this node")),(0,r.mdx)("p",null,"If the depth of the query exceeds the value  ",(0,r.mdx)("inlineCode",{parentName:"p"},"queryDepth"),", the system returns an error."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-usage-security-configuration-md-41c3bffcf6c8059a7e97.js.map