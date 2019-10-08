function createNotification(type,message){
    
    let a = new Date().getTime()

    function close(){
        var elem = document.getElementById(a);
        function remove(){
            elem.parentNode.removeChild(elem);
        }
        
        if (elem){
            elem.className="notification notif-close";
            setTimeout(remove,900)
        }
    }

    let notification = '\
            <div class="notification" id="'+a+'">\
                <div class="header">\
                <div class="title">\
                    '+type+'\
                </div>\
                <div class="close" onclick="closenotification('+a+')">\
                    X\
                </div>\
                </div>\
                <div class="message">\
                '+message+'\
                </div>\
            </div>\
        '; 
    let doc = document.getElementsByClassName("notifications")[0];
    doc.innerHTML = notification;
    setTimeout(close,5000)
}

export default createNotification;