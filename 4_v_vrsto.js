

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

    //sprintaj: function() {console.log('je funkcija')},


    fillEmptySpace: function(coordinates, char) {
        x = coordinates[0]
        y = coordinates[1]
        console.log('x: ' + x)
        console.log('y: ' + y)
        console.log(char)
        this.board[x][y] = char
        },


    lengthOfY: function() {
        return this.board.length;
        },


    lengthOfX: function() {
        return this.board[0].length;
        },

    //PREVERIMO HORIZONTALE
    checkHorizontal: function() {
        for (var i = 0; i < this.lengthOfY(); i++) {
           for (var j = 0; j < 3; j++) {
               console.log(this.board[i].slice(j,j+4))
               if ((arrayEquals(this.board[i].slice(j,j+4), ['A', 'A', 'A', 'A'])) ||
                   (arrayEquals(this.board[i].slice(j,j+4), ['B', 'B', 'B', 'B']))) {return true}
               }

           console.log('------------------------')
           }
        return false
        },
    //PREVERIMO VERTIKALE
    checkVertical: function() {

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                console.log(this.board[j][i])
                console.log(this.board[j + 1][i])
                console.log(this.board[j + 2][i])
                console.log(this.board[j + 3][i])
                console.log('-------------------------------------')
                if ((this.board[j][i] == 'A' && //Če so 4 v vrsto dol vrne true in prekine zanko
                    this.board[j + 1][i] == 'A' &&
                    this.board[j + 2][i] == 'A' &&
                    this.board[j + 3][i] == 'A') ||
                    (this.board[j][i] == 'B' &&
                    this.board[j + 1][i] == 'B' &&
                    this.board[j + 2][i] == 'B' &&
                    this.board[j + 3][i] == 'B')) {return true}
            }
        }
        return false
    },
    //PREVERJAMO NEGATIVNO DIAGONALO
    checkDiagonalNegative: function() {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                console.log(this.board[i][j])
                console.log(this.board[i+1][j+1])
                console.log(this.board[i+2][j+2])
                console.log(this.board[i+3][j+3])
                console.log('-----------------------')
                if ((this.board[i][j] == 'A' && //preverimo vse diagonale iz leve strani proti dol
                    this.board[i+1][j+1] == 'A' &&
                    this.board[i+2][j+2] == 'A' &&
                    this.board[i+3][j+3] == 'A') ||
                    (this.board[i][j] == 'A' &&
                    this.board[i+1][j+1] == 'B' &&
                    this.board[i+2][j+2] == 'B' &&
                    this.board[i+3][j+3] == 'B'))  {return true}


                }

            }
        return false
        },
    //PREVERJAMO pozitivno DIAGONALO
    checkDiagonalPositive: function() {
        for (var i = 6; i > 2; i--) {
            for (var j = 0; j < 3; j++) {
                console.log(this.board[i][j])
                console.log(this.board[i - 1][j + 1])
                console.log(this.board[i - 2][j + 2])
                console.log(this.board[i - 3][j + 3])
                console.log('-----------------------')
                if ((this.board[i][j] == 'A' && //preverimo vse diagonale iz leve strani proti dol
                    this.board[i - 1][j + 1] == 'A' &&
                    this.board[i - 2][j + 2] == 'A' &&
                    this.board[i - 3][j + 3] == 'A') ||
                    (this.board[i][j] == 'B' &&
                    this.board[i - 1][j + 1] == 'B' &&
                    this.board[i - 2][j + 2] == 'B' &&
                    this.board[i - 3][j + 3] == 'B'))
                    {return true}
                }
            console.log('*********************************')
            }
        return false
        },

    //PREVERJAMO ALI JE STOLPEC NA KATEREGA IGRALEC KLIKNE ŽE POLN, ČE NI VRNEMO PRVO PRAZNO POLJE OD SPODAJ NAVZGOR
    checkIfColumnNotFull: function(x) {
        x = parseInt(x)
        for (var i = 5; i > -1; i--) {
            console.log(x, i)
            if (!(this.board[x][i] === 'A' || this.board[x][i] === 'B')) {return 'Prvo frej polje v stolpcu ' + x + ' je: ' + i}
            }
        },

    //PONASTAVIMO BOARD NAZAJ NA ZAČETNO
    resetBoard: function() {
        this.board = [[1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6],
             [1,2,3,4,5,6]
          ]
        },



    }



var x = Board
//console.log(Board.lengthOfY())
//console.log(Board.lengthOfX())
//console.log(Board.dolzina)
//console.log(Board.board)
//console.log(Board.sprintaj())
//console.log('preverimo horizontale: ' + Board.checkHorizontal())
//console.log('preverimo vertikale: ' + Board.checkVertical())
//console.log('preverimo diagonale pozitivne: ' + Board.checkDiagonalPositive())
//console.log('preverimo diagonale negativne: ' + Board.checkDiagonalNegative())
//console.log(['X', 'X', 'X', 'X'] === ['X', 'X', 'X', 'X'])
//console.log(arrayEquals(['X', 'X', 'X', 'X'],['X', 'X', 'X', 'X']))
//console.log(Board.checkIfColumnNotFull('0'))
console.log(Board.board)
//Board.resetBoard()
//console.log(Board.board)
console.log('dodamo A na pozicijo (0,0)')
Board.fillEmptySpace([0,0], 'A')
console.log('board po dodanem A-ju...')
console.log(Board.board)
Board.resetBoard()
console.log('po resetu:')
console.log(Board.board)



//LOGIKA CELOTNE IGRE:
count = 0
A = 'Igralec ena izberi ime: '
    B = 'Igralec dve izberi ime: '
while (true) {
    document.get
}