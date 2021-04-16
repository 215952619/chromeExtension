export function createNotification({
    type = "basic",
    title = "",
    message = "",
}) {
    chrome.notifications.create(null, {
        type,
        iconUrl: "icons/48.png",
        title,
        message,
    });
}

/** 获取当前窗口的tabId */
export function getCurrentTab(cb) {
    if (!cb) return console.error("required a callback params");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            cb(tabs[0]);
        }
    });
}

/** 获取background，仅用于popup中 */
export function getBackEnd() {
    return chrome.extension.getBackgroundPage();
}

/** 获取popup，仅用于background中 */
export function getPopup() {
    const views = chrome.extension.getViews({ type: "popup" });

    return views.length > 0 ? views[0] : null;
}

/** popup或者background向content发送消息 */
export function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            if (callback) callback(response);
        });
    });
}

/** content发送消息给popup或者background */
export function contentSendToRuntime(message, callback) {
    chrome.runtime.sendMessage(message, function(res) {
        callback(res);
    });
}

/**
 * content接收popup或者background消息
 * popup或者background接收content消息
 */
export function listenMessage(callback) {
    chrome.runtime.onMessage.addListener(function(
        request,
        sender,
        sendResponse
    ) {
        callback(request, sendResponse);
    });
}

/** 从storage获取数据 */

/** 初始化右键菜单 */
export function initMenu(menus) {
    menus.map((item) => {
        let { click, ...menu } = item;
        chrome.contextMenus.create(menu);

        if (click) {
            chrome.contextMenus.onClicked.addListener(function(info, tab) {
                if (info.menuItemId === menu.id) {
                    click(info, tab);
                }
            });
        }
    });
}
