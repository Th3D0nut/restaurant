import { dropContent } from "../modules/drop_content.js";

const tabbedBrowsing = (function() {

    const _content = document.querySelector("#content");

    const _dropDownContainer = document.createElement("div");

    function _addContainer() {
        const container = document.createElement("div");
        container.classList.add("tab-container");
        _content.appendChild(container);

        return container;
    }

    function addTabBar(tabAmount) {
        const container = _addContainer();

        const bar = document.createElement("div");
        bar.classList.add("tab-bar");
    
        for (let i = 0; i < tabAmount; i++) {
            const tab = document.createElement("button");
            tab.classList.add("individual-tabs");
            tab.setAttribute("id", "tab" + (i + 1));

            if (i === 0) {
                tab.textContent = "Menu";
            } else if (i === 1) {
                tab.textContent = "Contact";
            } else {
                tab.textContent = "Tab";
            }
    
            bar.appendChild(tab);
        }

        container.appendChild(bar);
    }

    function dropDown(type) {
        const tabContainer = document.querySelector(".tab-container");

        _dropDownContainer.classList.add("drop-down-container");
        if (type === "menu") {
            dropContent(_dropDownContainer, "menu");
        } else if (type === "contact") {
            dropContent(_dropDownContainer, "contact");
        }

        if (type === "remove") {
            console.log(_dropDownContainer);
            tabContainer.removeChild(_dropDownContainer);
        } else {
            tabContainer.appendChild(_dropDownContainer);
        }

    }

    return { addTabBar, dropDown };

})();

export { tabbedBrowsing };