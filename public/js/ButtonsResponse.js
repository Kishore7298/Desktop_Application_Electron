const htmlButton = document.getElementById('htmlButton');
const cssButton = document.getElementById('cssButton');
const JavaScriptButton = document.getElementById('JavaScriptButton');
const outputButton = document.getElementById('outputButton');

const htmlSection = document.getElementById('htmlSection');
const cssSection = document.getElementById('cssSection');
const JavaScriptSection = document.getElementById('JavaScriptSection');
const outputSection = document.getElementById('outputSection');

htmlButton.addEventListener('click',()=>{
    if(document.getElementById('htmlSection').style.display != 'none'){
        document.getElementById('htmlSection').style.display = 'none';
        htmlHidden();
    }
    else
        document.getElementById('htmlSection').style.display = 'inline';
});

cssButton.addEventListener('click',()=>{
    if(document.getElementById('cssSection').style.display != 'none'){
        document.getElementById('cssSection').style.display = 'none';
        cssHidden();
    }
    else
        document.getElementById('cssSection').style.display = 'inline';
});

JavaScriptButton.addEventListener('click',()=>{
    if(document.getElementById('JavaScriptSection').style.display != 'none'){
        document.getElementById('JavaScriptSection').style.display = 'none';
        JavaScriptHidden();
    }
    else
        document.getElementById('JavaScriptSection').style.display = 'inline';
});

outputButton.addEventListener('click',()=>{
    if(document.getElementById('outputSection').style.display != 'none'){
        document.getElementById('outputSection').style.display = 'none';
        outputHidden();
    }
    else
        document.getElementById('outputSection').style.display = 'inline';
});

function htmlHidden(){
    if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'none') && (outputSection.style.display == 'none')){
        cssSection.classList.remove('col-lg-6');
        cssSection.classList.add('col-lg-12');
    } else if((cssSection.style.display == 'none') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'none')){
        JavaScriptSection.classList.remove('col-lg-6');
        JavaScriptSection.classList.add('col-lg-12');
    } else if((cssSection.style.display == 'none') && (JavaScriptSection.style.display == 'none') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-6');
        outputSection.classList.add('col-lg-12')
    } else if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'none')){
        cssSection.classList.remove('col-lg-4');
        cssSection.classList.add('col-lg-6');
        JavaScriptSection.classList.remove('col-lg-4');
        JavaScriptSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'none') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-4');
        outputSection.classList.add('col-lg-6');
        JavaScriptSection.classList.remove('col-lg-4');
        JavaScriptSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'none') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-4');
        outputSection.classList.add('col-lg-6');
        cssSection.classList.remove('col-lg-4');
        cssSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'inline')){
        cssSection.classList.remove('col-lg-3');
        cssSection.classList.add('col-lg-4');
        JavaScriptSection.classList.remove('col-lg-3');
        JavaScriptSection.classList.add('col-lg-4');
        outputSection.classList.remove('col-lg-3');
        outputSection.classList.add('col-lg-4');
    }
}

function cssHidden(){
    if((htmlSection.style.display == 'inline') && (JavaScriptSection.style.display == 'none') && (outputSection.style.display == 'none')){
        htmlSection.classList.remove('col-lg-6');
        htmlSection.classList.add('col-lg-12')
    } else if((htmlSection.style.display == 'none') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'none')){
        JavaScriptSection.classList.remove('col-lg-6');
        JavaScriptSection.classList.add('col-lg-12');
    } else if((htmlSection.style.display == 'none') && (JavaScriptSection.style.display == 'none') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-6');
        outputSection.classList.add('col-lg-12')
    } else if((htmlSection.style.display == 'inline') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'none')){
        htmlSection.classList.remove('col-lg-4');
        htmlSection.classList.add('col-lg-6');
        JavaScriptSection.classList.remove('col-lg-4');
        JavaScriptSection.classList.add('col-lg-6');
    } else if((htmlSection.style.display == 'none') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-4');
        outputSection.classList.add('col-lg-6');
        JavaScriptSection.classList.remove('col-lg-4');
        JavaScriptSection.classList.add('col-lg-6');
    } else if((htmlSection.style.display == 'inline') && (JavaScriptSection.style.display == 'none') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-4');
        outputSection.classList.add('col-lg-6');
        htmlSection.classList.remove('col-lg-4');
        htmlSection.classList.add('col-lg-6');
    } else if((htmlSection.style.display == 'inline') && (JavaScriptSection.style.display == 'inline') && (outputSection.style.display == 'inline')){
        htmlSection.classList.remove('col-lg-3');
        htmlSection.classList.add('col-lg-4');
        JavaScriptSection.classList.remove('col-lg-3');
        JavaScriptSection.classList.add('col-lg-4');
        outputSection.classList.remove('col-lg-3');
        outputSection.classList.add('col-lg-4');
    }
}

