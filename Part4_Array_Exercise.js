// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew(name) {
    roster.push(name);
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove(name) {
    var index = 'None'
    for (var i = 0; i < roster.length; i++) {
        if (roster[i] == name) {
        index = i;
        break;}
    if (index != 'None') {
    roster.splice(index, 1)}
}
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(arr) {
    console.log(arr);
}

// Start by asking if they want to use the web app

var odg = prompt('Do you want to use web app? If YES type "y", if not type "n": ');

if (odg == 'n') {alert('Thanks and goodbye..')}
else if (odg != 'y') {odg = prompt('You entered wrong letter. Do you still want to use web app? If YES type "y", if not type "n": ')}

     if (odg == 'n') {alert('Thanks and goodbye..')}
else if (odg != 'y') {odg = prompt('You entered wrong letter. Do you still want to use web app? If YES type "y", if not type "n": ')}
else if (odg == 'y') {
    while (true) {
        add = prompt('Write name that you want to add or "q" to quit: ')
        if (add = 'q') {console.log('adijo add')
        break;}
        else {addNew(add)}
        remo = prompt('Write name that you want to remove or "q" to quit: ');
        if (add = 'q') {console.log('adijo remove')
        break}
        else {remove(remo)}
        display = prompt('Write name that you want to display or "q" to quit: ');
        if (add = 'q') {console.log('adijo display')
                break}
        else {display(roster)}



    }

}





else if (odg == 'y') {
    while (true) {
        add = prompt('Write name that you want to add or "q" to quit: ')
        if (add = 'q') {console.log('adijo add')
        break;}
        else {addNew(add)}
        remo = prompt('Write name that you want to remove or "q" to quit: ')
        if (add = 'q') {console.log('adijo remove')
        break}
        else {remove(remo)}
        display = prompt('Write name that you want to display or "q" to quit: ')
        if (add = 'q') {console.log('adijo display')
                break}
        else {display(roster)}



    }

}

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
