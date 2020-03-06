module.exports = function check(str, bracketsConfig) {
 	var x = str.length + 1;
    while(str = str.replace(/\<\>|\[\]|\{\}|\(\)|\|\||\{\}|[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/,'')){
        if(str.length == x && x != 0) return false;
        if(x == 0) return true;
        x = str.length;
    }
    return true;
}

