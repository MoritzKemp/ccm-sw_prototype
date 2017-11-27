/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
    var component = {
        name: "sw_prototype",
        ccm: 'https://akless.github.io/ccm/ccm.js',
        config:{},
        Instance: function(){
            let self = this;
            let my = {};
            
            this.init = function( callback ){
                callback();
            };
            
            this.ready = function( callback ){
                my = self.ccm.helper.privatize(self);
                callback();
            };
            
            this.start = function( callback ){
                navigator.serviceWorker.register("sw.js");
                navigator.serviceWorker.ready.then( reg =>{
                    reg.active.postMessage({"resource": "./test.js"});
                });
                if(callback) callback();
            };
        }
    };
    
    //The following code gets the framework and registers component from above
    function p(){window.ccm[v].component(component);}
    var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}} 
}());