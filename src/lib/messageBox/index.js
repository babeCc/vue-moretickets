import Vue from "vue";
import messageBoxView from "./index.vue";

export default (
    () => {

        let data = {
            title: defaultVal
        }

        let messageBoxFn = Vue.extend(messageBoxView);

        let messageBoxCallBack = (options) => {
            for (var k in options) {
                deta[k] = options[k]
            }
            let messageBoxVm = new messageBoxFn({
                el: document.createElement("div"),
                data: {
                    title: data.title
                },
                methods: {

                }
            })
            document.body.appendChild(messageBoxVm.$mount().$el)
        }

        messageBoxCallBack.type = "function";
        return messageBoxCallBack;
    }
)()