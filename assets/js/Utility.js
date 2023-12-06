// Contains Utility Functions for Website

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
                        <p>© 2019 Wekala. Powered By <a href="#">Creative Wp</a></p>
                    </div><!--~./ end footer menu ~-->
                </div>
            </div>
        </div>
    </div><!--~./ end footer bottom area ~-->

</footer>`

    document.write(footerContent);
}