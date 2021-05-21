
function convertFahrToCelsius(nm){
  var str = JSON.stringify(nm);
  const result = (nm - 32) * 5/9;
  var res = result.toFixed(4);
        if(!isNaN(Number(nm)) && typeof nm !== "boolean"){
           return res;
        }
        else if(Array.isArray(nm)) {
            return `${str} is not a valid number but a/an array`;

        }
        else if (typeof nm){
            return `${str} is not a valid number but a/an ${typeof nm}`;
        }
        else { 
            return `${str} is not a valid number but a/an ${typeof nm}`
        }
}
function checkYuGiOh(n){
    var res = JSON.stringify(n);
    const arr = [];
    const arr1 = [];
    if (!isNaN(Number(n)) && typeof n !== "boolean"){
        for (i = 1; i <= n; i++){
            arr.push(i);
        }
        for(i in arr){
            if(arr[i]%2 === 0 || arr[i]%3 === 0 || arr[i] % 5 === 0){
                var str = "";
                if (arr[i] % 2 === 0){
                    str +=("yu");
                }
                if (arr[i] % 3 === 0){
                    if(str != ""){
                        str  +=("-gi");
                    }
                    else{
                        str +=("gi");
                    }
                }
                if (arr[i] % 5 === 0){
                    if(str != ""){
                        str +=("-oh");
                    }
                    else{
                        str +=("oh");
                    }
                }
                arr1.push(str);
            }
            else{
                arr1.push(arr[i]);
            }
        }
        
    }
    else {
        return `Invalid Parameter : ${res}`;
    }
    return arr1;
}