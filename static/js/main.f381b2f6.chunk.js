(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":0,"name":"Vernon Dunham","company":"Qualcore","email":"vernon.dunham@qualcore.com"},{"id":1,"name":"Dori Neal","company":"Sunopia","email":"dori.neal@sunopia.com"},{"id":2,"name":"Rico Muldoon","company":"Airconix","email":"rico.muldoon@airconix.com"},{"id":3,"name":"Jason Neal","company":"Qualcore","email":"jason.neal@qualcore.com"},{"id":4,"name":"Rico Pettey","company":"Thermolock","email":"rico.pettey@thermolock.com"},{"id":5,"name":"Raymond Seabury","company":"Airconix","email":"raymond.seabury@airconix.com"},{"id":6,"name":"Dori Pettey","company":"Hivemind","email":"dori.pettey@hivemind.com"},{"id":7,"name":"Vernon Neal","company":"Qualcore","email":"vernon.neal@qualcore.com"},{"id":8,"name":"Jason Neal","company":"Qualcore","email":"jason.neal@qualcore.com"},{"id":9,"name":"Vernon Muldoon","company":"Airconix","email":"vernon.muldoon@airconix.com"},{"id":10,"name":"Vernon Seabury","company":"Hivemind","email":"vernon.seabury@hivemind.com"},{"id":11,"name":"Dori Neal","company":"Airconix","email":"dori.neal@airconix.com"},{"id":12,"name":"Raymond Pettey","company":"Airconix","email":"raymond.pettey@airconix.com"},{"id":13,"name":"Rico Muldoon","company":"Qualcore","email":"rico.muldoon@qualcore.com"},{"id":14,"name":"Vernon Seabury","company":"Sunopia","email":"vernon.seabury@sunopia.com"},{"id":15,"name":"Rico Pettey","company":"Airconix","email":"rico.pettey@airconix.com"},{"id":16,"name":"Jason Dunham","company":"Sunopia","email":"jason.dunham@sunopia.com"},{"id":17,"name":"Vernon Neal","company":"Qualcore","email":"vernon.neal@qualcore.com"},{"id":18,"name":"Jason Pettey","company":"Thermolock","email":"jason.pettey@thermolock.com"},{"id":19,"name":"Vernon Dunham","company":"Thermolock","email":"vernon.dunham@thermolock.com"}]')},,,function(e,n,a){e.exports=a(19)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var o=a(0),m=a.n(o),r=a(2),c=a.n(r),t=a(3),l=a(4),i=a(7),u=a(5),p=a(8);a(14);var s=function(e){return m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"content"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("strong",null,"Name:")," ",e.name),m.a.createElement("li",null,m.a.createElement("strong",null,"ID:")," ",e.id),m.a.createElement("li",null,m.a.createElement("strong",null,"Company:")," ",e.company),m.a.createElement("li",null,m.a.createElement("strong",null,"Email:")," ",e.email))),m.a.createElement("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove"},"\ud835\ude05"))};a(15);var d=function(e){return m.a.createElement("div",{className:"wrapper"},e.children)};a(16);var y=function(){return m.a.createElement("div",{class:"jumbotron jumbotron-fluid",className:"jumbotron"},m.a.createElement("div",{class:"container"},m.a.createElement("h1",{class:"display-4"},"Employee Directory")))};a(17);var v=function(){return m.a.createElement("div",{class:"row",className:"filterbar"},m.a.createElement("div",{class:"input-group-prepend"},m.a.createElement("input",{type:"text",id:"Name",class:"col",placeholder:"Type here to filter through employees"})))},E=a(6),h=function(e){function n(){var e,a;Object(t.a)(this,n);for(var o=arguments.length,m=new Array(o),r=0;r<o;r++)m[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(m)))).state={employees:E},a.removeEmployee=function(e){var n=a.state.employees.filter((function(n){return n.id!==e}));a.setState({employees:n})},a}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{class:"app"},m.a.createElement(y,null),m.a.createElement(v,null),m.a.createElement(d,null,this.state.employees.map((function(n){return m.a.createElement(s,{removeEmployee:e.removeEmployee,id:n.id,key:n.id,name:n.name,company:n.company,email:n.email})}))))}}]),n}(o.Component);a(18);c.a.render(m.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f381b2f6.chunk.js.map