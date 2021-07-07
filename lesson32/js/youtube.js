// @ts-check
/*
let password;
do
{
    password = prompt("What is the passccode?");
}
while(password.toLowerCase() !== "Let me in");
*/
let checkStr = "Search this string baby";
let charToSearch = "c";
for(let i = 0; i < checkStr.length; i++)
{
    if(charToSearch === checkStr[i])
    {
        console.log(checkStr[i] + " is found at index " + i);
    }
}