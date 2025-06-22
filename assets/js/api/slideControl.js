document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("slide-container");

  if (!container) {
    console.error("slide-container not found");
    return;
  }

  const slides = await window.getSlides();
  console.log("data", slides);

  if (!slides.length) {
    container.insertAdjacentHTML("beforeend", "<p style='color:white'>No data</p>");
    return;
  }

  slides.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  slides.forEach((slide) => {
    const slideHTML = `
      <div class="vl-banner4" style="margin: 40px 0; padding-bottom: 20px; background-color: rgba(0, 0, 0, 0.3); border-radius: 10px;">
        <div class="shape2"><img src="assets/img/icons/vl-home-arrow-4.2.svg" alt=""></div>
        <div class="shape3"><img src="assets/img/shape/hand-shape4.1.png" alt=""></div>
        <div class="shape"><img src="assets/img/icons/vl-home-arrow-4.1.svg" alt=""></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-content">
                <h1 class="title pt-5 text-anime-style-3" style="color: #fff;">${slide.heading}</h1>
                <p class="para pb-32" style="color: #fff;">${slide.subHeading || ""}</p>

                ${slide.showButton && slide.buttonText && slide.buttonLink ? `
                  <div class="btn-area4">
                    <a href="${slide.buttonLink}" class="header-btn1 btn-purple">
                      ${slide.buttonText}
                      <span><i class="fa-solid fa-arrow-right"></i></span>
                    </a>
                  </div>` : ""}
              </div>
            </div>

            <div class="col-lg-6 d-none d-lg-block">
              <div class="vl-banner-thumb" style="margin-bottom: 20px;">
                <img src="${window.IMAGE_BASE}/${slide.image}" alt="${slide.heading}"
                  style="height: auto; max-height: 530px; padding: 80px 20px 20px 20px; border-radius:10px;">
              </div>

              ${slide.imageCaption ? `
                <h4 class="para pb-32" style="padding: 10px 20px; color: #fff; transition: 1500ms;">
                  ${slide.imageCaption}
                </h4>` : ""}
            </div>
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", slideHTML);
  });
});

window.IMAGE_BASE = "https://cervical.praispranav.com/uploads";

window.getSlides = async function () {
  try {
    const res = await fetch("https://cervical.praispranav.com/day-template/get-slide");
    return await res.json();
  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};
