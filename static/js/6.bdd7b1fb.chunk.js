(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{114:function(e,t,a){e.exports=a.p+"static/media/spons.4f96b4e8.svg"},115:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(20),s=a(22),r=a(21),i=a(23),c=a(0),o=a.n(c),m=a(52),d=a(89),u=a.n(d),h=(a(90),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={days:"-",hours:"-",mins:"-",seconds:"-",distance:"-"},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date("Aug 31, 2019 00:00:00").getTime(),a=setInterval(function(){var n=(new Date).getTime(),l=t-n,s=Math.floor(l/864e5),r=Math.floor(l%864e5/36e5),i=Math.floor(l%36e5/6e4),c=Math.floor(l%6e4/1e3);e.setState({days:s,hours:r,mins:i,seconds:c,distance:l}),l<0&&clearInterval(a)},1e3)}},{key:"render",value:function(){var e=o.a.createElement("div",{className:"countdown"},o.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.days,o.a.createElement("span",null,"Days")),o.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.hours,o.a.createElement("span",null,"Hours")),o.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.mins,o.a.createElement("span",null,"Minutes")),o.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.seconds,o.a.createElement("span",null,"Seconds")));return this.state.distance<0&&(e=null),o.a.createElement("section",{className:"intro"},o.a.createElement("div",{className:"container-fluid ctn-1"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-7 col-lg-7 banner-col"},o.a.createElement("div",null,o.a.createElement("div",{className:"banner-div"},o.a.createElement("img",{alt:"banner",className:"banner",src:u.a})),e)),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-5 col-lg-5 bulb-col"},o.a.createElement("p",{className:"bulb"},o.a.createElement("img",{alt:"bulb",className:"image-1",src:a(91)}))))))}}]),t}(c.Component)),p=(a(92),function(){return o.a.createElement("div",{className:"about"},o.a.createElement("div",{className:"container-fluid ctn-2"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},o.a.createElement("div",{className:"anim"},o.a.createElement("h2",{className:"heading-1"},"ABOUT US")),o.a.createElement("h3",{className:"heading-2"},"We Promote Startups"),o.a.createElement("p",{className:"text-5"},"The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come.Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas, funding mentoring, other mentorship programs, workshops to help them organize their strategy and frequent, highly interactive speaker sessions and lecture series.",o.a.createElement("br",null),o.a.createElement("br",null),"At E-Summit we aspire to create a m\xe9lange of eminent speakers who have proved themselves in diverse fields and are at the zenith of glory.E-Summit\u201918 will not just be a conclave of innovative minds and epistemic elocutionists, but it will be the place where ideas not only thrive but become the greatest revelations of the century.")),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center"},o.a.createElement("img",{src:a(93),alt:"tshirts",className:"fb-img"})))))}),E=(a(94),a(95)),g=a.n(E),f=function(){return o.a.createElement("div",{className:"vision"},o.a.createElement("div",{className:"container-fluid ctn-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-7"},o.a.createElement("h2",{className:"heading-5"},"Our Vision"),o.a.createElement("p",{className:"text-6"},"The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come. Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas.")),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-5 col3"},o.a.createElement("p",{className:"run"},o.a.createElement("img",{alt:"Running Man",className:"running-man",src:g.a}))))))},v=(a(96),a(97)),b=a.n(v),N=a(113),w=a(51),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).axios=Object(w.a)(),a.state={sponsors:[],loading:!0},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/sponsors/list/2018/").then(function(t){var a=t.data.data;console.log(a);for(var n=a.length-1;n>0;n--){var l=Math.floor(Math.random()*(n+1)),s=[a[l],a[n]];a[n]=s[0],a[l]=s[1]}e.setState({sponsors:a,loading:!1})})}},{key:"render",value:function(){console.log(this.state.sponsors);var e=this.state.sponsors.map(function(e){return o.a.createElement("div",{className:"col",key:e.id},o.a.createElement("div",{className:"cont",key:e.id},o.a.createElement("div",{className:"front shadow-lg p-3 mb-5 bg-white rounded"},o.a.createElement("img",{alt:e.name,className:"spons-Image",src:e.pic_url})),o.a.createElement("div",{className:"back shadow-lg p-3 mb-5 bg-white rounded"},o.a.createElement("div",{className:"inner"},o.a.createElement("h6",{style:{fontWeight:"800"}},e.name),o.a.createElement("p",{className:"ph-no"},e.contact),o.a.createElement("p",null,e.details),o.a.createElement("p",null,o.a.createElement("a",{className:"web",href:e.website},"Website"))))))});return o.a.createElement("div",{className:"spons"},o.a.createElement(N.Parallax,{blur:3,bgImage:a(114),bgImageAlt:"sponsors",strength:700},o.a.createElement(b.a,{dots:!0,infinite:!1,speed:500,slidesToShow:5,slidesToScroll:5,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},this.state.loading?o.a.createElement("h1",{className:"text-center text-white w-100 my-5"},"loading..."):e)))}}]),t}(c.Component),x=(a(115),function(){return o.a.createElement("div",{className:"container-fluid ctn-6"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-7"},o.a.createElement("div",{className:"embed-responsive embed-responsive-16by9 map"},o.a.createElement("iframe",{className:"embed-responsive-item",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5453983644497!2d81.60270025099706!3d21.249868185498716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde241e3e46d%3A0xf42216385880421e!2sEntrepreneurship+Cell!5e0!3m2!1sen!2sin!4v1561393367581!5m2!1sen!2sin",width:"600",height:"400",frameBorder:"0",allowFullScreen:!0}))),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-5",style:{textAlign:"center"}},o.a.createElement("h2",{style:{fontWeight:"800",borderBottom:"5px solid",borderRadius:"20px",marginBottom:"15px",marginTop:"30px",paddingBottom:"15px"}},"Contact Us"),o.a.createElement("h6",{style:{fontWeight:"600",marginBottom:"15px"}},"Leave a Message"),o.a.createElement("form",null,o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"Name",id:"visitor-name",required:!0,minLength:"5",maxLength:"30",placeholder:"Your Name"})),o.a.createElement("div",null,o.a.createElement("input",{id:"visitor-email",type:"email",required:!0,placeholder:"Your Email"})),o.a.createElement("div",null,o.a.createElement("textarea",{id:"message",required:!0,minLength:"30",maxLength:"100",rows:"5",placeholder:"Your Message"})),o.a.createElement("div",null,o.a.createElement("button",{className:"submit",type:"submit"},"SUBMIT"))))))}),k=a(49);a.d(t,"default",function(){return S});var S=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#adforcaModal_toggle").click()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null),o.a.createElement(h,null),o.a.createElement(p,null),o.a.createElement(f,null),o.a.createElement(y,null),o.a.createElement(x,null),o.a.createElement(k.a,null))}}]),t}(c.Component)},49:function(e,t,a){"use strict";var n=a(25),l=a(0),s=a.n(l),r=a(24),i=(a(50),a(53)),c=a.n(i);t.a=function(){return s.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},s.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/"},"Home")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/events"},"Events")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/speakers"},"Speakers")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/sponsors"},"Sponsors")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/team"},"Team"))),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},s.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:c.a}),s.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),s.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),s.a.createElement("p",{style:{fontSize:"40px"}},s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-instagram"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-linkedin"}))),s.a.createElement("div",null,s.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),s.a.createElement("div",null,s.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),s.a.createElement("div",null,s.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),s.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},50:function(e,t,a){},89:function(e,t,a){e.exports=a.p+"static/media/banner.7df14f25.png"},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/bulb.9ef1ec78.png"},92:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/tshirts.6e5745a8.png"},94:function(e,t,a){},95:function(e,t,a){e.exports=a.p+"static/media/run.d196960f.png"},96:function(e,t,a){}}]);
//# sourceMappingURL=6.bdd7b1fb.chunk.js.map