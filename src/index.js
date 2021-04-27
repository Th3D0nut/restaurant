import { loadPage } from "../modules/load_page.js";
import { tabbedBrowsing } from "../modules/tabbed_browsing.js";

loadPage.home();
tabbedBrowsing.addTabBar(2);

const tabs = document.querySelectorAll(".individual-tabs");
const menuTab = document.querySelector("#tab1");
const contactTab = document.querySelector("#tab2");

let toggle = false;
let prevClicked;

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        let click = e.target.id;
        
        if (prevClicked === click && toggle) {
            menuTab.style.backgroundColor = "#444444";
            contactTab.style.backgroundColor = "#444444";
            tabbedBrowsing.dropDown("remove");
            toggle = false;
            prevClicked = "id1";
        } else if (!toggle && e.target.id === "tab1") {
            tabbedBrowsing.dropDown("menu");
            toggle = true;
            prevClicked = "tab1";
        } else if (!toggle && e.target.id === "tab2") {
            tabbedBrowsing.dropDown("contact");
            toggle = true;
            prevClicked = "tab2";
        } else if (toggle && e.target.id === "tab1") {
            tabbedBrowsing.dropDown("remove");
            tabbedBrowsing.dropDown("menu");
            prevClicked = "tab1";
        } else if (toggle && e.target.id === "tab2") {
            tabbedBrowsing.dropDown("remove");
            tabbedBrowsing.dropDown("contact");
            prevClicked = "tab2";
        }

    });
});