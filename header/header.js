import {createTag} from '../addTagElement.js';

createTag("header", "header", ".content", "", "");
createTag("div", "content_header", ".header", "", "");
createTag("div", "main_logo", ".content_header", "", "");
createTag("div", "logo", ".main_logo", "", "");
createTag("div", "logo_pic_first", ".logo", "", "");
createTag("div", "logo_pic_second", ".logo", "", "");
createTag("div", "text_logo", ".main_logo", "ГОРОД КВАДРАТОВ", "");
createTag("div", "header_text", ".content_header", "Поисковая система по всей недвижимости в России", "");
createTag("div", "after_line", ".header", "", "");