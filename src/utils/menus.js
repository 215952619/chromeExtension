import { createNotification } from "./fns";

export default [
    {
        id: "notification",
        title: "调用桌面通知",
        contexts: ["all"],
        click: function(info, tab) {
            createNotification({
                title: "这是标题",
                message: "您刚才调用了桌面通知！",
            });
        },
    },
    {
        id: "separator",
        type: "separator",
        contexts: ["all"],
    },
    {
        id: "collect",
        title: "添加到备忘录",
        contexts: ["all"],
    },
    {
        id: "collect-default",
        parentId: "collect",
        type: "checkbox",
        title: "default",
        contexts: ["all"],
    },
    {
        id: "collect-ppt",
        parentId: "collect",
        type: "checkbox",
        title: "ppt",
        contexts: ["all"],
    },
    {
        id: "collect-separator",
        type: "separator",
        contexts: ["selection"],
    },
    {
        id: "todo",
        title: "将本页面添加到备忘录",
        contexts: ["selection"],
    },
    {
        id: "todo-today",
        parentId: "todo",
        type: "radio",
        title: "today",
        contexts: ["all"],
    },
    {
        id: "todo-index",
        parentId: "todo",
        type: "radio",
        title: "index",
        contexts: ["all"],
    },
    {
        id: "separator-separator",
        type: "separator",
        contexts: ["selection"],
    },
    {
        id: "baidu-search",
        title: "使用度娘搜索：%s", // %s表示选中的文字
        contexts: ["selection"],
        click: function(info, tab) {
            chrome.tabs.create({
                url:
                    "https://www.baidu.com/s?ie=utf-8&wd=" +
                    encodeURI(info.selectionText),
            });
        },
    },
    {
        id: "google-search",
        title: "使用谷歌搜索：%s", // %s表示选中的文字
        contexts: ["selection"],
        click: function(info, tab) {
            chrome.tabs.create({
                url:
                    "https://www.baidu.com/s?ie=utf-8&wd=" +
                    encodeURI(info.selectionText),
            });
        },
    },
];
