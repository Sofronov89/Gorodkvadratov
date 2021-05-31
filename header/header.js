import {createTag} from '../addTagElement.js';

let header = createTag("header", "header", ".content", "", "");
let contentHeader = createTag("div", "content_header", ".header", "", "");
let mainLogo = createTag("div", "main_logo", ".content_header", "", "");
let logo = createTag("div", "logo", ".main_logo", "", "");
let logoPicFirst = createTag("div", "logo_pic_first", ".logo", "", "");
let logoPicSecond = createTag("div", "logo_pic_second", ".logo", "", "");
let text_logo = createTag("div", "text_logo", ".main_logo", "ГОРОД КВАДРАТОВ", "");
let headerText = createTag("div", "header_text", ".content_header", "Поисковая система по всей недвижимости в России", "");
let line = createTag("div", "after_line", ".header", "", "");