"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6598],{81271:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return x}});var n=a(87462),r=a(45987),l=(a(35776),a(3905)),i=a(91515);const d=["components"],m={},o=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var p;const s={_frontmatter:m},u=i.Z;function x(e){let{components:t}=e,a=(0,r.Z)(e,d);return(0,l.mdx)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"step-1-plan-the-product"},"Step 1. Plan the product"),(0,l.mdx)("p",null,"  To create a configurable product programmatically, you'll need to know the following:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The attribute names and values defined in the attribute set assigned to the configurable product.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The category numbers assigned to the configurable product.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Which attributes to use as the configuration options."),(0,l.mdx)("p",{parentName:"li"},"Since this tutorial uses the sample data, we can take advantage of the options that the Top attribute set provides. This attribute set contains attributes that describe the fabric, sleeve length, and other characteristics that are specific to clothing. It also includes EAV attributes such as size and color, which are commonly available to all types of physical products."),(0,l.mdx)("p",{parentName:"li"},"The size of the t-shirt will be the configurable aspect of this product. Therefore, we'll create a simple product for each size (Small, Medium, and Large)."))),(0,l.mdx)("h2",{id:"define-product-characteristics"},"Define product characteristics"),(0,l.mdx)("p",null," The following table lists the general characteristics of the men's t-shirt we're creating. These items are among those listed on the New Product page in Admin when the Top attribute set is selected."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Characteristic"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Attribute Set"),(0,l.mdx)("td",{parentName:"tr",align:null},"Top")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Product Name"),(0,l.mdx)("td",{parentName:"tr",align:null},"Champ Tee")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"SKU"),(0,l.mdx)("td",{parentName:"tr",align:null},"MS-Champ")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Price"),(0,l.mdx)("td",{parentName:"tr",align:null},"25.00")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Tax Class"),(0,l.mdx)("td",{parentName:"tr",align:null},"Taxable Goods")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Weight"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Categories"),(0,l.mdx)("td",{parentName:"tr",align:null},"Men, Tops, Tees")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Visibility"),(0,l.mdx)("td",{parentName:"tr",align:null},"Catalog, Search")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Material"),(0,l.mdx)("td",{parentName:"tr",align:null},"LumaTech")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Pattern"),(0,l.mdx)("td",{parentName:"tr",align:null},"Graphic Print")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Color"),(0,l.mdx)("td",{parentName:"tr",align:null},"Gray")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Size"),(0,l.mdx)("td",{parentName:"tr",align:null},"Configurable in small, medium, or large")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Description"),(0,l.mdx)("td",{parentName:"tr",align:null},"The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10.")))),(0,l.mdx)("p",null," A merchant typically provides the product name, SKU, price, weight, and description. The other characteristics are defined by the system."),(0,l.mdx)("h2",{id:"find-the-system-defined-values"},"Find the system-defined values"),(0,l.mdx)("p",null," We'll make several calls to find the values needed to create the product"),(0,l.mdx)("h3",{id:"get-the-attribute-set-id"},"Get the attribute set ID"),(0,l.mdx)("p",null," The sample data provides multiple attribute sets, including Default, Top, and Bottom. To assign the Top attribute set to the product, we need to know the corresponding ",(0,l.mdx)("inlineCode",{parentName:"p"},"attribute_set_id"),"."),(0,l.mdx)("p",null," Use the following call to search for the attribute set named ",(0,l.mdx)("inlineCode",{parentName:"p"},"Top"),"."),(0,l.mdx)("p",null," ",(0,l.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},"GET <host>/rest/<store_code>/V1/eav/attribute-sets/list?\nsearchCriteria[filter_groups][0][filters][0][field]=attribute_set_name&\nsearchCriteria[filter_groups][0][filters][0][value]=Top&\nsearchCriteria[filter_groups][0][filters][0][condition_type]=eq\n")),(0,l.mdx)("p",null," ",(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("p",null," The ",(0,l.mdx)("inlineCode",{parentName:"p"},"attribute_set_id")," for the Top attribute set is ",(0,l.mdx)("inlineCode",{parentName:"p"},"9"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "items": [\n       {\n           "attribute_set_id": 9,\n           "attribute_set_name": "Top",\n           "sort_order": 0,\n           "entity_type_id": 4\n       }\n   ],\n   "search_criteria": {\n       "filter_groups": [\n           {\n               "filters": [\n                   {\n                       "field": "attribute_set_name",\n                       "value": "Top",\n                       "condition_type": "eq"\n                   }\n               ]\n           }\n       ]\n   },\n   "total_count": 1\n}\n')),(0,l.mdx)("h3",{id:"get-the-list-of-attributes-defined-in-an-attribute-searchcriteria"},"Get the list of attributes defined in an attribute searchCriteria"),(0,l.mdx)("p",null," Use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"GET V1/products/attribute-sets/:attributeSetId/attributes")," call to return information about the attributes defined in the Top attribute set."),(0,l.mdx)("p",null," ",(0,l.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,l.mdx)("p",null," ",(0,l.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/default/V1/products/attribute-sets/9/attributes")),(0,l.mdx)("p",null," ",(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("p",null," The response contains almost 3,000 lines. The following table provides a summary of the attributes that are relevant in this tutorial."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Admin label"),(0,l.mdx)("th",{parentName:"tr",align:null},"Selected value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute ID"),(0,l.mdx)("th",{parentName:"tr",align:null},"attribute_code"),(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute value"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Tax Class"),(0,l.mdx)("td",{parentName:"tr",align:null},"Taxable Goods"),(0,l.mdx)("td",{parentName:"tr",align:null},"132"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"tax_class_id")),(0,l.mdx)("td",{parentName:"tr",align:null},"2")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Visibility"),(0,l.mdx)("td",{parentName:"tr",align:null},"Catalog, Search"),(0,l.mdx)("td",{parentName:"tr",align:null},"99"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"visibility")),(0,l.mdx)("td",{parentName:"tr",align:null},"4")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Material"),(0,l.mdx)("td",{parentName:"tr",align:null},"LumaTech"),(0,l.mdx)("td",{parentName:"tr",align:null},"136"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"material")),(0,l.mdx)("td",{parentName:"tr",align:null},"148")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Pattern"),(0,l.mdx)("td",{parentName:"tr",align:null},"Graphic Print"),(0,l.mdx)("td",{parentName:"tr",align:null},"152"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"pattern")),(0,l.mdx)("td",{parentName:"tr",align:null},"196")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Color"),(0,l.mdx)("td",{parentName:"tr",align:null},"Gray"),(0,l.mdx)("td",{parentName:"tr",align:null},"93"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"color")),(0,l.mdx)("td",{parentName:"tr",align:null},"52")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Size"),(0,l.mdx)("td",{parentName:"tr",align:null},"Not applicable"),(0,l.mdx)("td",{parentName:"tr",align:null},"141"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"size")),(0,l.mdx)("td",{parentName:"tr",align:null},"168 (small), 169 (medium), 170 (large)")))),(0,l.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The attribute ID and value numbers might be different on your installation. Check the values carefully before using them in your calls."),(0,l.mdx)("h3",{id:"get-the-list-of-category-values"},"Get the list of category values"),(0,l.mdx)("p",null," You must assign the product to one or more categories to enable customers to find the product by browsing. We'll assign the Champ Tee to the Men, Tops, and Tees categories."),(0,l.mdx)("p",null," Use the following call to search for all categories (",(0,l.mdx)("inlineCode",{parentName:"p"},"id")," is greater than or equal to ",(0,l.mdx)("inlineCode",{parentName:"p"},"0"),")."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},"GET <host>/rest/default/V1/categories?\nsearchCriteria[filter_groups][0][filters][0][field]=id&\nsearchCriteria[filter_groups][0][filters][0][value]=1&\nsearchCriteria[filter_groups][0][filters][0][condition_type]=gte\n")),(0,l.mdx)("p",null," Note that women's tops and tees have different ids than men's tops and tees. The values for men's clothing are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Men - ",(0,l.mdx)("inlineCode",{parentName:"li"},"11")),(0,l.mdx)("li",{parentName:"ul"},"Tops - ",(0,l.mdx)("inlineCode",{parentName:"li"},"12")),(0,l.mdx)("li",{parentName:"ul"},"Tees - ",(0,l.mdx)("inlineCode",{parentName:"li"},"16"))),(0,l.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,l.mdx)("p",null," At this point, we're gathering information, so there is nothing to verify."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-bulk-configurable-product-plan-product-md-573836d95f221ed61cfd.js.map