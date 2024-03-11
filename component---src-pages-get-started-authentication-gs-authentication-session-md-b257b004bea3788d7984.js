"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[437],{62176:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return p}});var o=n(87462),i=n(45987),s=(n(35776),n(3905)),a=n(65663);const r=["components"],d={},m=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var u;const l={_frontmatter:d},c=a.Z;function p(e){let{components:t}=e,n=(0,i.Z)(e,r);return(0,s.mdx)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"session-based-authentication"},"Session-based authentication"),(0,s.mdx)("p",null,"As a customer, you log in to the storefront with your customer credentials. As an admin, you log in to the Admin with your admin credentials."),(0,s.mdx)("p",null,"The web API framework uses your logged-in session information to verify your identity and authorize access to the requested resource."),(0,s.mdx)("p",null,"Customers can access resources that are configured with ",(0,s.mdx)("inlineCode",{parentName:"p"},"anonymous")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"self"),"  permission in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," configuration file."),(0,s.mdx)("p",null,"Admins can access resources that are assigned to their Admin profile."),(0,s.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The web API framework enables guest users to access resources that are configured with ",(0,s.mdx)("inlineCode",{parentName:"p"},"anonymous")," permission. Any user that the framework cannot authenticate through existing authentication mechanisms is considered a guest user."),(0,s.mdx)("p",null,"For example, if a customer is logged in to the storefront and the JavaScript widget invokes the ",(0,s.mdx)("inlineCode",{parentName:"p"},"self")," API, details for the logged-in customer are fetched:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET /rest/V1/customers/me")),(0,s.mdx)("p",null,"Similarly, if an admin is logged in to the Admin and the JavaScript widget invokes the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::group")," API, details for the logged-in admin are fetched. The web API framework establishes the identity of the admin user based on logged-in session information and authorizes access to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::group")," resource."),(0,s.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Admin session-based authentication is not currently possible for API endpoints."),(0,s.mdx)("p",null,"The session based authentication functionality is restricted to AJAX calls. Direct browser requests cannot be made due to security vulnerabilities. A developer can create a custom storefront widget that can issue requests without additional authentication steps."),(0,s.mdx)("h2",{id:"related-topic"},"Related topic"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/web-api/services/"},"Configure services as web APIs")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-authentication-gs-authentication-session-md-b257b004bea3788d7984.js.map