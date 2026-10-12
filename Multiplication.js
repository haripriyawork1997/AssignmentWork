/*const number = 5;
for (let i = 1; i <= 10; i++) {
    // Multiply given number by the current iteration index
    const result = number * i;
     // Display result in console in format "5 x i = result"
    console.log(`${number} x ${i} = ${result}`);
}*/



console.log("--- Loop Control Demonstration ---");
for (let i = 1; i <= 10; i++) {
    // Using 'continue' to skip printing 3
    if (i === 3) {
        console.log("Skipping 3 using continue");
        continue; 
    }
    if (i === 7)
         {
        console.log("Stopping loop at 7 using break");
        break; 
    }

    console.log(`Current number: ${i}`);
}