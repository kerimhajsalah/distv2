(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Ns/k":function(a,e,t){"use strict";t.r(e),t.d(e,"HomeModule",(function(){return v}));var i=t("ofXK"),c=t("tyNb"),s=t("fXoL"),o=t("tk/3"),n=t("AytR");let r=(()=>{class a{constructor(a){this.http=a,this.URL=n.a.urlBackend,this.token=localStorage.getItem("token_Pro")}getVideo(){const a=localStorage.getItem("token_Pro"),e=(new o.d).set("authorization","Bearer "+a);return this.http.get(this.URL+"urlvideo",{headers:e})}}return a.\u0275fac=function(e){return new(e||a)(s.ec(o.b))},a.\u0275prov=s.Qb({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var u=t("wZkO");const d=function(a){return{active:a}};function l(a,e){if(1&a&&(s.ac(0,"div",39),s.Vb(1,"iframe",40),s.ac(2,"div",41),s.ac(3,"h5"),s.Mc(4),s.Zb(),s.ac(5,"p"),s.Mc(6),s.Zb(),s.Zb(),s.ac(7,"button",42),s.Vb(8,"span",43),s.ac(9,"span",44),s.Mc(10,"Previous"),s.Zb(),s.Zb(),s.ac(11,"button",45),s.Vb(12,"span",46),s.ac(13,"span",44),s.Mc(14,"Next"),s.Zb(),s.Zb(),s.Zb()),2&a){const a=e.$implicit,t=e.index;s.sc("id",t),s.rc("ngClass",s.vc(4,d,0==t)),s.Jb(4),s.Nc(a.title),s.Jb(2),s.Nc(a.desc)}}function b(a,e){if(1&a&&(s.ac(0,"div",39),s.Vb(1,"iframe",40),s.ac(2,"div",41),s.ac(3,"h5"),s.Mc(4),s.Zb(),s.ac(5,"p"),s.Mc(6),s.Zb(),s.Zb(),s.ac(7,"button",42),s.Vb(8,"span",43),s.ac(9,"span",44),s.Mc(10,"Previous"),s.Zb(),s.Zb(),s.ac(11,"button",45),s.Vb(12,"span",46),s.ac(13,"span",44),s.Mc(14,"Next"),s.Zb(),s.Zb(),s.Zb()),2&a){const a=e.$implicit,t=e.index;s.sc("id",t),s.rc("ngClass",s.vc(4,d,0==t)),s.Jb(4),s.Nc(a.title),s.Jb(2),s.Nc(a.desc)}}const m=[{path:"",component:(()=>{class a{constructor(a){this.videoService=a}ngOnInit(){this.videoService.getVideo().subscribe(a=>{this.urlVideo=a,this.dataUrlD=this.urlVideo.dataUrlD,this.dataUrlP=this.urlVideo.dataUrlP})}}return a.\u0275fac=function(e){return new(e||a)(s.Ub(r))},a.\u0275cmp=s.Ob({type:a,selectors:[["app-home"]],decls:109,vars:2,consts:[["id","hero",1,"d-flex","align-items-center"],[1,"container"],["href","#about",1,"btn-get-started","scrollto"],["id","counts",1,"counts"],[1,"row"],[1,"itemss"],["dynamicHeight","","mat-align-tabs","center"],["label","Professionnel"],[1,"example-small-box","mat-elevation-z4"],["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],["class","carousel-item active",3,"id","ngClass",4,"ngFor","ngForOf"],["label","Patient"],["id","departments",1,"departments"],[1,"section-title"],[1,"row","gy-4"],[1,"col-lg-3"],[1,"nav","nav-tabs","flex-column"],[1,"nav-item"],["data-bs-toggle","tab","href","#tab-1",1,"nav-link","active","show"],["data-bs-toggle","tab","href","#tab-2",1,"nav-link"],["data-bs-toggle","tab","href","#tab-3",1,"nav-link"],["data-bs-toggle","tab","href","#tab-4",1,"nav-link"],["data-bs-toggle","tab","href","#tab-5",1,"nav-link"],[1,"col-lg-9"],[1,"tab-content"],["id","tab-1",1,"tab-pane","active","show"],[1,"col-lg-8","details","order-2","order-lg-1"],[1,"fst-italic"],[1,"col-lg-4","text-center","order-1","order-lg-2"],["src","assets/img/departments-1.jpg","alt","",1,"img-fluid"],["id","tab-2",1,"tab-pane"],["src","assets/img/departments-2.jpg","alt","",1,"img-fluid"],["id","tab-3",1,"tab-pane"],["src","assets/img/departments-3.jpg","alt","",1,"img-fluid"],["id","tab-4",1,"tab-pane"],["src","assets/img/departments-4.jpg","alt","",1,"img-fluid"],["id","tab-5",1,"tab-pane"],["src","assets/img/departments-5.jpg","alt","",1,"img-fluid"],[1,"carousel-item","active",3,"id","ngClass"],["width","100%","height","500px","src","https://www.youtube.com/embed/EFrjlPcQMq8","frameborder","0","allowfullscreen",""],[1,"carousel-caption","d-none","d-md-block"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(a,e){1&a&&(s.ac(0,"section",0),s.ac(1,"div",1),s.ac(2,"h1"),s.Mc(3,"Bienvenue dans l'application Scores"),s.Zb(),s.ac(4,"h2"),s.Mc(5,"Notre \xe9quipe est l\xe0 pour vous aider"),s.Zb(),s.ac(6,"a",2),s.Mc(7,"Commencer"),s.Zb(),s.Zb(),s.Zb(),s.ac(8,"section",3),s.ac(9,"div",4),s.ac(10,"div",1),s.ac(11,"div",5),s.ac(12,"mat-tab-group",6),s.ac(13,"mat-tab",7),s.ac(14,"div",8),s.ac(15,"div",1),s.ac(16,"div",4),s.ac(17,"div",9),s.ac(18,"div",10),s.Kc(19,l,15,6,"div",11),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.ac(20,"mat-tab",12),s.ac(21,"div",8),s.ac(22,"div",1),s.ac(23,"div",4),s.ac(24,"div",9),s.ac(25,"div",10),s.Kc(26,b,15,6,"div",11),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.ac(27,"section",13),s.ac(28,"div",1),s.ac(29,"div",14),s.ac(30,"h2"),s.Mc(31,"Departments"),s.Zb(),s.ac(32,"p"),s.Mc(33,"Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."),s.Zb(),s.Zb(),s.ac(34,"div",15),s.ac(35,"div",16),s.ac(36,"ul",17),s.ac(37,"li",18),s.ac(38,"a",19),s.Mc(39,"Cardiology"),s.Zb(),s.Zb(),s.ac(40,"li",18),s.ac(41,"a",20),s.Mc(42,"Neurology"),s.Zb(),s.Zb(),s.ac(43,"li",18),s.ac(44,"a",21),s.Mc(45,"Hepatology"),s.Zb(),s.Zb(),s.ac(46,"li",18),s.ac(47,"a",22),s.Mc(48,"Pediatrics"),s.Zb(),s.Zb(),s.ac(49,"li",18),s.ac(50,"a",23),s.Mc(51,"Eye Care"),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.ac(52,"div",24),s.ac(53,"div",25),s.ac(54,"div",26),s.ac(55,"div",15),s.ac(56,"div",27),s.ac(57,"h3"),s.Mc(58,"Cardiology"),s.Zb(),s.ac(59,"p",28),s.Mc(60,"Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka"),s.Zb(),s.ac(61,"p"),s.Mc(62,"Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero"),s.Zb(),s.Zb(),s.ac(63,"div",29),s.Vb(64,"img",30),s.Zb(),s.Zb(),s.Zb(),s.ac(65,"div",31),s.ac(66,"div",15),s.ac(67,"div",27),s.ac(68,"h3"),s.Mc(69,"Et blanditiis nemo veritatis excepturi"),s.Zb(),s.ac(70,"p",28),s.Mc(71,"Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka"),s.Zb(),s.ac(72,"p"),s.Mc(73,"Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal"),s.Zb(),s.Zb(),s.ac(74,"div",29),s.Vb(75,"img",32),s.Zb(),s.Zb(),s.Zb(),s.ac(76,"div",33),s.ac(77,"div",15),s.ac(78,"div",27),s.ac(79,"h3"),s.Mc(80,"Impedit facilis occaecati odio neque aperiam sit"),s.Zb(),s.ac(81,"p",28),s.Mc(82,"Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut"),s.Zb(),s.ac(83,"p"),s.Mc(84,"Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae"),s.Zb(),s.Zb(),s.ac(85,"div",29),s.Vb(86,"img",34),s.Zb(),s.Zb(),s.Zb(),s.ac(87,"div",35),s.ac(88,"div",15),s.ac(89,"div",27),s.ac(90,"h3"),s.Mc(91,"Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore"),s.Zb(),s.ac(92,"p",28),s.Mc(93,"Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus"),s.Zb(),s.ac(94,"p"),s.Mc(95,"Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore"),s.Zb(),s.Zb(),s.ac(96,"div",29),s.Vb(97,"img",36),s.Zb(),s.Zb(),s.Zb(),s.ac(98,"div",37),s.ac(99,"div",15),s.ac(100,"div",27),s.ac(101,"h3"),s.Mc(102,"Est eveniet ipsam sindera pad rone matrelat sando reda"),s.Zb(),s.ac(103,"p",28),s.Mc(104,"Omnis blanditiis saepe eos autem qui sunt debitis porro quia."),s.Zb(),s.ac(105,"p"),s.Mc(106,"Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel"),s.Zb(),s.Zb(),s.ac(107,"div",29),s.Vb(108,"img",38),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.Zb()),2&a&&(s.Jb(19),s.rc("ngForOf",e.dataUrlD),s.Jb(7),s.rc("ngForOf",e.dataUrlP))},directives:[u.b,u.a,i.l,i.k],styles:[".example-large-box[_ngcontent-%COMP%], .example-small-box[_ngcontent-%COMP%], .example-small-box2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:16px;border-radius:8px;justify-content:center!important;margin:16px 16px 16px 100px}.example-small-box[_ngcontent-%COMP%]{height:550px;width:900px}.departments[_ngcontent-%COMP%]{width:100%}.example-large-box[_ngcontent-%COMP%]{height:550px;width:900px}"]}),a})()}];let p=(()=>{class a{}return a.\u0275mod=s.Sb({type:a}),a.\u0275inj=s.Rb({factory:function(e){return new(e||a)},imports:[[c.d.forChild(m)],c.d]}),a})(),v=(()=>{class a{}return a.\u0275mod=s.Sb({type:a}),a.\u0275inj=s.Rb({factory:function(e){return new(e||a)},imports:[[i.c,p,u.c]]}),a})()}}]);