"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9670],{52472:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return c}});var t=a(58168),o=a(80045),s=(a(88763),a(15680)),r=a(83407);const d=["components"],m={},l=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var i;const p={_frontmatter:m},u=r.A;function c(e){let{components:n}=e,a=(0,o.A)(e,d);return(0,s.mdx)(u,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"step-3-create-a-customer"},"Step 3. Create a customer"),(0,s.mdx)("p",null,"Customers can make purchases in three ways:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"As a logged-in user"),(0,s.mdx)("li",{parentName:"ul"},"As a guest user who logs in or creates an account when the order is placed"),(0,s.mdx)("li",{parentName:"ul"},"As a guest user who does not create an account")),(0,s.mdx)("p",null,"This tutorial creates an order by a logged-in user. Adobe Commerce provides additional REST endpoints for handling guest users."),(0,s.mdx)("h3",{id:"create-a-customer-account"},"Create a customer account"),(0,s.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"This example shows a simplified way of creating a customer account. Typically, you would not define a customer password using plain text. Instead, you would specify the payload without the ",(0,s.mdx)("inlineCode",{parentName:"p"},"password"),' parameter. By default if the call is successful, Commerce sends a "Welcome" email to the customer that includes a request to set the password. You could also initiate a password reset email by calling ',(0,s.mdx)("inlineCode",{parentName:"p"},"PUT /V1/customers/password"),"."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/customers")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Headers:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Payload:")),(0,s.mdx)("p",null,"It is recommended that you substitute the value of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"email")," parameter with a real email address so that you receive all notifications."),(0,s.mdx)("details",null,(0,s.mdx)("summary",null,(0,s.mdx)("b",null,"Show code sample")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "customer": {\n    "email": "jdoe@example.com",\n    "firstname": "Jane",\n    "lastname": "Doe",\n    "addresses": [\n      {\n        "defaultShipping": true,\n        "defaultBilling": true,\n        "firstname": "Jane",\n        "lastname": "Doe",\n        "region": {\n          "regionCode": "NY",\n          "region": "New York",\n          "regionId": 43\n        },\n        "postcode": "10755",\n        "street": [\n          "123 Oak Ave"\n        ],\n        "city": "Purchase",\n        "telephone": "512-555-1111",\n        "countryId": "US"\n      }\n    ]\n  },\n  "password": "Password1"\n}\n'))),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("p",null,"Commerce assigned this user ",(0,s.mdx)("inlineCode",{parentName:"p"},"id")," value of ",(0,s.mdx)("inlineCode",{parentName:"p"},"2"),"."),(0,s.mdx)("details",null,(0,s.mdx)("summary",null,(0,s.mdx)("b",null,"Show code sample")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2,\n  "group_id": 1,\n  "default_billing": "2",\n  "default_shipping": "2",\n  "created_at": "2017-01-31 01:18:13",\n  "updated_at": "2017-01-31 01:18:13",\n  "created_in": "Default Store View",\n  "email": "jdoe@example.com",\n  "firstname": "Jane",\n  "lastname": "Doe",\n  "store_id": 1,\n  "website_id": 1,\n  "addresses": [\n    {\n      "id": 2,\n      "customer_id": 2,\n      "region": {\n        "region_code": "NY",\n        "region": "New York",\n        "region_id": 43\n      },\n      "region_id": 43,\n      "country_id": "US",\n      "street": [\n        "123 Oak Ave"\n      ],\n      "telephone": "512-555-1111",\n      "postcode": "10755",\n      "city": "Purchase",\n      "firstname": "Jane",\n      "lastname": "Doe",\n      "default_shipping": true,\n      "default_billing": true\n    }\n  ],\n  "disable_auto_group_change": 0\n}\n'))),(0,s.mdx)("p",null,"You can log in to the Luma store using the username ",(0,s.mdx)("inlineCode",{parentName:"p"},"jdoe@example.com")," and password ",(0,s.mdx)("inlineCode",{parentName:"p"},"Password1"),"."),(0,s.mdx)("h3",{id:"get-the-customers-access-token"},"Get the customer's access token"),(0,s.mdx)("p",null,"To get a customer's access token, you must specify the customer's username and password in the payload. You do not need to specify an admin authorization token."),(0,s.mdx)("p",null,"By default, a customer token is valid for 1 hour. To change this value, log in to Admin and go to ",(0,s.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,s.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Services")," > ",(0,s.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,s.mdx)("strong",{parentName:"p"},"Access Token Expiration"),"."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/integration/customer/token")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Headers:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Payload:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "jdoe@example.com",\n  "password": "Password1"\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("p",null,"Commerce returns the customer's access token. This token must be specified in the authorization header of every call the customer makes on his or her own behalf."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"q0u66k8h42yaevtchv09uyy3y9gaj2ap")),(0,s.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Log in to the Luma website using the email ",(0,s.mdx)("inlineCode",{parentName:"li"},"jdoe@example.com")," and password ",(0,s.mdx)("inlineCode",{parentName:"li"},"Password1"),"."),(0,s.mdx)("li",{parentName:"ol"},"Click the account name (Jane) in the upper right corner and select ",(0,s.mdx)("strong",{parentName:"li"},"My Account"),"."),(0,s.mdx)("li",{parentName:"ol"},"Click ",(0,s.mdx)("strong",{parentName:"li"},"Address Book")," to view the default billing and shipping addresses.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-orders-order-create-customer-md-3cc6c949efb12cdbc83f.js.map