(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{24:function(e,t,a){e.exports=a(79)},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=a(11),s=a(7),i=a.n(s),u=a(9),m=a(3),d=a(4),h=a(6),p=a(5),g=a(22),f=a.n(g),y=a(23),v=a.n(y),b=function(e){var t=e.type,a=void 0===t?"button":t,n=e.buttonText,o=e.clsnButton,c=e.clsnButtonName,l=e.handleClick;return r.a.createElement("button",{type:a,className:o,onClick:l},r.a.createElement("span",{className:c},n))},E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={input:""},e.handleInput=function(t){e.setState({input:t.target.value})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:function(t){t.preventDefault(),e.props.handleSubmit(e.state.input)}},r.a.createElement(b,{type:"submit",buttonText:"Search",clsnButton:"SearchForm-button",clsnButtonName:"SearchForm-button-label"}),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:this.state.query,onChange:this.handleInput})))}}]),a}(n.Component),k=a(10),w=a.n(k);w.a.defaults.baseURL="https://pixabay.com/api/";var N=function(e,t){return w.a.get("?key=".concat("16728948-c39c5dcc25e25d8fd8d200637","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12"))},S=function(e){var t=e.children,a=e.handleClick,n=e.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},t),!n&&r.a.createElement(b,{buttonText:"Load More",clsnButton:"Gallery-button",handleClick:a}))},C=function(e){var t=e.src,a=e.alt,n=e.srcLarge,o=e.handleImageClick;return r.a.createElement("li",{className:"ImageGalleryItem",onClick:o},r.a.createElement("img",{src:t,alt:a,"data-large":n,className:"ImageGalleryItem-image"}))},O=(a(76),a(77),a(78),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){return e.props.handleCloseModal(t)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Overlay","data-type":"overlay",onClick:this.props.handleCloseModal},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:this.props.src,alt:this.props.alt})))}}]),a}(n.Component)),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"ocean",pageNumber:1,images:[],loading:!1,largeUrl:null,alt:null},e.searchQuery=Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.state.query,1);case 2:a=t.sent,n=a.data.hits,e.setState({loading:!1,images:n});case 5:case"end":return t.stop()}}),t)}))),e.loadMore=Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.state.query,e.state.pageNumber);case 2:a=t.sent,n=a.data.hits,e.setState((function(e){return{loading:!1,images:[].concat(Object(l.a)(e.images),Object(l.a)(n))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 6:case"end":return t.stop()}}),t)}))),e.getQuery=function(t){e.setState({query:t})},e.increasePage=function(){e.setState({pageNumber:e.state.pageNumber+1})},e.openModal=function(t){e.setState({largeUrl:t.target.dataset.large,alt:t.target.alt})},e.closeModal=function(t){("overlay"===t.target.dataset.type||"Escape"===t.code)&&e.setState({largeUrl:null})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.searchQuery("ocean",1)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,r=a.pageNumber;return t.query!==n?(this.setState({loading:!0}),void this.searchQuery()):t.pageNumber!==r?(this.setState({loading:!0}),void this.loadMore()):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},this.state.largeUrl&&r.a.createElement(O,{src:this.state.largeUrl,alt:this.state.alt,handleCloseModal:this.closeModal}),r.a.createElement(E,{handleSubmit:this.getQuery}),this.state.images.length>0&&r.a.createElement(S,{handleClick:this.increasePage,isLoading:this.state.loading},this.state.loading?r.a.createElement(v.a,{className:"loader",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):this.state.images.map((function(t){return r.a.createElement(C,{key:f.a.generate(),src:t.webformatURL,alt:t.tags,srcLarge:t.largeImageURL,handleImageClick:e.openModal})}))))}}]),a}(n.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.9f103569.chunk.js.map