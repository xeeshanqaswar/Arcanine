// Contains Utility Functions for Website

const Type = {
    Website: "websites",
    Apps : "mobileapps",
    Games: "games",
    Design: "design"
}

function GetJsonData(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

let projectId = "id";

function SecondaryFooter(){

    var footerContent = `<footer class="site-footer footer-default-style pd-b-20">
            
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Footer Widget Area
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div class="footer-widget-area">
        <div class="container">
            <div class="row justify-content-between">
                <!--~~~~~ Start Widget About Footer ~~~~~--> 
                <div class="col-lg-4">
                    <aside class="widget bt-about-footer-widget">
                        <div class="widget-content">
                            <div class="about-logo">
                                <a href="index.html"><img src="assets/images/logo/footer-logo.png" alt="Logo"></a>
                            </div>
                            <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason.</p>
                        </div>
                    </aside>
                </div><!--~./ end about footer widget ~-->

                <!--~~~~~ Start Widget Business Hours ~~~~~-->
                <div class="col-lg-4">
                    <aside class="widget widget-business-hours">
                        <h2 class="widget-title">Business Hours</h2>
                        <div class="widget-content">
                            <h4>Opining Days</h4>
                            <ul>
                                <li>Monday – Friday <span>9.00am to 6.00pm</span></li>
                            </ul>
                            <h4>Vacations</h4>
                            <ul>
                                <li>Saturday - Sunday</li>
                            </ul>
                        </div>
                    </aside>
                </div><!--~./ end widget business hours  ~-->

                <!--~~~~~ Start Widget Links ~~~~~--> 
                <div class="col-lg-3">
                    <aside class="widget widget_links">
                        <h2 class="widget-title">Services</h2>
                        <div class="widget-content">
                            <ul>
                                <li><a href="#">Web Application</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">User Interaction Design</a></li>
                                <li><a href="#">UX Consultant</a></li>
                            </ul>
                        </div>
                    </aside>
                </div><!--~./ end links widget ~-->

            </div>
        </div>
    </div><!--~./ end footer widgets area ~-->

    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Footer Bottom Area
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div class="footer-bottom-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <ul class="footer-social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    </ul><!--  /.footer-social -->
                </div><!--~./ end copyright ~-->
                <div class="col-md-6">
                    <div class="copyright-text">
                        <p>© 2022 - 2023 <a href="index.html">Arcanine</a> &nbsp;All Rights Reserved</p>
                    </div><!--~./ end footer menu ~-->
                </div>
            </div>
        </div>
    </div><!--~./ end footer bottom area ~-->

</footer>`

    document.write(footerContent);
}

function SecondaryHeader(){

    var data = `<header class="site-header default-header-style">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="navigation-area">  
                                <!-- Site Branding -->
                                <div class="site-branding">
                                    <a href="index.html">
                                        <img src="assets/images/logo/logo.png" alt="Site Logo" />
                                    </a>
                                </div><!--  /.site-branding -->

                                <!-- Site Navigation -->
                                <div class="site-navigation">
                                    <div class="hamburger-menus">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <nav class="navigation">
                                        <div class="overlaybg"></div><!--  /.overlaybg -->
                                        <!-- Main Menu -->        
                                        <div class="menu-wrapper">
                                            <div class="menu-content">
                                                <ul class="mainmenu">         
                                                    <li>
                                                        <a class="nav-link" href="index.html">Home</a>
                                                    </li> 
                                                    <li>
                                                        <a class="nav-link" href="services.html">Services</a>
                                                    </li>        
                                                    <!-- <li>
                                                        <a class="nav-link" href="about-us.html">About</a>
                                                    </li> --> 
                                                    <li>
                                                        <a class="nav-link" href="portfolio.html">Projects</a>
                                                    </li>  
                                                </ul> <!-- /.menu-list -->
                                            </div> <!-- /.hours-content-->
                                        </div><!-- /.menu-wrapper --> 
                                    </nav>
                                </div><!--  /.site-navigation -->

                                <div class="header-navigation-right">
                                    <div class="lets-talk-area">
                                        <a class="btn btn-default lets-talk-btn" href="https://calendly.com/arcanine_co" target="_blank">Book a Meeting</a>
                                    </div><!--~./ lets-talk-area ~-->
                                </div><!--~./ header-navigation-right ~-->
                            </div><!-- /.navigation-area -->
                        </div><!-- /.col-12 -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
                </header>`;
    
                                                 
            //     <li>
            //     <a class="nav-link" href="team.html">Team</a>
            // </li>

    document.write(data);

}

function SetPortfolio(){

    var portfolioJson = JSON.parse(GetJsonData("https://raw.githubusercontent.com/xeeshanqaswar/Host-Json/master/Arcanine/Portfolio.json"));
    let itemType;
    let projectTitle;
    let projectName;

    for (let i = 0; i < portfolioJson.length; i++) {

        itemType = portfolioJson[i].type;
        projectTitle = portfolioJson[i].title;
        projectName = portfolioJson[i].name;
        document.write(baseData(itemType, projectTitle,projectName,i));
    }

    function baseData(pType, pTitle,pName, id){
        
        let imgUrl = `assets/images/portfolio/${pType}/${pTitle}/display.jpg`;
        let redirectUrl = `portfolio-single.html?${projectId}=${id}`;

        var chunk =`<div class="col-md-6 col-lg-4 ${pType} item">
                    <div class="portfolio-item portfolio-one" data-animate="hg-zoomIn">
                        <figure class="portfolio-thumb">
                            <img src="${imgUrl}" alt="Portfolio Item">
                            <div class="content">
                                <div class="portfolio-title">
                                    <h3><a href="${redirectUrl}">${pName}</a></h3>
                                </div>
                                <div class="icon">
                                    <a href="${redirectUrl}"><span class="fa fa-long-arrow-right"></span></a>
                                </div>
                            </div><!-- /.content -->  
                        </figure><!-- /.portfolio-thumb -->               
                    </div><!-- /.portfolio-item -->
                </div><!-- /.col-lg-4 -->`;

        return chunk;
    }
}

function TeamData(){

    var memberName = "Tayyab Qaswar";
    var memberRole = "CEO";

    var chunk =`<div class="col-lg-4 col-md-6">
                    <div class="team-member-card" data-animate="hg-fadeInUp" data-duration="1.0s" data-offset="100">
                        <div class="member-thumb">
                            <img src="assets/images/team/1.png" alt="Member Image">
                        </div><!-- /.member-thumb -->
                        <h3 class="member-name">${memberName}</h3>
                        <p class="member-designation">${memberRole}</p>
                    </div><!-- /.team-member-card -->
                </div><!-- /.col-lg-4 -->`;


    for (let i = 0; i < 3; i++) {
        let moddedUrl = 
        document.write(chunk);
    }
}

function CallToAction(){
    
    var data = `<div class="call-to-action bg-center" style="background-image: url('assets/images/bg/map.png');">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <h2 class="call-to-title">Let's Ignite Your Next <span>Project</span> with <span>Passion</span> and <span>Expertise</span></h2><!-- /.call-to-title -->
                                <div class="action-btn-group pd-t-40">
                                    <a href="contact.html" class="btn btn-default btn-primary">Request a Quote</a>
                                    <a href="https://calendly.com/arcanine_co" target="_blank" class="btn btn-default">Consultation</a>
                                </div><!-- /.action-btn-group -->
                            </div><!-- /.col-lg-8 -->
                        </div><!-- /.row -->
                    </div><!-- /.container -->
                </div><!--~~./ end call to action ~~-->`;

    document.write(data);
}

function PrintRequestPortfolio(){
    
    var data = `<div class="call-to-action bg-center" style="background-image: url('assets/images/bg/map.png');">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <h2 class="call-to-title">Request Private <span>Portfolio</span> together</h2><!-- /.call-to-title -->
                                <div class="action-btn-group pd-t-40">
                                    <a href="#" class="btn btn-default">Request Portfolio</a>
                                </div><!-- /.action-btn-group -->
                            </div><!-- /.col-lg-8 -->
                        </div><!-- /.row -->
                    </div><!-- /.container -->
                </div><!--~~./ end call to action ~~-->`;

    document.write(data);
}

function PrintTestimonials(){

    var jsonData = JSON.parse(GetJsonData("https://raw.githubusercontent.com/xeeshanqaswar/Host-Json/master/Arcanine/Testimonials.json"));
    let tempData;
    for (let i = 0; i < jsonData.length; i++) {
        
        tempData += GenerateTestimoniaForClient(jsonData[i].remarks, jsonData[i].name, jsonData[i].designation, jsonData[i].imgIndex); 
    }

    let finalHtml = `<div id="testimonial-block" class="testimonial-block mrb-200">
                    <div class="container ml-t-10 ml-b-30">
                        <!-- Title Row -->
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-5 col-md-8">
                                <div class="section-title">
                                    <h4 class="title-sub">Endorsements <img src="assets/images/icon/divider.png" alt="icon"></h4><!--  /.title-sub -->
                                    <h2 class="title-main">Client Perspectives and Experiences </h2><!-- /.title-main -->
                                </div><!-- /.section-title -->
                                <div class="btn-links-area">
                                    <button class="btn-links btn-prev">
                                        <span class="icon-arrows"></span>
                                    </button>
                                    <button class="btn-links btn-next">
                                        <span class="icon-arrows-1"></span>
                                    </button>
                                </div><!-- /.btn-links-area -->
                            </div><!-- /.col-lg-5 -->
                            
                            <div class="col-lg-6">
                                <div class="testimonial-slide-area">
                                    <div class="testimonial-slick-wrapper">  

                                        ${tempData}

                                    </div>
                                </div><!-- /.testimonial-slide-area -->
                            </div><!-- /.col-lg-6 -->
                        </div><!-- /.row -->
                    </div><!-- /.container -->
                </div><!--~~./ end testimonial block ~~-->`;

    document.write(finalHtml);

    function GenerateTestimoniaForClient(desc, name, designation, imgIndex){

        let unitTestimonial = `<div class="slick-slide-item">
                                <div class="testimonial-item">
                                    <div class="testimonial-item-inner">
                                        <div class="quote-icon">
                                            <img src="assets/images/icon/quote2.png" alt="Icon">
                                        </div><!-- /.quote-icon -->
                                        <div class="client-testimonial">
                                            <div class="client-thumb">
                                                <img src="assets/images/testimonials/${imgIndex}.png" alt="${name}" />
                                            </div><!-- /.client-thumb -->
                                            <div class="testimonial-details">
                                                <div class="details">
                                                    <p>${desc}</p>
                                                </div><!-- /.details -->
                                                <div class="client-area">
                                                    <h4 class="client-name">${name}</h4><!--  /.client-name -->
                                                    <p class="client-designation">${designation}</p>
                                                </div><!-- /.client-area -->
                                            </div><!-- /.testimonial-details -->
                                        </div><!-- /.client-testimonial -->
                                    </div><!-- /.testimonial-item-inner -->
                                </div><!-- /.testimonial-item --> 
                            </div><!-- /.slick-slide-item -->`;

        return unitTestimonial;
    }

}

function PrintLetsTalk(){
    let data = `<div class="lets-talk-area">
                <a class="btn btn-default lets-talk-btn" href="https://calendly.com/arcanine_co" target="_blank">Book a Meeting</a>
                </div><!--~./ lets-talk-area ~-->`

    document.write(data);



}

function PrintWorkflow(){
    let data = `<div id="work-process-block" class="work-process-block proces-style-two mrb-200">
                    <div class="container ml-b-45">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-title text-center" data-animate="hg-fadeInUp" data-duration="1.0s" data-delay="0.1s" data-offset="100">
                                    <h4 class="title-sub">WORKFLOW</h4><!--  /.title-sub -->
                                    <h2 class="title-main">Comprehensive Workflow for <br> Efficiency and Excellence</h2><!-- /.title-main -->
                                    <p class="title-text"> Delivering Excellence with the Rhythm of <br>Agile Software Development</p>
                                    <div class="divider">
                                        <img src="assets/images/icon/divider.png" alt="icon">
                                    </div>
                                </div><!-- /.section-title -->
                            </div>
                        </div>

                        <div class="row process-list">
                            <div class="bg-line" style="background-image:url('assets/images/others/linearrow.png')"></div><!-- /.bg-line -->
                            
                            <!--~./ Start Single Process ~-->
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-process" data-animate="hg-fadeInUp" data-duration="1.0s" data-offset="100">
                                    <div class="icon bg-zinnwaldite">
                                        <span class="icon-binoculars-business-management-vision"></span>
                                        <h3 class="process-no">1</h3>
                                    </div>
                                    <h2 class="process-step">Plan</h2>
                                </div>
                            </div><!--~./ end single process ~-->

                            <!--~./ Start Single Process ~-->
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-process" data-animate="hg-fadeInUp" data-duration="1.0s"  data-offset="100">
                                    <div class="icon bg-silver-tree">
                                        <span class="icon-business-management-presentation-statistic-stats"></span>
                                        <h3 class="process-no">2</h3>
                                    </div>
                                    <h2 class="process-step">Sprint</h2>
                                </div>
                            </div><!--~./ end single process ~-->

                            <!--~./ Start Single Process ~-->
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-process" data-animate="hg-fadeInUp" data-duration="1.0s" data-offset="100">
                                    <div class="icon bg-medium-purple">
                                        <span class="icon-badge-pass-security-security-icon"></span>
                                        <h3 class="process-no">3</h3>
                                    </div>
                                    <h2 class="process-step">Iteration</h2>
                                </div>
                            </div><!--~./ end single process ~-->

                            <!--~./ Start Single Process ~-->
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-process" data-animate="hg-fadeInUp" data-duration="1.0s" data-offset="100">
                                    <div class="icon bg-curious-blue">
                                        <span class="icon-rocket3"></span>
                                        <h3 class="process-no">4</h3>
                                    </div>
                                    <h2 class="process-step">Release</h2>
                                </div>
                            </div><!--~./ end single process ~-->
                        </div>
                    </div><!-- /.container -->
                </div><!--~~./ end work process block ~~-->`

    document.write(data);
}