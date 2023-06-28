import {Dropdown} from "bootstrap";

export const Dropdowns = () =>  {
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    let dropdownList;
    return dropdownList =
        [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl))

}