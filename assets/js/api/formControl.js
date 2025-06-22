import { getFormControl, getTemplates } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const [formControl, templates] = await Promise.all([
        getFormControl(),
        getTemplates()
    ]);

    if (!formControl) return;

    const openerText = formControl.formOpenerButtonText || "Take a Pledge";
    document.querySelectorAll(".open-pledge-modal").forEach(btn => {
        const icon = btn.querySelector("span")?.outerHTML || "";
        btn.innerHTML = `${openerText} ${icon}`;
    });

    const modalTitle = document.getElementById("exampleModalLabel");
    if (modalTitle) modalTitle.innerText = formControl.formTitle || "Pledge Form";

    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.innerText = formControl.submitButtonText || "Submit";
        submitBtn.style.backgroundColor = formControl.submitButtonColor || "#496ad0";
        submitBtn.style.borderColor = formControl.submitButtonColor || "#496ad0";
    }

    toggleField("name", formControl.showNameField);
    toggleField("phone", formControl.showPhoneField);
    toggleField("city", formControl.showCityField);
    toggleField("email", formControl.showEmailField);

    const selectedIds = formControl.eventRadioBtns || [];
    const selectedTemplates = templates.filter(t => selectedIds.includes(t._id));
    renderRadioButtons(selectedTemplates);
});

function toggleField(id, show) {
    const fieldWrapper = document.getElementById("field-" + id);
    if (fieldWrapper) {
        fieldWrapper.classList.toggle("d-none", !show);
    }
}

function renderRadioButtons(templateList) {
    const container = document.getElementById("dynamic-radio-group");
    if (!container) return;

    container.innerHTML = "";

    if (!templateList.length) return;

    templateList.forEach((template, idx) => {
        const id = `event-radio-${idx}`;
        const wrapper = document.createElement("div");
        wrapper.className = "mb-3 form-check";

        wrapper.innerHTML = `
            <input required type="radio" name="certificate" class="form-check-input" id="${id}" value="${template._id}">
            <label class="form-check-label" for="${id}">${template.name}</label>
        `;

        container.appendChild(wrapper);
    });
}
