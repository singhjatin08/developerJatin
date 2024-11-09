<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Devtechera | Top Ranked Digital Marketing Company in India </title>

    <?php
    include("includes/links.php")
    ?>

</head>

<body class="custom-cursor">
    <?php
    include("includes/header.php")
    ?>

    <!--Page Header Start-->
    <section class="page-header">
        <div class="page-header-bg" style="background-image: url(assets/images/backgrounds/page-header-bg.jpg)">
        </div>
        <div class="main-slider-border"></div>
        <div class="main-slider-border main-slider-border-two"></div>
        <div class="main-slider-border main-slider-border-three"></div>
        <div class="main-slider-border main-slider-border-four"></div>
        <div class="main-slider-border main-slider-border-five"></div>
        <div class="main-slider-border main-slider-border-six"></div>
        <div class="container">
            <div class="page-header__inner">
                <ul class="thm-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span>//</span></li>
                    <li>Portfolio</li>
                </ul>
                <h2>Our Portfolio</h2>
            </div>
        </div>
    </section>
    <!--Page Header End-->

    <!--Plans One Start-->
    <section class="plans-one">
        <div class="container">
            <div class="section-title text-center">
                <span class="section-title__tagline">Our Works</span>
                <h2 class="section-title__title">Projects We Have Done</h2>
            </div>
            <div class="row">
                <!--Plans One Single Start-->
                <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                    <div class="plans-one__single">
                        <div class="plans-one__top">
                            <p class="plans-one__sub-title">PHP Website</p>
                            <h4 class="plans-one__title">Rera Filing</h4>
                        </div>
                        <div class="plans-one__bottom p-0">
                            <img src="<?= base_url("public/assets/img/rerafiling.webp") ?>" class="w-100" alt="Rera Filing Website">
                            <a href="https://rerafiling.com/" target="_bl">
                                <div class="plans-one__icon-box">
                                    <i class="icon-wifi"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!--Plans One Single End-->

                <!--Plans One Single Start-->
                <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                    <div class="plans-one__single">
                        <div class="plans-one__top">
                            <p class="plans-one__sub-title">PHP Website</p>
                            <h4 class="plans-one__title">Dr. Rajeev Sood</h4>
                        </div>
                        <div class="plans-one__bottom p-0">
                            <img src="<?= base_url("public/assets/img/drrajeevsood.webp") ?>" class="w-100" alt="Rera Filing Website">
                            <a href="https://rerafiling.com/" target="_bl">
                                <div class="plans-one__icon-box">
                                    <i class="icon-wifi"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!--Plans One Single End-->

                <!--Plans One Single Start-->
                <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                    <div class="plans-one__single">
                        <div class="plans-one__top">
                            <p class="plans-one__sub-title">PHP Job Portal</p>
                            <h4 class="plans-one__title">The Rapid Recruiters</h4>
                        </div>
                        <div class="plans-one__bottom p-0">
                            <img src="<?= base_url("public/assets/img/therapidrecruiters.webp") ?>" class="w-100" alt="Rera Filing Website">
                            <a href="https://rerafiling.com/" target="_bl">
                                <div class="plans-one__icon-box">
                                    <i class="icon-wifi"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!--Plans One Single End-->
            </div>
        </div>
    </section>
    <!--Plans One End-->

    <!--Service Available Start-->
    <section class="service-available">
        <div class="container">
            <div class="service-available__inne">
                <div class="service-available__shape-1 float-bob-y">
                    <img src="assets/images/shapes/service-available-shape-1.png" alt="">
                </div>
                <div class="service-available__shape-2 float-bob-x">
                    <img src="assets/images/shapes/service-available-shape-2.png" alt="">
                </div>
                <div class="service-available__shape-3 float-bob-y">
                    <img src="assets/images/shapes/service-available-shape-3.png" alt="">
                </div>
                <div class="service-available__shape-4 float-bob-x">
                    <img src="assets/images/shapes/service-available-shape-4.png" alt="">
                </div>
                <div class="service-available__left">
                    <h3 class="service-available__title">Check ability to connect our <br>
                        services in your area</h3>
                </div>
                <div class="service-available__right">
                    <form class="service-available__form">
                        <div class="service-available__input-box">
                            <input type="text" placeholder="Enter address" name="address">
                            <button type="submit" class="service-available__btn thm-btn">Check availability</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Service Available End-->

    <?php
    include("includes/footer.php")
    ?>

</body>

</html>