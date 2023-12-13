"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[598],{91629:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var a=n(87462),r=n(45987),d=(n(35776),n(3905)),m=n(91515);const l=["components"],i={},o={_frontmatter:i},s=m.Z;function u(e){let{components:t}=e,n=(0,r.Z)(e,l);return(0,d.mdx)(s,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"bulk-operation-status-endpoints"},"Bulk operation status endpoints"),(0,d.mdx)("p",null,"Adobe Commerce generates a ",(0,d.mdx)("inlineCode",{parentName:"p"},"bulk_uuid")," each time it executes an ",(0,d.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/use-rest/asynchronous-web-endpoints/"},"asynchronous API request"),". You can track the status of an asynchronous operation with the following endpoints:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"GET /V1/bulk/:bulkUuid/status")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"GET /V1/bulk/:bulkUuid/operation-status/:status")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"GET /V1/bulk/:bulkUuid/detailed-status"))),(0,d.mdx)("h2",{id:"get-the-status-summary"},"Get the status summary"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/bulk/:bulkUuid/status")," endpoint returns the abbreviated status of the specified operation:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Field name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"operations_list")),(0,d.mdx)("td",{parentName:"tr",align:null},"Object"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing information about each operation in a bulk or asynchronous request.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Identifies the bulk or asynchronous request.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"status")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"The operation status ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"1")," = Complete ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"2")," = The operation failed, but you can try to perform it again",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"3")," = The operation failed. You must change something to retry it.",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"4")," = Open",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"5")," = Rejected")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"result_message")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Describes the result of the operation. If successful, the value contains the string ",(0,d.mdx)("inlineCode",{parentName:"td"},"Service execution success")," as well as the method that executed the operation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"error_code")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"If applicable, an error code associated with the operation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"user_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Type of user who made this request. Possible values are: ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"1")," = Integration ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"2")," = Administrator ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"3")," = Customer ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"4")," = Guest User")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bulk_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"UUID generated by an ",(0,d.mdx)("a",{parentName:"td",href:"/commerce-webapi/rest/asynchronous-web-endpoints"},"asynchronous API request")," or ",(0,d.mdx)("a",{parentName:"td",href:"/commerce-webapi/rest/use-rest/bulk-endpoints/"},"Bulk API request"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"description")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains the message queue topic.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"start_time")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The time that a bulk or asynchronous operation started.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"user_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"The user ID that executed the request.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"operation_count")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"The number of operations processed in the request.")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "operations_list": [\n    {\n      "id": 12,\n      "status": 1,\n      "result_message": "Service execution success Magento\\\\Catalog\\\\Model\\\\ProductRepository\\\\Interceptor::save",\n      "error_code": null\n    }\n  ],\n  "user_type": 2,\n  "bulk_id": "fbfca270-7a90-4c4e-9f32-d6cf3728cdc7",\n  "description": "Topic async.magento.catalog.api.productrepositoryinterface.save.put",\n  "start_time": "2018-07-12 16:07:53",\n  "user_id": 1,\n  "operation_count": 1\n}\n')),(0,d.mdx)("h2",{id:"get-operations-count-by-bulk-uuid-and-status"},"Get operations count by bulk uuid and status"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/bulk/:bulkUuid/operation-status/:status")," endpoint returns the number of operations from the bulk batch that have the specified status."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Status"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"1")),(0,d.mdx)("td",{parentName:"tr",align:null},"Complete")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"2")),(0,d.mdx)("td",{parentName:"tr",align:null},"The operation failed, but you can try to perform it again.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"3")),(0,d.mdx)("td",{parentName:"tr",align:null},"The operation failed. You must change something to retry it.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"4")),(0,d.mdx)("td",{parentName:"tr",align:null},"Open")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"5")),(0,d.mdx)("td",{parentName:"tr",align:null},"Rejected")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"0\n")),(0,d.mdx)("h2",{id:"get-the-detailed-status"},"Get the detailed status"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET /V1/bulk/:bulkUuid/detailed-status")," endpoint returns detailed information about status of a specified operation. It is similar to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET /V1/bulk/:bulkUuid/status")," endpoint, except that the ",(0,d.mdx)("inlineCode",{parentName:"p"},"operations_list")," array also contains the message queue topic name and serialized data for each operation."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"GET <host>/rest/<store_code>/V1/bulk/:bulkUuid/detailed-status\n")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Field name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"operations_list")),(0,d.mdx)("td",{parentName:"tr",align:null},"Object"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing information about each operation in a bulk or asynchronous request.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Identifies the bulk or asynchronous request.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bulk_uuid")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"UUID generated by an ",(0,d.mdx)("a",{parentName:"td",href:"/commerce-webapi/rest/asynchronous-web-endpoints"},"asynchronous API request")," or ",(0,d.mdx)("a",{parentName:"td",href:"/commerce-webapi/rest/use-rest/bulk-endpoints/"},"Bulk API request"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"topic_name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the message queue topic, in the format ",(0,d.mdx)("inlineCode",{parentName:"td"},"async.<service.contract.path>.<method>"),". The service contract path is lowercase, and the method is either ",(0,d.mdx)("inlineCode",{parentName:"td"},"post"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"put"),", or ",(0,d.mdx)("inlineCode",{parentName:"td"},"delete"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"serialized_data")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of serialized input data. It contains serialized JSON with the following keys: ",(0,d.mdx)("inlineCode",{parentName:"td"},"entity_id")," - ",(0,d.mdx)("inlineCode",{parentName:"td"},"null"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"entity_link")," - an empty string, ",(0,d.mdx)("inlineCode",{parentName:"td"},"meta_info")," - the body of the API request that was executed.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"result_serialized_data")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains serialized output of the corresponding synchronous API call. For example, if you call ",(0,d.mdx)("inlineCode",{parentName:"td"},"POST /async/V1/products"),", this field contains serialized response from ",(0,d.mdx)("inlineCode",{parentName:"td"},"POST /V1/products"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"status")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"The operation status ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"1")," = Complete ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"2")," = The operation failed, but you can try to perform it again",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"3")," = The operation failed. You must change something to retry it.",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"4")," = Open",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"5")," = Rejected")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"result_message")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Describes the result of the operation. If successful, the value contains the string ",(0,d.mdx)("inlineCode",{parentName:"td"},"Service execution success")," as well as the method that executed the operation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"error_code")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"If applicable, an error code associated with the operation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"user_type")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"Type of user who made this request. Possible values are: ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"1")," = Integration ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"2")," = Administrator ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"3")," = Customer ",(0,d.mdx)("br",null),"*"," ",(0,d.mdx)("inlineCode",{parentName:"td"},"4")," = Guest User")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bulk_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"UUID generated by an ",(0,d.mdx)("a",{parentName:"td",href:"/commerce-webapi/rest/asynchronous-web-endpoints"},"asynchronous API request")," or ",(0,d.mdx)("a",{parentName:"td",href:"/commerce-webapi/rest/use-rest/bulk-endpoints/"},"Bulk API request"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"description")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains the message queue topic name.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"start_time")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The time that a bulk or asynchronous operation started.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"user_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"The user ID that executed the request.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"operation_count")),(0,d.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,d.mdx)("td",{parentName:"tr",align:null},"The number of operations processed in the request.")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "operations_list": [\n    {\n      "id": 4,\n      "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n      "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n      "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"mshaw@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Melanie Shaw\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Doe\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n      "result_serialized_data": null,\n      "status": 3,\n      "result_message": "A customer with the same email address already exists in an associated website.",\n      "error_code": 0\n    },\n    {\n      "id": 5,\n      "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n      "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n      "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"bmartin@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Bryce\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Martin\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n      "result_serialized_data": null,\n      "status": 3,\n      "result_message": "A customer with the same email address already exists in an associated website.",\n      "error_code": 0\n    },\n    {\n      "id": 6,\n      "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n      "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n      "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"bmartin@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Bryce\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Martin\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n      "result_serialized_data": null,\n      "status": 3,\n      "result_message": "A customer with the same email address already exists in an associated website.",\n      "error_code": 0\n    },\n    {\n      "id": 7,\n      "bulk_uuid": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n      "topic_name": "async.magento.customer.api.accountmanagementinterface.createaccount.post",\n      "serialized_data": "{\\"entity_id\\":null,\\"entity_link\\":\\"\\",\\"meta_information\\":\\"{\\\\\\"customer\\\\\\":{\\\\\\"email\\\\\\":\\\\\\"tgomez@example.com\\\\\\",\\\\\\"firstname\\\\\\":\\\\\\"Teresa\\\\\\",\\\\\\"lastname\\\\\\":\\\\\\"Gomez\\\\\\"},\\\\\\"password\\\\\\":\\\\\\"Password1\\\\\\",\\\\\\"redirectUrl\\\\\\":\\\\\\"\\\\\\"}\\"}",\n      "result_serialized_data": null,\n      "status": 3,\n      "result_message": "A customer with the same email address already exists in an associated website.",\n      "error_code": 0\n    }\n  ],\n  "user_type": 2,\n  "bulk_id": "c43ed402-3dd3-4100-92e2-dc5852d3009b",\n  "description": "Topic async.magento.customer.api.accountmanagementinterface.createaccount.post",\n  "start_time": "2018-07-11 20:07:14",\n  "user_id": null,\n  "operation_count": 4\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-use-rest-operation-status-endpoints-md-d1019e401ab156402799.js.map