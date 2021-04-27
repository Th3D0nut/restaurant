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

    function _changeColor (element, color) {
        element.style.backgroundColor = color;
    }

    function addTabBar(tabAmount) {
        const container = _addContainer();

        const bar = document.createElement("div");
        bar.classList.add("tab-bar");
    
        for (let i = 0; i < tabAmount; i++) {
            const tab = document.createElement("button");
            tab.classList.add("individual-tabs");
            tab.setAttribute("id", "tab" + (i + 1));
            
            /*tab.addEventListener("mouseover", _changeColor.bind(null,
                tab, "#666666"));
            tab.addEventListener("mouseout", _changeColor.bind(null, 
                tab, "#444444"));*/
            
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
        const _menuTab = document.querySelector("#tab1");
        const _contactTab = document.querySelector("#tab2");

        _dropDownContainer.classList.add("drop-down-container");
        if (type === "menu") {
            _contactTab.style.backgroundColor = "#444444";
            _menuTab.style.backgroundColor = "#555555";
            dropContent(_dropDownContainer, "menu");
        } else if (type === "contact") {
            _menuTab.style.backgroundColor = "#444444";
            _contactTab.style.backgroundColor = "#555555";
            dropContent(_dropDownContainer, "contact");
        }

        if (type === "remove") {
            tabContainer.removeChild(_dropDownContainer);
        } else {
            tabContainer.appendChild(_dropDownContainer);
        }

    }

    return { addTabBar, dropDown };

})();

export { tabbedBrowsing };