var Translater = new Translater();

    var btns = document.getElementById('btns');

    for (var i = 0; i < btns.childNodes.length; i++) {
        var  str = btns.childNodes[i].outerHTML;
        if(str){
            str = str.match(/onclick=\"setlang\(\'(.*?)\'\,/);
            if(str.length>1 && str[1] === Translater.lang_name){
                btns.childNodes[i].className = 'btn active'
            }else{
                btns.childNodes[i].className = 'btn'
            }
        }
    }

    function setlang(name,self){
        Translater.setLang(name);
        var btns = self.parentNode.children;
        for (var i = 0; i < btns.length; i++) {
            btns[i].className = 'btn';
        }
        self.className = 'btn active';
    }