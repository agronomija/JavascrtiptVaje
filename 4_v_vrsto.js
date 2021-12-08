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
        return this.board.length;
        },


    lengthOfX: function() {
        return this.board[0].length;
        },


    checkHorizontal: function() {
        for (var i = 0; i < this.lengthOfY(); i++) {
           for (var j = 0; j < 3; j++) {
               console.log(this.board[i].slice(j,j+4))
               if (arrayEquals(this.board[i].slice(j,j+4), ['A', 'A', 'A', 'A'])){return 'zmagal A po horizontali'}
               }

           console.log('------------------------')
           }
        //return 'hello'
        },

    checkVertical: function() {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                console.log(this.board[j][i])
                console.log(this.board[j + 1][i])
                console.log(this.board[j + 2][i])
                console.log(this.board[j + 3][i])
                console.log('-------------------------------------')
                if (this.board[j][i] == 'A' && //Če so 4 v vrsto dol vrne 'Zmagal B' in prekine zanko
                    this.board[j + 1][i] == 'A' &&
                    this.board[j + 2][i] == 'A' &&
                    this.board[j + 3][i] == 'A') {console.log('Zmagal A')
                        return 'Zmagal A po vertikali'}
                else {console.log('ni še zmagal A')}
            }
        }
        },

    checkDiagonalNegative: function() {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                console.log(this.board[i][j])
                console.log(this.board[i+1][j+1])
                console.log(this.board[i+2][j+2])
                console.log(this.board[i+3][j+3])
                console.log('-----------------------')
                if (this.board[i][j] == 'A' && //preverimo vse diagonale iz leve strani proti dol
                    this.board[i+1][j+1] == 'A' &&
                    this.board[i+2][j+2] == 'A' &&
                    this.board[i+3][j+3] == 'A') {console.log('Zmagal A po diagonali')
                        return 'Zmagal A po diagonali'}
                }

            }
        },

    checkDiagonalPositive: function() {
        for (var i = 7; i > 3; i--) {
            for (var j = 6; j > 2; j--) {
                console.log(this.board[i][j])
                console.log(this.board[i - 1][j - 1])
                console.log(this.board[i - 2][j - 2])
                console.log(this.board[i - 3][j - 3])
                console.log('-----------------------')
                if (this.board[i][j] == 'A' && //preverimo vse diagonale iz leve strani proti dol
                    this.board[i - 1][j - 1] == 'A' &&
                    this.board[i - 2][j - 2] == 'A' &&
                    this.board[i - 3][j - 3] == 'A') {console.log('Zmagal A po diagonali')
                        return 'Zmagal A po diagonali'}
                }

            }
        }
    }



var x = Board
//console.log(Board.lengthOfY())
//console.log(Board.lengthOfX())
//console.log(Board.dolzina)
//console.log(Board.board)
//console.log(Board.sprintaj())
//console.log(Board.checkHorizontal())
//console.log(Board.checkVertical())
console.log(Board.checkDiagonalPositive())
//console.log(['X', 'X', 'X', 'X'] === ['X', 'X', 'X', 'X'])
//console.log(arrayEquals(['X', 'X', 'X', 'X'],['X', 'X', 'X', 'X']))