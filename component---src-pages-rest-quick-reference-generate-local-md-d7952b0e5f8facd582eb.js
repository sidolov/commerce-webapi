"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[492],{19454:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return h}});var a,o=n(87462),r=n(63366),s=(n(15007),n(64983)),i=n(91515),m=n(8673),d=["components"],l={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),c={_frontmatter:l},u=i.Z;function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,s.mdx)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"generate-a-local-rest-reference"},"Generate a local REST reference"),(0,s.mdx)("p",null,"The REST documentation on the Adobe Commerce devdocs ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/website"},"website")," is generated with ",(0,s.mdx)("a",{parentName:"p",href:"http://swagger.io"},"Swagger UI")," using a schema derived from the latest build of Commerce. However, the REST ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," documentation on devdocs is static in that the Commerce Developers website is not running an instance of Commerce, and there is no live data."),(0,s.mdx)("p",null,"Commerce provides two ways to get detailed information about the structure of the REST endpoints, as described below."),(0,s.mdx)("h2",{id:"generate-a-full-rest-reference-locally"},"Generate a full REST reference locally"),(0,s.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"For improved application security, starting from Commerce 2.4.4, Swagger UI does not function if the operation mode is set to Production. It only functions in Developer mode.\nSee how to switch operation mode ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html#change-to-developer-mode"},"here"),"."),(0,s.mdx)("p",null,"The Swagger UI is installed automatically on your server. As a result, you can generate live REST API documentation that can include ",(0,s.mdx)(m.sitedatavaree,null)," modules, third-party modules, and ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/extension"},"extension")," attributes that have been installed on your system. To view this documentation, go to:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/swagger")),(0,s.mdx)("p",null,"To view the Swagger documentation for a specific store view, use this URL:"),(0,s.mdx)("p",null," ",(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/swagger?store=<store_code>")),(0,s.mdx)("p",null," The value of ",(0,s.mdx)("inlineCode",{parentName:"p"},"store_code")," must be one of the following:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"default")),(0,s.mdx)("li",{parentName:"ul"},"The assigned store code"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"all"),". This value only applies to the ",(0,s.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/cms"},"CMS")," and Product modules. If this value is specified, the API call affects all the merchant's stores.")),(0,s.mdx)("p",null,"By default, Commerce returns documentation for resources available to anonymous users across all stores. If you specify a valid customer or admin token in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"api_key")," text box in the upper right corner, Swagger returns documentation for all the endpoints the user has access to. To generate an API key, call the ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST /V1/integration/customer/token")," endpoint or a 2FA endpoint such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST /V1/tfa/provider/google/authenticate")," with the appropriate payload, as directed in ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/authentication/gs-authentication-token"},"Token-based authentication"),"."),(0,s.mdx)("p",null,"The generated Swagger documentation provides the capability to test REST requests. A user can enter a sample request, then press the ",(0,s.mdx)("strong",{parentName:"p"},"Try it out!")," button, and Swagger returns information such as a ",(0,s.mdx)("inlineCode",{parentName:"p"},"curl")," command, a request URL, a response body, a response code, and the response header. The ",(0,s.mdx)("strong",{parentName:"p"},"Try it out!")," button will not work unless a bearer ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/authorization"},"authorization")," token has been specified."),(0,s.mdx)("h3",{id:"rest-reference-for-asynchronous-api"},"REST reference for Asynchronous API"),(0,s.mdx)("p",null,"You can also use Swagger to generate live asynchronous API REST documentation. To create this documentation, add the ",(0,s.mdx)("inlineCode",{parentName:"p"},"?type=async")," parameter to the standard Swagger URL:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/swagger?type=async")),(0,s.mdx)("p",null,"Swagger returns information about all resources available for asynchronous REST APIs."),(0,s.mdx)("h2",{id:"return-the-json-schema-for-one-or-more-services"},"Return the JSON schema for one or more services"),(0,s.mdx)("p",null,"You can use a REST client to generate the JSON schema for one or more services. In the client, set the method to ",(0,s.mdx)("inlineCode",{parentName:"p"},"GET")," and the ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/url"},"URL")," to"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/rest/<store_code>/schema?services=<serviceName1,serviceName2,..>")),(0,s.mdx)("p",null,"For example:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/rest/default/schema?services=catalogProductRepositoryV1")),(0,s.mdx)("p",null,"To return information about all services:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/rest/<store_code>/schema")),(0,s.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"You must specify an authorization token for an ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/authentication/gs-authentication-token"},"admin")," for more information."),(0,s.mdx)("h2",{id:"return-the-complete-json-schema"},"Return the complete JSON schema"),(0,s.mdx)("p",null,"To return the complete JSON schema, specify the ",(0,s.mdx)("inlineCode",{parentName:"p"},"?services=all")," parameter in the URL. The default ",(0,s.mdx)("inlineCode",{parentName:"p"},"store_code")," is ",(0,s.mdx)("inlineCode",{parentName:"p"},"all"),", but you can also specify ",(0,s.mdx)("inlineCode",{parentName:"p"},"default")," or a store code defined on the system. For example: ",(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/rest/default/schema?services=all")),(0,s.mdx)("p",null,"The base URL for returning the asynchronous schema is ",(0,s.mdx)("inlineCode",{parentName:"p"},"http://<commerce_host>/rest/<store_code>/async/schema"),"."),(0,s.mdx)("h2",{id:"security"},"Security"),(0,s.mdx)("p",null,"By default, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"/swagger")," endpoint is open on Commerce instances. Leaving it open on a public instance could potentially expose system information that should not be readable."),(0,s.mdx)("p",null,"To close off the ",(0,s.mdx)("inlineCode",{parentName:"p"},"/swagger")," endpoint, disable the following modules:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Swagger"),(0,s.mdx)("li",{parentName:"ul"},"SwaggerWebapi"),(0,s.mdx)("li",{parentName:"ul"},"SwaggerWebapiAsync")),(0,s.mdx)("p",null,"To ensure proper functionality, always test Commerce instances after disabling modules."),(0,s.mdx)("p",null,"You may also use web server rewrite rules to redirect users trying to access the endpoint:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite"},"nginx rewrite module")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/rewrite/"},"apache mod_rewrite"))),(0,s.mdx)("h3",{id:"related-topics"},"Related topics"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/use-rest/anonymous-api-security/"},"Restricting access to anonymous web APIs"),"\n",(0,s.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/authentication/gs-authentication-token"},"Token-based authentication")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-quick-reference-generate-local-md-d7952b0e5f8facd582eb.js.map