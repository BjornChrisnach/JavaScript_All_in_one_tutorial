// @ts-check
/*
let password;
do
{
    password = prompt("What is the passccode?");
}
while(password.toLowerCase() !== "Let me in");
*/
{
    let checkStr = "Search this c c string c c c baby c c c";
    let charToSearch = "c";
    for(let i = 0; i < checkStr.length; i++)
    {
        if('a' === checkStr[i] || 'e' === checkStr[i] || 
        'i' === checkStr[i] || 'o' === checkStr[i] || 
        'u' === checkStr[i])
        {
            continue;
        }
        console.log(checkStr[i]);
    }
}