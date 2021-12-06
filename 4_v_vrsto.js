console.log('connected')
//var playerA = prompt('First player enter your name: ')
//var playerB = prompt('Second player enter your name: ')

var arrKolon = [[1,2,3,4,5,6],
           [1,2,3,4,5,6],
          [1,2,3,4,5,6],
          [1,2,3,4,5,6],
          [1,2,3,4,5,6],
          [1,2,3,4,5,6],
          [1,2,3,4,5,6]
          ]





var allTd = document.querySelectorAll('td') //vsi td-ji (vsa polja)

for (td of allTd) {
    klas = this.className
    td.addEventListener('click', klikFA)
}


function klikFA() {

    klas = this.className  //dobimo cifro stolpca
    this.textContent = parseInt(klas)
    klas //spremenimo tekst tega določenega td-ja
    console.log('.'+klas)

    stolpecKlas = document.getElementsByClassName(klas) //s prejšnjim klasom poiščemo vse tdje s tem klasom (v tem stolpcu)
    zadnjePoljeVStolpcu = stolpecKlas[stolpecKlas.length - 1]

    if (arrKolon[parseInt(klas)]) { //preverimo ali je v arrayu še kakšna cifra (ali je v stolpcu še kak nepobarvan krog)
        zadnjePoljeVStolpcu.style.backgroundColor = 'red';
        arrKolon[parseInt(klas)][arrKolon[parseInt(klas)].length - 1] = 'A'
    } else {
    }


}

//compoarin two arrays if they are equal
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

//var a = "100";
//var b = parseInt(a);


var Board = {
    board: [[1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6]
          ],
    //sprintaj: function() {console.log(this.board)},
    lengthOfY: function() {
        return this.board.length;},

    lengthOfX: function() {
        return this.board[0].length;},

    checkHorizontal: function() {

        for (var i = 0; i < this.lengthOfY(); i++) {
           for (var j = 0; j < 3; j++) {
               console.log(this.board[i].slice(j,j+4))
               if (arrayEquals(this.board[i].slice(j,j+4), ['X', 'X', 'X', 'X'])){return 'zmagal X'}
               }

           console.log('------------------------')
           }
        //return 'hello'
        }

    }



var x = Board
console.log(Board.lengthOfY())
console.log(Board.lengthOfX())
//console.log(Board.dolzina)
console.log(Board.board)
//console.log(Board.sprintaj())
console.log(Board.checkHorizontal())

console.log(['X', 'X', 'X', 'X'] === ['X', 'X', 'X', 'X'])
console.log(arrayEquals(['X', 'X', 'X', 'X'],['X', 'X', 'X', 'X']))