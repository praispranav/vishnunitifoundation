window.IMAGE_BASE = "https://cervical.praispranav.com/static";

window.getSlides = async function () {
  try {
    const res = await fetch(
      "https://cervical.praispranav.com/day-template/get-slide"
    );
    const result = await res.json();
    console.log(result.length);
    return result;
  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("slider");

  if (!container) {
    console.error("slider not found");
    return;
  }

  const slides = await window.getSlides();
  console.log("data", slides);

  if (!slides.length) {
    container.insertAdjacentHTML(
      "beforeend",
      "<p style='color:white'>No data</p>"
    );
    return;
  }

  slides.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  slides.forEach((slide) => {
    const slideHTML = `
        <div class="vl-banner4">
            <div class="shape2"><img src="assets/img/icons/vl-home-arrow-4.2.svg" alt=""></div>
            <div class="shape3"><img src="assets/img/shape/hand-shape4.1.png" alt=""></div>
            <div class="shape"><img src="assets/img/icons/vl-home-arrow-4.1.svg" alt=""></div>

            <div class="container">
                <div class="row">
                <div class="col-lg-6">
                <div class="banner-content ">
                <p style="color: red; font-size:20px;">Hello</p>
                            <br>
                            <h1 class="title pt-5">HPV Vaccination: Protecting today's youth for a cancer-free tomorrow.
                            </h1>
                            <p class="para pb-32">Invest your future: HPV Vaccination, safeguarding against Cervical
                                Cancers.
                            </p>
                            <!-- btn area -->
                            <div class="btn-flex-area d-none">
                                <div class="btn-area4 ">
                                    <a href="contact.html" class="header-btn1 btn-purple btn-purple">Spread Kindness
                                        <span><i class="fa-solid fa-arrow-right"></i></span></a>
                                </div>
                                <div class="vl-video-play">
                                    <a href="https://www.youtube.com/watch?v=HkYGxh1XUGQ"
                                        class="video-play-button video popup-video" tabindex="-1">
                                        <span></span>
                                    </a>
                                    <div class="video-text">
                                        <h6 class="vtitle video">
                                            <a class="vtitle video popup-video"
                                                href="https://www.youtube.com/watch?v=HkYGxh1XUGQ">How We Work</a>

                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="vl-banner-thumb" style="top: 150px;">
                                    <img src="assets/img/banner/5.png" alt=""
                                        style="height: 530px;width: 630px; padding: 80px 20px 20px 20px">
                                </div>
                                <div class="col-lg-12">
                                    <h4 class="para pb-32" style="position: absolute;
                                top: 6150px;
                                padding: 0 20px;
                                color: #fff;
                                transition: 1500ms;">Celebrating 1100 + HPV Vaccinations !</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;

    container.insertAdjacentHTML("beforeend", slideHTML);
  });

  $(".baner4-active").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
