const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {  
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {      
      rl.question("Which meal is your favourite? ", (meal) => {        
        rl.question("What's your favourite thing to eat for that meal? ", (favourite) => {          
          rl.question("Which sport is your absolute favourite? ", (sport) => {            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
              console.log(`${name} loves to do ${activity} while listening to ${music}, devouring ${favourite} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power} `);
                rl.close();
            });
          });
        });
      });
    });
  });  
});