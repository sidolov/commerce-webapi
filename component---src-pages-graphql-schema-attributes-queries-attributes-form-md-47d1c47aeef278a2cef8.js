"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8862],{63437:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return _}});var r=n(87462),a=n(45987),d=(n(35776),n(3905)),m=n(65663),i=n(19040);const o=["components"],s={},l=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var u;const p={_frontmatter:s},x=m.Z;function _(e){let{components:t}=e,n=(0,a.Z)(e,o);return(0,d.mdx)(x,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(i.Z,{mdxType:"BetaNote"}),(0,d.mdx)("h1",{id:"attributesform-query"},"attributesForm query"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"attributesForm")," query retrieves EAV attributes associated with customer and customer address frontend forms."),(0,d.mdx)("p",null,"These forms are visible when using the Admin to create or edit a customer or customer address address (",(0,d.mdx)("strong",{parentName:"p"},"Stores")," > Attributes > ",(0,d.mdx)("strong",{parentName:"p"},"Customer")," or ",(0,d.mdx)("strong",{parentName:"p"},"Customer Address"),")."),(0,d.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("a",{parentName:"p",href:"../../store/queries/country.md"},"country")," and ",(0,d.mdx)("a",{parentName:"p",href:"../../store/queries/countries.md"},"countries")," mutations to retrieve information about the ",(0,d.mdx)("inlineCode",{parentName:"p"},"region_id")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"country_id")," attributes."),(0,d.mdx)("p",null,"The following table maps the display names of the applicable forms to values that you can specify as a ",(0,d.mdx)("inlineCode",{parentName:"p"},"formCode")," value."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Display name"),(0,d.mdx)("th",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"th"},"formCode")," value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer Account Edit"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customer_account_edit"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer Registration"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customer_account_create"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Customer address"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer Address Registration"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customer_register_address"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Customer address"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer Account Address"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customer_address_edit"))))),(0,d.mdx)(l,{slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"You cannot query on the Admin Checkout form."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"{attributesForm(formCode: String!): {AttributesFormOutput!}}")),(0,d.mdx)("h2",{id:"reference"},"Reference"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#query-attributesForm"},(0,d.mdx)("inlineCode",{parentName:"a"},"attributesForm"))," reference provides detailed information about the types and fields defined in this query."),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"The following query returns the list of attributes metadata associated to the form ",(0,d.mdx)("inlineCode",{parentName:"p"},"customer_register_address"),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  attributesForm(formCode: "customer_register_address") {\n    items {\n      label\n      entity_type\n      frontend_input\n      is_required\n    }\n    errors {\n      type\n      message\n    }\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributesForm": {\n      "items": [\n        {\n          "label": "First Name",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": true\n        },\n        {\n          "label": "Last Name",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": true\n        },\n        {\n          "label": "Company",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": false\n        },\n        {\n          "label": "Street Address",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "MULTILINE",\n          "is_required": true\n        },\n        {\n          "label": "City",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": true\n        },\n        {\n          "label": "Country",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "SELECT",\n          "is_required": true\n        },\n        {\n          "label": "State/Province",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": false\n        },\n        {\n          "label": "State/Province",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "HIDDEN",\n          "is_required": false\n        },\n        {\n          "label": "Zip/Postal Code",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": false\n        },\n        {\n          "label": "Phone Number",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": true\n        },\n        {\n          "label": "VAT Number",\n          "entity_type": "CUSTOMER_ADDRESS",\n          "frontend_input": "TEXT",\n          "is_required": false\n        }\n      ],\n      "errors": [\n        {\n          "type": "ATTRIBUTE_NOT_FOUND",\n          "message": "Attribute code \\"middlename\\" could not be found."\n        }\n      ]\n    }\n  }\n}\n')))}_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-attributes-queries-attributes-form-md-47d1c47aeef278a2cef8.js.map