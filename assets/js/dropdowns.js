export function Dropdowns()  {
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    const dropdownList =
        [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
}