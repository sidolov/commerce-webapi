"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7525],{49995:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return c}});var a=t(87462),o=t(45987),r=(t(35776),t(3905)),m=t(91515),d=t(89036);const i=["components"],p={},l=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var s;const u={_frontmatter:p},x=m.Z;function c(e){let{components:n}=e,t=(0,o.Z)(e,i);return(0,r.mdx)(x,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"updatecompanyrole-mutation"},"updateCompanyRole mutation"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateCompanyRole")," mutation to update the company role and permissions."),(0,r.mdx)("p",null,"You can get the role ID and the list of all resources defined within the company using the ",(0,r.mdx)("a",{parentName:"p",href:"../queries/company.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"company"))," query."),(0,r.mdx)(d.Z,{mdxType:"B2BRoles"}),(0,r.mdx)("p",null,"You can change or add permissions to the company role using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"permissions")," attribute."),(0,r.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Any time you use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"permissions")," object to update role capabilities, you must include the entire hierarchy of permissions. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateCompanyRole")," mutation rewrites all role permissions based on the specified payload."),(0,r.mdx)("p",null,"This mutation requires a valid ",(0,r.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    updateCompanyRole(\n        input: CompanyRoleUpdateInput!\n    ) {\n        UpdateCompanyRoleOutput\n    }\n}\n")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompanyRole"},(0,r.mdx)("inlineCode",{parentName:"a"},"updateCompanyRole"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example updates the name of a company role."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCompanyRole(\n    input: {\n      id: "Mg=="\n      name: "Company Admin (updated)"\n    }\n  ) {\n    role {\n      id\n      name\n      permissions {\n        id\n        text\n        sort_order\n        children {\n          id\n          text\n          sort_order\n          children {\n            id\n            text\n            sort_order\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCompanyRole": {\n      "role": {\n        "id": "Mg==",\n        "name": "Company Admin (updated)",\n        "permissions": [\n          {\n            "id": "Magento_Company::index",\n            "text": "All",\n            "sort_order": 100,\n            "children": [\n              {\n                "id": "Magento_Company::view",\n                "text": "Company Profile",\n                "sort_order": 100,\n                "children": [\n                  {\n                    "id": "Magento_Company::view_account",\n                    "text": "Account Information (View)",\n                    "sort_order": 100\n                  },\n                  {\n                    "id": "Magento_Company::view_address",\n                    "text": "Legal Address (View)",\n                    "sort_order": 200\n                  },\n                  {\n                    "id": "Magento_Company::contacts",\n                    "text": "Contacts (View)",\n                    "sort_order": 300\n                  },\n                  {\n                    "id": "Magento_Company::payment_information",\n                    "text": "Payment Information (View)",\n                    "sort_order": 400\n                  },\n                  {\n                    "id": "Magento_Company::shipping_information",\n                    "text": "Shipping Information (View)",\n                    "sort_order": 450\n                  }\n                ]\n              },\n              {\n                "id": "Magento_Company::user_management",\n                "text": "Company User Management",\n                "sort_order": 200,\n                "children": [\n                  {\n                    "id": "Magento_Company::roles_view",\n                    "text": "View roles and permissions",\n                    "sort_order": 100\n                  },\n                  {\n                    "id": "Magento_Company::users_view",\n                    "text": "View users and teams",\n                    "sort_order": 300\n                  }\n                ]\n              },\n              {\n                "id": "Magento_Company::credit",\n                "text": "Company Credit",\n                "sort_order": 500,\n                "children": [\n                  {\n                    "id": "Magento_Company::credit_history",\n                    "text": "View",\n                    "sort_order": 500\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"User role with this name already exists. Enter a different name to save this role.")),(0,r.mdx)("td",{parentName:"tr",align:null},"The company cannot have multiple company roles with the same name.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Unable to set "allow" for the resource because its parent resource(s) is set to "deny".')),(0,r.mdx)("td",{parentName:"tr",align:null},"To allow permission for the company role, you must allow all the permissions of the parent tree.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"No such entity with roleId = xxx")),(0,r.mdx)("td",{parentName:"tr",align:null},"The company role with ID ",(0,r.mdx)("inlineCode",{parentName:"td"},"xxx")," doesn't exist.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-mutations-update-role-md-b3be90080bdc148dde01.js.map