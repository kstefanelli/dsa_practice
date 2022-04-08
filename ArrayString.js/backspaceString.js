var backspaceCompare = function(s, t) {
    let finalS = helper(s);
    let finalT = helper(t);
    console.log(finalS, finalT)
  if(finalS === finalT){
        return true;
    }
    return false;
};
function helper(str){
    let res = [];
    for(let s of str){
        if(s !== "#"){
            res.push(s);
        }else
            res.pop();
    }
    res = res.join("");
    return res;
}