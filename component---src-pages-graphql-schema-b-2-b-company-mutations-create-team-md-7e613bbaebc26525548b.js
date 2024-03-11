"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4921],{96429:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return s}});var t=a(87462),m=a(45987),p=(a(35776),a(3905)),o=a(65663);const r=["components"],d={},i={_frontmatter:d},l=o.Z;function s(e){let{components:n}=e,a=(0,m.Z)(e,r);return(0,p.mdx)(l,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"createcompanyteam-mutation"},"createCompanyTeam mutation"),(0,p.mdx)("p",null,"Use the ",(0,p.mdx)("inlineCode",{parentName:"p"},"createCompanyTeam")," mutation to create a new team for your company."),(0,p.mdx)("p",null,"The ",(0,p.mdx)("inlineCode",{parentName:"p"},"target_id")," input attribute allows you to specify which node in the company structure will be the parent node of the company team. If you do not specify a value, the team will be assigned to the top-level (root) node of the company structure."),(0,p.mdx)("p",null,"You can get the ",(0,p.mdx)("inlineCode",{parentName:"p"},"target_id")," with the ",(0,p.mdx)("a",{parentName:"p",href:"../queries/company.md"},(0,p.mdx)("inlineCode",{parentName:"a"},"company"))," query."),(0,p.mdx)("p",null,"This mutation requires a valid ",(0,p.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,p.mdx)("h2",{id:"syntax"},"Syntax"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    createCompanyTeam(\n        input: CompanyTeamCreateInput!\n    ) {\n        CreateCompanyTeamOutput\n    }\n}\n")),(0,p.mdx)("h2",{id:"reference"},"Reference"),(0,p.mdx)("p",null,"The ",(0,p.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCompanyTeam"},(0,p.mdx)("inlineCode",{parentName:"a"},"createCompanyTeam"))," reference provides detailed information about the types and fields defined in this mutation."),(0,p.mdx)("h2",{id:"example-usage"},"Example usage"),(0,p.mdx)("p",null,"The following example shows the minimal payload for adding a new team to a customer's company."),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Request:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCompanyTeam(\n    input: {\n      name: "Test Team"\n    }\n  ) {\n    team {\n      id\n      name\n      description\n    }\n  }\n}\n')),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Response:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCompanyTeam": {\n      "team": {\n        "id": "MQ==",\n        "name": "Test Team",\n        "description": null\n      }\n    }\n  }\n}\n')),(0,p.mdx)("p",null,"This example creates a child team of the parent team specified in the ",(0,p.mdx)("inlineCode",{parentName:"p"},"target_id")," field."),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Request:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCompanyTeam(\n    input: {\n      name: "Test Child Team"\n      description: "Test Child Team description"\n      target_id: "MQ=="\n    }\n  ) {\n    team {\n      id\n      name\n      description\n    }\n  }\n}\n')),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Response:")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCompanyTeam": {\n      "team": {\n        "id": "Mg==",\n        "name": "Test Child Team",\n        "description": "Test Child Team description"\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-mutations-create-team-md-7e613bbaebc26525548b.js.map