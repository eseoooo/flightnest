(this["webpackJsonpflight-tracker"]=this["webpackJsonpflight-tracker"]||[]).push([[11],{207:function(e,t,n){"use strict";var i=n(18),a=n(208),s=n.n(a),c=n(1);t.a=function(e){return Object(c.jsxs)("div",{className:s.a.SingleInput,children:[e.icon,Object(c.jsx)("input",Object(i.a)({},e.inputProps))]})}},208:function(e,t,n){e.exports={SingleInput:"SingleInput_SingleInput__2bVGi"}},227:function(e,t,n){e.exports={SignUp:"SignUp_SignUp__9fvtx",SignUp__image:"SignUp_SignUp__image__3QuvN",SignUp__form:"SignUp_SignUp__form__1hGKa",active:"SignUp_active__1oyBY"}},260:function(e,t,n){"use strict";n.r(t);var i=n(12),a=n(227),s=n.n(a),c=n(41),r=n.n(c),j=n(207),u=n(37),o=n(26),d=n(15),l=n(5),b=n(58),h=n(14),p=n(48),g=n(13),O=n(1);t.default=function(e){var t=Object(g.b)(),n=Object(d.g)(),a=Object(l.useState)(""),c=Object(i.a)(a,2),v=c[0],m=c[1],x=Object(l.useState)(""),f=Object(i.a)(x,2),S=f[0],_=f[1],U=Object(l.useState)(""),y=Object(i.a)(U,2),N=y[0],P=y[1],w=Object(l.useState)(""),C=Object(i.a)(w,2),L=C[0],k=C[1],q=Object(l.useState)(""),I=Object(i.a)(q,2),D=I[0],A=I[1],F=Object(l.useState)(""),G=Object(i.a)(F,2),J=G[0],T=G[1];return r.a.createPortal(Object(O.jsxs)("div",{className:s.a.SignUp,children:[Object(O.jsxs)("div",{className:s.a.SignUp__image,children:[Object(O.jsx)("div",{children:Object(O.jsx)(b.a,{})}),Object(O.jsxs)("h1",{children:["Discover the cheapest ",Object(O.jsx)("br",{}),"flights. Register today!"]})]}),Object(O.jsxs)("div",{className:s.a.SignUp__form,children:[Object(O.jsx)("h2",{children:"Sign up to Flightnest"}),Object(O.jsxs)("form",{onSubmit:function(e){var i;e.preventDefault();var a=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(String(L).toLowerCase());a||(i="email address");var s=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gi.test(String(D));if(a||(i="phone number"),!a||!s)return t(h.b.showNotification({message:"Please enter a valid ".concat(i,"!"),success:!1})),void setTimeout((function(){t(h.b.hideNotification())}),3e3);var c={avatar:{id:0},bookmarks:"[]",profileDetails:{displayName:v,emailAddress:L,password:J,firstName:S,lastName:N,phoneNumber:D}};t(Object(p.a)(c)),setTimeout((function(){n.replace("./sign-in")}),8e3)},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"First name"}),Object(O.jsx)(j.a,{inputProps:{type:"text",required:!0,minLength:2,value:S,onChange:function(e){_(e.target.value)}}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Last name"}),Object(O.jsx)(j.a,{inputProps:{type:"text",required:!0,minLength:2,value:N,onChange:function(e){P(e.target.value)}}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Display name"}),Object(O.jsx)(j.a,{inputProps:{type:"text",required:!0,minLength:2,value:v,onChange:function(e){m(e.target.value)}}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Phone number"}),Object(O.jsx)(j.a,{inputProps:{type:"number",required:!0,minLength:10,value:D,onChange:function(e){A(e.target.value)}}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Email address"}),Object(O.jsx)(j.a,{inputProps:{type:"email",required:!0,value:L,onChange:function(e){k(e.target.value)}}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Password"}),Object(O.jsx)(j.a,{inputProps:{type:"password",required:!0,minLength:6,placeholder:"6+ characters",value:J,onChange:function(e){T(e.target.value)}}})]}),Object(O.jsx)(u.a,{children:"Create Account"}),Object(O.jsxs)("div",{children:["Already a member? ",Object(O.jsx)(o.b,{to:"/sign-in",children:"Sign In"})]})]})]})]}),document.body)}}}]);
//# sourceMappingURL=11.9dfbd3a7.chunk.js.map