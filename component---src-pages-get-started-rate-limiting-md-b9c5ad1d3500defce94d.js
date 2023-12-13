"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4019],{49590:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return g}});var n=a(87462),r=a(45987),i=(a(35776),a(3905)),l=a(91515),s=a(19040);const m=["components"],d={},o=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var p;const u={_frontmatter:d},c=l.Z;function g(e){let{components:t}=e,a=(0,r.Z)(e,m);return(0,i.mdx)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"rate-limiting"},"Rate limiting"),(0,i.mdx)(s.Z,{mdxType:"BetaNote"}),(0,i.mdx)("p",null,"In a carding attack, an attacker tries to determine which credit card numbers are valid, usually in batches of thousands. Attackers can use similar techniques to brute force missing details, such as the expiration date. Adobe Commerce merchants can be targeted by this attack type through their shops and integrations with 3rd-party payment gateways."),(0,i.mdx)("p",null,"As of Adobe Commerce 2.4.7, you can configure rate limiting for the payment information transmitted using REST and GraphQL. This added layer of protection allows merchants to prevent and decrease the volume of carding attacks that test many credit card numbers at once."),(0,i.mdx)("p",null,"The rate limiting functionality affects the following entry points:"),(0,i.mdx)("p",null,"REST:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"<base_url>/rest/V1/<store_code>/guest-carts/<cart_id>/payment-information")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"<base_url>/rest/V1/<store_code>/guest-carts/<cart_id>/order")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"<base_url>/rest/V1/<store_code>/carts/mine/payment-information")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"<base_url>/rest/V1/<store_code>/carts/mine/order"))),(0,i.mdx)("p",null,"GraphQL:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"<base_url>/graphql"))),(0,i.mdx)("p",null,"InstantPurchase module:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"magento/module-instant-purchase"))),(0,i.mdx)("p",null,"Setting up rate limiting has two discrete steps:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Add a configuration that connects to the service where the request logs will be stored. By default, the connection is configured for a Redis server. Most merchants must configure a cloud or local installation of Redis to implement the rate limiting feature. However, merchants who have ",(0,i.mdx)("a",{parentName:"p",href:"#use-aws-elasticache-with-your-ec2-instance"},"instances hosted on Amazon EC2")," use an AWS ElastiCache instead of a cloud or local Redis instance."),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Note:")," The data, including request time and identifier, is temporarily stored in Redis. Registered users are identified by their user ID. Non-registered users are identified by their external IP address.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Configure Commerce to set restrictions on guest users and authenticated customers. This step is the same for all merchants."))),(0,i.mdx)("h2",{id:"set-the-redis-service-connection-most-merchants"},"Set the Redis service connection (most merchants)"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/redis/config-redis.html"},"Configure Redis")," topic in the ",(0,i.mdx)("em",{parentName:"p"},"Commerce Configuration Guide")," describes basic installation and configuration information."),(0,i.mdx)("p",null,"Commerce provides command-line options to configure the connection to the backpressure logger. Although you can configure the backpressure logger by editing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Commerce-install-dir>/app/etc/env.php")," file, using the command line is the recommended method, especially for initial configurations. The command line provides validation, ensuring the configuration is syntactically correct."),(0,i.mdx)("p",null,"By default, the connection is configured for a Redis server. Use the following ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:config:set")," commands to configure the Redis service connection:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Command line parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Value"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"redis")),(0,i.mdx)("td",{parentName:"tr",align:null},"Specifies the backpressure logger handler"),(0,i.mdx)("td",{parentName:"tr",align:null},"This value must be set to ",(0,i.mdx)("inlineCode",{parentName:"td"},"redis"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-id-prefix")),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},"ID prefix for keys"),(0,i.mdx)("td",{parentName:"tr",align:null},"None")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-redis-db")),(0,i.mdx)("td",{parentName:"tr",align:null},"Database number"),(0,i.mdx)("td",{parentName:"tr",align:null},"Required if you use Redis for both the default and full-page cache. You must specify the database number of one of the caches; the other cache uses 0 by default.",(0,i.mdx)("br",null),(0,i.mdx)("br",null),(0,i.mdx)("strong",{parentName:"td"},"Important"),": If you use Redis for more than one type of caching, the database numbers must be different. It is recommended that you assign the default caching database number to 0, the page-caching database number to 1, and the session storage database number to 2. And as a result, the number of the database for storing the backpressure log is 3."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"3"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-redis-password")),(0,i.mdx)("td",{parentName:"tr",align:null},"Password"),(0,i.mdx)("td",{parentName:"tr",align:null},"Configuring a Redis password enables one of its built-in security features: the ",(0,i.mdx)("inlineCode",{parentName:"td"},"auth")," command, which requires clients to authenticate to access the database. The password is configured directly in Redis' configuration file: ",(0,i.mdx)("inlineCode",{parentName:"td"},"/etc/redis/redis.conf")),(0,i.mdx)("td",{parentName:"tr",align:null},"None")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-redis-persistent")),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},"Unique string to enable persistent connections"),(0,i.mdx)("td",{parentName:"tr",align:null},"None")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-redis-port")),(0,i.mdx)("td",{parentName:"tr",align:null},"Port"),(0,i.mdx)("td",{parentName:"tr",align:null},"Redis server listen port"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"6379"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-redis-server")),(0,i.mdx)("td",{parentName:"tr",align:null},"Server"),(0,i.mdx)("td",{parentName:"tr",align:null},"Fully qualified hostname, IP address, or an absolute path to a UNIX socket. The default value of 127.0.0.1 indicates Redis is installed on the Commerce server."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"127.0.0.1"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-redis-timeout")),(0,i.mdx)("td",{parentName:"tr",align:null},"Timeout"),(0,i.mdx)("td",{parentName:"tr",align:null},"Redis server timeout, in seconds"),(0,i.mdx)("td",{parentName:"tr",align:null},"2.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--backpressure-logger-redis-user")),(0,i.mdx)("td",{parentName:"tr",align:null},"User ID"),(0,i.mdx)("td",{parentName:"tr",align:null},"Redis server user"),(0,i.mdx)("td",{parentName:"tr",align:null},"None")))),(0,i.mdx)("p",null,"The following example creates a new connection to a Redis server with the following properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Host: 195.34.23.5"),(0,i.mdx)("li",{parentName:"ul"},"Port: 9345"),(0,i.mdx)("li",{parentName:"ul"},"Password: s0M3StR0NgP@SsW0Rd"),(0,i.mdx)("li",{parentName:"ul"},"User: SomeUser")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ bin/magento setup:config:set \\\n    --backpressure-logger=redis \\\n    --backpressure-logger-redis-server=195.34.23.5 \\\n    --backpressure-logger-redis-port=9345 \\\n    --backpressure-logger-redis-timeout=1 \\\n    --backpressure-logger-redis-persistent=persistent \\\n    --backpressure-logger-redis-db=3 \\\n    --backpressure-logger-redis-password=s0M3StR0NgP@SsW0Rd\\\n    --backpressure-logger-redis-user=SomeUser \\\n    --backpressure-logger-id-prefix=some_pref\n")),(0,i.mdx)("p",null,"After the command is executed, the following configuration is added to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/env.php")," file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"[\n//...\n    'backpressure' => [\n        'logger' => [\n            'type' => 'redis',\n            'options' => [\n                'server' => '195.34.23.5',\n                'port' => 9345,\n                'timeout' => 1,\n                'persistent' => 'persistent',\n                'db' => '3',\n                'password' => 's0meStr0ngPassw0rd',\n                'user' => 'SomeUser'\n            ],\n            'id-prefix' => 'some_pref'\n        ]\n    ]\n//...\n];\n")),(0,i.mdx)("p",null,"Continue to ",(0,i.mdx)("a",{parentName:"p",href:"#configure-rate-limiting"},"Configure rate limiting")),(0,i.mdx)("h2",{id:"use-aws-elasticache-with-your-ec2-instance"},"Use AWS ElastiCache with your EC2 instance"),(0,i.mdx)("p",null,"As of Commerce 2.4.3, instances hosted on Amazon EC2 can use an AWS ElastiCache in place of a local Redis instance."),(0,i.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"This section applies to Commerce instances running on Amazon EC2 VPCs. It does not work for standard cloud or on-premises installations."),(0,i.mdx)("h3",{id:"configure-a-redis-cluster"},"Configure a Redis cluster"),(0,i.mdx)("p",null,"After ",(0,i.mdx)("a",{parentName:"p",href:"https://aws.amazon.com/getting-started/hands-on/setting-up-a-redis-cluster-with-amazon-elasticache/"},"setting up a Redis cluster on AWS"),", configure the EC2 instance to use the ElastiCache."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/set-up.html"},"Create an ElastiCache Cluster")," in the same region and VPC of the EC2 instance.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Verify the connection."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Open an SSH connection to your EC2 instance.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"On the EC2 instance, install the Redis client:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install redis\n"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Add an inbound rule to the EC2 security group: Type ",(0,i.mdx)("inlineCode",{parentName:"p"},"- Custom TCP, port - 6379, Source - 0.0.0.0/0"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Add an inbound rule to the ElastiCache Cluster security group: Type ",(0,i.mdx)("inlineCode",{parentName:"p"},"- Custom TCP, port - 6379, Source - 0.0.0.0/0"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Connect to the Redis CLI:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"redis-cli -h <ElastiCache Primary Endpoint host> -p <ElastiCache Primary Endpoint port>\n")))))),(0,i.mdx)("h3",{id:"configure-commerce-to-use-the-cluster"},"Configure Commerce to use the cluster"),(0,i.mdx)("p",null,"Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"setup")," commands to specify the Redis endpoints.\nTo configure Commerce for the backpressure logger connection:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:config:set --backpressure-logger=redis --backpressure-logger-redis-server=<ElastiCache Primary Endpoint host> --backpressure-logger-redis-port=<ElastiCache Primary Endpoint port> --backpressure-logger-redis-db=3\n")),(0,i.mdx)("h2",{id:"configure-rate-limiting"},"Configure rate limiting"),(0,i.mdx)("p",null,"After the Redis server connection has been configured, you can run several ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento config:set")," commands that define how rate limiting is implemented for guest users and authenticated customers. Rate limiting is disabled by default."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"sales/backpressure/enabled"),(0,i.mdx)("td",{parentName:"tr",align:null},"Enable rate limiting for placing orders.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"sales/backpressure/disabled"),(0,i.mdx)("td",{parentName:"tr",align:null},"Disable the rate limiting feature.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"sales/backpressure/guest_limit"),(0,i.mdx)("td",{parentName:"tr",align:null},"Requests limit per guest.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"sales/backpressure/limit"),(0,i.mdx)("td",{parentName:"tr",align:null},"Requests limit per authenticated customer.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"sales/backpressure/period"),(0,i.mdx)("td",{parentName:"tr",align:null},"The number of seconds to wait until resetting the counter.")))),(0,i.mdx)("p",null,"You can also enable and configure rate limiting from the Admin by selecting ",(0,i.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,i.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,i.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,i.mdx)("strong",{parentName:"p"},"Sales")," > ",(0,i.mdx)("strong",{parentName:"p"},"Rate Limiting"),"."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1181px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/17d69ee58bc3bd0af5e074882be7df99/5530d/api-security-rate-limiting.webp 320w","/commerce-webapi/static/17d69ee58bc3bd0af5e074882be7df99/0c8fb/api-security-rate-limiting.webp 640w","/commerce-webapi/static/17d69ee58bc3bd0af5e074882be7df99/8866f/api-security-rate-limiting.webp 1181w"],sizes:"(max-width: 1181px) 100vw, 1181px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/17d69ee58bc3bd0af5e074882be7df99/dd4a7/api-security-rate-limiting.png 320w","/commerce-webapi/static/17d69ee58bc3bd0af5e074882be7df99/0f09e/api-security-rate-limiting.png 640w","/commerce-webapi/static/17d69ee58bc3bd0af5e074882be7df99/f6909/api-security-rate-limiting.png 1181w"],sizes:"(max-width: 1181px) 100vw, 1181px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/17d69ee58bc3bd0af5e074882be7df99/f6909/api-security-rate-limiting.png",alt:"Rate limiting section",title:"Rate limiting section",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"Use the following commands to enable and configure rate limiting:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Enable (",(0,i.mdx)("inlineCode",{parentName:"p"},"1"),") or disable (",(0,i.mdx)("inlineCode",{parentName:"p"},"0"),") rate limiting for placing orders:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ bin/magento config:set sales/backpressure/enabled 1\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Set the request limit per guest (IP address)."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ bin/magento config:set sales/backpressure/guest_limit 50\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Set the request limit for authenticated customers:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ bin/magento config:set sales/backpressure/limit 10\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Set the period of time (in seconds) for the request limit. Supported values ",(0,i.mdx)("inlineCode",{parentName:"p"},"60"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"3600"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"86400")," seconds. This time period is multiplied by three to calculate the timeout period:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ bin/magento config:set sales/backpressure/period 60\n")))),(0,i.mdx)("p",null,"The following scenario describes how rate limiting can be configured."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Anonymous users are limited to 50 orders (",(0,i.mdx)("inlineCode",{parentName:"li"},"sales/backpressure/guest_limit")," = ",(0,i.mdx)("inlineCode",{parentName:"li"},"50"),") from a single IP address within one minute (",(0,i.mdx)("inlineCode",{parentName:"li"},"sales/backpressure/period")," = ",(0,i.mdx)("inlineCode",{parentName:"li"},"60"),").  If they exceed the order limit, then they will have to wait three times the specified ",(0,i.mdx)("inlineCode",{parentName:"li"},"period")," of time (",(0,i.mdx)("inlineCode",{parentName:"li"},"180")," seconds) from their last request."),(0,i.mdx)("li",{parentName:"ul"},"If an authorized customers attempts to place more than ",(0,i.mdx)("inlineCode",{parentName:"li"},"10")," orders (",(0,i.mdx)("inlineCode",{parentName:"li"},"sales/backpressure/limit")," = ",(0,i.mdx)("inlineCode",{parentName:"li"},"10"),") within the ",(0,i.mdx)("inlineCode",{parentName:"li"},"period")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"60")," seconds, then the user will not be able to place an order for a period of ",(0,i.mdx)("inlineCode",{parentName:"li"},"180")," seconds.")),(0,i.mdx)("p",null,"If you need to check a configuration, use the following CLI command:"),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ bin/magento config:show | grep backpressure\n")),(0,i.mdx)("p",null,"Response:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"sales/backpressure/limit - 10\nsales/backpressure/guest_limit - 50\nsales/backpressure/period - 60\nsales/backpressure/enabled - 1\n")),(0,i.mdx)("h2",{id:"log-contents"},"Log contents"),(0,i.mdx)("p",null,"If rate limiting has been enabled for the payment information endpoint and the GraphQl mutation via the UI/CLI, but the Redis service connection for store log requests has not been configured in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/env.php")," file, then the rate-limiting will not apply. The behavior will be the same if this option is disabled, but the application logs (",(0,i.mdx)("inlineCode",{parentName:"p"},"<magento-root>/var/log/system.log"),") will contain the following message:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"...\n[2022-11-11T15:46:32.716679+00:00] main.ERROR: Backpressure sliding window not applied. Invalid request logger type:  [] []\n...\n[2022-11-11T15:46:37.730863+00:00] main.ERROR: Backpressure sliding window not applied. Invalid request logger type:  [] []\n...\n")),(0,i.mdx)("h2",{id:"example-http-responses"},"Example HTTP Responses"),(0,i.mdx)("p",null,"If rate limiting is applied to a REST request, then a response with HTTP status code ",(0,i.mdx)("inlineCode",{parentName:"p"},"429 - Too Many Requests")," will be generated."),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 429 Too Many Requests\n...\nPragma: no-cache\nCache-Control: no-store\n...\n{"message":"Too Many Requests","trace":null}\n')),(0,i.mdx)("p",null,"If rate limiting is applied to a GraphQl request, then a response with HTTP status code ",(0,i.mdx)("inlineCode",{parentName:"p"},"200 - Ok")," will be generated and all relevant information will be present in the response body."),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\n...\nPragma: no-cache\nCache-Control: max-age=0, must-revalidate, no-cache, no-store\n ...\n{\n    "errors":[\n        {\n            "message":"Too Many Requests",\n            "extensions":{"category":"graphql-too-many-requests"},\n             "locations":[\n                 {"line":2,"column":3}\n             ],\n             "path":["placeOrder"]\n        }\n    ],\n    "data":{"placeOrder":null}\n}\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-rate-limiting-md-b9c5ad1d3500defce94d.js.map