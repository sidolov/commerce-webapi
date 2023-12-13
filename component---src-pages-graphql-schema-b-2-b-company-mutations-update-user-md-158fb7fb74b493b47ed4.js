"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3311],{74673:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return s}});var t=a(87462),m=a(45987),r=(a(35776),a(3905)),d=a(91515);const o=["components"],p={},l={_frontmatter:p},i=d.Z;function s(e){let{components:n}=e,a=(0,m.Z)(e,o);return(0,r.mdx)(i,(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"updatecompanyuser-mutation"},"updateCompanyUser mutation"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateCompanyUser")," mutation to update an existing company user."),(0,r.mdx)("p",null,"You can get the user ID and role ID with the ",(0,r.mdx)("a",{parentName:"p",href:"../queries/company.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"company"))," query."),(0,r.mdx)("p",null,"This mutation requires a valid ",(0,r.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    updateCompanyUser(\n        input: CompanyUserUpdateInput!\n    ) {\n        UpdateCompanyUserOutput\n    }\n}\n")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompanyUser"},(0,r.mdx)("inlineCode",{parentName:"a"},"updateCompanyUser"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example changes the job title of the specified company user."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCompanyUser(\n    input: {\n      id: "Mg=="\n      job_title: "Company User"\n    }\n  ) {\n    user {\n      email\n      firstname\n      lastname\n      job_title\n      telephone\n      status\n      role {\n        id\n        name\n        users_count\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCompanyUser": {\n      "user": {\n        "email": "jane.doe@example.com",\n        "firstname": "Jane",\n        "lastname": "Doe",\n        "job_title": "Company User",\n        "telephone": "1234567890",\n        "status": "ACTIVE",\n        "role": {\n          "id": "MQ==",\n          "name": "Default User",\n          "users_count": 1\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"This example deactivates the company user and assigns a different role."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCompanyUser(\n    input: {\n      id: "Mg=="\n      role_id: "MQ=="\n      status: INACTIVE\n    }\n  ) {\n    user {\n      email\n      firstname\n      lastname\n      job_title\n      telephone\n      status\n      role {\n        id\n        name\n        users_count\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCompanyUser": {\n      "user": {\n        "email": "jane.doe@example.com",\n        "firstname": "Jane",\n        "lastname": "Doe",\n        "job_title": "Company User",\n        "telephone": "1234567890",\n        "status": "INACTIVE",\n        "role": {\n          "id": "MQ==",\n          "name": "Default User",\n          "users_count": 1\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"You do not have authorization to perform this action.")),(0,r.mdx)("td",{parentName:"tr",align:null},"The user with the ID provided in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," argument is not assigned to your company.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"No such entity with roleId = xxx")),(0,r.mdx)("td",{parentName:"tr",align:null},"The company role with ID ",(0,r.mdx)("inlineCode",{parentName:"td"},"xxx")," doesn't exist.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"A customer with the same email address already exists in an associated website")),(0,r.mdx)("td",{parentName:"tr",align:null},"The email provided in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,r.mdx)("inlineCode",{parentName:"td"},"email")," argument belongs to another user.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-mutations-update-user-md-158fb7fb74b493b47ed4.js.map