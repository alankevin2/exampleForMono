var template = template || {};
template.resPath = "/MyDirectory/Projects/A_Project_Example/Template/res/";
template.res = {
	
	LiveDealerGameScene: {
        Module: {
            self: ["Chip", "CountDown"]
        },
        JSON: {
            TableInfo: {
                portrait: template.resPath + "LiveDealerJson/Module/Info/CYLiveDealerTableInfoPortrait.json",
                landscape: template.resPath + "LiveDealerJson/Module/Info/CYLiveDealerTableInfoLandscape.json"
            },
            AAAA : {
            	button : template.resPath + "mybutton/buttonAAAA.png"
            },
            BBBB : {
            	button : template.resPath + "mybutton/buttonBBBB.png"
            }
        },
        TableGameCode: [
            "#table_A.png",
            "#table_B.png",
            "#table_C.png",
            "#table_D.png",
            "#table_E.png",
            "#table_I.png",
            "#table_J.png"
        ],
        payoffWin: template.resPath + "public_image/Ultimate/home_page/home_page_pic_info_win.png",
        payoffLose: template.resPath + "public_image/Ultimate/home_page/home_page_pic_info_lose.png",
    },
    Chip: {
    	chipImg: template.resPath + "myChip.png"
    },
    CountDown: {
        progress: "#pic_time_circle_green.png",
        color: {
            red: cc.color(),
            yellow: cc.color(),
            green: cc.color()
        }
    }
};
