(this["webpackJsonpflight-tracker"]=this["webpackJsonpflight-tracker"]||[]).push([[8],{207:function(t,e,a){"use strict";var n=a(18),c=a(208),i=a.n(c),r=a(1);e.a=function(t){return Object(r.jsxs)("div",{className:i.a.SingleInput,children:[t.icon,Object(r.jsx)("input",Object(n.a)({},t.inputProps))]})}},208:function(t,e,a){t.exports={SingleInput:"SingleInput_SingleInput__2bVGi"}},209:function(t,e,a){"use strict";var n=a(210),c=a.n(n),i=a(1);e.a=function(t){return Object(i.jsx)("div",{className:c.a.HeaderImage,children:Object(i.jsx)("h1",{children:t.name})})}},210:function(t,e,a){t.exports={HeaderImage:"HeaderImage_HeaderImage__IX1SF"}},218:function(t,e,a){"use strict";var n=a(12),c=a(219),i=a.n(c),r=a(5),s=a(47),o=a(1);e.a=function(t){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),c=a[0],u=a[1];Object(r.useEffect)((function(){u(t.isVisible)}),[t.isVisible]);var l=function(){u(!1),t.setIsVisible(!1)};return c&&Object(o.jsxs)("div",{className:i.a.Modal,children:[Object(o.jsx)("div",{className:i.a.Modal__backdrop,onClick:l}),Object(o.jsxs)("div",{className:i.a.Modal__container,children:[Object(o.jsx)("div",{className:i.a.Modal__close,onClick:l,children:Object(o.jsx)(s.h,{})}),t.children]})]})}},219:function(t,e,a){t.exports={Modal:"Modal_Modal__3HJGf",Modal__container:"Modal_Modal__container__-xCYu","slide-in":"Modal_slide-in__3urVD",Modal__backdrop:"Modal_Modal__backdrop___8gf1",Modal__close:"Modal_Modal__close__36u5U"}},252:function(t,e,a){t.exports={Account:"Account_Account__1XwFg"}},253:function(t,e,a){t.exports={AccountForm:"AccountForm_AccountForm__3QBAR",AccountForm__container:"AccountForm_AccountForm__container__3dSHz"}},254:function(t,e,a){t.exports={Avatar:"Avatar_Avatar__36FNG",Avatar__container:"Avatar_Avatar__container__15-kH",Avatar__image:"Avatar_Avatar__image__2cvPB"}},255:function(t,e,a){t.exports={AvatarOptions:"AvatarOptions_AvatarOptions__QHTsa",AvatarOptions__arrows:"AvatarOptions_AvatarOptions__arrows__2g3ai","AvatarOptions__arrows--right-arrow":"AvatarOptions_AvatarOptions__arrows--right-arrow__3b9UD",AvatarOptions__container:"AvatarOptions_AvatarOptions__container__18sjf",AvatarOptions__option:"AvatarOptions_AvatarOptions__option__2zJJg"}},266:function(t,e,a){"use strict";a.r(e);var n=a(252),c=a.n(n),i=a(209),r=a(12),s=a(253),o=a.n(s),u=a(207),l=a(37),j=a(5),d=a(13),b=a(57),_=a(14),O=a(1),v=function(t){var e=Object(d.b)(),a=Object(d.c)((function(t){return t.account.profileDetails.displayName})),n=Object(d.c)((function(t){return t.account.profileDetails.firstName})),c=Object(d.c)((function(t){return t.account.profileDetails.lastName})),i=Object(d.c)((function(t){return t.account.profileDetails.emailAddress})),s=Object(d.c)((function(t){return t.account.profileDetails.phoneNumber})),v=Object(d.c)((function(t){return t.account.profileDetails.id})),f=Object(j.useState)(""),h=Object(r.a)(f,2),p=h[0],m=h[1],x=Object(j.useState)(""),A=Object(r.a)(x,2),g=A[0],N=A[1],S=Object(j.useState)(""),w=Object(r.a)(S,2),M=w[0],I=w[1],k=Object(j.useState)(""),C=Object(r.a)(k,2),y=C[0],F=C[1],D=Object(j.useState)(""),P=Object(r.a)(D,2),V=P[0],H=P[1],L=Object(j.useState)(!1),q=Object(r.a)(L,2),J=q[0],E=q[1];Object(j.useEffect)((function(){m(a),N(n),I(c),F(i),H(s)}),[a,s,n,c,i]);return Object(O.jsxs)("form",{className:o.a.AccountForm,onSubmit:function(t){var a;t.preventDefault();var n=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(String(y).toLowerCase());n||(a="email address");var c=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gi.test(String(V));if(c||(a="phone number"),!n||!c)return e(_.b.showNotification({message:"Please enter a valid ".concat(a,"!"),success:!1})),void setTimeout((function(){e(_.b.hideNotification())}),3e3);J&&e(Object(b.c)({displayName:p,firstName:g,lastName:M,phoneNumber:V},{id:v,emailAddress:y},v)),J||(e(_.b.showNotification({message:"No changes have been made!",success:null})),setTimeout((function(){e(_.b.hideNotification())}),3e3)),E(!1)},children:[Object(O.jsx)("h4",{children:"profile details"}),Object(O.jsxs)("div",{className:o.a.AccountForm__container,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"email address"}),Object(O.jsx)(u.a,{inputProps:{type:"email",value:y,readOnly:!0,required:!0,disabled:!0,style:{cursor:"not-allowed"}}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"display name"}),Object(O.jsx)(u.a,{inputProps:{type:"text",value:p,onChange:function(t){m(t.target.value),E(!0)},required:!0,minLength:2}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"first name"}),Object(O.jsx)(u.a,{inputProps:{type:"text",value:g,onChange:function(t){N(t.target.value),E(!0)},required:!0,minLength:2}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"last name"}),Object(O.jsx)(u.a,{inputProps:{type:"text",value:M,onChange:function(t){I(t.target.value),E(!0)},required:!0,minLength:2}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"phone number"}),Object(O.jsx)(u.a,{inputProps:{type:"number",value:V,onChange:function(t){H(t.target.value),E(!0)},required:!0,minLength:10}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"\xa0"}),Object(O.jsx)(l.a,{children:"save changes"})]})]})]})},f=a(254),h=a.n(f),p=a(61),m=a(218),x=a(34),A=a(255),g=a.n(A),N=a(226),S=a(51),w=function(t){var e=Object(j.useState)(-4.2),a=Object(r.a)(e,2),n=a[0],c=a[1],i=Object(d.b)(),s=Object(d.c)((function(t){return t.main.userId}));return Object(O.jsxs)("div",{className:g.a.AvatarOptions,children:[Object(O.jsx)("div",{className:"".concat(g.a.AvatarOptions__arrows," ").concat(g.a["AvatarOptions__arrows--left-arrow"]),onClick:function(){Math.round(10*(n+Number.EPSILON))/10!==-4.2&&c((function(t){return t+100}))},children:Object(O.jsx)(N.a,{})}),Object(O.jsx)("div",{className:"".concat(g.a.AvatarOptions__arrows," ").concat(g.a["AvatarOptions__arrows--right-arrow"]),onClick:function(){Math.round(n+4.2)/100-2<-Math.ceil(S.a.length/4)||c((function(t){return t-100}))},children:Object(O.jsx)(N.b,{})}),Object(O.jsx)("div",{className:g.a.AvatarOptions__container,style:{transform:"translateX(".concat(n,"%)")},children:S.a.map((function(e){return Object(O.jsx)("div",{className:g.a.AvatarOptions__option,onClick:function(){return function(e){var a=S.a.find((function(t){return t.id===e}));t.onSetAvatar(a.avatar),i(Object(b.b)(e,s)),t.setIsVisible(!1)}(e.id)},children:e.avatar},e.id)}))})]})},M=function(t){var e=Object(j.useState)(!1),a=Object(r.a)(e,2),n=a[0],c=a[1],i=Object(j.useState)(null),s=Object(r.a)(i,2),o=s[0],u=s[1],_=Object(d.b)(),v=Object(d.c)((function(t){return t.account.avatar.id})),f=Object(d.c)((function(t){return t.main.userId}));Object(j.useEffect)((function(){var t=S.a.findIndex((function(t){return t.id===v}));0!==v?-1!==t&&u(S.a[t].avatar):u(Object(O.jsx)(x.d,{}))}),[v]);return Object(O.jsxs)("div",{className:h.a.Avatar,children:[Object(O.jsx)("h4",{children:"avatar"}),Object(O.jsxs)("form",{className:h.a.Avatar__container,onSubmit:function(t){t.preventDefault()},children:[Object(O.jsx)(m.a,{isVisible:n,setIsVisible:c,children:Object(O.jsx)(w,{onSetAvatar:u,setIsVisible:c})}),Object(O.jsx)("div",{className:h.a.Avatar__image,children:o}),Object(O.jsx)("div",{onClick:function(){c(!0)},children:Object(O.jsx)(l.a,{children:"Select Avatar"})}),Object(O.jsx)("div",{onClick:function(){u(Object(O.jsx)(x.d,{})),_(Object(b.b)(0,f))},children:Object(O.jsx)(p.a,{children:"Remove"})})]})]})};e.default=function(t){return Object(O.jsxs)("div",{className:c.a.Account,children:[Object(O.jsx)(i.a,{name:"account"}),Object(O.jsx)(M,{}),Object(O.jsx)(v,{})]})}}}]);
//# sourceMappingURL=8.1f381201.chunk.js.map