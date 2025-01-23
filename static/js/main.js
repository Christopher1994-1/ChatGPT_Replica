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
;
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
    const projectDetails_div = document.createElement('div');
    projectDetails_div.className = 'projectDetails_div';
    projectDetails_div.id = "projectDetails_divID";
    projectDetails_div.innerHTML = `
        <div class="close_projectDetails">
            <button onclick="close_projectDetails()">x</button>
        </div>

        <div class="main-container" id="child-div">
            <h1>Project Details</h1>
            <p>
                This project is a custom-built implementation of ChatGPT, designed to replicate the core functionality of 
                OpenAI’s conversational AI using the OpenAI API. The primary goal of this project is to provide an intuitive, 
                user-friendly interface that allows users to interact seamlessly with the AI while offering customization 
                options for fine-tuning its behavior.
            </p>

            <p>
                The interface features a clean, minimalist design with a dark theme, focusing on simplicity and usability. 
                Users can input queries in a dedicated text box, and the AI responds in a conversational format. The project 
                also incorporates two adjustable parameters:
            </p>

            <ul>
                <li><span><b>Model Temperature: </b></span>This slider allows users to control the model's "creativity." Lower temperatures produce more focused and deterministic responses, while higher values result in more diverse and creative outputs.</li>
                <li><span><b>Token Limit: </b></span>This setting lets users define the maximum length of the AI's response, providing control over the verbosity and detail of the output.</li>
                <li><span><b>User Preference: </b></span>the project holds the preference for the user depanding rather or not they want the left hand panel tab opened or closed.</li>
                <li><span><b>API Integration: </b></span>This project demonstrates the integration of OpenAI's ChatGPT model into a customizable application, showcasing its potential for a wide range of use cases and practical applications.</li>
            </ul>

            <p>
                Overall, this project demonstrates the ability to integrate and customize OpenAI’s API within a standalone application, 
                highlighting practical skills in front-end design, API utilization, and the development of interactive tools. 
                It serves as both a functional tool and a portfolio piece, showcasing the developer's technical expertise and design 
                sensibility.
            </p>



        </div>

    `;
    document.body.appendChild(projectDetails_div);
    let overlay = document.getElementById("projectDetails_divID");
    let child_div = document.getElementById('child-div');
    if (overlay && child_div) {
        overlay.addEventListener("click", function (event) {
            if (event.target === this) {
                close_projectDetails();
            }
        });
    }
}
;
function close_projectDetails() {
    let k = document.getElementById('projectDetails_divID');
    k.style.display = "none";
    document.body.removeChild(k);
}
;
function openLeftPanel() {
    const leftPanel = document.getElementById("left-panelID");
    const wordGenArea = document.getElementById("word-gen-areaID");
    const mobilSideID = document.getElementById("mobil-sideID");
    const topLeftSideButtons = document.getElementById("buttonsID");
    const mobilebuttons1ID = document.getElementById('mobile-buttons1ID');
    const HR = document.getElementById("panel-hr");
    const h1CONFIG = document.getElementById("config");
    leftPanel.style.display = "block";
    leftPanel.style.width = "100%";
    wordGenArea.style.display = "none";
    mobilSideID.style.display = 'none';
    topLeftSideButtons.style.display = "none";
    mobilebuttons1ID.style.display = 'flex';
    h1CONFIG.style.fontSize = "30px";
    HR.style.marginTop = "49px";
    HR.style.marginBottom = "71px";
}
;
function closeMobileLeftPanel() {
    const leftPanel = document.getElementById("left-panelID");
    const wordGenArea = document.getElementById("word-gen-areaID");
    const mobilSideID = document.getElementById("mobil-sideID");
    const topLeftSideButtons = document.getElementById("buttonsID");
    const mobilebuttons1ID = document.getElementById('mobile-buttons1ID');
    leftPanel.style.display = "none";
    wordGenArea.style.display = "flex";
    mobilSideID.style.display = 'flex';
    topLeftSideButtons.style.display = "block";
    mobilebuttons1ID.style.display = 'none';
}
;
let mobileMenuBoolean = false;
function openMobileMenu() {
    if (mobileMenuBoolean) {
        let l = document.getElementById("mobileMenuID");
        document.body.removeChild(l);
        mobileMenuBoolean = false;
    }
    else {
        mobileMenuBoolean = true;
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobileMenu';
        mobileMenu.id = "mobileMenuID";
        mobileMenu.innerHTML = `
        <div class="lists">
            <a href="#">Portfilo Home</a>
            <a href="#">Contact Me</a>
            <a href="#">Other Projects</a>
            <a href="#" >New Chat</a>
        </div>
    
        `;
        document.body.appendChild(mobileMenu);
    }
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
;
