//. CLOSE TAB BUTTON
const close_tab_button = document.getElementById('close_tab_button') as HTMLElement | null;


//. NEW CHAT BUTTON
const new_chat_button = document.getElementById('new_chat_button') as HTMLElement | null;


//. NAME OF TAB PREFERENCE VAR
let TAB_P: string = "tab-cej-kirk-00282ka";




//! CHECKING IF SERVER IS ONLINE




//. UPDATE USER PREFERENCE FOR TAB SETTINGS
function update_tab_preference(mode:string):void {
    localStorage.setItem(TAB_P, mode);
};





if (close_tab_button) {
    close_tab_button.addEventListener('mouseenter', (event: MouseEvent) => {
        const banner = document.createElement('div');
        banner.id = "pop-up-message"

        banner.style.position = "absolute";
        banner.style.top = "7px";
        banner.style.left = "50px";
        banner.style.fontSize = "13px";
        banner.style.backgroundColor = 'black';
        banner.style.padding = '6px';
        banner.style.borderRadius = "10px"
        banner.style.width = "220%";
        
        
        //. Add content to the <div>
        banner.textContent = "Close side bar";

        //. Append the <div> to the body
        close_tab_button.appendChild(banner);

        close_tab_button.addEventListener('mouseleave', (event: MouseEvent) => {
            let popUpMessage: any = document.getElementById('pop-up-message');
    
            popUpMessage.style.display = "none";
            close_tab_button.appendChild(popUpMessage);
        });

    });

    close_tab_button.addEventListener('mouseleave', (event: MouseEvent) => {
        let popUpMessage: any = document.getElementById('pop-up-message');

        popUpMessage.style.display = "none";
        close_tab_button.appendChild(popUpMessage);
    });

    close_tab_button.addEventListener('click', (event) => {
        localStorage.removeItem(TAB_P);
        update_tab_preference('close');
        const side_panel:any = document.getElementById("left-panelID");
        side_panel.style.display = "none";
    
        const main_area:any = document.getElementById("word-gen-areaID");
        main_area.style.width = "100%";
    
        const returnBanner = document.createElement('div');
        returnBanner.className = 'returnBanner';
        returnBanner.id = "returnBannerID"

        returnBanner.style.position = "absolute";
        returnBanner.style.top = "7px";
        returnBanner.style.left = "5px";
        returnBanner.style.width = "16%";
    
        // Use innerHTML to set the HTML content of the newly created <div>
        returnBanner.innerHTML = `
            <div class="return-buttons">
                <button id="reopen_panel" onclick="open_tab()"><i class="fa-regular fa-square-caret-right"></i></button>
                <button id="new_chat_return" onclick="new_chat()">+</button>
            </div>
        `;
    
        // Append the <div> to the body
        document.body.appendChild(returnBanner);



    });
    
};




//. OPENING NEW CHAT WHEN TAB IS CLOSED
function new_chat(): void {
    window.location.href = "/";
};



//. OPENING THE NEW CHAT BUBBLE WHEN USER CLOSES TAB
function open_tab(): void {
    const side_panel:any = document.getElementById("left-panelID");
    side_panel.style.display = "block";

    const main_area:any = document.getElementById("word-gen-areaID");
    main_area.style.width = "82%";

    const returnBannerID:any = document.getElementById("returnBannerID");
    returnBannerID.style.display = "none";
};





//. OPEN PROJECT DETAILS
function open_project_details(): void {
    const projectDetails_div:any = document.createElement('div');
    projectDetails_div.className = 'projectDetails_div';
    projectDetails_div.id = "projectDetails_divID";


    //. Use innerHTML to set the HTML content of the newly created <div>
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

    //. Append the <div> to the body
    document.body.appendChild(projectDetails_div);


    // GRAB THE OVERLAY DIV (mother div)
    let overlay: HTMLElement | null = document.getElementById("projectDetails_divID");

    // GRAB THE CHILD DIV
    let child_div: HTMLElement | null = document.getElementById('child-div');

    if (overlay && child_div) {

        overlay.addEventListener("click", function (this: HTMLElement, event: MouseEvent) {
            // Check if the clicked element is the overlay div itself
            if (event.target === this) {
                close_projectDetails();
            }
        });
    }



};






