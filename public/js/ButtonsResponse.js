import { htmlHidden, cssHidden, JavaScriptHidden, outputHidden } from './sectionResponsive.js'

const htmlButton = document.getElementById('htmlButton');
const cssButton = document.getElementById('cssButton');
const JavaScriptButton = document.getElementById('JavaScriptButton');
const outputButton = document.getElementById('outputButton');

const htmlSection = document.getElementById('htmlSection');
const cssSection = document.getElementById('cssSection');
const JavaScriptSection = document.getElementById('JavaScriptSection');
const outputSection = document.getElementById('outputSection');

htmlButton.addEventListener('click',()=>{
    if(htmlSection.style.display != 'none'){
        htmlSection.style.display = 'none';
        htmlHidden();
    }
    else
        htmlSection.style.display = 'inline';
});

cssButton.addEventListener('click',()=>{
    if(cssSection.style.display != 'none'){
        cssSection.style.display = 'none';
        cssHidden();
    }
    else
        cssSection.style.display = 'inline';
});

JavaScriptButton.addEventListener('click',()=>{
    if(JavaScriptSection.style.display != 'none'){
        JavaScriptSection.style.display = 'none';
        JavaScriptHidden();
    }
    else
        JavaScriptSection.style.display = 'inline';
});

outputButton.addEventListener('click',()=>{
    if(outputSection.style.display != 'none'){
        outputSection.style.display = 'none';
        outputHidden();
    }
    else
        outputSection.style.display = 'inline';
});


