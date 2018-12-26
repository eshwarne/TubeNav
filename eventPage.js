const menuItem = {
    "id" : "tubenav",
    "title" : "tubenav",
    "contexts" : ["selection"]
};

chrome.contextMenus.create(menuItem);

function changeToURLParam (selection) {
    return encodeURI(selection).replace(/%SB/g, '[').replace(/%SB/g, ']')
}

chrome.contextMenus.onClicked.addListener(function(selection)){
     if (selection.menuItemId == "tubenav" && selection.selectionText){
         const tubeNavQuery="https://www.youtube.com/results?search_query=" + changeToURLParam(selection.selectionText)
         const createData = {
             "url" : tubeNavQuery,
             "type" : "popup",
             "top" : 5,
             "left" : 5
         };
         chrome.windows.create(createData,function(){})
     }
}