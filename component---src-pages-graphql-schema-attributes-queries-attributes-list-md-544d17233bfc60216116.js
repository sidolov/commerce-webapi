"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3252],{84802:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(15007),n(64983)),d=n(91515),i=n(68059),m=["components"],o={},u={_frontmatter:o},p=d.Z;function s(e){var t=e.components,n=(0,r.Z)(e,m);return(0,l.mdx)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(i.Z,{mdxType:"BetaNote"}),(0,l.mdx)("h1",{id:"attributeslist-query"},"attributesList query"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"attributesList")," query retrieves a list of attributes metadata for a given ",(0,l.mdx)("inlineCode",{parentName:"p"},"entity_type"),"."),(0,l.mdx)("p",null,"The possible values for this attribute are populated by the modules introducing EAV entities, which currently are ",(0,l.mdx)("inlineCode",{parentName:"p"},"CUSTOMER"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"CUSTOMER_ADDRESS"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"CATALOG_PRODUCT")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"RMA_ITEM"),"."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"{attributesList(entityType: AttributeEntityTypeEnum!): {AttributesMetadataOutput}}")),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("h3",{id:"attributes-list-for-customer"},"Attributes list for ",(0,l.mdx)("inlineCode",{parentName:"h3"},"customer")),(0,l.mdx)("p",null,"The following call returns the list of attributes metadata for a ",(0,l.mdx)("inlineCode",{parentName:"p"},"customer"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  attributesList(entityType: CUSTOMER) {\n    items {\n      code\n      label\n      # other attribute metadata\n    }\n    errors {\n      message\n    }\n  }\n}\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributesList": {\n      "items": [\n        {\n          "code": "website_id",\n          "label": "Associate to Website"\n        },\n        {\n          "code": "created_in",\n          "label": "Created From"\n        },\n        {\n          "code": "firstname",\n          "label": "First Name"\n        },\n        {\n          "code": "lastname",\n          "label": "Last Name"\n        },\n        {\n          "code": "email",\n          "label": "Email"\n        },\n        {\n          "code": "group_id",\n          "label": "Group"\n        },\n        {\n          "code": "disable_auto_group_change",\n          "label": "Disable Automatic Group Change Based on VAT ID"\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')),(0,l.mdx)("h3",{id:"attributes-list-for-rma_item"},"Attributes list for ",(0,l.mdx)("inlineCode",{parentName:"h3"},"rma_item")),(0,l.mdx)("p",null,"The following call returns the list of attributes metadata for a ",(0,l.mdx)("inlineCode",{parentName:"p"},"rma_item"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  attributesList(entityType: RMA_ITEM) {\n    items {\n      code\n      label\n      default_value\n      frontend_input\n      is_unique\n      is_required\n      options {\n        is_default\n        label\n        value\n      }\n    }\n    errors {\n      type\n      message\n    }\n  }\n} \n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributesList": {\n      "items": [\n        {\n          "code": "resolution",\n          "label": "Resolution",\n          "default_value": null,\n          "frontend_input": "SELECT",\n          "is_unique": false,\n          "is_required": true,\n          "options": [\n            {\n              "is_default": null,\n              "label": "Exchange",\n              "value": "4"\n            },\n            {\n              "is_default": null,\n              "label": "Refund",\n              "value": "5"\n            },\n            {\n              "is_default": null,\n              "label": "Store Credit",\n              "value": "6"\n            }\n          ]\n        },\n        {\n          "code": "condition",\n          "label": "Item Condition",\n          "default_value": null,\n          "frontend_input": "SELECT",\n          "is_unique": false,\n          "is_required": true,\n          "options": [\n            {\n              "is_default": null,\n              "label": "Unopened",\n              "value": "7"\n            },\n            {\n              "is_default": null,\n              "label": "Opened",\n              "value": "8"\n            },\n            {\n              "is_default": null,\n              "label": "Damaged",\n              "value": "9"\n            }\n          ]\n        },\n        {\n          "code": "reason",\n          "label": "Reason to Return",\n          "default_value": null,\n          "frontend_input": "SELECT",\n          "is_unique": false,\n          "is_required": true,\n          "options": [\n            {\n              "is_default": null,\n              "label": "Wrong Color",\n              "value": "10"\n            },\n            {\n              "is_default": null,\n              "label": "Wrong Size",\n              "value": "11"\n            },\n            {\n              "is_default": null,\n              "label": "Out of Service",\n              "value": "12"\n            }\n          ]\n        },\n        {\n          "code": "reason_other",\n          "label": "Other",\n          "default_value": null,\n          "frontend_input": "TEXT",\n          "is_unique": false,\n          "is_required": true,\n          "options": []\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')),(0,l.mdx)("h3",{id:"apply-a-filter-to-the-attributes-list-query"},"Apply a filter to the attributes list query"),(0,l.mdx)("p",null,"The following call returns the list of attributes metadata for a ",(0,l.mdx)("inlineCode",{parentName:"p"},"catalog_product")," filtered by ",(0,l.mdx)("inlineCode",{parentName:"p"},"is_visible_on_front")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"is_comparable"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n    attributesList(entityType: CATALOG_PRODUCT, filters: {is_visible_on_front:true, is_comparable: true}) {\n        items {\n            code\n            label\n            default_value\n            is_required\n            frontend_class\n            is_unique\n            options {\n                value\n                label\n            }\n        }\n        errors {\n            type\n            message\n        }\n    }\n}\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributesList": {\n      "items": [\n        {\n          "code": "activity",\n          "label": "Activity",\n          "default_value": "",\n          "is_required": false,\n          "frontend_class": null,\n          "is_unique": false,\n          "options": [\n            {\n              "value": "13",\n              "label": "Hike"\n            },\n            {\n              "value": "14",\n              "label": "Outdoor"\n            },\n            {\n              "value": "15",\n              "label": "Running"\n            },\n            {\n              "value": "16",\n              "label": "Warmup"\n            },\n            {\n              "value": "17",\n              "label": "Yoga"\n            },\n            {\n              "value": "18",\n              "label": "Recreation"\n            },\n            {\n              "value": "19",\n              "label": "Lounge"\n            },\n            {\n              "value": "20",\n              "label": "Gym"\n            },\n            {\n              "value": "21",\n              "label": "Climbing"\n            },\n            {\n              "value": "22",\n              "label": "Crosstraining"\n            },\n            {\n              "value": "23",\n              "label": "Post-workout"\n            },\n            {\n              "value": "24",\n              "label": "Cycling"\n            },\n            {\n              "value": "25",\n              "label": "Athletic"\n            },\n            {\n              "value": "26",\n              "label": "Sports"\n            },\n            {\n              "value": "27",\n              "label": "Hiking"\n            },\n            {\n              "value": "28",\n              "label": "Overnight"\n            },\n            {\n              "value": "29",\n              "label": "School"\n            },\n            {\n              "value": "30",\n              "label": "Trail"\n            },\n            {\n              "value": "31",\n              "label": "Travel"\n            },\n            {\n              "value": "32",\n              "label": "Urban"\n            }\n          ]\n        }\n      ],\n      "errors": []\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"AttributeEntityTypeEnum")," object contains the following attributes:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"entityType")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"The type of entity that defines the attribute")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"filters")),(0,l.mdx)("td",{parentName:"tr",align:null},"AttributeFilterInput"),(0,l.mdx)("td",{parentName:"tr",align:null},"Identifies which filter inputs to search for and return")))),(0,l.mdx)("h2",{id:"attribute-filter-input"},"Attribute Filter Input"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"AttributeFilterInput")," object specifies the filters used for attributes. It contains the following attributes:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_comparable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be compared against another or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_filterable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be filtered or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_filterable_in_search")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be filtered in search or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_html_allowed_on_front")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can use HTML on front or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_searchable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be searched or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_used_for_price_rules")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be used for price rules or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_used_for_promo_rules")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is used for promo rules or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_visible_in_advanced_search")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is visible in advanced search or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_visible_on_front")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is visible on front or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_wysiwyg_enabled")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute has WYSIWYG enabled or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"used_in_product_listing")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is used in product listing or not")))),(0,l.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"AttributesMetadataOutput")," object contains the following attributes:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"errors")),(0,l.mdx)("td",{parentName:"tr",align:null},"[AttributeMetadataError!]","!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Errors of retrieving certain attributes metadata")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"items")),(0,l.mdx)("td",{parentName:"tr",align:null},"[CustomAttributeMetadataInterface!]","!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Requested attributes metadata")))),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"CustomAttributeMetadataInterface")," object contains the following attributes:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"code")),(0,l.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The unique identifier for an attribute code. This value should be in lowercase letters without spaces")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"default_value")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Default attribute value")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"entity_type")),(0,l.mdx)("td",{parentName:"tr",align:null},"AttributeEntityTypeEnum!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The type of entity that defines the attribute")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"frontend_input")),(0,l.mdx)("td",{parentName:"tr",align:null},"AttributeFrontendInputEnum"),(0,l.mdx)("td",{parentName:"tr",align:null},"The frontend input type of the attribute")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_comparable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be compared against another or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_filterable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be filtered or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_filterable_in_search")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be filtered in search or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_html_allowed_on_front")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can use HTML on front or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_required")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether the attribute value is required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_searchable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be searched or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_unique")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether the attribute value must be unique")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_used_for_price_rules")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute can be used for price rules or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_used_for_promo_rules")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is used for promo rules or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_visible_in_advanced_search")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is visible in advanced search or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_visible_on_front")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is visible on front or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_wysiwyg_enabled")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute has WYSIWYG enabled or not")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"label")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"The label assigned to the attribute")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"options")),(0,l.mdx)("td",{parentName:"tr",align:null},"[CustomAttributeOptionInterface!]","!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Attribute options")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"used_in_product_listing")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a product or category attribute is used in product listing or not")))),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"CustomAttributeOptionInterface")," object contains the following attributes:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_default")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Is the option value default")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"label")),(0,l.mdx)("td",{parentName:"tr",align:null},"String!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The label assigned to the attribute option")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"value")),(0,l.mdx)("td",{parentName:"tr",align:null},"String!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The attribute option value")))),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"AttributeMetadataError")," object contains the following attributes:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"message")),(0,l.mdx)("td",{parentName:"tr",align:null},"String!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Attribute metadata retrieval error message")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"type")),(0,l.mdx)("td",{parentName:"tr",align:null},"AttributeMetadataErrorType!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Attribute metadata retrieval error type")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-attributes-queries-attributes-list-md-544d17233bfc60216116.js.map