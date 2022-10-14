"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[59],{4975:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return u},default:function(){return p}});var a,o=t(87462),i=t(63366),r=(t(15007),t(64983)),d=t(91515),s=["components"],u={},c=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),l={_frontmatter:u},m=d.Z;function p(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.mdx)(m,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"catalog-module"},"Catalog module"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Catalog")," module provides functionality for creating and maintaining products and categories."),(0,r.mdx)("h2",{id:"categories"},"Categories"),(0,r.mdx)("p",null,"When you create a ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/category"},"category")," from Admin, you have the option to configure display and ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/search-engine-optimization"},"search engine optimization")," settings. To configure these settings using ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST V1/categories"),", you can specify the following parameters as ",(0,r.mdx)("inlineCode",{parentName:"p"},"attribute_code")," values:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"all_children\nchildren\nchildren_count\ncustom_apply_to_products\ncustom_design\ncustom_design_from\ncustom_design_to\ncustom_layout_update\ncustom_use_parent_settings\ndefault_sort_by\ndescription\ndisplay_mode\nfilter_price_range\nimage\nis_anchor\nlanding_page\nmeta_description\nmeta_keywords\nmeta_title\npage_layout\npath\npath_in_store\nurl_key\nurl_path\n")),(0,r.mdx)("p",null,"Third-party modules may define other custom attributes."),(0,r.mdx)("p",null,"The following example uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST V1/categories"),' call to assign four custom attributes to the "My New Category" category.'),(0,r.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"request"},"Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "category": {\n        "parent_id": 2,\n        "name": "Kids",\n        "is_active": true,\n        "level": 2,\n        "include_in_menu": true,\n        "custom_attributes": [\n            {\n                "attribute_code": "description",\n                "value": "kids category description"\n            },\n            {\n                "attribute_code": "meta_title",\n                "value": "Kids meta title"\n            },\n            {\n                "attribute_code": "meta_keywords",\n                "value": "Kids meta keywords"\n            },\n            {\n                "attribute_code": "meta_description",\n                "value": "Kids meta description"\n            },\n            {\n                "attribute_code": "url_key",\n                "value": "kids"\n            },\n            {\n                "attribute_code": "url_path",\n                "value": "kids"\n            }\n        ]\n    }\n}\n')),(0,r.mdx)("h4",{id:"response"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 42,\n    "parent_id": 2,\n    "name": "Kids",\n    "is_active": true,\n    "position": 9,\n    "level": 2,\n    "children": "",\n    "created_at": "2020-12-18 08:50:47",\n    "updated_at": "2020-12-18 08:50:47",\n    "path": "1/2/43",\n    "available_sort_by": [],\n    "include_in_menu": true,\n    "custom_attributes": [\n        {\n            "attribute_code": "description",\n            "value": "kids category description"\n        },\n        {\n            "attribute_code": "meta_title",\n            "value": "Kids meta title"\n        },\n        {\n            "attribute_code": "meta_keywords",\n            "value": "Kids meta keywords"\n        },\n        {\n            "attribute_code": "meta_description",\n            "value": "Kids meta description"\n        },\n        {\n            "attribute_code": "is_anchor",\n            "value": "1"\n        },\n        {\n            "attribute_code": "path",\n            "value": "1/2/43"\n        },\n        {\n            "attribute_code": "children_count",\n            "value": "0"\n        },\n        {\n            "attribute_code": "url_key",\n            "value": "kids"\n        },\n        {\n            "attribute_code": "url_path",\n            "value": "kids"\n        }\n    ]\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-modules-catalog-index-md-7705bd0df0686ed2835e.js.map