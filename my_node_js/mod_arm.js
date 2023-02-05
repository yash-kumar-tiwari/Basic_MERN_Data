export function armstrong(n)
{
    // var flag=1;
    var temp=n;
    var rem, sum=0, count=0;

    while(n>0)
    {
        count++;
        n=parseInt(n/10);
    }
    n=temp;
    while(n>0)
    {
        rem=n%10;
        sum=sum+Math.pow(rem,count);
        n=parseInt(n/10);
    }

    if(sum==temp)
    {
        console.log("Armstrong");
    }
    else
    console.log("Not Armstrong");
}