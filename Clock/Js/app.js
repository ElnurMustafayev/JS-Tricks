import * as clock from "./clock.js";

$(function () {
    setInterval(function () { clock.update_clock(); }, 1);
})