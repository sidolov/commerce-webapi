"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2491],{74073:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return N}});var n=a(58168),r=a(80045),d=(a(88763),a(15680)),m=a(83407);const l=["components"],i={},p=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var o;const x={_frontmatter:i},u=m.A;function N(e){let{components:t}=e,a=(0,r.A)(e,l);return(0,d.mdx)(u,(0,n.A)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"retrieving-detailed-atttributes"},"Retrieving detailed atttributes"),(0,d.mdx)("p",null,"Swagger and other types of code-generated documentation erroneously indicate several APIs that search across multiple objects return detailed information about individual objects. Detailed information, such as ",(0,d.mdx)("inlineCode",{parentName:"p"},"extensionAttributes"),",  ",(0,d.mdx)("inlineCode",{parentName:"p"},"customAttributes"),", and possibly other fields, are generally available only when requesting information on a single object."),(0,d.mdx)("p",null,"This document lists the PHP, REST, and SOAP calls that indicate they return detailed information, but might not. It also provides the call that returns the detailed data."),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"If the attribute is not required (is_required = false) and has a null value, then the attribute is excluded from the REST/SOAP response."),(0,d.mdx)("h2",{id:"Customer"},"Customer module"),(0,d.mdx)("h3",{id:"CustomerRepositoryInterface"},"Magento\\Customer\\Api\\CustomerRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CustomerRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CustomerRepositoryInterface::getById($customerId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/customers/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/customers/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customerCustomerRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customerCustomerRepositoryV1GetById"))))),(0,d.mdx)("h3",{id:"GroupRepositoryInterface"},"Magento\\Customer\\Api\\GroupRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"GroupRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"GroupRepositoryInterface::getById($id)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/customerGroups/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/customerGroups/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customerGroupRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"customerGroupRepositoryV1GetById"))))),(0,d.mdx)("h2",{id:"EAV"},"EAV module"),(0,d.mdx)("h3",{id:"AttributeSetRepositoryInterface"},"Magento\\Eav\\Api\\AttributeSetRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"AttributeSetRepositoryInterface::getList($entityTypeCode, $searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"AttributeSetRepositoryInterface::get($attributeSetId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/eav/attribute-sets/list")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/eav/attribute-sets/{attributeSetId}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"eavAttributeSetRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"eavAttributeSetRepositoryV1Get"))))),(0,d.mdx)("h2",{id:"GiftWrapping"},"GiftWrapping module (Enterprise Edition)"),(0,d.mdx)("h3",{id:"WrappingRepositoryInterface"},"Magento\\GiftWrapping\\Api\\WrappingRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"WrappingRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"WrappingRepositoryInterface::get($ruleId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/gift-wrappings")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/gift-wrappings/:id"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"giftWrappingWrappingRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"giftWrappingWrappingRepositoryV1Get"))))),(0,d.mdx)("h2",{id:"Quote"},"Quote module"),(0,d.mdx)("h3",{id:"CartRepositoryInterface"},"Magento\\Quote\\Api\\CartRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CartRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CartRepositoryInterface::get($cartId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/carts/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/carts/{cartId}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quoteCartRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quoteCartRepositoryV1Get"))))),(0,d.mdx)("h3",{id:"GuestPaymentMethodManagementInterface"},"Magento\\Quote\\Api\\GuestPaymentMethodManagementInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"GuestPaymentMethodManagementInterface::getList($cartId)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"GuestPaymentMethodManagementInterface::get($cartId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/guest-carts/:cartId/payment-methods")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/guest-carts/:cartId/selected-payment-method"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quoteGuestPaymentMethodManagementV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quoteGuestPaymentMethodManagementV1Get"))))),(0,d.mdx)("h3",{id:"PaymentMethodManagementInterface"},"Magento\\Quote\\Api\\PaymentMethodManagementInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PaymentMethodManagementInterface::getList($cartId)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PaymentMethodManagementInterface::get($cartId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/carts/:cartId/payment-methods")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/carts/:cartId/selected-payment-method"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quotePaymentMethodManagementV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quotePaymentMethodManagementV1Get"))))),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PaymentMethodManagementInterface::getList($cartId)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"PaymentMethodManagementInterface::get($cartId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/carts/mine/payment-methods")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/carts/mine/selected-payment-method"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quotePaymentMethodManagementV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"quotePaymentMethodManagementV1Get"))))),(0,d.mdx)("h2",{id:"Sales"},"Sales module"),(0,d.mdx)("h3",{id:"CreditmemoRepositoryInterface"},"Magento\\Sales\\Api\\CreditmemoRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CreditmemoRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CreditmemoRepositoryInterface::get($id)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/creditmemos")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/creditmemo/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesCreditmemoRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesCreditmemoRepositoryV1Get"))))),(0,d.mdx)("h3",{id:"InvoiceRepositoryInterface"},"Magento\\Sales\\Api\\InvoiceRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"InvoiceRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"InvoiceRepositoryInterface::get($id)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/invoices")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/invoices/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesInvoiceRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesInvoiceRepositoryV1Get"))))),(0,d.mdx)("h3",{id:"OrderItemRepositoryInterface"},"Magento\\Sales\\Api\\OrderItemRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"OrderItemRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"OrderItemRepositoryInterface::get($id)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/orders/items")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/orders/items/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesOrderItemRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesOrderItemRepositoryV1Get"))))),(0,d.mdx)("h3",{id:"OrderRepositoryInterface"},"Magento\\Sales\\Api\\OrderRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"OrderRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"OrderRepositoryInterface::get($id)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/orders")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/orders/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesOrderRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesOrderRepositoryV1GetList"))))),(0,d.mdx)("h3",{id:"ShipmentRepositoryInterface"},"Magento\\Sales\\Api\\ShipmentRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"ShipmentRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"ShipmentRepositoryInterface::get($id)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/shipments")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/shipment/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesShipmentRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesShipmentRepositoryV1Get"))))),(0,d.mdx)("h3",{id:"TransactionRepositoryInterface"},"Magento\\SalesRule\\Api\\TransactionRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TransactionRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TransactionRepositoryInterface:get($id)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/transactions")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/transactions/{id}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesTransactionRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesTransactionRepositoryV1Get"))))),(0,d.mdx)("h2",{id:"SalesRule"},"SalesRule module"),(0,d.mdx)("h3",{id:"CouponRepositoryInterface"},"Magento\\SalesRule\\Api\\CouponRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CouponRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CouponRepositoryInterface::getById($couponId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/coupons/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/coupons/{couponId}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesRuleCouponRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesRuleCouponRepositoryV1GetById"))))),(0,d.mdx)("h3",{id:"RuleRepositoryInterface"},"Magento\\SalesRule\\Api\\RuleRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"RuleRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"RuleRepositoryInterface::getById($ruleId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/salesRules/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/salesRules/{ruleId}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesRuleRuleRepositoryV1GetListRequest")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"salesRuleRuleRepositoryV1GetById"))))),(0,d.mdx)("h2",{id:"Tax"},"Tax module"),(0,d.mdx)("h3",{id:"TaxClassRepositoryInterface"},"Magento\\Tax\\Api\\TaxClassRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TaxClassRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TaxClassRepositoryInterface::get($taxClassId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/taxClasses/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/taxClass/{rateId}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"taxTaxClassRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"taxTaxClassRepositoryV1Get"))))),(0,d.mdx)("h3",{id:"TaxRateRepositoryInterface"},"Magento\\Tax\\Api\\TaxRateRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TaxRateRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TaxRateRepositoryInterface::get($rateId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/taxRates/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/taxRates/{rateId}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"taxTaxRateRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"taxTaxRateRepositoryV1Get"))))),(0,d.mdx)("h3",{id:"TaxRuleRepositoryInterface"},"Magento\\Tax\\Api\\TaxRuleRepositoryInterface"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Language"),(0,d.mdx)("th",{parentName:"tr",align:null},"Does not return detailed attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Returns detailed attributes"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"PHP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TaxRuleRepositoryInterface::getList($searchCriteria)")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"TaxRuleRepositoryInterface::get($ruleId)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"REST"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/taxRules/search")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/V1/taxRules/{ruleId}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"SOAP"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"taxTaxRuleRepositoryV1GetList")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"taxTaxRuleRepositoryV1Get"))))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-attributes-md-bfe715fbb149ef6cf9a6.js.map