"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1109],{79772:function(e,r,n){n.r(r),n.d(r,{_frontmatter:function(){return i},default:function(){return p}});var t=n(87462),a=n(45987),o=(n(35776),n(3905)),l=n(91515);const m=["components"],i={},s={_frontmatter:i},d=l.Z;function p(e){let{components:r}=e,n=(0,a.Z)(e,m);return(0,o.mdx)(d,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-a-custom-graphql-urlresolver-service"},"Create a custom GraphQL urlResolver service"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\UrlRewrite")," module converts URL rewrite requests to canonical URLs. As a result, your custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"urlResolver")," module does not require its own class for performing these actions, but it must be able to save and delete entries in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"url_rewrite")," table."),(0,o.mdx)("h2",{id:"create-observers"},"Create observers"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\CmsUrlRewrite\\Observer\\ProcessUrlRewriteSavingObserver")," class as the basis for saving URL rewrites. For deleting entries, create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"ProcessUrlRewriteDeleteObserver")," class similar to the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Generate urls for UrlRewrite and save it in storage\n *\n * @param \\Magento\\Framework\\Event\\Observer $observer\n * @return void\n */\npublic function execute(EventObserver $observer)\n{\n    /** @var \\Magento\\MyModule\\Model\\Page $myEntityPage  */\n    $page = $observer->getEvent()->getObject();\n\n    if ($page->isDeleted()) {\n        $this->urlPersist->deleteByData(\n            [\n                UrlRewrite::ENTITY_ID => $page->getId(),\n                UrlRewrite::ENTITY_TYPE => MyEntityPageUrlRewriteGenerator::ENTITY_TYPE,\n            ]\n        );\n    }\n}\n")),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/events-and-observers/"},"Events and observers")," for more information about creating an observer."),(0,o.mdx)("h2",{id:"configure-the-custom-module"},"Configure the custom module"),(0,o.mdx)("p",null,"Update the ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql.xml")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"events.xml")," file in your module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc")," directory to configure your custom GraphQL ",(0,o.mdx)("inlineCode",{parentName:"p"},"urlResolver")," service:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Add lines similar to the following in your module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql.xml")," file to define the enumeration. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"UrlRewriteGraphQl")," module defines ",(0,o.mdx)("inlineCode",{parentName:"p"},"UrlRewriteEntityTypeEnum"),"."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},' <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_GraphQl:etc/graphql.xsd">\n   <type xsi:type="Enum" name="UrlRewriteEntityTypeEnum">\n     <item name="my_entity">MY_ENTITY</item>\n   </type>\n </config>\n'))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Define two events similar to the following in your module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"events.xml")," file."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},' <event name="mymodule_page_save_after">\n   <observer name="process_url_rewrite_saving" instance="Magento\\MyModuleRewrite\\Observer\\ProcessUrlRewriteSavingObserver" />\n </event>\n <event name="mymodule_page_delete_after">\n   <observer name="process_url_rewrite_delete" instance="Magento\\MyModuleRewrite\\Observer\\ProcessUrlRewriteDeleteObserver" />\n </event>\n')))),(0,o.mdx)("h2",{id:"related-topics"},"Related Topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/components/events-and-observers/"},"Events and observers")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../schema/products/queries/url-resolver.md"},"urlResolver endpoint"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-develop-create-custom-url-resolver-md-1a66516b5d89f0b87758.js.map