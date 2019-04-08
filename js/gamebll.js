//=====游戏业务相关JS========


//获取道具数量
function getDaojuNum(daojunStr) {
    var numObj = {};
    var daojunArray = daojunStr.split('||');
    for (i = 0; i < daojunArray.length; i++) {
        daojun = daojunArray[i].split('*');
        numObj[daojun[0]] =(numObj[daojun[0]]  ||0)+ Number(daojun[2])
    }
    return numObj;
}