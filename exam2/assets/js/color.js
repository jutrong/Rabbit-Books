var forceColor = function(className, varName, color){
    const nodes = document.querySelectorAll(className);
    if(nodes != null){
        if(nodes.length > 1){
            for(i=0; i<nodes.length; i++){
                nodes[i].style.setProperty(varName, color);        
            }
        }else{
            // 210624 null 체크 추가
            if(nodes[0] != null && nodes[0] != undefined){
                nodes[0].style.setProperty(varName, color);        
            }  
        }
    }    
}

var colorSet_obj = [
    // 홈 - 1.백그라운드, 2.시민증 백그라운드, 3.카드정보 백그라운드, 4.투표/설문 d-day 텍스트, 보더컬러
    {
        className: ".changeColor",
        varName: "--changeColor",
        color: "#3258e0"
    },
    // 홈 - 1.헤더 텍스트, 2.시민증 텍스트, 3.카드정보 텍스트, 4.아이콘
    {
        className: ".changeTxt",
        varName: "--changeTxt",
        color: "#fff"
    }
];

colorSet_obj.forEach(function(obj){
    forceColor(obj.className, obj.varName, obj.color);
});