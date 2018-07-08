const htmlSection = document.getElementById('htmlSection');
const cssSection = document.getElementById('cssSection');
const JavaScriptSection = document.getElementById('JavaScriptSection');
const outputSection = document.getElementById('outputSection');


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

export { htmlHidden, cssHidden, JavaScriptHidden, outputHidden };
