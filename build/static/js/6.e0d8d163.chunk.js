(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[6],{325:function(e,t,n){"use strict";var a=n(696),r=Object(a.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=r},326:function(e,t,n){"use strict";var a=n(15),r=n(51),i=n(3),c=(n(0),n(182)),s=n(80),o=n(1),l=["children"],d=Object(c.a)((function(e){var t;return{card:(t={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},Object(i.a)(t,e.breakpoints.down("sm"),{margin:"20px"}),Object(i.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),t),content:Object(i.a)({padding:"".concat(e.spacing(5)," !important")},e.breakpoints.down("lg"),{padding:"".concat(e.spacing(3)," !important")})}}));t.a=function(e){var t=e.children,n=Object(r.a)(e,l),i=d();return Object(o.jsx)(s.a,Object(a.a)(Object(a.a)({className:i.card,contentClass:i.content},n),{},{children:t}))}},337:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},338:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.a57081bd.svg"},339:function(e,t,n){"use strict";n(0);var a=n(232),r=n(116),i=n(264),c=n(1);t.a=function(){return Object(c.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},699:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(34),c=n(21),s=n(236),o=n(247),l=n(232),d=n(116),j=n(138),b=n(325),u=n(326),m=n(120),h=n(99),x=n.n(h),p=n(119),O=n(12),g=n(15),f=n(3),v=n(28),w=n(182),y=n(253),k=n(186),C=n(241),S=n(261),I=n(246),E=n(185),N=n(262),R=n(187),W=n(268),z=n(269),B=n(697),D=n(404),P=n(403),A=n(337),M=n(338),q=n(65),F=n(124),G=n.n(F),H=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t},T=n(401),V=n.n(T),J=n(402),_=n.n(J),L=n(1),U=Object(w.a)((function(e){return{redButton:Object(f.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:"".concat(e.palette.grey[100]," !important"),color:"".concat(e.palette.grey[900],"!important"),fontWeight:500},loginIcon:Object(f.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(g.a)({},e.typography.customInput)}})),Z=function(e){var t=Object.assign({},e),n=U(),c=Object(A.a)(),l=Object(s.a)((function(e){return e.breakpoints.down("sm")})),b=Object(v.c)((function(e){return e.customization})),u=r.a.useState(!1),m=Object(O.a)(u,2),h=m[0],f=m[1],w=r.a.useState(!0),F=Object(O.a)(w,2),T=F[0],J=F[1],Z=r.a.useState(0),$=Object(O.a)(Z,2),K=$[0],Q=$[1],X=r.a.useState(""),Y=Object(O.a)(X,2),ee=Y[0],te=Y[1],ne=function(){var e=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("Register");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){f(!h)},re=function(e){e.preventDefault()},ie=function(e){var t,n=H(e);Q(n),te((t=n)<2?{label:"Poor",color:G.a.errorMain}:t<3?{label:"Weak",color:G.a.warningDark}:t<4?{label:"Normal",color:G.a.orangeMain}:t<5?{label:"Good",color:G.a.successMain}:t<6&&{label:"Strong",color:G.a.successDark})};return Object(a.useEffect)((function(){ie("123456")}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(o.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(q.a,{children:Object(L.jsxs)(y.a,{disableElevation:!0,fullWidth:!0,className:n.redButton,onClick:ne,size:"large",variant:"contained",children:[Object(L.jsx)("img",{src:M.a,alt:"google",width:"20px",sx:{mr:{xs:1,sm:2}},className:n.loginIcon})," Sign up with Google"]})})}),Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsxs)(k.a,{sx:{alignItems:"center",display:"flex"},children:[Object(L.jsx)(j.a,{className:n.signDivider,orientation:"horizontal"}),Object(L.jsx)(q.a,{children:Object(L.jsx)(y.a,{variant:"outlined",className:n.signText,sx:{borderRadius:"".concat(b.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"})}),Object(L.jsx)(j.a,{className:n.signDivider,orientation:"horizontal"})]})}),Object(L.jsx)(o.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(L.jsx)(k.a,{sx:{mb:2},children:Object(L.jsx)(d.a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),Object(L.jsx)(P.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:D.a().shape({email:D.b().email("Must be a valid email").max(255).required("Email is required"),password:D.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(p.a)(x.a.mark((function e(t,n){var a,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,r=n.setStatus,i=n.setSubmitting;try{c.current&&(r({success:!0}),i(!1))}catch(t){console.error(t),c.current&&(r({success:!1}),a({submit:t.message}),i(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,r=e.handleBlur,c=e.handleChange,s=e.handleSubmit,j=e.isSubmitting,b=e.touched,u=e.values;return Object(L.jsxs)("form",Object(g.a)(Object(g.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(L.jsxs)(o.a,{container:!0,spacing:l?0:2,children:[Object(L.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(C.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"Joseph",className:n.loginInput})}),Object(L.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(C.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"Doe",className:n.loginInput})})]}),Object(L.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.email&&a.email),className:n.loginInput,children:[Object(L.jsx)(I.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(L.jsx)(E.a,{id:"outlined-adornment-email-register",type:"email",value:u.email,name:"email",onBlur:r,onChange:c,inputProps:{classes:{notchedOutline:n.notchedOutline}}}),b.email&&a.email&&Object(L.jsxs)(N.a,{error:!0,id:"standard-weight-helper-text--register",children:[" ",a.email," "]})]}),Object(L.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.password&&a.password),className:n.loginInput,children:[Object(L.jsx)(I.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(L.jsx)(E.a,{id:"outlined-adornment-password-register",type:h?"text":"password",value:u.password,name:"password",label:"Password",onBlur:r,onChange:function(e){c(e),ie(e.target.value)},endAdornment:Object(L.jsx)(R.a,{position:"end",children:Object(L.jsx)(W.a,{"aria-label":"toggle password visibility",onClick:ae,onMouseDown:re,edge:"end",children:h?Object(L.jsx)(V.a,{}):Object(L.jsx)(_.a,{})})}),inputProps:{classes:{notchedOutline:n.notchedOutline}}}),b.password&&a.password&&Object(L.jsxs)(N.a,{error:!0,id:"standard-weight-helper-text-password-register",children:[" ",a.password," "]})]}),0!==K&&Object(L.jsx)(S.a,{fullWidth:!0,children:Object(L.jsx)(k.a,{sx:{mb:2},children:Object(L.jsxs)(o.a,{container:!0,spacing:2,alignItems:"center",children:[Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)(k.a,{backgroundColor:ee.color,sx:{width:85,height:8,borderRadius:"7px"}})}),Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)(d.a,{variant:"subtitle1",fontSize:"0.75rem",children:ee.label})})]})})}),Object(L.jsx)(o.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)(z.a,{control:Object(L.jsx)(B.a,{checked:T,onChange:function(e){return J(e.target.checked)},name:"checked",color:"primary"}),label:Object(L.jsxs)(d.a,{variant:"subtitle1",children:["Agree with \xa0",Object(L.jsx)(d.a,{variant:"subtitle1",component:i.b,to:"#",children:"Terms & Condition."})]})})})}),a.submit&&Object(L.jsx)(k.a,{sx:{mt:3},children:Object(L.jsx)(N.a,{error:!0,children:a.submit})}),Object(L.jsx)(k.a,{sx:{mt:2},children:Object(L.jsx)(q.a,{children:Object(L.jsx)(y.a,{disableElevation:!0,disabled:j,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})]})},$=n(339);t.default=function(){var e=Object(c.a)(),t=Object(s.a)(e.breakpoints.down("sm"));return Object(L.jsx)(b.a,{children:Object(L.jsxs)(o.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(o.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(L.jsx)(o.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(L.jsx)(u.a,{children:Object(L.jsxs)(o.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(L.jsx)(o.a,{item:!0,sx:{mb:3},children:Object(L.jsx)(i.b,{to:"#",children:Object(L.jsx)(m.a,{})})}),Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(L.jsx)(o.a,{item:!0,children:Object(L.jsxs)(l.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(L.jsx)(d.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),Object(L.jsx)(d.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"",children:"Enter your credentials to continue"})]})})})}),Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(Z,{})}),Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(j.a,{})}),Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(L.jsx)(d.a,{component:i.b,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Have an account?"})})})]})})})})}),Object(L.jsx)(o.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(L.jsx)($.a,{})})]})})}}}]);
//# sourceMappingURL=6.e0d8d163.chunk.js.map