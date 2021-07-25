(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(7),c=n.n(o),i=(n(16),n(10)),s=n(3),u=n(22),l=n(8),d=n(2);var b=Object(d.a)("h1",{target:"e1fdugql1"})({name:"1x4tp7w",styles:"text-align:center;color:#000;font-weight:bold;font-size:40px"}),p=Object(d.a)("div",{target:"e1fdugql0"})({name:"1wmjdz4",styles:"width:400px;margin-left:auto;margin-right:auto;padding:20px 40px;background-color:rgb(47, 154, 255);box-shadow:1px 1px 3px rgba(0,0,0,0.5);border-radius:5px;&:hover{box-shadow:0px 0px 5px rgba(0,0,0,0.5);}"}),x=n(0);function j(e){var t=e.title,n=e.children;return Object(x.jsxs)(p,{children:[Object(x.jsx)(b,{children:t}),n]})}var m=Object(d.a)("label",{target:"e1ke3gip3"})({name:"8ugiu6",styles:"font-size:18px;font-weight:600;justify-content:center;padding-bottom:15px;margin:0"}),g=Object(d.a)("input",{target:"e1ke3gip2"})({name:"17usni6",styles:"display:flex;padding:6px;margin-bottom:20px;border-radius:5px;min-width:300px;cursor:pointer;box-shadow:rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;&:focus{border:2px solid #eee;outline:none;}"}),h=Object(d.a)("button",{target:"e1ke3gip1"})({name:"10v48yb",styles:"background-color:#fff;outline:none;padding:6px 8px;font-size:12px;line-height:12px;text-transform:uppercase;cursor:pointer;border-radius:5px;border:1px solid black;&:hover{box-shadow:0 0 20px rgba(50, 50, 93, 0.25);background:blue;}"}),f=Object(d.a)("span",{target:"e1ke3gip0"})({name:"uz0u9z",styles:"font-size:20px;font-weight:400;margin-bottom:7px"});var O=Object(d.a)("p",{target:"e6ah3x30"})({name:"2pg1ps",styles:"font-size:18px"});function v(e){var t=e.value,n=e.onChange;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{children:"Find contact by name"}),Object(x.jsx)(g,{type:"text",name:"name",placeholder:"Name to search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:n,value:t,required:!0})]})}function y(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(s.a)(n,2),o=a[0],c=a[1],i=Object(r.useState)(""),l=Object(s.a)(i,2),d=l[0],b=l[1],p=Object(u.a)(),j=Object(u.a)(),O=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":c(r);break;case"number":b(r);break;default:return}},v=function(){c(""),b("")};return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o,d),v()},children:[Object(x.jsxs)(m,{children:[Object(x.jsx)(f,{htmlFor:j,children:"Name"}),Object(x.jsx)(g,{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O,id:p,value:o})]}),Object(x.jsxs)(m,{children:[Object(x.jsx)(f,{htmlFor:j,children:"Number"}),Object(x.jsx)(g,{type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O,value:d,id:p})]}),Object(x.jsx)(h,{type:"submit",disabled:!o||!d,children:"Add contact"})]})}var w=Object(d.a)("ul",{target:"euflr2h3"})({name:"1ft8jc7",styles:"width:300px;padding:0"}),k=Object(d.a)("li",{target:"euflr2h2"})({name:"15w3yam",styles:"display:flex;text-align:center;align-items:center;justify-content:space-around"}),z=Object(d.a)("p",{target:"euflr2h1"})({name:"himm4n",styles:"font-size:18px;font-weight:500"}),C=Object(d.a)("bytton",{target:"euflr2h0"})({name:"1a4e73a",styles:"background-color:#fff;cursor:pointer;border-radius:5px;border:1px solid black;cursor:pointer;&:hover{box-shadow:0 0 20px rgba(50, 50, 93, 0.25);background:blue;}"});function S(e){var t=e.contacts,n=e.onDeleteContact;return Object(x.jsx)(w,{children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(x.jsxs)(k,{children:[Object(x.jsxs)(z,{children:[r,":",a]}),Object(x.jsx)(C,{onClick:function(){return n(t)},children:"Delete"})]},t)}))})}function A(){var e=Object(r.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:l})),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),c=Object(s.a)(o,2),d=c[0],b=c[1],p=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(p.current){var e=JSON.parse(localStorage.getItem("contacts"));return e&&a(e),void(p.current=!1)}localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(x.jsxs)(j,{title:"Phonebook",children:[Object(x.jsx)(y,{onSubmit:function(e,t){var r={id:Object(u.a)(),name:e,number:t};n.some((function(t){return t.name===e}))?alert("".concat(e," is already in the contacts.")):a((function(e){return[r].concat(Object(i.a)(e))}))}}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(v,{value:d,onChange:function(e){b(e.currentTarget.value)}}),n.length>0&&Object(x.jsx)(S,{contacts:n.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})),onDeleteContact:function(e){a(n.filter((function(t){return t.id!==e})))}})]})}c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.500263ec.chunk.js.map