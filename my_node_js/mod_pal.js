export function palindrome(n)
{
    // var flag=1;
    var temp=n;
    var rem, sum=0;

    while(n>0)
    {
        rem=n%10;
        sum=sum*10+rem;
        n=parseInt(n/10);
    }

    if(sum==temp)
    {
        console.log("Palindrome");
    }
    else
    console.log("Not Palindrome");
}