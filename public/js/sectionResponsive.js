const htmlSection = document.getElementById('htmlSection');
const cssSection = document.getElementById('cssSection');
const JavaScriptSection = document.getElementById('JavaScriptSection');
const outputSection = document.getElementById('outputSection');

function sectionResponsive() {
    var htmlPressed = ()=>{
        if((cssAttribute == 'inline') && (JavaScriptAttribute == 'none') && (outputAttribute == 'none')){
            cssSection.classList.remove('col-lg-3');
            cssSection.classList.add('col-md-12')
        }
    }
}
module.exports = sectionResponsive;