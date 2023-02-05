var a=101;

export default a;

export var b=7;

export function demo()
{
    console.log("demo function Invoked from Module....");
}
export function add() 
{
    console.log("add function Invoked from Module....");
    console.log("Add :"+(a+b));
}

