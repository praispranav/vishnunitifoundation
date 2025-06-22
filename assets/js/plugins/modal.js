document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#exampleModal .needs-validation");
  const BASE_URL = "https://cervical.praispranav.com";

  function removeBackdrops() {
    document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
  }

  function downloadCertificate(url, name) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = `certificate_${name}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((err) => console.error("Download failed", err));
  }

  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        event.stopPropagation();
      }

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const city = document.getElementById("city").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const selectedTemplateId = document.querySelector('input[name="certificate"]:checked')?.value;

      if (selectedTemplateId && phone.length === 10) {
        const isDesktop = window.innerWidth > 1000;
        const url = `${BASE_URL}/day-template/${isDesktop ? "get-certificate" : "get-certificate-mobile"}?templateId=${selectedTemplateId}&name=${encodeURIComponent(
          name
        )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;

        if (isDesktop) {
          window.open(url, "_blank");
        } else {
          downloadCertificate(url, name);
        }

        $("#myModal").hide();
        $("#exampleModal").hide();
        removeBackdrops();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

window.onload = function () {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.zIndex = "9999";
  }
};
// document.addEventListener("DOMContentLoaded", function () {
//   var form = document.querySelector("#exampleModal .needs-validation");
//   form.addEventListener(
//     "submit",
//     function (event) {
//       event.preventDefault();
//       if (!form.checkValidity()) {
//         event.stopPropagation();
//       }
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;
//       const city = document.getElementById("city").value;
//       const vaccine = document.getElementById("vaccine")?.checked;
//       const mothersDay = document.getElementById("mother")?.checked;
//       const elderAbuse = document.getElementById("elder-abuse")?.checked;
//       const phone = document.getElementById("phone").value;
//       if (vaccine && phone.length === 10) {
//         const url = `https://cervical.praispranav.com/generate-certificate-mobile?name=${encodeURIComponent(
//           name
//         )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
//           phone
//         )}`;
//         const url2 = `https://cervical.praispranav.com/generate-certificate?name=${encodeURIComponent(
//           name
//         )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
//           phone
//         )}`;
//         if (window.innerWidth > 1000) {
//           window.open(url2, "_blank");
//           $("#myModal").hide();
//           $("#exampleModal").hide();
//           const backdrops = document.getElementsByClassName("modal-backdrop");
//           const backdropsArray = Array.from(backdrops);

//           backdropsArray.forEach((backdrop) => {
//             if (backdrop.parentNode) {
//               backdrop.parentNode.removeChild(backdrop);
//             }
//           });
//         } else {
//           function downloadCertificate(name, additionalText) {
//             fetch(url, {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               responseType: "blob",
//               body: JSON.stringify({}),
//             })
//               .then((response) => response.blob())
//               .then((blob) => {
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement("a");
//                 a.href = url;
//                 a.download = `certificate_${name}.pdf`;
//                 document.body.appendChild(a);
//                 a.click();
//                 a.remove();
//               })
//               .catch((error) => console.error("Error:", error));
//           }
//           downloadCertificate(name);
//           $("#myModal").hide();
//           $("#exampleModal").hide();
//           const backdrops = document.getElementsByClassName("modal-backdrop");
//           const backdropsArray = Array.from(backdrops);

//           backdropsArray.forEach((backdrop) => {
//             if (backdrop.parentNode) {
//               backdrop.parentNode.removeChild(backdrop);
//             }
//           });
//         }
//       }

//       if (mothersDay && phone.length === 10) {
//         const url = `https://cervical.praispranav.com/generate-certificate-mothers-day-mobile?name=${encodeURIComponent(
//           name
//         )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
//           phone
//         )}`;
//         const url2 = `https://cervical.praispranav.com/generate-certificate-mothers-day?name=${encodeURIComponent(
//           name
//         )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
//           phone
//         )}`;
//         if (window.innerWidth > 1000) {
//           window.open(url2, "_blank");
//           $("#myModal").hide();
//           $("#exampleModal").hide();
//           const backdrops = document.getElementsByClassName("modal-backdrop");
//           const backdropsArray = Array.from(backdrops);

//           backdropsArray.forEach((backdrop) => {
//             if (backdrop.parentNode) {
//               backdrop.parentNode.removeChild(backdrop);
//             }
//           });
//         } else {
//           function downloadCertificate(name, additionalText) {
//             fetch(url, {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               responseType: "blob",
//               body: JSON.stringify({}),
//             })
//               .then((response) => response.blob())
//               .then((blob) => {
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement("a");
//                 a.href = url;
//                 a.download = `certificate_${name}.pdf`;
//                 document.body.appendChild(a);
//                 a.click();
//                 a.remove();
//               })
//               .catch((error) => console.error("Error:", error));
//           }
//           downloadCertificate(name);
//           $("#myModal").hide();
//           $("#exampleModal").hide();
//           const backdrops = document.getElementsByClassName("modal-backdrop");
//           const backdropsArray = Array.from(backdrops);

//           backdropsArray.forEach((backdrop) => {
//             if (backdrop.parentNode) {
//               backdrop.parentNode.removeChild(backdrop);
//             }
//           });
//         }
//       }

//       if (elderAbuse && phone.length === 10) {
//         const url = `https://cervical.praispranav.com/generate-certificate-elder-abuse-mobile?name=${encodeURIComponent(
//           name
//         )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
//           phone
//         )}`;
//         const url2 = `https://cervical.praispranav.com/generate-certificate-elder-abuse?name=${encodeURIComponent(
//           name
//         )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
//           phone
//         )}`;
//         if (window.innerWidth > 1000) {
//           window.open(url2, "_blank");
//           $("#myModal").hide();
//           $("#exampleModal").hide();
//           const backdrops = document.getElementsByClassName("modal-backdrop");
//           const backdropsArray = Array.from(backdrops);

//           backdropsArray.forEach((backdrop) => {
//             if (backdrop.parentNode) {
//               backdrop.parentNode.removeChild(backdrop);
//             }
//           });
//         } else {
//           function downloadCertificate(name, additionalText) {
//             fetch(url, {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               responseType: "blob",
//               body: JSON.stringify({}),
//             })
//               .then((response) => response.blob())
//               .then((blob) => {
//                 const url = window.URL.createObjectURL(blob);
//                 const a = document.createElement("a");
//                 a.href = url;
//                 a.download = `certificate_${name}.pdf`;
//                 document.body.appendChild(a);
//                 a.click();
//                 a.remove();
//               })
//               .catch((error) => console.error("Error:", error));
//           }
//           downloadCertificate(name);
//           $("#myModal").hide();
//           $("#exampleModal").hide();
//           const backdrops = document.getElementsByClassName("modal-backdrop");
//           const backdropsArray = Array.from(backdrops);

//           backdropsArray.forEach((backdrop) => {
//             if (backdrop.parentNode) {
//               backdrop.parentNode.removeChild(backdrop);
//             }
//           });
//         }
//       }
//       form.classList.add("was-validated");
//     },
//     false
//   );
// });

// window.onload = function () {
//   // Get all elements that have the class 'modal'
//   var modals = document.getElementsByClassName("modal");

//   // Loop through the collection and set the z-index

//   for (var i = 0; i < modals.length; i++) {
//     modals[i].style.zIndex = "9999";
//   }
// };
