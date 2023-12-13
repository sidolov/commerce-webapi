"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9331],{38388:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var o=t(87462),r=t(45987),s=(t(35776),t(3905)),i=t(91515);const a=["components"],d={},c=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var p;const m={_frontmatter:d},l=i.Z;function u(e){let{components:n}=e,t=(0,r.Z)(e,a);return(0,s.mdx)(l,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"step-4-link-stocks-and-sources"},"Step 4. Link stocks and sources"),(0,s.mdx)("p",null,"This step links the sources we created in ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/inventory/create-sources"},"Step 2. Create sources")," with the stocks we created in ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/inventory/create-stock/"},"Step 3. Create stocks"),"."),(0,s.mdx)("p",null,"Each stock can be assigned one or more sources. Adobe Commerce uses these associations to calculate the virtual aggregated inventory per product."),(0,s.mdx)(c,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"You must reindex and flush cache after performing this step."),(0,s.mdx)("h2",{id:"assign-the-source"},"Assign the source"),(0,s.mdx)("p",null,"To link a source to a stock, you must specify the ",(0,s.mdx)("inlineCode",{parentName:"p"},"source_code"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_id"),", and ",(0,s.mdx)("inlineCode",{parentName:"p"},"priority")," attributes. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"priority")," value indicates where the source ranks in descending order. The Source Selection Algorithm uses this priority order when recommending order fulfillment. All added sources display in prioritized order in the Admin."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST V1/inventory/stock-source-links")," endpoint accepts an array of links, so we can link all the stocks and sources we created in the previous steps with a single call. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_id"),' of "North America Stock" is ',(0,s.mdx)("inlineCode",{parentName:"p"},"2"),", and the ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_id"),' of "Europe Stock" is ',(0,s.mdx)("inlineCode",{parentName:"p"},"3"),". The HQ source is assigned to both stocks."),(0,s.mdx)("p",null,"In this example, we configure the Northeast warehouse to be the primary source for North America orders. The stores located in the New York City area are other available sources in North America. In Europe, the Leipzig warehouse is preferred, followed by the Berlin and Frankfurt stores. HQ is the last choice for both stocks."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/inventory/stock-source-links")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Scope:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"default")," store views"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Headers:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,s.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,s.mdx)("inlineCode",{parentName:"p"},"Bearer <admin_token>")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Payload:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "links" : [\n      {\n         "source_code" : "ne_wh",\n         "stock_id" : 2,\n         "priority" : 1\n      },\n      {\n        "source_code" : "west_wh",\n        "stock_id" : 2,\n        "priority" : 2\n      },\n      {\n        "source_code" : "brooklyn",\n        "stock_id" : 2,\n        "priority" : 3\n      },\n      {\n        "source_code" : "manhattan",\n        "stock_id" : 2,\n        "priority" : 4\n      },\n      {\n        "source_code" : "huntington",\n        "stock_id" : 2,\n        "priority": 5\n      },\n      {\n        "source_code" : "berkeley",\n        "stock_id" : 2,\n        "priority" : 6\n      },\n      {\n         "source_code" : "sausalito",\n         "stock_id" : 2,\n         "priority" : 7\n      },\n      {\n        "source_code" : "hq",\n        "stock_id" : 2,\n        "priority" : 8\n      }\n   ]\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("p",null,"Commerce returns empty array."),(0,s.mdx)("p",null,"[]"),(0,s.mdx)("h2",{id:"reindex-and-flush-cache"},"Reindex and flush cache"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Required:")," After you have assigned a source to stock, use the following command to perform a full reindex and flush the cache. This is required!"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento indexer:reindex && bin/magento cache:flush\n")),(0,s.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,s.mdx)("p",null,"In Admin, click ",(0,s.mdx)("strong",{parentName:"p"},"Stores")," > Inventory > ",(0,s.mdx)("strong",{parentName:"p"},"Stocks"),". The ",(0,s.mdx)("strong",{parentName:"p"},"Assign Sources")," column lists the linked sources for each stock."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-assign-source-to-stock-md-4c38a03fd59e70345d59.js.map