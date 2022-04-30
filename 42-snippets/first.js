var observer = new MutationObserver(function(mutations) {
   if (document.contains(document.body)) {
        var myElem = document.createElement('div');
        myElem.innerHTML = 'Hello world';
        myElem.classList.add('superbclass');
        document.body.appendChild(myElem);
        observer.disconnect();
    }
});

observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});