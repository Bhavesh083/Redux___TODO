(this.webpackJsonpredux__todo=this.webpackJsonpredux__todo||[]).push([[0],{19:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(6),a=c.n(i),r=c(14),l=(c(19),function(e){return{type:"Del",lists:{id:e}}}),d=c(3),u=c(1);var j=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.lists})),c=Object(d.c)((function(e){return e.cList})),n=Object(s.useState)(""),i=Object(r.a)(n,2),a=i[0],j=i[1],o=Object(s.useRef)(null);return Object(s.useEffect)((function(){o.current.focus()}),[]),Object(u.jsxs)("div",{className:"bdy",children:[Object(u.jsxs)("div",{className:"addInp",children:[Object(u.jsx)("h3",{children:"Redux TO-DO"}),Object(u.jsxs)("div",{className:"inpadd",children:[Object(u.jsx)("input",{ref:o,type:"text",placeholder:"Enter....",onChange:function(e){return function(e){j(e.target.value)}(e)}}),Object(u.jsx)("button",{onClick:function(t){return function(t){if(t.preventDefault(),""!==a){var c={id:Date.now(),isCheck:!1,value:a};e(function(e,t,c){return{type:"Add",lists:{id:e,isCheck:t,value:c}}}(c.id,c.isCheck,c.value))}}(t)},children:Object(u.jsx)("i",{className:"fas fa-plus"})})]})]}),Object(u.jsxs)("div",{className:"unfin",children:[Object(u.jsx)("span",{children:"TO-DO"}),t.map((function(t){return Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("span",{className:"unfsp",children:t.value}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return c=t.id,void e(l(c));var c},children:Object(u.jsx)("i",{className:"far fa-trash-alt"})}),Object(u.jsx)("button",{onClick:function(){return c=t.id,s=t.isCheck,n=t.value,e(l(c)),void e(function(e,t,c){return{type:"Cadd",lists:{id:e,isCheck:t,value:c}}}(c,s,n));var c,s,n},children:Object(u.jsx)("i",{className:"fas fa-check"})})]})]},t.id)}))]}),Object(u.jsxs)("div",{className:"fin",children:[Object(u.jsx)("span",{children:"Completed"}),c.map((function(t){return Object(u.jsxs)("div",{className:"findiv",children:[Object(u.jsx)("span",{children:t.value}),Object(u.jsx)("button",{onClick:function(){return c=t.id,void e({type:"Cdel",lists:{id:c}});var c},children:Object(u.jsx)("i",{className:"far fa-trash-alt"})})]},t.id)}))]})]})},o=c(8),b=c(5),O=c(2),f={lists:[],cList:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add":return Object(O.a)(Object(O.a)({},e),{},{lists:[].concat(Object(b.a)(e.lists),[t.lists])});case"Cadd":return console.log(t.lists),Object(O.a)(Object(O.a)({},e),{},{cList:[].concat(Object(b.a)(e.cList),[t.lists])});case"Del":var c=e.lists,s=e.lists.findIndex((function(e){return e.id===t.lists.id}));return s>=0&&c.splice(s,1),Object(O.a)(Object(O.a)({},e),{},{lists:Object(b.a)(c)});case"Cdel":var n=e.cList,i=e.cList.findIndex((function(e){return e.id===t.lists.id}));return i>=0&&n.splice(i,1),Object(O.a)(Object(O.a)({},e),{},{cList:Object(b.a)(n)});default:return e}},v=Object(o.b)(h);a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d.a,{store:v,children:Object(u.jsx)(j,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.67699416.chunk.js.map