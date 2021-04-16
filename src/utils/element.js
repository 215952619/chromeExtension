import "element-ui/lib/theme-chalk/index.css";
import elementUI from "element-ui";

export default (app) => {
    app.use(elementUI, { size: "mini" });
};
