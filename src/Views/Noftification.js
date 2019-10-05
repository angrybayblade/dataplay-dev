function createNotification(type,message){
    function close(){
        var elem = document.querySelector('#notif-1');
        if (elem){
            elem.parentNode.removeChild(elem);
        }
    }

    let notification = '\
            <div class="notification" id="notif-1">\
                <div class="header">\
                <div class="title">\
                    '+type+'\
                </div>\
                <div class="close" onclick="closenotification('+"1"+')">\
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