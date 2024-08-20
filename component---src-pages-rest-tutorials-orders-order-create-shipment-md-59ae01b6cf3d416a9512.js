"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1032],{58910:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return s}});var r=t(58168),i=t(80045),m=(t(88763),t(15680)),a=t(83407);const o=["components"],p={},d={_frontmatter:p},l=a.A;function s(e){let{components:n}=e,t=(0,i.A)(e,o);return(0,m.mdx)(l,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"step-9-create-a-shipment"},"Step 9. Create a shipment"),(0,m.mdx)("p",null,"To create a shipment, you need the ",(0,m.mdx)("inlineCode",{parentName:"p"},"order_item_id")," of each item to be shipped. Since the Sprite Yoga Companion Kit is a bundle item, you only need to include the top-level ",(0,m.mdx)("inlineCode",{parentName:"p"},"order_item_id")," (",(0,m.mdx)("inlineCode",{parentName:"p"},"5"),"). The ",(0,m.mdx)("inlineCode",{parentName:"p"},"order_item_id")," for the Radiant Tee-M-Orange is ",(0,m.mdx)("inlineCode",{parentName:"p"},"3"),"."),(0,m.mdx)("p",null,"To create a partial shipment, specify only those ",(0,m.mdx)("inlineCode",{parentName:"p"},"order_item_id"),"s that are to be shipped now."),(0,m.mdx)("p",null,"If the call is successful on a full shipment, Adobe Commerce changes the status of an order to Complete."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/order/3/ship")),(0,m.mdx)("p",null,"where ",(0,m.mdx)("inlineCode",{parentName:"p"},"3")," is the order ID."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Headers:")),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer <administrator token>")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Payload:")),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"notify")," field is used to trigger Commerce to send the shipment email. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"tracks")," array optionally allows you to include one or more tracking numbers for the shipment."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "items": [\n    {\n      "order_item_id": 3,\n      "qty": 1\n    },\n    {\n      "order_item_id": 5,\n      "qty": 1\n    },\n    {\n      "order_item_id": 11,\n      "qty": 1\n    }\n  ],\n  "notify": true,\n  "tracks": [\n    {\n      "track_number": "1Y-9876543210",\n      "title": "United Parcel Service",\n      "carrier_code": "ups"\n    }\n  ]\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("p",null,"A shipment ID, such as ",(0,m.mdx)("inlineCode",{parentName:"p"},"3"),"."),(0,m.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,m.mdx)("p",null,"Log in to Admin. Click ",(0,m.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,m.mdx)("strong",{parentName:"p"},"Shipments"),". The shipment is displayed in the grid. Then click ",(0,m.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,m.mdx)("strong",{parentName:"p"},"Orders"),". The order status is Complete."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-orders-order-create-shipment-md-59ae01b6cf3d416a9512.js.map