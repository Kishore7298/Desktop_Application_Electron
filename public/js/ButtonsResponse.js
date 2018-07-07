const htmlButton = document.getElementById('htmlButton');
const cssButton = document.getElementById('cssButton');
const JavaScriptButton = document.getElementById('JavaScriptButton');
const outputButton = document.getElementById('outputButton');

htmlButton.addEventListener('click',()=>{
    if(document.getElementById('htmlSection').style.display != 'none')
        document.getElementById('htmlSection').style.display = 'none';
    else
        document.getElementById('htmlSection').style.display = 'inline';


});

cssButton.addEventListener('click',()=>{
    if(document.getElementById('cssSection').style.display != 'none')
        document.getElementById('cssSection').style.display = 'none';
    else
        document.getElementById('cssSection').style.display = 'inline';
});

JavaScriptButton.addEventListener('click',()=>{
    if(document.getElementById('JavaScriptSection').style.display != 'none')
        document.getElementById('JavaScriptSection').style.display = 'none';
    else
        document.getElementById('JavaScriptSection').style.display = 'inline';
});

outputButton.addEventListener('click',()=>{
    if(document.getElementById('outputSection').style.display != 'none')
        document.getElementById('outputSection').style.display = 'none';
    else
        document.getElementById('outputSection').style.display = 'inline';
});