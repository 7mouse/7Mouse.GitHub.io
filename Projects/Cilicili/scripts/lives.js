
var lists = new Array;
var flag = true;
var a;
function videoListInit(str) {
    var video = document.getElementsByTagName("video");
    video[0].src = str;
    video[0].play();
    var list = document.getElementsByClassName("video-list-item-title");
    for (var i = 0; i <　list.length; i++) {
        list[i].onclick = function() {
            var ul = this.nextElementSibling;
            if (ul.style.display == "block")
            ul.setAttribute("style", "");    
            else {
                ul.setAttribute("style", "display:block;");
            }
        }
    }
    for (var j = 0; ;j++) {
        var authors = document.getElementsByClassName("video-list-item-ul")[j];
        if (authors) {
            authors = authors.getElementsByTagName("a");
            for (var k = 0; k < authors.length; k++) {
                // var a = authors[k];
                // var url = a.href;
                // authors[k].onclick = function() {
                //     video[0].src = url;
                //     video[0].play();
                //     return false;
                // }
                authors[k].onclick = function() {
                    // alert(this.href);
                    if (a) a.style = "";
                    a = this;
                    this.style = "background-color:#ddd;";
                    video[0].src = this.href;
                    video[0].play();
                    return false;
                }
            }
        } else break;
    }
}

function livesListInit() {
    var livelist = document.getElementsByClassName("video-list")[0];
    var lives = document.getElementsByClassName("lives-main-item");
    for (var i = 0; i < lives.length; i++) {
        lives[i].onclick = function() {
            if (flag) {
                document.getElementsByClassName("lives")[0].setAttribute("style", "display:block;");    
                flag = false;
            }
            // var lives_img = this.getElementsByClassName("lives-main-img");
            var lives_text = this.getElementsByClassName("lives-main-text")[0];
            var name = lives_text.textContent;
            var count = lives_text.title;
            var first_Url;
            if (lists[name] == 1) {}
            else {
                lists[name] = 1;
                var div = document.createElement("div");
                div.className = "video-list-item";
                var h2 = document.createElement("h2");
                h2.className = "video-list-item-title";
                h2.textContent = name;
                var ul = document.createElement("ul");
                ul.className = "video-list-item-ul";
                for (var j = 1; j <= count; j++) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.textContent = ""+j;
                    a.href = "./videos/"+name+"/1 (" + j + ").mp4" ;
                    if (j == 1) first_Url = a.href;
                    li.appendChild(a);
                    ul.appendChild(li);
                }
                div.appendChild(h2);
                div.appendChild(ul);
                livelist.appendChild(div);
            }
            videoListInit(first_Url);
        }
    }
}

addLoadEvent(livesListInit);