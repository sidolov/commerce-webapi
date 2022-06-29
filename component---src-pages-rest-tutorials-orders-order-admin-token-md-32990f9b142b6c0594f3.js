"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[276],{83040:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return p}});var a=n(87462),o=n(63366),i=(n(15007),n(64983)),r=n(91515),d=["components"],m={},l={_frontmatter:m},s=r.Z;function p(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)(s,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"step-2-get-the-admin-token"},"Step 2. Get the admin token"),(0,i.mdx)("p",null,"Each step in this tutorial provides the following information:"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("p",null,"This section lists the HTTP verb and full path to the endpoint. The basic structure of a REST call in Adobe Commerce is"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"<HTTP verb> http://<host>/rest/<scope>/<endpoint>")),(0,i.mdx)("p",null,"where:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Element"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"HTTP verb")),(0,i.mdx)("td",{parentName:"tr",align:null},"One of ",(0,i.mdx)("inlineCode",{parentName:"td"},"GET"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"POST"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"PUT"),", or ",(0,i.mdx)("inlineCode",{parentName:"td"},"DELETE"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"host")),(0,i.mdx)("td",{parentName:"tr",align:null},"The hostname or IP address (and optionally, port) of the Commerce installation.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"scope")),(0,i.mdx)("td",{parentName:"tr",align:null},"Specifies which store the call affects. In this tutorial, this value is ",(0,i.mdx)("inlineCode",{parentName:"td"},"default"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"endpoint")),(0,i.mdx)("td",{parentName:"tr",align:null},"The full URI (Uniform Resource Identifier) to the endpoint. These values always start with ",(0,i.mdx)("inlineCode",{parentName:"td"},"/V1"),". For example, ",(0,i.mdx)("inlineCode",{parentName:"td"},"/V1/orders/4"),".")))),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"HTTP headers:")),(0,i.mdx)("p",null,"This section indicates which key/value pairs you must specify in the HTTP headers. All calls require one or more HTTP headers."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Payload:")),(0,i.mdx)("p",null,"This section lists the information that is sent to Commerce. All payload samples are valid and can be copied and pasted into your calls, but you might need to change the ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," values that Commerce returns."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,"This section lists the information that Commerce sends to the REST client. These values are often referenced in other steps in the tutorial. The values Commerce returnsmight be different than the values listed in the examples provided in this tutorial."),(0,i.mdx)("h3",{id:"get-the-admin-authorization-token"},"Get the admin authorization token"),(0,i.mdx)("p",null,"In a production environment, you would typically ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/create-integration"},"create an integration")," and supply the integration token with any REST call that requires admin privileges. The token allows Commerce to verify that the caller is authorized to access a system resource."),(0,i.mdx)("p",null,"Here, we will supply an admin token instead. To get a token, you must have 2FA configured. This tutorial assumes that you are using Google Authenticator as your 2FA solution. The endpoint and payload will be different for other 2FA solutions. See ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/security/two-factor-authentication.html"},"Two-Factor Authentication")," for more information."),(0,i.mdx)("p",null,"Your request must specify the admin user's ",(0,i.mdx)("inlineCode",{parentName:"p"},"username"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"password")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"otp")," (one time password). The ",(0,i.mdx)("inlineCode",{parentName:"p"},"otp")," value is the six-digit authorization code that Google Authenticator generates."),(0,i.mdx)("p",null,"By default, an admin token is valid for 4 hours. To change this value, log in to Admin and go to ",(0,i.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,i.mdx)("strong",{parentName:"p"},"Settings")," > ",(0,i.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,i.mdx)("strong",{parentName:"p"},"Services")," > ",(0,i.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,i.mdx)("strong",{parentName:"p"},"Access Token Expiration")," > ",(0,i.mdx)("strong",{parentName:"p"},"Admin Token Lifetime (hours)"),"."),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/authentication/gs-authentication-token"},"Token-based authentication")," for more information about authorization tokens."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/tfa/provider/google/authenticate")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Headers:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Payload:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "password": "<admin-password>",\n  "otp": "<otp-value>"\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,"Commerce returnsthe admin's access token."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"5r8cvmpr11j6gmau8990rcj2qk7unh8i")),(0,i.mdx)("p",null,"This token must be specified in the authorization header of every call that requires ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"admin")," permissions."),(0,i.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,i.mdx)("p",null,"There are no additional verification steps. Tokens are not displayed in Admin."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-orders-order-admin-token-md-32990f9b142b6c0594f3.js.map