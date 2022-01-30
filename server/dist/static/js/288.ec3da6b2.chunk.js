"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[288],{7714:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(5861),a=t(7757),s=t.n(a),i=t(5969);function o(e,n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(n,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.auth().signInWithEmailAndPassword(n,t);case 3:e.next=16;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/wrong-password"!==e.t0.code){e.next=11;break}throw new Error("errWrongLogin");case 11:if("auth/user-not-found"!==e.t0.code){e.next=15;break}throw new Error("errUserNotFound");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}},2349:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(9439),a=t(3174),s=t(4483),i=t(2791),o=t(3360),u=t(6516),c=t(5987),l=t(1413),p=t(1694),d=t.n(p),f=t(6543),m=t(162),h=t(6882),x=i.createContext(null);x.displayName="InputGroupContext";var v=x,Z=t(184),w=["bsPrefix","size","hasValidation","className","as"],j=(0,f.Z)("input-group-text",{Component:"span"}),b=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.size,a=e.hasValidation,s=e.className,o=e.as,u=void 0===o?"div":o,p=(0,c.Z)(e,w);t=(0,m.vE)(t,"input-group");var f=(0,i.useMemo)((function(){return{}}),[]);return(0,Z.jsx)(v.Provider,{value:f,children:(0,Z.jsx)(u,(0,l.Z)((0,l.Z)({ref:n},p),{},{className:d()(s,t,r&&"".concat(t,"-").concat(r),a&&"has-validation")}))})}));b.displayName="InputGroup";var y=Object.assign(b,{Text:j,Radio:function(e){return(0,Z.jsx)(j,{children:(0,Z.jsx)(h.Z,(0,l.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,Z.jsx)(j,{children:(0,Z.jsx)(h.Z,(0,l.Z)({type:"checkbox"},e))})}}),k=t(3168);function g(e){var n=e.className,t=(0,i.useState)(!1),c=(0,r.Z)(t,2),l=c[0],p=c[1],d=(0,k.$)().t,f=l?"text":"password";return(0,Z.jsxs)(y,{className:n,children:[(0,Z.jsx)(u.Z.Control,{type:f,name:"password",placeholder:d("uiPassword")}),(0,Z.jsx)(o.Z,{onClick:function(){return p(!l)},children:(0,Z.jsx)(s.G,{icon:a.Mdf})})]})}},7288:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(5861),a=t(7757),s=t.n(a),i=t(7714);function o(e,n,t){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(n,t,r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/sign-up",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:t,password:r})});case 2:if((a=e.sent).ok){e.next=9;break}return e.t0=Error,e.next=7,a.text();case 7:throw e.t1=e.sent,new e.t0(e.t1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var c=t(2349),l=t(9466),p=t(3360),d=t(7022),f=t(6516),m=t(9e3),h=t(6907),x=t(3168),v=t(3504),Z=t(184);function w(){var e=(0,x.$)().t,n=function(){var n=(0,r.Z)(s().mark((function n(t){var r,a,u,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),t.stopPropagation(),r=t.target.elements,a=r.name,u=r.email,c=r.password,n.prev=3,n.next=6,o(a.value,u.value,c.value);case 6:return n.next=8,(0,i.Z)(u.value,c.value);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),alert(e(n.t0.message));case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsxs)(d.Z,{fluid:!0,children:[(0,Z.jsx)(h.ql,{children:(0,Z.jsx)("title",{children:e("pageSignUp")})}),(0,Z.jsxs)(f.Z,{className:"user-form ms-auto me-auto",onSubmit:n,children:[(0,Z.jsx)(f.Z.Control,{className:"mb-3",type:"text",name:"name",placeholder:e("uiName")}),(0,Z.jsx)(f.Z.Control,{className:"mb-3",type:"email",name:"email",placeholder:e("uiEmail")}),(0,Z.jsx)(c.Z,{className:"mb-3"}),(0,Z.jsx)(m.Z.Link,{className:"mb-3 p-0",as:v.rU,to:l.yD,children:e("uiSignInPrompt")}),(0,Z.jsx)(p.Z,{variant:"primary",type:"submit",children:e("uiSignUp")})]})]})}}}]);
//# sourceMappingURL=288.ec3da6b2.chunk.js.map