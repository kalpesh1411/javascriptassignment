function username ()
{
let name = prompt('Enter Username')
console.log(name)}

function oddeven()
{
    let num=prompt('Enter A Number')
    
    if(num%2 === 0)
    {
        console.log(num ,"is a even number")
    }
    else if(num%2==1)
    {
        console.log(num,"is a odd number")
    }
    else{
        console.log("Input Invalid!")
    }
}
function prime_number(){
    let num= prompt("Enter Number to Check prime number")
    let i,x=0;

    if(num==1)
    {
        console.log("1 is not a prime number")
    }
    else if(num >=2)
    {
        for(i=2;i<num;i++)
        {
            r= num%i
            if(r==0)
            {
                x=1
            }
        }
        if(x==1)
        {
            console.log(num,"is not a prime number")
        }
        else
        {
            console.log(num,"is a prime number")
        }
    }
    else{
        console.log("Error! Input Invalid")
    }
}
function math_table()
{
    let i,multiple;
    let num= prompt("Enter the Number For printin it's Maths table")
    for(i=1;i<=10;i++)
    {
        multiple= num*i;
        console.log(num ,'*', i, '=',multiple)
          
    }
    

}