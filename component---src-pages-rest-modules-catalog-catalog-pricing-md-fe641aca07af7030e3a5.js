"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8927],{1310:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return g}});var t=a(87462),r=a(45987),d=(a(35776),a(3905)),l=a(91515),i=a(8673);const p=["components"],m={},s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",n)},o=s("InlineAlert"),u=s("CodeBlock"),c={_frontmatter:m},x=l.Z;function g(e){let{components:n}=e,a=(0,r.Z)(e,p);return(0,d.mdx)(x,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"manage-prices-for-multiple-products"},"Manage prices for multiple products"),(0,d.mdx)("p",null,"Adobe Commerce provides REST endpoints that allow you to update multiple special prices, tier prices, base prices, or cost values with a single call."),(0,d.mdx)("p",null,"The calls that update special and tier prices mimic the options available on a product's ",(0,d.mdx)("strong",{parentName:"p"},"Advanced Pricing")," screen in Admin."),(0,d.mdx)("h2",{id:"manage-special-prices"},"Manage special prices"),(0,d.mdx)("p",null,"The  ",(0,d.mdx)("inlineCode",{parentName:"p"},"SpecialPriceStorageInterface")," service provides the means to efficiently schedule special prices for one or more products in a store's catalog. When you use these calls, you do not provide detailed information about the product."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"POST /V1/products/special-price")," call sets special prices for the following product types:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Simple"),(0,d.mdx)("li",{parentName:"ul"},"Bundle"),(0,d.mdx)("li",{parentName:"ul"},"Virtual"),(0,d.mdx)("li",{parentName:"ul"},"Downloadable")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Service Name:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"SpecialPriceStorageInterface")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"POST /V1/products/special-price\nPOST /V1/products/special-price-information\nPOST /V1/products/special-price-delete\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"SpecialPriceStorageInterface Parameters:")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Format"),(0,d.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"price")),(0,d.mdx)("td",{parentName:"tr",align:null},"The special price of the product"),(0,d.mdx)("td",{parentName:"tr",align:null},"float"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for setting or deleting a special price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"store_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"The store ID  to apply the special price"),(0,d.mdx)("td",{parentName:"tr",align:null},"integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for setting or deleting a special price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sku")),(0,d.mdx)("td",{parentName:"tr",align:null},"The SKU of the product"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for setting or deleting a special price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"skus")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of SKU values that is specified when retrieving a list of special prices"),(0,d.mdx)("td",{parentName:"tr",align:null},"array"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for retrievals")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"price_from")),(0,d.mdx)("td",{parentName:"tr",align:null},"The date and time the special price goes into effect. The date/time format is ",(0,d.mdx)("inlineCode",{parentName:"td"},"YYYY-MM-DD hh:mm:ss"),". The specified time must be later than the current time."),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required in ",(0,d.mdx)(i.sitedatavaree,null),". Optional in ",(0,d.mdx)(i.sitedatavarce,null),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"price_to")),(0,d.mdx)("td",{parentName:"tr",align:null},"The date and time the special price ends. The date/time format is ",(0,d.mdx)("inlineCode",{parentName:"td"},"YYYY-MM-DD hh:mm:ss")," If no value is specified, the special price does not expire."),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required in ",(0,d.mdx)(i.sitedatavaree,null),". Optional in ",(0,d.mdx)(i.sitedatavarce,null),".")))),(0,d.mdx)("h3",{id:"set-special-prices"},"Set special prices"),(0,d.mdx)("p",null,"All calls to set special prices must include the ",(0,d.mdx)("inlineCode",{parentName:"p"},"store_id"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"sku"),", and ",(0,d.mdx)("inlineCode",{parentName:"p"},"price")," parameters. If the call is sent to an ",(0,d.mdx)(i.sitedatavaree,null)," installation, the call must also include the ",(0,d.mdx)("inlineCode",{parentName:"p"},"price_from")," parameter. If the call is sent to a ",(0,d.mdx)(i.sitedatavarce,null)," installation, then the ",(0,d.mdx)("inlineCode",{parentName:"p"},"price_from")," parameter is optional."),(0,d.mdx)("p",null,"For bundled products, the value of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"price")," parameter must be expressed as a discount percentage."),(0,d.mdx)("p",null,"You can set multiple special prices in a single call, as shown in the example below. The call sets special prices for a simple product, downloadable product, and bundle product for two days."),(0,d.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The special price endpoint can only use a global price scope (",(0,d.mdx)("strong",{parentName:"p"},"Stores > Settings > Configuration > Catalog > Catalog > Price > Catalog Price Scope"),"). The mandatory parameters ",(0,d.mdx)("inlineCode",{parentName:"p"},"price_from")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"price_to"),' trigger a catalog schedule, which is currently only supported on a global price scope. Overlapping date ranges on multiple stores will trigger an error that states: "Future Update already exists in this time range. Set a different range and try again."'),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/special-price")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "prices": [\n    {\n      "price": 29.95,\n      "store_id": 0,\n      "price_from": "2017-07-15 00:00:00",\n      "price_to": "2017-07-16 23:59:59",\n      "sku": "24-WB06"\n    },\n    {\n      "price": 19.95,\n      "store_id": 0,\n      "price_from": "2017-07-15 00:00:00",\n      "price_to": "2017-07-16 23:59:59",\n      "sku": "240-LV06"\n    },\n    {\n      "price": 5,\n      "store_id": 0,\n      "price_from": "2017-07-15 00:00:00",\n      "price_to": "2017-07-16 23:59:59",\n      "sku": "24-WG080"\n    }\n  ]\n}\n\n')),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"// Returns an empty array\n[] \n")),(0,d.mdx)("h3",{id:"get-special-prices"},"Get special prices"),(0,d.mdx)("p",null,"The following call returns the special price information for three SKU values."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/special-price-information")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-1"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "skus": [\n    "24-WB06",\n    "240-LV06",\n    "24-WG080"\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-1"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "price": 29.949999999999999,\n        "store_id": 0,\n        "sku": "24-WB06",\n        "price_from": "2017-07-15 00:00:00",\n        "price_to": "2017-07-16 23:59:59"\n    },\n    {\n        "price": 19.949999999999999,\n        "store_id": 0,\n        "sku": "240-LV06",\n        "price_from": "2017-07-15 00:00:00",\n        "price_to": "2017-07-16 23:59:59"\n    },\n    {\n        "price": 5,\n        "store_id": 0,\n        "sku": "24-WG080",\n        "price_from": "2017-07-15 00:00:00",\n        "price_to": "2017-07-16 23:59:59"\n    }\n]\n')),(0,d.mdx)("h3",{id:"delete-a-special-price"},"Delete a special price"),(0,d.mdx)("p",null,"If any item to be deleted has an invalid ",(0,d.mdx)("inlineCode",{parentName:"p"},"price"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"store_id"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"sku")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"date"),", Commerce marks the item as failed and excludes it from the delete list. Valid items are deleted as requested."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/special-price-delete")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-2"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "prices": [\n    {\n      "price": 29.95,\n      "store_id": 0,\n      "price_from": "2017-07-15 00:00:00",\n      "price_to": "2017-07-16 23:59:59",\n      "sku": "24-WB06"\n    },\n    {\n      "price": 19.95,\n      "store_id": 0,\n      "price_from": "2017-07-15 00:00:00",\n      "price_to": "2017-07-16 23:59:59",\n      "sku": "240-LV06"\n    },\n    {\n      "price": 5,\n      "store_id": 0,\n      "price_from": "2017-07-15 00:00:00",\n      "price_to": "2017-07-16 23:59:59",\n      "sku": "24-WG080"\n    }\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-2"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"// Returns an empty array\n[] \n")),(0,d.mdx)("h2",{id:"manage-tier-prices"},"Manage tier prices"),(0,d.mdx)("p",null,"Tier pricing offers a quantity discount to members of a specific customer group and website.  The  ",(0,d.mdx)("inlineCode",{parentName:"p"},"TierPriceStorageInterface")," service provides an efficient means to set tier prices for one or more products without requiring detailed information about each product."),(0,d.mdx)("p",null,"You can use REST endpoints to set tier prices for the following product types:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Product type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Tier price types"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Simple"),(0,d.mdx)("td",{parentName:"tr",align:null},"fixed, discount")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Bundle"),(0,d.mdx)("td",{parentName:"tr",align:null},"discount")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Virtual"),(0,d.mdx)("td",{parentName:"tr",align:null},"fixed, discount")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Downloadable"),(0,d.mdx)("td",{parentName:"tr",align:null},"fixed, discount")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Service Name:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"TierPriceStorageInterface")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"POST /V1/products/tier-prices\nPUT /V1/products/tier-prices\nPOST /V1/products/tier-prices-information\nPOST /V1/products/tier-prices-delete\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"TierPriceStorageInterface Parameters:")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Format"),(0,d.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"price")),(0,d.mdx)("td",{parentName:"tr",align:null},"The discounted product price for the quantity purchased"),(0,d.mdx)("td",{parentName:"tr",align:null},"float"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set, update, or delete a tier price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"price_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Must be ",(0,d.mdx)("inlineCode",{parentName:"td"},"fixed")," (the set price) or ",(0,d.mdx)("inlineCode",{parentName:"td"},"discount")," (percent discount)"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set, update, or delete a tier price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"website_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"The website ID  to apply the tier price"),(0,d.mdx)("td",{parentName:"tr",align:null},"integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set, update, or delete a tier price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sku")),(0,d.mdx)("td",{parentName:"tr",align:null},"The SKU of the product"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set, update, or delete a tier price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"skus")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of SKU values that is specified when retrieving a list of tier prices"),(0,d.mdx)("td",{parentName:"tr",align:null},"array"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for retrievals")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customer_group")),(0,d.mdx)("td",{parentName:"tr",align:null},"A specific customer group that qualifies to receive the tier price discount"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set, update, or delete a tier price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quantity")),(0,d.mdx)("td",{parentName:"tr",align:null},"The quantity that must be purchased to receive the tier price"),(0,d.mdx)("td",{parentName:"tr",align:null},"float"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set, update, or delete a tier price")))),(0,d.mdx)("h3",{id:"set-tier-prices"},"Set tier prices"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"POST /V1/products/tier-prices")," call adds new tier prices or updates existing prices. You can specify tier prices for multiple products in the same call."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/tier-prices")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-3"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "prices": [\n    {\n      "price": 10,\n      "price_type": "fixed",\n      "website_id": 0,\n      "sku": "24-UG04",\n      "customer_group": "General",\n      "quantity": 3\n    },\n    {\n      "price": 8,\n      "price_type": "fixed",\n      "website_id": 0,\n      "sku": "24-UG04",\n      "customer_group": "General",\n      "quantity": 5\n    },\n    {\n      "price": 6,\n      "price_type": "fixed",\n      "website_id": 0,\n      "sku": "24-UG04",\n      "customer_group": "General",\n      "quantity": 10\n    }\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-3"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"// Returns an empty array\n[] \n")),(0,d.mdx)("h3",{id:"replace-existing-tier-prices"},"Replace existing tier prices"),(0,d.mdx)("p",null,"The replace request removes all existing tier prices for a specified product and adds new rows for this same product instead."),(0,d.mdx)("p",null,"The following example removes the $10 tier price for ",(0,d.mdx)("inlineCode",{parentName:"p"},"sku")," 24-UG04 and changes the customer group for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"sku"),"'s other tier prices."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"PUT <host>/rest/<store_code>/V1/products/tier-prices")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-4"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "prices": [\n    {\n      "price": 8,\n      "price_type": "fixed",\n      "website_id": 0,\n      "sku": "24-UG04",\n      "customer_group": "NOT LOGGED IN",\n      "quantity": 5\n    },\n    {\n      "price": 5,\n      "price_type": "fixed",\n      "website_id": 0,\n      "sku": "24-UG04",\n      "customer_group": "NOT LOGGED IN",\n      "quantity": 310\n    }\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-4"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"// Returns an empty array\n[] \n")),(0,d.mdx)("h3",{id:"get-tier-prices"},"Get tier prices"),(0,d.mdx)("p",null,"Commerce returns all active tier prices for the specified list of ",(0,d.mdx)("inlineCode",{parentName:"p"},"skus"),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/tier-prices-information")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-5"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "skus": [\n    "24-UG04",\n    "24-UG01"\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-5"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "price": 8,\n        "price_type": "fixed",\n        "website_id": 0,\n        "sku": "24-UG04",\n        "customer_group": "General",\n        "quantity": 5\n    },\n    {\n        "price": 6,\n        "price_type": "fixed",\n        "website_id": 0,\n        "sku": "24-UG04",\n        "customer_group": "General",\n        "quantity": 10\n    },\n    {\n        "price": 10,\n        "price_type": "fixed",\n        "website_id": 0,\n        "sku": "24-UG04",\n        "customer_group": "General",\n        "quantity": 3\n    },\n    {\n        "price": 5,\n        "price_type": "discount",\n        "website_id": 0,\n        "sku": "24-UG01",\n        "customer_group": "General",\n        "quantity": 3\n    }\n]\n')),(0,d.mdx)("h3",{id:"delete-tier-prices"},"Delete tier prices"),(0,d.mdx)("p",null,"You must specify each tier price that is to be deleted. You can delete multiple tier prices in a single call."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/tier-prices-delete")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-6"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "prices": [\n    {\n      "price": 10,\n      "price_type": "fixed",\n      "website_id": 0,\n      "sku": "24-UG04",\n      "customer_group": "General",\n      "quantity": 3\n    }\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-6"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"// Returns an empty array\n[] \n")),(0,d.mdx)("h2",{id:"manage-base-prices"},"Manage base prices"),(0,d.mdx)("p",null,"A base price is the price of a product, before any discounts or extra costs (such as shipping or taxes) are applied.  The  ",(0,d.mdx)("inlineCode",{parentName:"p"},"BasePriceStorageInterface")," service provides an efficient means to set base prices for one or more products without requiring detailed information about each product."),(0,d.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"You cannot delete a base price. It can only be changed to another value (0 or greater)."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"POST /V1/products/base-prices\nPOST /V1/products/base-prices-information\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"BasePriceStorageInterface Parameters:")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Format"),(0,d.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"price")),(0,d.mdx)("td",{parentName:"tr",align:null},"The base price of the item"),(0,d.mdx)("td",{parentName:"tr",align:null},"float"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set a base price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"store_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"The store ID  to apply the base price"),(0,d.mdx)("td",{parentName:"tr",align:null},"integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set a base price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sku")),(0,d.mdx)("td",{parentName:"tr",align:null},"The SKU of the product"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set a base price")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"skus")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of SKU values that is specified when retrieving a list of base prices"),(0,d.mdx)("td",{parentName:"tr",align:null},"array"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for retrievals")))),(0,d.mdx)("h3",{id:"set-base-prices"},"Set base prices"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"POST /V1/products/base-price")," call can set base prices for the following types of products:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Simple"),(0,d.mdx)("li",{parentName:"ul"},"Virtual"),(0,d.mdx)("li",{parentName:"ul"},"Downloadable"),(0,d.mdx)("li",{parentName:"ul"},"Bundle (fixed price type only)")),(0,d.mdx)("p",null,"The following example sets the base price for a simple and a downloadable product."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/base-prices")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-7"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "prices": [\n  {\n    "price": 12,\n    "store_id": 0,\n    "sku": "24-UG04"\n  },\n  {\n    "price": 22,\n    "store_id": 0,\n    "sku": "240-LV06"\n  }\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-7"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"// Returns an empty array\n[] \n")),(0,d.mdx)("h3",{id:"get-base-prices"},"Get base prices"),(0,d.mdx)("p",null,"The following example returns the base prices for a simple and a downloadable product."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/base-prices-information")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-8"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "skus": [\n    "24-UG04",\n    "240-LV06"\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-8"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "price": 12,\n    "store_id": 0,\n    "sku": "24-UG04"\n  },\n  {\n    "price": 22,\n    "store_id": 0,\n    "sku": "240-LV06"\n  }\n]\n')),(0,d.mdx)("h2",{id:"manage-cost-values"},"Manage cost values"),(0,d.mdx)("p",null,"The cost is the actual cost of a product. Tracking costs is optional, but having this information available can be helpful when you are setting discounts."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"POST /V1/products/cost\nPOST /V1/products/cost-information\nPOST /V1/products/cost-delete\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"CostStorageInterface Parameters:")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Format"),(0,d.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"cost")),(0,d.mdx)("td",{parentName:"tr",align:null},"The amount the item costs"),(0,d.mdx)("td",{parentName:"tr",align:null},"float"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set or delete a cost value")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"store_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"The store ID  to apply the cost value"),(0,d.mdx)("td",{parentName:"tr",align:null},"integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set or delete a cost value")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"sku")),(0,d.mdx)("td",{parentName:"tr",align:null},"The SKU of the product"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to set or delete a cost value")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"skus")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of SKU values that is specified when retrieving a list of cost values"),(0,d.mdx)("td",{parentName:"tr",align:null},"array"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required for retrievals")))),(0,d.mdx)("h3",{id:"set-cost-values"},"Set cost values"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"POST /V1/products/cost")," call can set the cost values for the following types of products:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Simple"),(0,d.mdx)("li",{parentName:"ul"},"Virtual"),(0,d.mdx)("li",{parentName:"ul"},"Downloadable")),(0,d.mdx)("p",null,"The following example sets the cost value for a simple and a downloadable product."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/cost")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-9"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "prices": [\n    {\n      "cost": 18,\n      "store_id": 0,\n      "sku": "24-WB03"\n    },\n    {\n      "cost": 2,\n      "store_id": 0,\n      "sku": "240-LV09"\n    }\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-9"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"// Returns an empty array\n[] \n")),(0,d.mdx)("h3",{id:"get-cost-values"},"Get cost values"),(0,d.mdx)("p",null,"The following example returns the cost values for a simple and a downloadable product."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/cost-information")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-10"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "skus": [\n    "24-WB03",\n    "240-LV09"\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-10"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "cost": 18,\n    "store_id": 0,\n    "sku": "24-WB03"\n  },\n  {\n    "cost": 2,\n    "store_id": 0,\n    "sku": "240-LV09"\n  }\n]\n')),(0,d.mdx)("h3",{id:"delete-cost-values"},"Delete cost values"),(0,d.mdx)("p",null,"The following example deletes the previously-defined cost values for a simple and a downloadable product."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/products/cost-delete")),(0,d.mdx)(u,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"payload-11"},"Payload"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "skus": [\n    "24-WB03",\n    "240-LV09"\n  ]\n}\n')),(0,d.mdx)("h4",{id:"response-11"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"`true`\n// indicating the cost values were deleted\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-modules-catalog-catalog-pricing-md-fe641aca07af7030e3a5.js.map