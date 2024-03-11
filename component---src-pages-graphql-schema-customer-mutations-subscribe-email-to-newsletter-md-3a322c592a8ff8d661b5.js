"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5001],{26191:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(87462),r=n(45987),m=(n(35776),n(3905)),d=n(65663);const i=["components"],l={},s={_frontmatter:l},o=d.Z;function p(e){let{components:t}=e,n=(0,r.Z)(e,i);return(0,m.mdx)(o,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"subscribeemailtonewsletter-mutation"},"subscribeEmailToNewsletter mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"subscribeEmailToNewsletter")," mutation allows guests and registered customers to sign up to receive newsletters. It can return a value of ",(0,m.mdx)("inlineCode",{parentName:"p"},"NOT_ACTIVE")," or ",(0,m.mdx)("inlineCode",{parentName:"p"},"SUBSCRIBED"),"."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"mutation: {subscribeEmailToNewsletter(email: String!): SubscribeEmailToNewsletterOutput}")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-subscribeEmailToNewsletter"},(0,m.mdx)("inlineCode",{parentName:"a"},"subscribeEmailToNewsletter"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following call subscribes an email to the store's newsletter."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  subscribeEmailToNewsletter(\n    email: "email@example.com"\n  ) {\n    status\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "subscribeEmailToNewsletter": {\n      "status": "SUBSCRIBED"\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Cannot create a newsletter subscription.")),(0,m.mdx)("td",{parentName:"tr",align:null},"A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Enter a valid email address.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument has an invalid format.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Guests can not subscribe to the newsletter. You must create an account to subscribe.")),(0,m.mdx)("td",{parentName:"tr",align:null},"Guest subscription is disabled. Go to ",(0,m.mdx)("strong",{parentName:"td"},"Stores")," > ",(0,m.mdx)("strong",{parentName:"td"},"Configuration")," > ",(0,m.mdx)("strong",{parentName:"td"},"Customers")," > ",(0,m.mdx)("strong",{parentName:"td"},"Newsletter")," > ",(0,m.mdx)("strong",{parentName:"td"},"Subscription Options")," > ",(0,m.mdx)("strong",{parentName:"td"},"Allow Guest Subscription")," in the Admin to adjust the setting.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The account sign-in was incorrect or your account is disabled temporarily.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The email address provided in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument is that of a customer account pending confirmation.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"This email address is already subscribed.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The email address provided in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument is already subscribed.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"You must specify an email address to subscribe to a newsletter.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument is empty.")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-subscribe-email-to-newsletter-md-3a322c592a8ff8d661b5.js.map