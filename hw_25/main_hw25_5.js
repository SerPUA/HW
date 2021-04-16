perfect(6);
function perfect (a)
{
    let res = 0;

    for (let i = 1; i <= a / 2; i +=1) {
        if (a % i === 0)
            res += i;
    }

    if (res === a){
        alert ("perfect");
     } else alert ("not perfect");
}
