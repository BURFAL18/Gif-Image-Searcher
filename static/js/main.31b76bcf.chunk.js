(this["webpackJsonpgif-image-searcher"]=this["webpackJsonpgif-image-searcher"]||[]).push([[0],{22:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/nasa_bg.1d801dd5.jpg"},31:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),s=a(9),i=a.n(s),o=a(24),m=a(2),u=a(3),d=a(5),p=a(4),h=a(6),f=a.n(h),g=f.a.create({baseURL:"https://pixabay.com/api/"}),b=f.a.create({baseURL:"https://api.tenor.com/v1"}),E=(a(22),function(e){var t=e.results.map((function(e){return r.a.createElement("li",{className:"image-grid__item",key:e.id},r.a.createElement("a",{className:"grid-item"},r.a.createElement("div",{className:"grid-item__image",style:{backgroundImage:"url(".concat(e.largeImageURL,")")}})))}));return r.a.createElement("ul",{className:"image-grid"},t)}),v=a(25),y=a.n(v),k=function(e){var t=e.results.map((function(e){return r.a.createElement("li",{className:"image-grid__item",key:e.id},r.a.createElement("a",{className:"grid-item"},r.a.createElement("div",{className:"grid-item__image",key:e.id},r.a.createElement(y.a,{gif:e.media[0].mediumgif.url,still:e.media[0].mediumgif.preview}))))}));return r.a.createElement("ul",{className:"image-grid"},t)},w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:"",searchType:"IMAGES",index:0},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term,e.state.searchType)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex container mt-4"},r.a.createElement("form",{class:"input-group",onSubmit:this.onFormSubmit},r.a.createElement("input",{type:"text",placeholder:"Type something..",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})},class:"form-control mr-lg-2","aria-label":"Search"}),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.searchType),r.a.createElement("div",{class:"dropdown-menu"},r.a.createElement("a",{class:"dropdown-item ".concat(0===this.state.index?"active":""),onClick:function(){return e.setState({index:0,searchType:"IMAGES"})}},"Images"),r.a.createElement("a",{class:"dropdown-item ".concat(1===this.state.index?"active":""),onClick:function(){return e.setState({index:1,searchType:"GIFS"})},onSubmit:this.props.onSubmit},"Gifs"))),r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}))))}}]),a}(r.a.Component),S=a(26),x={backgroundImage:"url(".concat(a.n(S).a,")"),backgroundSize:"cover",backgroundPosition:"fixed"},j={color:"white"},N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar justify-content-end"},r.a.createElement("i",{className:"fas fa-moon",onClick:this.props.themeToggler})),r.a.createElement("div",{style:{paddingBottom:"2rem"}},r.a.createElement("div",{class:"jumbotron jumbotron-fluid",style:x},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{class:"display-4",style:j},"What do you want to search?"),r.a.createElement("p",{class:"lead"},r.a.createElement(w,{onSubmit:this.props.onSubmit}))))))}}]),a}(r.a.Component),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"text-center"},r.a.createElement("div",{className:"icon"},r.a.createElement("a",{href:"https://www.linkedin.com/company/Brijesh-Burfal/"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x mx-3  "})),r.a.createElement("a",{href:"https://www.facebook.com//"},r.a.createElement("i",{className:"fab fa-facebook fa-2x mx-3"})),r.a.createElement("a",{href:"https://twitter.com/BrijeshBurfal"},r.a.createElement("i",{className:"fab fa-twitter fa-2x mx-3"})),r.a.createElement("a",{href:"https://www.instagram.com//"},r.a.createElement("i",{className:"fab fa-instagram fa-2x fa-fw"}))),r.a.createElement("p",null,"Copyrights \xa9 2021 All Rights Reserved by Brijesh Burfal")))},O=a(7),F=a(27);function I(){var e=Object(F.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n  "]);return I=function(){return e},e}var B=Object(O.b)(I(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),C={body:"#FFF",text:"#363537",toggleBorder:"#FFF",background:"#363537"},T={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid nav_bg"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"GIS"),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#"},"About US")),r.a.createElement("li",{class:"nav-item dropdown"},r.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"More Projects"),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("a",{class:"dropdown-item",href:"https://burfal18.github.io/Atsuko-Store/"},"ATSUKO : CLOTH SHOP"),r.a.createElement("a",{class:"dropdown-item",href:"https://github.com/BURFAL18/BitPrice/"},"BIT COIN PRICE APP"))))))))},_=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={results:[],type:"IMAGES",theme:"light"},e.themeToggler=function(){"light"===e.state.theme?e.setState({theme:"dark"}):e.setState({theme:"light"})},e.onSearchSubmit=function(){var t=Object(o.a)(i.a.mark((function t(a){var n,r,c=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=c.length>1&&void 0!==c[1]?c[1]:"IMAGES",r=[],"IMAGES"!==n){t.next=9;break}return t.next=5,g.get("",{params:{key:"18789879-231187672e9da4d0fc075ff91",q:a,per_page:50}});case 5:r=t.sent,e.setState({results:r.data.hits,type:n}),t.next=13;break;case 9:return t.next=11,b.get("/search",{params:{key:"MDCWA8LM91BG",q:a}});case 11:r=t.sent,e.setState({results:r.data.results,type:n});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"renderContent",value:function(){return"IMAGES"===this.state.type?r.a.createElement("div",null,r.a.createElement(E,{results:this.state.results})):r.a.createElement("div",null,r.a.createElement(k,{results:this.state.results}))}},{key:"render",value:function(){return r.a.createElement(O.a,{theme:"light"===this.state.theme?C:T},r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(M,null),r.a.createElement("div",null,r.a.createElement(N,{onSubmit:this.onSearchSubmit,themeToggler:this.themeToggler}),this.renderContent())),r.a.createElement(A,null))}}]),a}(r.a.Component);a(58);l.a.render(r.a.createElement(_,null),document.querySelector("#root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.31b76bcf.chunk.js.map