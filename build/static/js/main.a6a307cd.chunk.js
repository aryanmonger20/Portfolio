(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{18:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),i=s(9),n=s.n(i),r=(s(18),s(2)),l=s(3),o=s(5),j=s(4),d=s(7),h=s(10),b=s.n(h),m=(s(21),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=(this.props.data.description,this.props.data.address.city,this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)})));return Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{className:"current",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Skills"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(a.jsxs)("h6",{children:["A ",Object(a.jsx)("span",{children:t}),". ."]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:s})]})}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(a.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component)),O=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"twelve columns",children:[Object(a.jsx)("ul",{className:"social-links",children:e}),Object(a.jsx)("ul",{className:"copyright",children:Object(a.jsx)("li",{children:"Made with \u2764\ufe0f by Aryan"})})]}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),p=s(12),u=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(a.jsx)("div",{className:"columns portfolio-item",children:Object(a.jsx)("div",{className:"item-wrap",children:Object(a.jsxs)("a",{href:e.url,title:e.title,children:[Object(a.jsx)("img",{alt:e.title,src:t}),Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"portfolio-item-meta",children:[Object(a.jsx)("h5",{children:e.title}),Object(a.jsx)("p",{children:e.category})]})}),Object(a.jsx)("div",{className:"link-icon",children:Object(a.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(a.jsx)("div",{id:"card",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"twelve columns collapsed",children:[Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"My Profiles "})}),Object(a.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(c.Component),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=(this.props.data.address.street,this.props.data.address.city),i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,o=this.props.data.resumedownload;return Object(a.jsx)("section",{id:"about",children:Object(a.jsx)(p.a,{className:"p-0",fluid:!0,children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:t,alt:"Aryan's Profile Pic"})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:s}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"columns contact-details",children:[Object(a.jsx)("h2",{children:"Contact Details"}),Object(a.jsxs)("p",{className:"address",children:[Object(a.jsx)("span",{children:e}),Object(a.jsx)("br",{}),c," ",i,", ",n,Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:r}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:l})]})]}),Object(a.jsx)("div",{className:"columns download",children:Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:o,className:"button",children:[Object(a.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(c.Component),f=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{style:{width:e.level},className:t}),Object(a.jsx)("em",{children:e.name})]},e.name)}));return Object(a.jsx)("section",{id:"resume",children:Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h3",{children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Skills"})})})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:e}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"bars",children:Object(a.jsx)("ul",{className:"skills",children:t})})]})]})})}}]),s}(c.Component),v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.city,s=this.props.data.address.state,c=(this.props.data.address.zip,this.props.data.phone),i=(this.props.data.email,this.props.data.contactmessage);return Object(a.jsxs)("section",{id:"contact",children:[Object(a.jsxs)("div",{className:"row section-head",children:[Object(a.jsx)("div",{className:"two columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Get In Touch."})})}),Object(a.jsx)("div",{className:"ten columns",children:Object(a.jsx)("p",{className:"lead",children:i})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"eight columns",children:[Object(a.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(a.jsx)("span",{className:"required",children:"*"})]}),Object(a.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(a.jsx)("span",{className:"required",children:"*"})]}),Object(a.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(a.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(a.jsx)("span",{className:"required",children:"*"})]}),Object(a.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"submit",children:"Submit"}),Object(a.jsx)("span",{id:"image-loader",children:Object(a.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(a.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(a.jsxs)("div",{id:"message-success",children:[Object(a.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(a.jsx)("br",{})]})]}),Object(a.jsx)("aside",{className:"four columns footer-widgets",children:Object(a.jsxs)("div",{className:"widget widget_contact",children:[Object(a.jsx)("h4",{children:"Address and Phone"}),Object(a.jsxs)("p",{className:"address",children:[Object(a.jsx)("b",{children:e}),Object(a.jsx)("br",{}),t,", ",s," ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:c})]})]})})]})]})}}]),s}(c.Component),N=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(a.jsx)("div",{className:"columns portfolio-item",children:Object(a.jsx)("div",{className:"item-wrap",children:Object(a.jsxs)("a",{href:e.url,title:e.title,children:[Object(a.jsx)("img",{alt:e.title,src:t}),Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"portfolio-item-meta",children:[Object(a.jsx)("h5",{children:e.title}),Object(a.jsx)("p",{children:e.category})]})}),Object(a.jsx)("div",{className:"link-icon",children:Object(a.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(a.jsx)("section",{id:"portfolio",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"twelve columns collapsed",children:[Object(a.jsx)("h1",{children:"Check Out Some of My Works."}),Object(a.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(c.Component),g=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(l.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{data:this.state.resumeData.main}),Object(a.jsx)(x,{data:this.state.resumeData.main}),Object(a.jsx)(u,{data:this.state.resumeData.cards}),Object(a.jsx)(f,{data:this.state.resumeData.resume}),Object(a.jsx)(N,{data:this.state.resumeData.portfolio}),Object(a.jsx)(v,{data:this.state.resumeData.main}),Object(a.jsx)(O,{data:this.state.resumeData.main})]})}}]),s}(c.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.a6a307cd.chunk.js.map