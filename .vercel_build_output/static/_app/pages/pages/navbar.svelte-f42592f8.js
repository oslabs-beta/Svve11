import{S as hs,i as ps,s as ds,e as a,t as o,k as i,x as fs,c as s,a as n,h as r,d as e,m as l,y as us,b as c,f as ls,g as vs,F as t,z as bs,n as gs,r as ms,p as Es,C as _s}from"../../chunks/index-2637d69c.js";import{T as ys,t as Ts}from"../../chunks/tableStyles-5920bafa.js";function ws(Ft){let u,g,ct,Gt,Mt,A,H,Wt,P,Vt,zt,U,Jt,C,Kt,Qt,F,Xt,Yt,m,ht,E,pt,Zt,te,dt,ee,ae,S,ft,se,ne,ut,v,oe,G,re,ie,M,le,ce,he,W,_,vt,pe,de,bt,fe,ue,h,gt,ve,be,mt,ge,me,Et,I,Ee,Sa="<NavBar {options} />",_e,ye,Te,_t,we,Ae,p,L,Se,V,Ie,Ne,Pe,k,Ce,z,Le,ke,xe,y,x,je,J,De,Be,Oe,j,qe,K,Re,$e,He,D,Ue,Q,Fe,Ge,Me,B,We,X,Ve,ze,Je,O,Ke,Y,Qe,Xe,Ye,q,Ze,Z,ta,ea,aa,R,sa,tt,na,oa,ra,yt,ia,la,Tt,N,ca,Ia=`options = {
                id: 'nav-bar',
                header: 'Menu',
                contentInfo: [
                    {
                        subheading: '',
                        options: ['Home', 'Github'],
                        links: ['/', 'https://github.com/oslabs-beta/svve11']
                    },
                    {
                        subheading: 'Library Components:',
                        options: [
                            'Accordion',
                            'Button',
                            'Checkbox',
                            'Meter',
                            'Nav Bar',
                            'Radio Button',
                            'Text Input'
                        ],
                        links: [
                            '/pages/accordion',
                            '/pages/button',
                            '/pages/checkbox',
                            '/pages/meter',
                            '/pages/navbar',
                            '/pages/radiobutton',
                            '/pages/textinput'
                        ]
                    },
                    {
                        subheading: '',
                        options: ['About the team'],
                        links: ['/about']
                    }
                ],
                imgSrc: logo,
                imgClass: 'svvell-logo',
                imgAlt: 'svve11'
            };`,ha,pa,da,wt,fa,ua,At,va,ba,St,T,It,ga,ma,Nt,Ea,_a,b,$,Pt;return $=new ys({props:{tableProps:Ft[0]}}),{c(){u=a("article"),g=a("header"),ct=a("h1"),Gt=o(cs),Mt=i(),A=a("ul"),H=a("li"),Wt=o("Source: "),P=a("a"),Vt=o(wa),zt=i(),U=a("li"),Jt=o("WAI-ARIA: "),C=a("a"),Kt=o(Aa),Qt=i(),F=a("p"),Xt=o(`A navigation bar (nav bar) is a collection of landmarks that each contain a group of links
			that can be used to navigate through the webpage. This component will provide you with a nav
			bar where each collection contains a list of anchor tags which can be clicked to navigate to
			the supplied endpoint.`),Yt=i(),m=a("main"),ht=a("section"),E=a("fieldset"),pt=a("legend"),Zt=o("Installation"),te=i(),dt=a("h2"),ee=o("Installation"),ae=i(),S=a("section"),ft=a("p"),se=o("Import the component in the script section of your Svelte file:"),ne=i(),ut=a("pre"),v=a("code"),oe=o(`
            import `),G=a("span"),re=o("\u2774"),ie=o(" NavBar "),M=a("span"),le=o("\u2775"),ce=o(` from 'svve11'
          `),he=i(),W=a("section"),_=a("fieldset"),vt=a("legend"),pe=o("Usage"),de=i(),bt=a("h2"),fe=o("Usage"),ue=i(),h=a("section"),gt=a("h3"),ve=o("Creating a Nav Bar"),be=i(),mt=a("p"),ge=o(`A nav bar instance can be created by placing the code below in the body of your Svelte
						file.`),me=i(),Et=a("pre"),I=a("code"),Ee=o(`
            `),_e=o(Sa),ye=o(`
            `),Te=i(),_t=a("p"),we=o(`To supply the nav bar with its contents, an options object is passed as a prop to the
						nav bar. This object can be created in the script section of the .svelte file or
						imported in from another location. The options object has 6 properties.`),Ae=i(),p=a("ul"),L=a("li"),Se=o("id (string): This property is "),V=a("span"),Ie=o("required"),Ne=o(`. This will be
							the id attribute you reference for styling inside your navbar component.`),Pe=i(),k=a("li"),Ce=o("contentInfo (array): This property is "),z=a("span"),Le=o("required"),ke=o(`. This
							will set the main content in your nav bar. This array contains a series of objects
							that should be defined as follows:`),xe=i(),y=a("ul"),x=a("li"),je=o("options (array): This property is "),J=a("span"),De=o("required"),Be=o(`. The array
								contains a series of strings, and the order of the strings will determine the order
								they appear in the nav bar section. This will define the text labeling a given nav
								landmark.`),Oe=i(),j=a("li"),qe=o("links (array): This property is "),K=a("span"),Re=o("required"),$e=o(`. The array
								contains a series of strings, and the order of the strings should mimic that of the
								options array above. These strings will set the href attribute of the anchor tag
								that enable navigation.`),He=i(),D=a("li"),Ue=o("subheading (string): This property is "),Q=a("span"),Fe=o("optional"),Ge=o(`. This
								will set the subheading for a section of the nav bar.`),Me=i(),B=a("li"),We=o("header (string): This property is "),X=a("span"),Ve=o("optional"),ze=o(`. This will
							set the heading for the entire nav bar.`),Je=i(),O=a("li"),Ke=o("imgSrc (string): This property is "),Y=a("span"),Qe=o("optional"),Xe=o(`. This will
							set the file path for an image you want to include at the top of the menu.`),Ye=i(),q=a("li"),Ze=o("imgClass (string): This property is "),Z=a("span"),ta=o("optional"),ea=o(`. This will
							set the class for the image included with the imgSrc attribute.`),aa=i(),R=a("li"),sa=o("imgAlt (string): This property is "),tt=a("span"),na=o("optional"),oa=o(`. This will
							set the alternate text for the image included with the imgSrc attribute.`),ra=i(),yt=a("h4"),ia=o("Example Options Object:"),la=i(),Tt=a("pre"),N=a("code"),ca=o(`
            `),ha=o(Ia),pa=o(`
			`),da=i(),wt=a("p"),fa=o(`Styles can be applied to different parts of the NavBar in your CSS stylesheet by
						referencing the appropriate id and class names.`),ua=i(),At=a("p"),va=o(`As an example, the nav bar for this webpage is made using this component and the options
						object above was used to create it.`),ba=i(),St=a("section"),T=a("fieldset"),It=a("legend"),ga=o("Component API"),ma=i(),Nt=a("h2"),Ea=o("Component API"),_a=i(),b=a("div"),fs($.$$.fragment),this.h()},l(w){u=s(w,"ARTICLE",{class:!0});var et=n(u);g=s(et,"HEADER",{});var at=n(g);ct=s(at,"H1",{});var Na=n(ct);Gt=r(Na,cs),Na.forEach(e),Mt=l(at),A=s(at,"UL",{class:!0});var Ct=n(A);H=s(Ct,"LI",{});var ya=n(H);Wt=r(ya,"Source: "),P=s(ya,"A",{href:!0,target:!0});var Pa=n(P);Vt=r(Pa,wa),Pa.forEach(e),ya.forEach(e),zt=l(Ct),U=s(Ct,"LI",{});var Ta=n(U);Jt=r(Ta,"WAI-ARIA: "),C=s(Ta,"A",{href:!0,target:!0});var Ca=n(C);Kt=r(Ca,Aa),Ca.forEach(e),Ta.forEach(e),Ct.forEach(e),Qt=l(at),F=s(at,"P",{class:!0});var La=n(F);Xt=r(La,`A navigation bar (nav bar) is a collection of landmarks that each contain a group of links
			that can be used to navigate through the webpage. This component will provide you with a nav
			bar where each collection contains a list of anchor tags which can be clicked to navigate to
			the supplied endpoint.`),La.forEach(e),at.forEach(e),Yt=l(et),m=s(et,"MAIN",{});var st=n(m);ht=s(st,"SECTION",{});var ka=n(ht);E=s(ka,"FIELDSET",{});var nt=n(E);pt=s(nt,"LEGEND",{});var xa=n(pt);Zt=r(xa,"Installation"),xa.forEach(e),te=l(nt),dt=s(nt,"H2",{});var ja=n(dt);ee=r(ja,"Installation"),ja.forEach(e),ae=l(nt),S=s(nt,"SECTION",{class:!0});var Lt=n(S);ft=s(Lt,"P",{});var Da=n(ft);se=r(Da,"Import the component in the script section of your Svelte file:"),Da.forEach(e),ne=l(Lt),ut=s(Lt,"PRE",{});var Ba=n(ut);v=s(Ba,"CODE",{class:!0});var ot=n(v);oe=r(ot,`
            import `),G=s(ot,"SPAN",{class:!0});var Oa=n(G);re=r(Oa,"\u2774"),Oa.forEach(e),ie=r(ot," NavBar "),M=s(ot,"SPAN",{class:!0});var qa=n(M);le=r(qa,"\u2775"),qa.forEach(e),ce=r(ot,` from 'svve11'
          `),ot.forEach(e),Ba.forEach(e),Lt.forEach(e),nt.forEach(e),ka.forEach(e),he=l(st),W=s(st,"SECTION",{class:!0});var Ra=n(W);_=s(Ra,"FIELDSET",{});var rt=n(_);vt=s(rt,"LEGEND",{});var $a=n(vt);pe=r($a,"Usage"),$a.forEach(e),de=l(rt),bt=s(rt,"H2",{});var Ha=n(bt);fe=r(Ha,"Usage"),Ha.forEach(e),ue=l(rt),h=s(rt,"SECTION",{class:!0});var d=n(h);gt=s(d,"H3",{});var Ua=n(gt);ve=r(Ua,"Creating a Nav Bar"),Ua.forEach(e),be=l(d),mt=s(d,"P",{});var Fa=n(mt);ge=r(Fa,`A nav bar instance can be created by placing the code below in the body of your Svelte
						file.`),Fa.forEach(e),me=l(d),Et=s(d,"PRE",{});var Ga=n(Et);I=s(Ga,"CODE",{class:!0});var kt=n(I);Ee=r(kt,`
            `),_e=r(kt,Sa),ye=r(kt,`
            `),kt.forEach(e),Ga.forEach(e),Te=l(d),_t=s(d,"P",{});var Ma=n(_t);we=r(Ma,`To supply the nav bar with its contents, an options object is passed as a prop to the
						nav bar. This object can be created in the script section of the .svelte file or
						imported in from another location. The options object has 6 properties.`),Ma.forEach(e),Ae=l(d),p=s(d,"UL",{class:!0});var f=n(p);L=s(f,"LI",{});var xt=n(L);Se=r(xt,"id (string): This property is "),V=s(xt,"SPAN",{class:!0});var Wa=n(V);Ie=r(Wa,"required"),Wa.forEach(e),Ne=r(xt,`. This will be
							the id attribute you reference for styling inside your navbar component.`),xt.forEach(e),Pe=l(f),k=s(f,"LI",{});var jt=n(k);Ce=r(jt,"contentInfo (array): This property is "),z=s(jt,"SPAN",{class:!0});var Va=n(z);Le=r(Va,"required"),Va.forEach(e),ke=r(jt,`. This
							will set the main content in your nav bar. This array contains a series of objects
							that should be defined as follows:`),jt.forEach(e),xe=l(f),y=s(f,"UL",{});var it=n(y);x=s(it,"LI",{});var Dt=n(x);je=r(Dt,"options (array): This property is "),J=s(Dt,"SPAN",{class:!0});var za=n(J);De=r(za,"required"),za.forEach(e),Be=r(Dt,`. The array
								contains a series of strings, and the order of the strings will determine the order
								they appear in the nav bar section. This will define the text labeling a given nav
								landmark.`),Dt.forEach(e),Oe=l(it),j=s(it,"LI",{});var Bt=n(j);qe=r(Bt,"links (array): This property is "),K=s(Bt,"SPAN",{class:!0});var Ja=n(K);Re=r(Ja,"required"),Ja.forEach(e),$e=r(Bt,`. The array
								contains a series of strings, and the order of the strings should mimic that of the
								options array above. These strings will set the href attribute of the anchor tag
								that enable navigation.`),Bt.forEach(e),He=l(it),D=s(it,"LI",{});var Ot=n(D);Ue=r(Ot,"subheading (string): This property is "),Q=s(Ot,"SPAN",{class:!0});var Ka=n(Q);Fe=r(Ka,"optional"),Ka.forEach(e),Ge=r(Ot,`. This
								will set the subheading for a section of the nav bar.`),Ot.forEach(e),it.forEach(e),Me=l(f),B=s(f,"LI",{});var qt=n(B);We=r(qt,"header (string): This property is "),X=s(qt,"SPAN",{class:!0});var Qa=n(X);Ve=r(Qa,"optional"),Qa.forEach(e),ze=r(qt,`. This will
							set the heading for the entire nav bar.`),qt.forEach(e),Je=l(f),O=s(f,"LI",{});var Rt=n(O);Ke=r(Rt,"imgSrc (string): This property is "),Y=s(Rt,"SPAN",{class:!0});var Xa=n(Y);Qe=r(Xa,"optional"),Xa.forEach(e),Xe=r(Rt,`. This will
							set the file path for an image you want to include at the top of the menu.`),Rt.forEach(e),Ye=l(f),q=s(f,"LI",{});var $t=n(q);Ze=r($t,"imgClass (string): This property is "),Z=s($t,"SPAN",{class:!0});var Ya=n(Z);ta=r(Ya,"optional"),Ya.forEach(e),ea=r($t,`. This will
							set the class for the image included with the imgSrc attribute.`),$t.forEach(e),aa=l(f),R=s(f,"LI",{});var Ht=n(R);sa=r(Ht,"imgAlt (string): This property is "),tt=s(Ht,"SPAN",{class:!0});var Za=n(tt);na=r(Za,"optional"),Za.forEach(e),oa=r(Ht,`. This will
							set the alternate text for the image included with the imgSrc attribute.`),Ht.forEach(e),f.forEach(e),ra=l(d),yt=s(d,"H4",{});var ts=n(yt);ia=r(ts,"Example Options Object:"),ts.forEach(e),la=l(d),Tt=s(d,"PRE",{});var es=n(Tt);N=s(es,"CODE",{class:!0});var Ut=n(N);ca=r(Ut,`
            `),ha=r(Ut,Ia),pa=r(Ut,`
			`),Ut.forEach(e),es.forEach(e),da=l(d),wt=s(d,"P",{});var as=n(wt);fa=r(as,`Styles can be applied to different parts of the NavBar in your CSS stylesheet by
						referencing the appropriate id and class names.`),as.forEach(e),ua=l(d),At=s(d,"P",{});var ss=n(At);va=r(ss,`As an example, the nav bar for this webpage is made using this component and the options
						object above was used to create it.`),ss.forEach(e),d.forEach(e),rt.forEach(e),Ra.forEach(e),ba=l(st),St=s(st,"SECTION",{});var ns=n(St);T=s(ns,"FIELDSET",{});var lt=n(T);It=s(lt,"LEGEND",{});var os=n(It);ga=r(os,"Component API"),os.forEach(e),ma=l(lt),Nt=s(lt,"H2",{});var rs=n(Nt);Ea=r(rs,"Component API"),rs.forEach(e),_a=l(lt),b=s(lt,"DIV",{role:!0,tabindex:!0,style:!0,class:!0});var is=n(b);us($.$$.fragment,is),is.forEach(e),lt.forEach(e),ns.forEach(e),st.forEach(e),et.forEach(e),this.h()},h(){c(P,"href",wa),c(P,"target","_blank"),c(C,"href",Aa),c(C,"target","_blank"),c(A,"class","resource-links-list"),c(F,"class","header-paragraph"),c(G,"class","curly-symbol"),c(M,"class","curly-symbol"),c(v,"class","code-block"),c(S,"class","content-section"),c(I,"class","code-block"),c(V,"class","bold-word"),c(z,"class","bold-word"),c(J,"class","bold-word"),c(K,"class","bold-word"),c(Q,"class","bold-word"),c(X,"class","bold-word"),c(Y,"class","bold-word"),c(Z,"class","bold-word"),c(tt,"class","bold-word"),c(p,"class","options-object-list svelte-1r5pdrp"),c(N,"class","code-block example-code"),c(h,"class","content-section"),c(W,"class","main-section"),c(b,"role","region"),c(b,"tabindex","0"),ls(b,"max-width","100%"),ls(b,"overflow","auto"),c(b,"class","props-table"),c(u,"class","page-component")},m(w,et){vs(w,u,et),t(u,g),t(g,ct),t(ct,Gt),t(g,Mt),t(g,A),t(A,H),t(H,Wt),t(H,P),t(P,Vt),t(A,zt),t(A,U),t(U,Jt),t(U,C),t(C,Kt),t(g,Qt),t(g,F),t(F,Xt),t(u,Yt),t(u,m),t(m,ht),t(ht,E),t(E,pt),t(pt,Zt),t(E,te),t(E,dt),t(dt,ee),t(E,ae),t(E,S),t(S,ft),t(ft,se),t(S,ne),t(S,ut),t(ut,v),t(v,oe),t(v,G),t(G,re),t(v,ie),t(v,M),t(M,le),t(v,ce),t(m,he),t(m,W),t(W,_),t(_,vt),t(vt,pe),t(_,de),t(_,bt),t(bt,fe),t(_,ue),t(_,h),t(h,gt),t(gt,ve),t(h,be),t(h,mt),t(mt,ge),t(h,me),t(h,Et),t(Et,I),t(I,Ee),t(I,_e),t(I,ye),t(h,Te),t(h,_t),t(_t,we),t(h,Ae),t(h,p),t(p,L),t(L,Se),t(L,V),t(V,Ie),t(L,Ne),t(p,Pe),t(p,k),t(k,Ce),t(k,z),t(z,Le),t(k,ke),t(p,xe),t(p,y),t(y,x),t(x,je),t(x,J),t(J,De),t(x,Be),t(y,Oe),t(y,j),t(j,qe),t(j,K),t(K,Re),t(j,$e),t(y,He),t(y,D),t(D,Ue),t(D,Q),t(Q,Fe),t(D,Ge),t(p,Me),t(p,B),t(B,We),t(B,X),t(X,Ve),t(B,ze),t(p,Je),t(p,O),t(O,Ke),t(O,Y),t(Y,Qe),t(O,Xe),t(p,Ye),t(p,q),t(q,Ze),t(q,Z),t(Z,ta),t(q,ea),t(p,aa),t(p,R),t(R,sa),t(R,tt),t(tt,na),t(R,oa),t(h,ra),t(h,yt),t(yt,ia),t(h,la),t(h,Tt),t(Tt,N),t(N,ca),t(N,ha),t(N,pa),t(h,da),t(h,wt),t(wt,fa),t(h,ua),t(h,At),t(At,va),t(m,ba),t(m,St),t(St,T),t(T,It),t(It,ga),t(T,ma),t(T,Nt),t(Nt,Ea),t(T,_a),t(T,b),bs($,b,null),Pt=!0},p:gs,i(w){Pt||(ms($.$$.fragment,w),Pt=!0)},o(w){Es($.$$.fragment,w),Pt=!1},d(w){w&&e(u),_s($)}}}const cs="Nav Bar",wa="https://github.com/Svve11/",Aa="https://w3c.github.io/aria-practices/#aria_lh_navigation";function As(Ft){return[{id:"props-table-navbar",ariaLabel:"Nav Bar props table",ariaDescription:"This table describes the props that should be passed to the nav bar in the options object",columnNames:["Prop","Type","Required","Default Value"],rowsContent:[["id","string","true","N/A"],["contentInfo","array of objects","true","N/A"],["header","string","false","N/A"],["imgSrc","string","false","N/A"],["imgClass","string","false","N/A"],["imgAlt","string","false","N/A"]],styles:Ts}]}class Ns extends hs{constructor(u){super(),ps(this,u,As,ws,ds,{})}}export{Ns as default};
