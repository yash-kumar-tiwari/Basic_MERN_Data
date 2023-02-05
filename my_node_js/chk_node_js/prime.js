
num=127;

function chkAgain()
{
    console.log("Check Another Number");

}
function chkPrime(n)
{
    if(n%2!=0)
    {
        console.log("Prime Number");
    }
    else
    chkAgain();
    
}

chkPrime(num);
