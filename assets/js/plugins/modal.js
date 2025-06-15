document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#exampleModal .needs-validation");
  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
      }
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const city = document.getElementById("city").value;
      const vaccine = document.getElementById("vaccine")?.checked;
      const mothersDay = document.getElementById("mother")?.checked;
      const elderAbuse = document.getElementById("elder-abuse")?.checked;
      const phone = document.getElementById("phone").value;
      if (vaccine && phone.length === 10) {
        const url = `https://cervical.praispranav.com/generate-certificate-mobile?name=${encodeURIComponent(
          name
        )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
          phone
        )}`;
        const url2 = `https://cervical.praispranav.com/generate-certificate?name=${encodeURIComponent(
          name
        )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
          phone
        )}`;
        if (window.innerWidth > 1000) {
          window.open(url2, "_blank");
          $("#myModal").hide();
          $("#exampleModal").hide();
          const backdrops = document.getElementsByClassName("modal-backdrop");
          const backdropsArray = Array.from(backdrops);

          backdropsArray.forEach((backdrop) => {
            if (backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
          });
        } else {
          function downloadCertificate(name, additionalText) {
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              responseType: "blob",
              body: JSON.stringify({}),
            })
              .then((response) => response.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `certificate_${name}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
              })
              .catch((error) => console.error("Error:", error));
          }
          downloadCertificate(name);
          $("#myModal").hide();
          $("#exampleModal").hide();
          const backdrops = document.getElementsByClassName("modal-backdrop");
          const backdropsArray = Array.from(backdrops);

          backdropsArray.forEach((backdrop) => {
            if (backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
          });
        }
      }

      if (mothersDay && phone.length === 10) {
        const url = `https://cervical.praispranav.com/generate-certificate-mothers-day-mobile?name=${encodeURIComponent(
          name
        )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
          phone
        )}`;
        const url2 = `https://cervical.praispranav.com/generate-certificate-mothers-day?name=${encodeURIComponent(
          name
        )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
          phone
        )}`;
        if (window.innerWidth > 1000) {
          window.open(url2, "_blank");
          $("#myModal").hide();
          $("#exampleModal").hide();
          const backdrops = document.getElementsByClassName("modal-backdrop");
          const backdropsArray = Array.from(backdrops);

          backdropsArray.forEach((backdrop) => {
            if (backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
          });
        } else {
          function downloadCertificate(name, additionalText) {
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              responseType: "blob",
              body: JSON.stringify({}),
            })
              .then((response) => response.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `certificate_${name}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
              })
              .catch((error) => console.error("Error:", error));
          }
          downloadCertificate(name);
          $("#myModal").hide();
          $("#exampleModal").hide();
          const backdrops = document.getElementsByClassName("modal-backdrop");
          const backdropsArray = Array.from(backdrops);

          backdropsArray.forEach((backdrop) => {
            if (backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
          });
        }
      }

      if (elderAbuse && phone.length === 10) {
        const url = `https://cervical.praispranav.com/generate-certificate-elder-abuse-mobile?name=${encodeURIComponent(
          name
        )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
          phone
        )}`;
        const url2 = `https://cervical.praispranav.com/generate-certificate-elder-abuse?name=${encodeURIComponent(
          name
        )}&city=${encodeURIComponent(city)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
          phone
        )}`;
        if (window.innerWidth > 1000) {
          window.open(url2, "_blank");
          $("#myModal").hide();
          $("#exampleModal").hide();
          const backdrops = document.getElementsByClassName("modal-backdrop");
          const backdropsArray = Array.from(backdrops);

          backdropsArray.forEach((backdrop) => {
            if (backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
          });
        } else {
          function downloadCertificate(name, additionalText) {
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              responseType: "blob",
              body: JSON.stringify({}),
            })
              .then((response) => response.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `certificate_${name}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
              })
              .catch((error) => console.error("Error:", error));
          }
          downloadCertificate(name);
          $("#myModal").hide();
          $("#exampleModal").hide();
          const backdrops = document.getElementsByClassName("modal-backdrop");
          const backdropsArray = Array.from(backdrops);

          backdropsArray.forEach((backdrop) => {
            if (backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
          });
        }
      }
      form.classList.add("was-validated");
    },
    false
  );
});

window.onload = function () {
  // Get all elements that have the class 'modal'
  var modals = document.getElementsByClassName("modal");

  // Loop through the collection and set the z-index

  for (var i = 0; i < modals.length; i++) {
    modals[i].style.zIndex = "9999";
  }
};
