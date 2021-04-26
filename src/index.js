import { loadPage } from "../modules/load_page.js";
import { tabbedBrowsing } from "../modules/tabbed_browsing.js";

loadPage.home();
tabbedBrowsing.addTabBar(2);

const tabs = document.querySelectorAll(".individual-tabs");

let toggle = false;

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {

        if (!toggle && e.target.id === "tab1") {
            tabbedBrowsing.dropDown("menu");
            toggle = true;
        } else if (!toggle && e.target.id === "tab2") {
            tabbedBrowsing.dropDown("contact");
            toggle = true;
        } else if (toggle && e.target.id === "tab1") {
            tabbedBrowsing.dropDown("remove");
            tabbedBrowsing.dropDown("menu");
            toggle = false;
        } else if (toggle && e.target.id === "tab2") {
            tabbedBrowsing.dropDown("remove");
            tabbedBrowsing.dropDown("contact");
            toggle = false;
        }

    });
});