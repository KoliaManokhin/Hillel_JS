hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];
color = ["red", "orange", "yellow", "green", "lightblue", "blue", "violet"]

rainbow = hero.concat(native, destination);
rainbow = rainbow.reverse();

rainbow.pop("Ivan");
rainbow.shift("In");
rainbow.shift("Poltava");
rainbow.unshift("Richard");
rainbow.push("Gave", "Battle", "In", "Vain");

for (i = 0; i < rainbow.length; i++) {
    document.write(`
        <div class = "container">
            <div class="circle" style="background-color: ${color[i]};"></div>
            <p>${rainbow[i]}</p>
        </div>    
    `)
}





