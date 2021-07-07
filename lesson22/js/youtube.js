{
    let position = 
    {
        x: 10,
        y: 20,
        print: function()
        {
            console.log(`X: ${this.x}, Y: ${this.y}`);
        },
        myObject: {sweetProperty: "Hello Friends"}
    }

    function print()
    {
        'use strict';
        console.log(this);
    }

    // function print()
    // {
    //     console.log(`X: ${this.x}, Y: ${this.y}`);
    // }

    let myPosition = position;

    myPosition.x = 15;

    console.log(position);
    console.log(myPosition);

    print();
    position.print();
    console.log(position.myObject.sweetProperty);


}