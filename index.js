function streverse()
{

 let str=document.getElementById("str").value;
    let rev="";
    for(let i=str.length-1;i>=0;i--)
    {
        rev=rev+str[i];
    }

    document.getElementById("res").textContent = rev;
}


function palindrome()
{
    let n=document.getElementById("num").value;
    let number=document.getElementById("num").value;
    let rev=0;
    while(n!==0)
    {
        rev=(rev*10)+(n%10);
        n=Math.floor(n/10);
    }
   if(rev==number)
   {
    document.getElementById("res1").textContent = number+" is a Palindrome";
   }
   else
   {
       
    document.getElementById("res1").textContent = number+ " is not a Palindrome"; 
   
   }
}

function totalAmount()
{
    let subtotal=parseFloat(document.getElementById("subtotal").value);
    let tip=parseFloat(document.getElementById("tip").value);
    let amount=subtotal+(subtotal*(tip/100));
    document.getElementById("res2").textContent = "The total amount to be paid is:"+amount;

}

