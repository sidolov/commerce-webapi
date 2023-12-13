"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[875],{77557:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return u}});var n=t(87462),r=t(45987),i=(t(35776),t(3905)),m=t(91515);const d=["components"],l={},o={_frontmatter:l},p=m.Z;function u(e){let{components:a}=e,t=(0,r.Z)(e,d);return(0,i.mdx)(p,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"product-interfaces-and-attributes"},"Product interfaces and attributes"),(0,i.mdx)("p",null,"Any type that implements ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-ProductInterface"},(0,i.mdx)("inlineCode",{parentName:"a"},"ProductInterface"))," contains all the base attributes necessary for the frontend of the product model.\nThe ",(0,i.mdx)("inlineCode",{parentName:"p"},"items")," that are returned in a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ProductInterface")," array can also contain attributes from resources external to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CatalogGraphQl")," module:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Custom and extension attributes defined in any attribute set"),(0,i.mdx)("li",{parentName:"ul"},"The attribute is defined in the ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PhysicalProductInterface"},"PhysicalProductInterface")," or ",(0,i.mdx)("a",{parentName:"li",href:"customizable-option.md"},"CustomizableOptionInterface")),(0,i.mdx)("li",{parentName:"ul"},"Product types that define their own implementation of ",(0,i.mdx)("inlineCode",{parentName:"li"},"ProductInterface")," including:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"types/simple.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"SimpleProduct"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"types/bundle.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"BundleProduct"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"types/configurable.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"ConfigurableProduct"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"types/downloadable.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"DownloadableProduct"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"types/gift-card.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"GiftCardProduct"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"types/grouped.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"GroupedProduct"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"types/virtual.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"VirtualProduct")))))),(0,i.mdx)("h2",{id:"deprecated-interfaces"},"Deprecated interfaces"),(0,i.mdx)("p",null,"The following interfaces are available only if you have installed the PWA Metapackage for Magento Open Source Extensions. This metapackage has been deprecated."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"attribute-metadata.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"AttributeMetadataInterface"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"pwa-implementations.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"AttributeOptionsInterface"),", ",(0,i.mdx)("inlineCode",{parentName:"a"},"SelectableInputTypeInterface"),", ",(0,i.mdx)("inlineCode",{parentName:"a"},"UiInputTypeInterface")))),(0,i.mdx)("h2",{id:"sample-query"},"Sample query"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"custom_attributesV2")," attribute is defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"ProductInterface"),". In this example, the attribute's ",(0,i.mdx)("inlineCode",{parentName:"p"},"filters")," object determines which custom attributes will be used to narrow the results when using ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," query. It contains at least one attribute and the value that is being searched for. The following example searches for custom attributes of a product where ",(0,i.mdx)("inlineCode",{parentName:"p"},"is_comparable")," is ",(0,i.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n    products(filter: {sku: {eq: "24-MB02"}})\n    {\n        items\n        {\n            custom_attributesV2(filters: {is_comparable: true})                                 {\n                items {\n                    code\n                }\n                errors {\n                    type\n                    message\n                }\n            }\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-interfaces-index-md-46d35cbca46c39b0030c.js.map