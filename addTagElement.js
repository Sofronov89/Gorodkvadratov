function createTag(tag, classAdd, where, textInput, idInput){
    let createTag = document.createElement(tag);
    createTag.classList.add(classAdd);
    createTag.innerHTML = textInput;
    createTag.id = idInput;
    document.querySelector(where).append(createTag)
}

export {createTag};