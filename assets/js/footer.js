document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const yearElement = document.createElement('span');
    yearElement.textContent = currentYear;
    document.querySelector('.site-footer').appendChild(yearElement);
});
