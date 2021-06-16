/*search form*/
function CheckForm(theForm) {
    if (theForm.keywords.value == "Search") {
        alert('Please enter the keywords');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "产品搜索"){
        alert('请输入关键字');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "製品検索"){
        alert('キーワードを入力してください');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "Stichwort"){
        alert('Bitte geben Sie einen Suchbegriff ein!');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "Recherche"){
        alert('Entrez des mots-clés');
        theForm.keywords.focus();
        return false
    }else if(theForm.keywords.value == "buscar"){
        alert('Por favor, introduzca las palabras clave');
        theForm.keywords.focus();
        return false
    }else{
        return true
    }

}
function OnFocusFun(element, elementvalue) {
    if (element.value == elementvalue) {
        element.value = "";
        element.style.color="#fff";
    }
}
function OnBlurFun(element, elementvalue) {
    if (element.value == "" || element.value.replace(/\s/g, "") == "") {
        element.value = elementvalue;
        element.style.color="#fff";
    }
}

