"use strict";
const close_tab_button = document.getElementById('close_tab_button');
const new_chat_button = document.getElementById('new_chat_button');
let TAB_P = "tab-cej-kirk-00282ka";
function update_tab_preference(mode) {
    localStorage.setItem(TAB_P, mode);
}
;
if (close_tab_button) {
    close_tab_button.addEventListener('mouseenter', (event) => {
        const banner = document.createElement('div');
        banner.id = "pop-up-message";
        banner.style.position = "absolute";
        banner.style.top = "7px";
        banner.style.left = "50px";
        banner.style.fontSize = "13px";
        banner.style.backgroundColor = 'black';
        banner.style.padding = '6px';
        banner.style.borderRadius = "10px";
        banner.style.width = "220%";
        banner.textContent = "Close side bar";
        close_tab_button.appendChild(banner);
        close_tab_button.addEventListener('mouseleave', (event) => {
            let popUpMessage = document.getElementById('pop-up-message');
            popUpMessage.style.display = "none";
            close_tab_button.appendChild(popUpMessage);
        });
    });
    close_tab_button.addEventListener('mouseleave', (event) => {
        let popUpMessage = document.getElementById('pop-up-message');
        popUpMessage.style.display = "none";
        close_tab_button.appendChild(popUpMessage);
    });
    close_tab_button.addEventListener('click', (event) => {
        localStorage.removeItem(TAB_P);
        update_tab_preference('close');
        const side_panel = document.getElementById("left-panelID");
        side_panel.style.display = "none";
        const main_area = document.getElementById("word-gen-areaID");
        main_area.style.width = "100%";
        const returnBanner = document.createElement('div');
        returnBanner.className = 'returnBanner';
        returnBanner.id = "returnBannerID";
        returnBanner.style.position = "absolute";
        returnBanner.style.top = "7px";
        returnBanner.style.left = "5px";
        returnBanner.style.width = "16%";
        returnBanner.innerHTML = `
            <div class="return-buttons">
                <button id="reopen_panel" onclick="open_tab()"><i class="fa-regular fa-square-caret-right"></i></button>
                <button id="new_chat_return" onclick="new_chat()">+</button>
            </div>
        `;
        document.body.appendChild(returnBanner);
    });
}
function new_chat() {
    window.location.href = "/";
}
;
function open_tab() {
    const side_panel = document.getElementById("left-panelID");
    side_panel.style.display = "block";
    const main_area = document.getElementById("word-gen-areaID");
    main_area.style.width = "82%";
    const returnBannerID = document.getElementById("returnBannerID");
    returnBannerID.style.display = "none";
}
;
function open_project_details() {
}
;
if (new_chat_button) {
    new_chat_button.addEventListener('mouseenter', (event) => {
        const banner = document.createElement('div');
        banner.id = "pop-up-message";
        banner.style.position = "absolute";
        banner.style.top = "7px";
        banner.style.left = "50px";
        banner.style.fontSize = "13px";
        banner.style.backgroundColor = 'black';
        banner.style.padding = '6px';
        banner.style.borderRadius = "10px";
        banner.style.width = "220%";
        banner.textContent = "New Chat";
        new_chat_button.appendChild(banner);
        new_chat_button.addEventListener('mouseleave', (event) => {
            let popUpMessage = document.getElementById('pop-up-message');
            popUpMessage.style.display = "none";
            new_chat_button.appendChild(popUpMessage);
        });
    });
    new_chat_button.addEventListener('mouseleave', (event) => {
        let popUpMessage = document.getElementById('pop-up-message');
        popUpMessage.style.display = "none";
        new_chat_button.appendChild(popUpMessage);
    });
    new_chat_button.addEventListener('click', (event) => {
        window.location.href = "/";
    });
}
