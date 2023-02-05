var a=49;

export default a;

export var b=7;

export function add() 
{
    console.log("add function Invoked from Module....");
    console.log("Add :"+(a+b));
}

export function sub() 
{
    console.log("sub function Invoked from Module....");
    console.log("Sub :"+(a-b));
}

export function mul() 
{
    console.log("mul function Invoked from Module....");
    console.log("Mul :"+(a*b));
}

export function div() 
{
    console.log("div function Invoked from Module....");
    console.log("Div :"+(a/b));
}