function JavaScriptHidden(){
    if((cssSection.style.display == 'inline') && (htmlSection.style.display == 'none') && (outputSection.style.display == 'none')){
        cssSection.classList.remove('col-lg-6');
        cssSection.classList.add('col-lg-12')
    } else if((cssSection.style.display == 'none') && (htmlSection.style.display == 'inline') && (outputSection.style.display == 'none')){
        htmlSection.classList.remove('col-lg-6');
        htmlSection.classList.add('col-lg-12');
    } else if((cssSection.style.display == 'none') && (htmlSection.style.display == 'none') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-6');
        outputSection.classList.add('col-lg-12')
    } else if((cssSection.style.display == 'inline') && (htmlSection.style.display == 'inline') && (outputSection.style.display == 'none')){
        cssSection.classList.remove('col-lg-4');
        cssSection.classList.add('col-lg-6');
        htmlSection.classList.remove('col-lg-4');
        htmlSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'none') && (htmlSection.style.display == 'inline') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-4');
        outputSection.classList.add('col-lg-6');
        htmlSection.classList.remove('col-lg-4');
        htmlSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'inline') && (htmlSection.style.display == 'none') && (outputSection.style.display == 'inline')){
        outputSection.classList.remove('col-lg-4');
        outputSection.classList.add('col-lg-6');
        cssSection.classList.remove('col-lg-4');
        cssSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'inline') && (htmlSection.style.display == 'inline') && (outputSection.style.display == 'inline')){
        cssSection.classList.remove('col-lg-3');
        cssSection.classList.add('col-lg-4');
        htmlSection.classList.remove('col-lg-3');
        htmlSection.classList.add('col-lg-4');
        outputSection.classList.remove('col-lg-3');
        outputSection.classList.add('col-lg-4');
    }
}

function outputHidden(){
    if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'none') && (htmlSection.style.display == 'none')){
        cssSection.classList.remove('col-lg-6');
        cssSection.classList.add('col-lg-12')
    } else if((cssSection.style.display == 'none') && (JavaScriptSection.style.display == 'inline') && (htmlSection.style.display == 'none')){
        JavaScriptSection.classList.remove('col-lg-6');
        JavaScriptSection.classList.add('col-lg-12');
    } else if((cssSection.style.display == 'none') && (JavaScriptSection.style.display == 'none') && (htmlSection.style.display == 'inline')){
        htmlSection.classList.remove('col-lg-6');
        htmlSection.classList.add('col-lg-12')
    } else if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'inline') && (htmlSection.style.display == 'none')){
        cssSection.classList.remove('col-lg-4');
        cssSection.classList.add('col-lg-6');
        JavaScriptSection.classList.remove('col-lg-4');
        JavaScriptSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'none') && (JavaScriptSection.style.display == 'inline') && (htmlSection.style.display == 'inline')){
        htmlSection.classList.remove('col-lg-4');
        htmlSection.classList.add('col-lg-6');
        JavaScriptSection.classList.remove('col-lg-4');
        JavaScriptSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'none') && (htmlSection.style.display == 'inline')){
        htmlSection.classList.remove('col-lg-4');
        htmlSection.classList.add('col-lg-6');
        cssSection.classList.remove('col-lg-4');
        cssSection.classList.add('col-lg-6');
    } else if((cssSection.style.display == 'inline') && (JavaScriptSection.style.display == 'inline') && (htmlSection.style.display == 'inline')){
        cssSection.classList.remove('col-lg-3');
        cssSection.classList.add('col-lg-4');
        JavaScriptSection.classList.remove('col-lg-3');
        JavaScriptSection.classList.add('col-lg-4');
        htmlSection.classList.remove('col-lg-3');
        htmlSection.classList.add('col-lg-4');
    }
}

