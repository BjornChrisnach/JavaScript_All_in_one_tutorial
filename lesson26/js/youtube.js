// @ts-check
{
    let age = Number(prompt("Age?"));
    let name = prompt("Name?");
    // var name = "Caleb"; //hardcoded
    // if(age < 13 && !(name === "Caleb"))
    if(age < 13)    //identity operator // strict equality
    {
        if(name === "Caleb")
        {
            console.log("Welcome!");
        }
    }
}

// generalization