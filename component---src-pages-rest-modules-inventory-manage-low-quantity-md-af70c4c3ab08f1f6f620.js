"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5523],{53042:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return p}});var a=n(87462),o=n(63366),r=(n(15007),n(64983)),i=n(91515),l=["components"],m={},d={_frontmatter:m},s=i.Z;function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.mdx)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"manage-low-quantity-notifications"},"Manage low-quantity notifications"),(0,r.mdx)("p",null,"Low stock notification alert the merchant that the salable quantity of a stock has reached a critical threshold. The Admin allows the merchant to configure low-quantity notifications from several locations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"Notify for Quantity Below")," field (",(0,r.mdx)("strong",{parentName:"li"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"li"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"li"},"Catalog")," > ",(0,r.mdx)("strong",{parentName:"li"},"Inventory")," > ",(0,r.mdx)("strong",{parentName:"li"},"Product Stock Options"),") sets the default value globally for all products for the entire website/store."),(0,r.mdx)("li",{parentName:"ul"},"The Advanced Inventory ",(0,r.mdx)("strong",{parentName:"li"},"Notify for Quantity Below")," field (",(0,r.mdx)("strong",{parentName:"li"},"Catalog")," > ",(0,r.mdx)("strong",{parentName:"li"},"Products")," > specific product > ",(0,r.mdx)("strong",{parentName:"li"},"Advanced Inventory"),") overrides the value set at the website/store level. The value applies to all of the product's sources."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"Notify Quantity")," fields (",(0,r.mdx)("strong",{parentName:"li"},"Catalog")," > ",(0,r.mdx)("strong",{parentName:"li"},"Products")," > specific product > ",(0,r.mdx)("strong",{parentName:"li"},"Assigned Sources")," section) override all other settings. The merchant can assign a different threshold for each source for the specific product.")),(0,r.mdx)("p",null,"Adobe Commerce deducts either the global or the overriding quantity from the total salable quantity for the stock."),(0,r.mdx)("p",null,"The REST low-quantity notification endpoints manage the values that merchants set from the ",(0,r.mdx)("strong",{parentName:"p"},"Notify Quantity")," fields."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Service names:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-http"},"inventoryLowQuantityNotificationApiGetSourceItemConfigurationV1\ninventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1\ninventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"REST endpoints:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-http"},"POST /V1/inventory/low-quantity-notification\nGET /V1/inventory/low-quantity-notification/:sourceCode/:sku\nPOST /V1/inventory/low-quantity-notifications-delete\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"sourceItemConfigurations parameters:")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"source_code")),(0,r.mdx)("td",{parentName:"tr",align:null},"The product's assigned source code"),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"Required to create or delete a threshold")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"notify_stock_qty")),(0,r.mdx)("td",{parentName:"tr",align:null},"The threshold at which Commerce notifies the merchant that the salable quantity of a product is low."),(0,r.mdx)("td",{parentName:"tr",align:null},"Float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Required to create a threshold")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sku")),(0,r.mdx)("td",{parentName:"tr",align:null},"The SKU of the affected product"),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"Required for to create or delete a threshold")))),(0,r.mdx)("h2",{id:"create-a-low-quantity-notification"},"Create a low quantity notification"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST /V1/inventory/low-quantity-notification")," endpoint accepts an array of values that map a SKU to a source and specify when to notify the merchant of a low stock quantity."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/inventory/low-quantity-notification")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sourceItemConfigurations": [\n    {\n      "source_code": "baltimore_wh",\n      "notify_stock_qty": 10,\n      "sku": "sp1"\n    },\n    {\n      "source_code": "austin_wh",\n      "notify_stock_qty": 8,\n      "sku": "sp1"\n    },\n    {\n      "source_code": "reno_wh",\n      "notify_stock_qty": 5,\n      "sku": "sp1"\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"An empty array ",(0,r.mdx)("inlineCode",{parentName:"p"},"[]")),(0,r.mdx)("h2",{id:"return-low-quantity-notification-information"},"Return low-quantity notification information"),(0,r.mdx)("p",null,"This call returns the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notify_stock_qty")," for the specified source and SKU."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/inventory/low-quantity-notification/reno_wh/sp1")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("p",null,"None"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"source_code": "reno_wh",\n"notify_stock_qty": 5,\n"sku": "sp1\n}\n')),(0,r.mdx)("h2",{id:"delete-a-low-quantity-notification"},"Delete a low-quantity notification"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST /V1/inventory/low-quantity-notifications-delete")," endpoint deletes the notification threshold for an array of sourceItem objects. Each object specified a SKU amd source."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/inventory/low-quantity-notifications-delete")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sourceItems": [\n    {\n      "sku": "sp1",\n      "source_code": "reno_wh"\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"Commerce returns an empty array."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"[]")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-modules-inventory-manage-low-quantity-md-af70c4c3ab08f1f6f620.js.map