import menuItems from "./utils/menus";
import { initMenu, getCurrentTab } from "./utils/fns";

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Hello from the background");
});

initMenu(menuItems);
getCurrentTab((tab) => console.log(tab));
