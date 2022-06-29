"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1325],{61900:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return l}});var a=t(87462),o=t(63366),s=(t(15007),t(64983)),d=t(91515),r=["components"],m={},p={_frontmatter:m},i=d.Z;function l(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.mdx)(i,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"step-3-create-stocks"},"Step 3. Create stocks"),(0,s.mdx)("p",null,"This step guides through the process for creating ",(0,s.mdx)("strong",{parentName:"p"},"stock"),". Stock represents a virtual, aggregated inventory of products for sources of your sales channels. Each stock maps sales channels with sources to determine available inventories and salable quantities."),(0,s.mdx)("p",null,"A sales channel can only be assigned to one stock."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_id")," of the default stock is ",(0,s.mdx)("inlineCode",{parentName:"p"},"1"),".  You cannot delete or add sources to the default stock, but you can perform these actions with custom stocks."),(0,s.mdx)("p",null,"For more information about stock, see ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/inventory/index.html"},"Inventory Management overview"),"."),(0,s.mdx)("h2",{id:"create-the-stock"},"Create the stock"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST V1/inventory/stocks")," endpoint creates a stock. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"name"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"type"),", and ",(0,s.mdx)("inlineCode",{parentName:"p"},"code")," attributes are required. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"code")," value cannot be changed."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/inventory/stocks")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Scope:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Headers:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,s.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,s.mdx)("inlineCode",{parentName:"p"},"Bearer <admin_token>")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Payload:")),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"name")," attribute is required."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "stock": {\n    "name": "US Stock",\n    "extension_attributes": {\n      "sales_channels": [\n        {\n          "type": "website",\n          "code": "base"\n        }\n      ]\n    }\n  }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("p",null,"Commerce returnsthe ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_id"),", such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"2"),". The value will be used in subsequent steps."),(0,s.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,s.mdx)("p",null,"In Admin, click ",(0,s.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,s.mdx)("strong",{parentName:"p"},"Inventory")," > ",(0,s.mdx)("strong",{parentName:"p"},"Stocks"),".  The new stocks are displayed in the Stock grid."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-create-stock-md-e7a82abfb3747913424c.js.map