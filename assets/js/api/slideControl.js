  window.IMAGE_BASE = "https://cervical.praispranav.com/static";

  window.getSlides = async function () {
    try {
      const res = await fetch(
        "https://cervical.praispranav.com/day-template/get-slide"
      );
      const result = await res.json();
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

    if (!slides.length) {
      container.insertAdjacentHTML(
        "beforeend",
        "<p style='color:white'>No data</p>"
      );
      return;
    }

    slides.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    slides.forEach((slide) => {
      const imgURL = `${window.IMAGE_BASE}/${slide.image}`;

      const leftAlign = slide.align === "left";

      const contentCol = `
        <div class="col-lg-6">
          <div class="banner-content">
            <h1 class="title mt-4 mt-lg-0 pt-5">${slide.heading || ""}</h1>
            <p class="para pb-32">${slide.subHeading || ""}</p>

            ${
              slide.showButton && slide.buttonText && slide.buttonLink
                ? `<div class="btn-area4">
                  <a href="${slide.buttonLink}" class="header-btn1 btn-purple btn-purple">${slide.buttonText}
                    <span><i class="fa-solid fa-arrow-right"></i></span></a>
                </div>`
                : ""
            }
          </div>
        </div>`;

      const imageCol = `
        <div class="col-lg-6 d-none d-lg-block">
          <div class="row">
            <div class="col-lg-12">
              <div class="vl-banner-thumb" style="top: 150px;">
                <img src="${imgURL}" alt=""
                  style="height: 530px;width: 630px; padding: 80px 20px 20px 20px">
              </div>
              ${
                slide.imageCaption
                  ? `<div class="col-lg-10">
                      <h4 class="para pb-32" style="position: absolute;
                        top: 680px;
                        padding: 0 20px;
                        color: #fff;
                        transition: 1500ms;">${slide.imageCaption}</h4>
                    </div>`
                  : ""
              }
            </div>
          </div>
        </div>`;

      const slideHTML = `
        <div class="vl-banner4">
          <div class="shape2"><img src="assets/img/icons/vl-home-arrow-4.2.svg" alt=""></div>
          <div class="shape3"><img src="assets/img/shape/hand-shape4.1.png" alt=""></div>
          <div class="shape"><img src="assets/img/icons/vl-home-arrow-4.1.svg" alt=""></div>
          <div class="container">
            <div class="row ${leftAlign ? "" : "ps-4"}">
              ${leftAlign ? `${contentCol}${imageCol}` : `${imageCol}${contentCol}`}
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
