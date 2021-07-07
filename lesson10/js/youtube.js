(function()
{
    //IIFE = immediately invoked function expression
    let age = 5;
})(); // this () tells it to execute

{
    // block
    let y = 10;
    const x = 20;
    {
        let y = 6;
        console.log(y);
    }

    console.log(y);
    var z = 100;
}