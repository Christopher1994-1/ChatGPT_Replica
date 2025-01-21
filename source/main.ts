//. CLOSE TAB BUTTON
const close_tab_button = document.getElementById('close_tab_button') as HTMLElement | null;


//. NEW CHAT BUTTON
const new_chat_button = document.getElementById('new_chat_button') as HTMLElement | null;


//. NAME OF TAB PREFERENCE VAR
let TAB_P: string = "tab-cej-kirk-00282ka"




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
    
}




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

}




