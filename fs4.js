const fs = require('fs');

// Array of cricketers objects
const cricketers = [
    { name: 'Virat Kohli', number: 18 },
    { name: 'Rohit Sharma', number: 45 },
    { name: 'MS Dhoni', number: 7 },
    { name: 'Sachin Tendulkar', number: 10 },
    { name: 'AB de Villiers', number: 17 }
];

// Write array to cricketer.txt as JSON
fs.writeFile('cricketer.txt', JSON.stringify(cricketers, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Cricketers data written to cricketer.txt');

    // Read the file and display objects on console
    fs.readFile('cricketer.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const cricketersData = JSON.parse(data);
        console.log('Cricketers from file:');
        cricketersData.forEach((player, index) => {
            console.log(`${index + 1}. Name: ${player.name}, Number: ${player.number}`);
        });
    });
});
