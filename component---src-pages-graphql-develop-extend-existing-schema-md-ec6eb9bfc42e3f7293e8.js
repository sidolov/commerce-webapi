"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5165],{45976:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return p}});var a=n(87462),r=n(45987),o=(n(35776),n(3905)),i=n(91515);const d=["components"],s={},m={_frontmatter:s},l=i.Z;function p(e){let{components:t}=e,n=(0,r.Z)(e,d);return(0,o.mdx)(l,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"extend-an-existing-graphql-schema"},"Extend an existing GraphQL schema"),(0,o.mdx)("p",null,"You can extend the default GraphQL schema to add attributes and data types, modify existing resolver behavior, and add features using other extension points. GraphQL uses ",(0,o.mdx)("em",{parentName:"p"},"stitching")," to assemble a single unified schema out of the many schemas defined in individual modules. All ",(0,o.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," files are stitched together to a single schema. In this process, all nodes with the same type (such as type, interface, and enum) and name are stitched together and recursively extended/overridden. This process is similar to how XML merging works."),(0,o.mdx)("h2",{id:"extend-the-schema"},"Extend the schema"),(0,o.mdx)("p",null,"The first step to retrieve a custom field in an existing query is to extend the appropriate schema object."),(0,o.mdx)("p",null,"In the following example, we will change the description of an existing field (",(0,o.mdx)("inlineCode",{parentName:"p"},"attribute_set_id"),") and add a new field (",(0,o.mdx)("inlineCode",{parentName:"p"},"attribute_set_name"),") to the GraphQL schema for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"products")," query. Common use cases require adding fields to the database. ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/declarative-schema/"},"Declarative Schema")," describes how to add a custom field to the database."),(0,o.mdx)("p",null,"The simplified structure of the query schema to get products is:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"schema {\n    query: Query\n    ...\n}\n\ntype Query {\n    products (...): Products\n    ...\n}\n\ntype Products {\n    items: [ProductInterface]\n    ...\n}\n\ninterface ProductInterface {\n    id: Int\n    name: String\n    sku: String\n    ...\n}\n")),(0,o.mdx)("p",null,"We need to extend the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ProductInterface"),", since that is the schema object for a product. We can do this by creating a ",(0,o.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file in our custom module's (",(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleCorp/CustomGQL"),") ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc")," directory."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleCorp_CustomGQL/etc/schema.graphqls")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'interface ProductInterface {\n    attribute_set_id: Int\n        @doc(description: "ID of the attribute set assigned to the product")\n    attribute_set_name: String\n        @doc(description: "Name of attribute set assigned to the product")\n        @resolver(class: "\\\\ExampleCorp\\\\CustomGQL\\\\Model\\\\Resolver\\\\ProductAttributeSetNameResolver")\n}\n')),(0,o.mdx)("p",null,"The above schema file is merged with the schema present at ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_CatalogGraphQl/etc/schema.graphqls")," which contains the original ",(0,o.mdx)("inlineCode",{parentName:"p"},"ProductInterface")," object. Our schema file contains the following fields:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"attribute_set_id")," field is already present in the original schema, so the field described in our new schema will override the field present in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ProductInterface")," object. This example only changes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@doc")," annotation content to demonstrate how the process works.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"attribute_set_name")," field is not present in the orignal schema, so the field is added to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ProductInterface")," object by extending it. For our new field, we set a description and a resolver class to resolve the data to be returned."))),(0,o.mdx)("h2",{id:"resolve-the-field-value"},"Resolve the field value"),(0,o.mdx)("p",null,"In the resolver, we get the relevant data based on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"$value")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"$args")," passed to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolve")," method. This can be done using a repository interface or a resource model of the custom field."),(0,o.mdx)("p",null,"In our example scenario, we use ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Catalog\\Api\\AttributeSetRepositoryInterface")," to get the attribute set name for a given attribute set ID obtained from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"$value")," argument and return that as the resolution for the field."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleCorp_CustomGQL/Model/Resolver/ProductAttributeSetNameResolver.php")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace ExampleCorp\\CustomGQL\\Model\\Resolver;\n\nuse Magento\\Catalog\\Api\\AttributeSetRepositoryInterface;\nuse Magento\\Framework\\GraphQl\\Config\\Element\\Field;\nuse Magento\\Framework\\GraphQl\\Query\\ResolverInterface;\nuse Magento\\Framework\\GraphQl\\Schema\\Type\\ResolveInfo;\n\n/**\n * Class to resolve custom attribute_set_name field in product GraphQL query\n */\nclass ProductAttributeSetNameResolver implements ResolverInterface\n{\n    /**\n     * @var AttributeSetRepositoryInterface\n     */\n    private $setRepository;\n\n    public function __construct(AttributeSetRepositoryInterface $setRepository)\n    {\n        $this->setRepository = $setRepository;\n    }\n\n    public function resolve(Field $field, $context, ResolveInfo $info, array $value = null, array $args = null)\n    {\n        return $this->setRepository->get($value['attribute_set_id'])->getAttributeSetName();\n    }\n}\n")),(0,o.mdx)("h2",{id:"extend-configuration-data"},"Extend configuration data"),(0,o.mdx)("p",null,"You can add your own configuration to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"storeConfig")," query within your own module."),(0,o.mdx)("p",null,"To do this, configure the constructor argument ",(0,o.mdx)("inlineCode",{parentName:"p"},"extendedConfigData")," in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"argument")," node in your area-specific ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc/graphql/di.xml")," file."),(0,o.mdx)("p",null,"The following example adds an array-item to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"extendedConfigData")," array within the construct of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"StoreConfigDataProvider"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" ?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n  <type name="Magento\\StoreGraphQl\\Model\\Resolver\\Store\\StoreConfigDataProvider">\n    <arguments>\n      <argument name="extendedConfigData" xsi:type="array">\n        <item name="section_group_field" xsi:type="string">section/group/field</item>\n      </argument>\n    </arguments>\n  </type>\n</config>\n')),(0,o.mdx)("p",null,"You must also extend the type ",(0,o.mdx)("inlineCode",{parentName:"p"},"storeConfig")," within in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc/schema.graphqls")," file, as shown below:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'type StoreConfig {\n    section_group_field : String  @doc(description: "Extended Config Data - section/group/field")\n}\n')),(0,o.mdx)("h2",{id:"related-topics"},"Related topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"index.md"},"Define the GraphQL schema for a module")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"resolvers.md"},"Resolvers")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/components/declarative-schema/"},"Declarative schema"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-develop-extend-existing-schema-md-ec6eb9bfc42e3f7293e8.js.map