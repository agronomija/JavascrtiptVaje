desicion = prompt('Would you like continue with commands? y/n')
arr = []
while (desicion !== 'y' && desicion !== 'n') {
    desicion = prompt('You did not enter right letter! Would you like continue with commands? y/n');
}

if (desicion == 'y') {
    while (true) {
        izbira = prompt('What action would you like? enter: add, quit, remove, display..')
        if (izbira == 'quit') {alert('thanks for cooperation. BYe..');
        break}
        else if (izbira == 'add') {
            ime = prompt('enter name you would like to add: ');
            arr.push(ime);}
        else if (izbira == 'remove' && arr.length != 0) {
            arr.pop()}
        else if (izbira == 'display') {
        console.log(arr)}
    }
}

else if (desicion != 'y') {
    alert('Thanks for cooperation. bye');}