//. FUNCTION TO CLOSE THE PROJECT DETAILS
function close_projectDetails(): void {
    let k: any = document.getElementById('projectDetails_divID');
    k.style.display = "none";
    document.body.removeChild(k);
};






//. FUNCTION THAT OPENS THE LEFT SIDE PANEL FOR MOBILE
function openLeftPanel(): void {
    const leftPanel:any = document.getElementById("left-panelID");
    const wordGenArea:any = document.getElementById("word-gen-areaID");
    const mobilSideID: any = document.getElementById("mobil-sideID");
    const topLeftSideButtons:any = document.getElementById("buttonsID");
    const mobilebuttons1ID:any = document.getElementById('mobile-buttons1ID');
    const HR:any = document.getElementById("panel-hr");
    const h1CONFIG:any = document.getElementById("config");

    leftPanel.style.display = "block";
    leftPanel.style.width = "100%";

    wordGenArea.style.display = "none";

    mobilSideID.style.display = 'none';

    topLeftSideButtons.style.display = "none";

    mobilebuttons1ID.style.display = 'flex';

    h1CONFIG.style.fontSize = "30px";

    HR.style.marginTop = "49px";
    HR.style.marginBottom = "71px";
};



//. FUNCTION THAT CLOSES THE LEFT SIDE PANEL FOR MOBILE
function closeMobileLeftPanel(): void {
    const leftPanel:any = document.getElementById("left-panelID");
    const wordGenArea:any = document.getElementById("word-gen-areaID");
    const mobilSideID: any = document.getElementById("mobil-sideID");
    const topLeftSideButtons:any = document.getElementById("buttonsID");
    const mobilebuttons1ID:any = document.getElementById('mobile-buttons1ID');


    leftPanel.style.display = "none";

    wordGenArea.style.display = "flex";

    mobilSideID.style.display = 'flex';

    topLeftSideButtons.style.display = "block";

    mobilebuttons1ID.style.display = 'none';
};




//. BOOLEAN TO CHECK IF MOBILE MENU IS UP
let mobileMenuBoolean: boolean = false;

//. OPEN MOBILE MENU
function openMobileMenu(): void {
    //. if menu is open
    if (mobileMenuBoolean) {
        let l: any = document.getElementById("mobileMenuID");
        document.body.removeChild(l);
        mobileMenuBoolean = false;
    }
    else {
        mobileMenuBoolean = true;
        const mobileMenu:any = document.createElement('div');
        mobileMenu.className = 'mobileMenu';
        mobileMenu.id = "mobileMenuID";
    
    
        //. Use innerHTML to set the HTML content of the newly created <div>
        mobileMenu.innerHTML = `
        <div class="lists">
            <a href="#">Portfilo Home</a>
            <a href="#">Contact Me</a>
            <a href="#">Other Projects</a>
            <a href="#" >New Chat</a>
        </div>
    
        `;
    
        //. Append the <div> to the body
        document.body.appendChild(mobileMenu);
    }
};



if (new_chat_button) {
    new_chat_button.addEventListener('mouseenter', (event: MouseEvent) => {
        const banner = document.createElement('div');
        banner.id = "pop-up-message"

        banner.style.position = "absolute";
        banner.style.top = "7px";
        banner.style.left = "50px";
        banner.style.fontSize = "13px";
        banner.style.backgroundColor = 'black';
        banner.style.padding = '6px';
        banner.style.borderRadius = "10px"
        banner.style.width = "220%";
        
        
        //. Add content to the <div>
        banner.textContent = "New Chat";

        //. Append the <div> to the body
        new_chat_button.appendChild(banner);

        new_chat_button.addEventListener('mouseleave', (event: MouseEvent) => {
            let popUpMessage: any = document.getElementById('pop-up-message');
    
            popUpMessage.style.display = "none";
            new_chat_button.appendChild(popUpMessage);
        });

    });

    new_chat_button.addEventListener('mouseleave', (event: MouseEvent) => {
        let popUpMessage: any = document.getElementById('pop-up-message');

        popUpMessage.style.display = "none";
        new_chat_button.appendChild(popUpMessage);
    });


    new_chat_button.addEventListener('click', (event: any) => {
        window.location.href = "/";
    });

};




