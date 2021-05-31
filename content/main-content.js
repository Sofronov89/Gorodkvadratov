import {createTag} from '../addTagElement.js';

let mainContent = createTag("div", "main_content", ".content", "", "");
let mainContentElem = createTag("div", "main_content_elem", ".main_content", "", "");

let contentLeft = createTag("div", "content_left", ".main_content_elem", "", "");
let contentLeft1 = createTag("span", "content_left_text1", ".content_left", "Ой!", "");
let contentLeft2 = createTag("span", "content_left_text2", ".content_left", "Вы застали нас врасплох!", "");
let contentLeft3 = createTag("span", "content_left_text3", ".content_left", "В данный момент наши специалисты ", "");
let contentLeft31 = createTag("span", "underline", ".content_left_text3", "работают над обновлением ", "");
let contentLeft32 = createTag("span", "gap", ".content_left_text3", "программного обеспечения.", "");
let contentLeft4 = createTag("span", "content_left_text4", ".content_left", "Период обновления по регламенту — ", "");
let contentLeft41 = createTag("b", "gap", ".content_left_text4", "30 минут", "");
let contentLeft42 = createTag("span", "content_left_text42", ".content_left_text4", ", но обычно происходит гораздо быстрее. Пожалуйста, наберитесь терпения и возвращайтесь через несколько минут.", "");
let contentLeft5 = createTag("div", "timer", ".content_left", "", "");
let contentLeft6 = createTag("button", "button_timer", ".timer", "Обновить страницу", "refreshButton");
let contentLeft7 = createTag("div", "time_timer", ".timer", "", "");
let contentLeft8 = createTag("div", "time_timer_min", ".time_timer", "", "min");
let contentLeft9 = createTag("div", "gap", ".time_timer", ":", "");
let contentLeft10 = createTag("div", "time_timer_sec", ".time_timer", "", "sec");

let contentRight = createTag("div", "content_right", ".main_content_elem", "", "");

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
