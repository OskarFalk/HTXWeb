
//Search By Press functions
function onKeyUp(){
    if(key=='ctrl'){
        
    }
}





//Functions, that search
function GoogleSearch(){
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='http://www.google.com/search?q=' + Inp;
    window.open(url,'_self');  
}

function ImageSearch(){
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='https://www.google.com/search?q=' + Inp + '&sxsrf=AOaemvI4inwD_uwRUcYmtP3zxrgWB6F6uA:1636670766123&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjtu4PdsZH0AhXmsYsKHfmgB70Q_AUoAXoECAEQAw&cshid=1636670824042842&biw=1495&bih=723&dpr=1.25';
    window.open(url,'_self');  
}

function YoutubeSearch(){
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='https://www.youtube.com/results?search_query=' + Inp;
    window.open(url,'_self');  
}

function OrdbogenSearch(){
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='https://abc.ordbogen.com/gyldendal/english/article?word='+ Inp + '&dict=gyldendal-red-daen&dir=daen';
    window.open(url,'_self');  
}

function UnityAPISearch(){
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='https://docs.unity3d.com/ScriptReference/30_search.html?q='+ Inp;
    window.open(url,'_self');  
}

function DirectSearch(){
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='https://'+ Inp;
    window.open(url,'_self');  
}

function RunEXE(){
    var Inp;
    Inp = document.getElementById('SInput').value;
    WshShell = new ActiveXObject("WScript.Shell");
    var commandToRun = 'C:/Users/oskar/Desktop/' + Inp + '.exe';
    WshShell.Run(commandToRun, 1, false);
}

function Tallinje() {
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='https://www.wolframalpha.com/input/?i='+ Inp;
    window.open(url,'_self');  
}

function GoogleDrev() {
    var SI="NEJ";
    var Inp;
    Inp = document.getElementById('SInput').value
    url ='https://drive.google.com/drive/search?q='+ Inp;
    window.open(url,'_self');  
}




//Hyper Links
function LectioLink(){
    url = 'https://www.lectio.dk/lectio/236/forside.aspx';
    window.open(url,'_self');
}

function YoutubeLink(){
    url = 'https://www.youtube.com';
    window.open(url,'_self');
}

function MessengerLink(){
    url = 'https://www.Messenger.com';
    window.open(url,'_self');
}

function FacebookLink(){
    url = 'https://www.facebook.com';
    window.open(url,'_self');
}



//Other functions

//Toggle Snow
var Toggled = false;
function ToggleButton(){
    alert('Nu sner det sku');
    if(Toggled == false){
        Toggled = true

    } else if (Toggled == true){
        Toggled = false
    }
};




