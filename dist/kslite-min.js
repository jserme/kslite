!function(a,b,c){function d(a){if(b.iS(t[e])){var c=a.split("@");s.lt_pkgs[c[0]]={url:c[1],charset:c[2]||s.charset}}else b.iO(a)&&b.mix(s.lt_pkgs,a)}if(a[b]===c){b=a[b]={};var e,f=a.document,g=Object.prototype.toString,h=function(a){return function(b){return g.call(b)==="[object "+a+"]"}},i=function(a,b,d,e){if(!b||!a)return a;d===c&&(d=!0);var f,g,h;if(e&&(h=e.length))for(f=0;h>f;f++)g=e[f],g in b&&(!d&&g in a||(a[g]=b[g]));else for(g in b)!d&&g in a||(a[g]=b[g]);return a},j="getElementsByTagName",k=f[j]("head")[0]||f.documentElement,l=0,m=2,n=4,o=/\.css(?:\?|$)/i,p=function(a,b){var c=/^(?:loaded|complete|undefined)$/;a.onreadystatechange=a.onload=a.onerror=function(){c.test(a.readyState)&&(a.onload=a.onerror=a.onreadystatechange=null,b())}},q=f[j]("script"),r="KSLITEcurrentScript";if(!a[r])for(e=0;e<q.length;e++)if(q[e].kslite){a[r]=q[e];break}a[r]=a[r]||q[q.length-1],b.Env={mods:{},fns:{},_loadQueue:{},_relies:{rq:{},sp:{}}},b.Config={debug:!1,base:a[r].src.split("/").slice(0,-1).join("/")+"/",timeout:10,charset:"gbk",lt_pkgs:{},timestamp:a.KSLITEtimestamp||"20130815073725"};var s=b.Config;/demo|debug|test/.test(location.href)&&(s.debug=!0),s.debug&&(s.timestamp=(new Date).getTime()+".js"),i(b,{version:"0.0.1",mix:i,log:function(c,d){var e="console";return s.debug&&a[e]&&a[e].log&&a[e][d&&a[e][d]?d:"log"](c),b},clone:function(a){var c,d,e=a;if(a&&((c=b.iA(a))||b.iPO(a))){e=c?[]:{};for(d in a)a.hasOwnProperty(d)&&(e[d]=b.clone(a[d]))}return e},extend:function(a,b,c,d){if(!b||!a)return a;var e=Object.prototype,f=function(a){function b(){}return b.prototype=a,new b},g=b.prototype,h=f(g);return a.prototype=h,h.constructor=a,a.superclass=g,b!==Object&&g.constructor===e.constructor&&(g.constructor=b),c&&i(h,c),d&&i(a,d),a},substitute:function(a,d,e,f){return b.iS(a)&&b.iPO(d)?a.replace(e||/\\?\{([^{}]+)\}/g,function(a,b){return"\\"===a.charAt(0)?a.slice(1):d[b]!==c?d[b]:f?a:""}):a},getScript:function(a,d,e,g){var h,i,j,l,m=o.test(a),n=f.createElement(m?"link":"script"),q=d;if(b.iPO(q)&&(d=q.success,h=q.error,i=q.timeout,e=q.charset,g||(g=q.expando)),e&&(n.charset=e),g)for(l in g)n.setAttribute(l,g[l]);return b.iF(d)&&(m?d.call(n):p(n,function(){j&&(clearTimeout(j),j=c),d.call(n)})),b.iF(h)&&(j=setTimeout(function(){j=c,h()},1e3*(i||s.timeout))),m?(n.rel="stylesheet",n.href=a):(n.async=!0,n.src=a),k.insertBefore(n,k.firstChild),n},iF:h("Function"),iA:h("Array"),iS:h("String"),iO:h("Object"),iPO:function(a){return a&&b.iO(a)&&!a.nodeType&&!a.setInterval},add:function(a,c,d){var e,f=b.Env.mods;if(!(f[a]&&f[a].status>l))return e={name:a,fn:c||null,status:m},b.iA(d)&&(d={requires:d}),i(e,d),f[a]=e,b},use:function(a,c){a=a.split(","),b.Env.mods,b._aMs(a,function(){c&&c(b)})},_aMs:function(a,c){var d,e={};for(d=0;d<a.length;d++)e[a[d]]={f:b._aM,a:a[d]};b.multiAsync(e,c)},_aM:function(a,c){function d(a){a.status!=n&&(a.fn&&a.fn(b,b.require(a.name),b._ns(a.name)),a.status=n),c()}function e(a){function b(a){return i[a]=i[a]||{},j[a]=j[a]||{},a}var c,d,e,f;for(d=b(a.name),c=0;c<a.requires.length;c++){e=b(a.requires[c]),i[d][e]=1,j[e][d]=1;for(f in j[d])i[f][e]=1,j[e][f]=1}}var f,g,h=b.Env.mods,i=b.Env._relies.rq,j=b.Env._relies.sp;if(f=h[a],f&&f.status!==l)if(g=f.requires,b.iA(g)&&g.length>0){if(e(f),i[a][a])throw new Error("Fatal Error,Loop Reqs:"+f.name);b._aMs(g,function(){d(f)})}else d(f);else f={name:a},b._lM(f,function(){b._aM(a,function(){d(h[a])})})},_lM:function(a,d){var e,f=b.Env._loadQueue,g=a.name,h=b.Env.mods;f[g]?(e=f[g],e.c?d():e.fns.push(d)):b._gPath(a,function(){f[g]={fns:[d],c:!1},h[g]||(h[g]={name:g,status:l}),b.getScript(a.fullpath,function(){var a,b=f[g];for(h[g].status===l&&(h[g].status=m),a=0;a<b.fns.length;a++)b.fns[a]();b.c=!0,b.fns=c},null,{mod_name:g})})},path:function(a,c){var d=a.split("-"),e=d[0],f=s.lt_pkgs,g=f[e];b.iS(g.url)&&c(g.url+d.join("/"),g)},_gPath:function(a,c){b.path(a.name,function(b,d){a.fullpath=b+".js?_t="+s.timestamp+".js",a.package=d,c()})},multiAsync:function(a,c){function d(){var b,d={};for(b in a){if(!a[b].c)return;d[b]=a[b].r}c(d)}var e,f=!1;for(e in a)f=!0;f||c({});for(e in a)!function(){var c=a[e];c.f.call(c.c||b,c.a,function(a){c.r=a,c.c=!0,d()})}()},_ns:function(a){var c,d=a.split("-"),e=b.Env.fns;for(c=0;c<d.length;c++)e[d[c]]=e[d[c]]||{},e=e[d[c]];return e},require:function(a){var c=b._ns(a);return c.exports=c.exports||{},c.exports},declare:function(){var a,c,d,e,f;for(a=0;a<arguments.length;a++)c=arguments[a],b.iS(c)?d=c:b.iA(c)?e=c:b.iF(c)&&(f=c);d&&b.add(d,function(a,b,c){f(a.require,b,c)},e)},provide:function(a,c){b.use(a.join(","),function(a){c(a.require)})}}),b.declare("kslite",[],function(a,c){c=b.mix(c,b,!0,["path","log","getScript","substitute","clone","mix","multiAsync","extend","iA","iF","iPO","iS"])}),b.provide(["kslite"],function(){b.require("kslite").log("kslite inited")});var t=a.KSLITEpkgPaths;if(a.KSLITEpkgPaths={push:function(a){d(a)}},t&&b.iA(t))for(e=0;e<t.length;e++)d(t[e]);var u="KSLITEonLoad",v=a[u];if(a[u]={push:function(a){a&&b.iF(a)&&a(b)}},v&&b.iA(v))for(e=0;e<v.length;e++)a[u].push(v[e])}}(this,"KSLITE");