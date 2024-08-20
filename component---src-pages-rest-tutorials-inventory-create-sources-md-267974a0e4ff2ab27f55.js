"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1180],{48838:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return p}});var o=t(58168),a=t(80045),r=(t(88763),t(15680)),d=t(83407);const i=["components"],s={},l=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var u;const c={_frontmatter:s},m=d.A;function p(e){let{components:n}=e,t=(0,a.A)(e,i);return(0,r.mdx)(m,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"step-2-create-sources"},"Step 2. Create sources"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Sources")," are the physical locations from which you manage product inventory and ship orders. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers. Adobe Commerce leverages the quantities and salable quantities per stock and manages inventory amounts automatically for managed products and orders. Virtual and downloadable products can also be assigned to a source."),(0,r.mdx)("p",null,"You cannot delete or disable the default source. You can create, modify, enable, and disable custom sources, but you cannot delete them."),(0,r.mdx)("p",null,"This step guides you through the process of creating sources for your inventory, including warehouses for the physical products and another source for virtual and downloadable products."),(0,r.mdx)("p",null,"For more information about sources, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/inventory/"},"Inventory Management overview"),"."),(0,r.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"This step requires an admin token. See ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/prerequisite-tasks/"},"Generate the admin token")," for more information."),(0,r.mdx)("h2",{id:"create-the-first-source"},"Create the first source"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST V1/inventory/sources")," endpoint creates the Baltimore Warehouse (",(0,r.mdx)("inlineCode",{parentName:"p"},"baltimore_wh"),") source. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"name"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"source_code"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"country_id"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"postcode")," attributes are required. The  ",(0,r.mdx)("inlineCode",{parentName:"p"},"latitude"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"longitude"),", and other address-related attributes enable the Distance Priority Source Selection Algorithm (SSA) to calculate the distance between the source and the shipping address. The value assigned to ",(0,r.mdx)("inlineCode",{parentName:"p"},"source_code")," cannot be changed."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"source_code")," values will be used in subsequent steps."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/inventory/sources")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Scope:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bearer <admin_token>")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "Northeast Warehouse",\n      "source_code" : "ne_wh",\n      "postcode" : "07306",\n      "enabled" : true,\n      "contact_name" : "Ethan Carter",\n      "country_id" : "US",\n      "street": "645 Newark Ave.",\n      "city" : "Jersey City",\n      "region_id": 41,\n      "region": "New Jersey",\n      "latitude": 40.733790,\n      "longitude": -74.058720\n   }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"Commerce returns an empty array."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"[]")),(0,r.mdx)("h2",{id:"add-more-sources"},"Add more sources"),(0,r.mdx)("p",null,"Use the same endpoint to create a source for the Leipzig warehouse. We will designate the Brooklyn, Huntington, Manhattan, Berlin, and Frankfurt stores as in-store pick up locations. We will also create the HQ source for virtual and downloadable products."),(0,r.mdx)("h3",{id:"west-warehouse"},"West warehouse"),(0,r.mdx)("p",null,"Use the following payload to create the Leipzig warehouse:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "West Warehouse",\n      "source_code" : "west_wh",\n      "postcode" : "95207",\n      "enabled" : true,\n      "contact_name" : "Claudia Mabuse",\n      "country_id" : "US",\n      "street": "7554 Pacific Ave",\n      "city" : "Stockton",\n      "region_id": 12,\n      "region": "California",\n      "latitude": 38.018180,\n      "longitude": -121.319930\n   }\n}\n')),(0,r.mdx)("h3",{id:"brooklyn-store"},"Brooklyn store"),(0,r.mdx)("p",null,"Use the following payload to create the Brooklyn store."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "Brooklyn Store",\n      "source_code" : "brooklyn",\n      "postcode" : "11211",\n      "enabled" : true,\n      "contact_name" : "Tai Hozie",\n      "country_id" : "US",\n      "street": "263 S 4th St",\n      "city" : "Brooklyn",\n      "region_id": 43,\n      "region": "New York",\n      "latitude": 40.710070,\n      "longitude": -73.957160,\n      "phone": "555 737-8088",\n      "extension_attributes": {\n        "is_pickup_location_active": true,\n        "frontend_name": "Brooklyn (Williamsburg) Store",\n        "frontend_description": "Williamsburg, Brooklyn"\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"long-island-store"},"Long Island store"),(0,r.mdx)("p",null,"Use the following payload to create the Long Island store:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "Long Island Store",\n      "source_code" : "huntington",\n      "postcode" : "11743",\n      "enabled" : true,\n      "contact_name" : "Leslie Arzy",\n      "country_id" : "US",\n      "street": "55 Gerard St,",\n      "city" : "Huntington",\n      "region_id": 43,\n      "region": "New York",\n      "latitude": 40.872510,\n      "longitude": -73.429352,\n      "phone": "555 939-4444",\n      "extension_attributes": {\n        "is_pickup_location_active": true,\n        "frontend_name": "Long Island (Huntington) Store",\n        "frontend_description": "Huntington, Long Island"\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"manhattan-store"},"Manhattan store"),(0,r.mdx)("p",null,"Use the following payload to create the Manhattan store:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "Manhattan Store",\n      "source_code" : "manhattan",\n      "postcode" : "10011",\n      "enabled" : true,\n      "contact_name" : "Kiara Smith",\n      "country_id" : "US",\n      "street": "70 W. 10th St",\n      "city" : "New York",\n      "region_id": 43,\n      "region": "New York",\n      "latitude": 40.734600,\n      "longitude": -73.998490,\n      "phone": "555 838-4500",\n      "extension_attributes": {\n        "is_pickup_location_active": true,\n        "frontend_name": "Manhattan (Greenwich Village) Store",\n        "frontend_description": "Greenwich Village, Manhattan"\n    }\n  }\n}\n')),(0,r.mdx)("h3",{id:"berkeley-store"},"Berkeley store"),(0,r.mdx)("p",null,"Use the following payload to create the Berkeley store:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "Berkeley Store",\n      "source_code" : "berkeley",\n      "postcode" : "94705",\n      "enabled" : true,\n      "contact_name" : "Tereza Schmidt",\n      "country_id" : "US",\n      "street": "2705 Webster St",\n      "city" : "Berkeley",\n      "region_id": 12,\n      "region": "California",\n      "latitude": 37.855850,\n      "longitude": -122.252460,\n      "phone": "510 555-2020",\n      "extension_attributes": {\n        "is_pickup_location_active": true,\n        "frontend_name": "Berkeley Store",\n        "frontend_description": "Near College Ave. and Ashby Ave."\n      }\n   }\n}\n')),(0,r.mdx)("h3",{id:"sausalito-store"},"Sausalito store"),(0,r.mdx)("p",null,"Use the following payload to create the Frankfurt store:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "Sausalito Store",\n      "source_code" : "sausalito",\n      "postcode" : "94965",\n      "enabled" : true,\n      "contact_name" : "Ralf Schneider",\n      "country_id" : "US",\n      "street": "150 Harbor Dr.",\n      "city" : "Sausalito",\n      "region_id": 12,\n      "region": "California",\n      "latitude": 37.867168,\n      "longitude": -122.499367,\n      "phone": "415-555-6666",\n      "extension_attributes": {\n        "is_pickup_location_active": true,\n        "frontend_name": "Sausalito Store",\n        "frontend_description": "Just off Bridgeway"\n      }\n   }\n}\n')),(0,r.mdx)("h3",{id:"headquarters"},"Headquarters"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"hq")," source will fulfill virtual and downloadable products."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "source" : {\n      "name" : "HQ",\n      "source_code" : "hq",\n      "postcode" : "10022",\n      "enabled" : true,\n      "contact_name" : "Francine Helen",\n      "country_id" : "US",\n      "street": "909 3rd Ave",\n      "city" : "New York",\n      "region_id": 43,\n      "region": "New York",\n      "latitude": 40.7571,\n      "longitude": -73.9657\n   }\n}\n')),(0,r.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("p",null,"In Admin, click ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Inventory > ",(0,r.mdx)("strong",{parentName:"p"},"Sources"),".  The new sources are displayed in the Sources grid."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-create-sources-md-267974a0e4ff2ab27f55.js.map