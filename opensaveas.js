var OpenSaveAs = function(){

};

OpenSaveAs.open = function(callback){
    var dom = $('<div style="position:absolute; width:300px; height: 200px; top: 50%; left: 50%; margin-left: -150px; margin-top:-100px">File <input id="inputFile" type="file"><input id="openButton" type="button" value="Open"></div>')
    $('#openButton',dom).click(function(){
        callback($('#inputFile',dom).get(0).files[0]);
        $(dom).remove();
    });
    $(document.body).append(dom);
};

OpenSaveAs.saveAs = function(name,data,callback){
    var dom = $('<div style="position:absolute; width:300px; height: 200px; top: 50%; left: 50%; margin-left: -150px; margin-top:-100px">File <input id="fileName" type="text"><a id="saveButton">Save</a></div>')
    $('#fileName',dom).val(name);
    $('#saveButton',dom).mouseup(function(){
        var anchor = $('#saveButton',dom).get(0);
        var clickEvent;
        clickEvent = document.createEvent("MouseEvent");
        clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        anchor.href = data;
        anchor.download = $('#fileName',dom).val();
        anchor.dispatchEvent(clickEvent);
        callback($('#fileName',dom).val());
        $(dom).remove();
    });
    $(document.body).append(dom);
};


