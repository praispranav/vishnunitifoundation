import { getFormControl } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getFormControl();
    if (!data) return;

    const openerText = data.formOpenerButtonText || "Take a Pledge";
    document.querySelectorAll(".open-pledge-modal").forEach(btn => {
        const icon = btn.querySelector("span")?.outerHTML || "";
        btn.innerHTML = `${openerText} ${icon}`;
    });

    const modalTitle = document.getElementById("exampleModalLabel");
    if (modalTitle) modalTitle.innerText = data.formTitle || "Pledge Form";

    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.innerText = data.submitButtonText || "Submit";
        submitBtn.style.backgroundColor = data.submitButtonColor || "#496ad0";
        submitBtn.style.borderColor = data.submitButtonColor || "#496ad0";
    }

    toggleField("name", data.showNameField);
    toggleField("phone", data.showPhoneField);
    toggleField("city", data.showCityField);
    toggleField("email", data.showEmailField);
});

function toggleField(id, show) {
    const fieldWrapper = document.getElementById("field-" + id);
    if (fieldWrapper) {
        fieldWrapper.classList.toggle("d-none", !show);
    }
}
