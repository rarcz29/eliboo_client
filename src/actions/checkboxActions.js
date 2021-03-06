const clearCheckboxes = () => {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
};

const handleTopCheckboxChange = (event) => {
    const topCheckbox = event.target;
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => (checkbox.checked = topCheckbox.checked));
};

export default { clearCheckboxes, handleTopCheckboxChange };
