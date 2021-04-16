import { listenMessage } from "../utils/fns";

/**
 * chrome.extension(getURL , inIncognitoContext , lastError , onRequest , sendRequest)
 * chrome.i18n
 * chrome.runtime(connect , getManifest , getURL , id , onConnect , onMessage , sendMessage)
 * chrome.storage
 */

injectCustomJs();

// 向页面注入JS
function injectCustomJs(jsPath, remove = true) {
    jsPath = jsPath || "js/inject-script.js";
    var temp = document.createElement("script");
    temp.setAttribute("type", "text/javascript");
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    console.log("%o %o", temp, document);
    temp.onload = function() {
        if (remove) {
            // 放在页面不好看，执行完后移除掉
            this.parentNode.removeChild(this);
        }
    };
    document.head.appendChild(temp);
}

listenMessage(function(req, cb) {
    if (req.type == "test") {
        cb({ message: "我收到了你的消息！" });
    }
});
