import {createTag} from '../addTagElement.js';

createTag("div", "main_content", ".content", "", "");
createTag("div", "main_content_elem", ".main_content", "", "");

createTag("div", "content_left", ".main_content_elem", "", "");
createTag("span", "content_left_text1", ".content_left", "Ой!", "");
createTag("span", "content_left_text2", ".content_left", "Вы застали нас врасплох!", "");
createTag("span", "content_left_text3", ".content_left", "В данный момент наши специалисты ", "");
createTag("span", "underline", ".content_left_text3", "работают над обновлением ", "");
createTag("span", "gap", ".content_left_text3", "программного обеспечения.", "");
createTag("span", "content_left_text4", ".content_left", "Период обновления по регламенту — ", "");
createTag("b", "gap", ".content_left_text4", "30 минут", "");
createTag("span", "content_left_text42", ".content_left_text4", ", но обычно происходит гораздо быстрее. Пожалуйста, наберитесь терпения и возвращайтесь через несколько минут.", "");
createTag("div", "timer", ".content_left", "", "");
createTag("button", "button_timer", ".timer", "Обновить страницу", "refreshButton");
createTag("div", "time_timer", ".timer", "", "");
createTag("div", "time_timer_min", ".time_timer", "", "min");
createTag("div", "gap", ".time_timer", ":", "");
createTag("div", "time_timer_sec", ".time_timer", "", "sec");

createTag("div", "content_right", ".main_content_elem", "", "");

refreshButton.onclick = function int() {
    window.location.reload();
}

let timer;
let min= 5;
let sec= 1;
countdown();
function countdown(){
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    sec--;
    if(sec < 0){
        min--;
        sec= 59;
    }
    if ((min <= 0)&&(sec <= 0)){
        clearTimeout(timer);
        window.location.reload();
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}
