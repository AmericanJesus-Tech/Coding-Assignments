let box0 = $('#box0');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');

let player1 = "x";
let player2 = "O";

let turn = 0;
let winner = false;

$('#alertStart').hide();
$('#alertWinner').hide();
$('#alertDraw').hide();

let currentPlayer = '';

const winningCombos = [
    [box0, box1, box2], [box3, box4, box5], [box6, box7, box8],
    [box0, box3, box6], [box1, box4, box7], [box2, box5, box8],
    [box0, box4, box8], [box2, box4, box6]
];

const endGame = () =>{
    console.log('Game Over');
    $(".box").css("pointer-events", "none");
    $('#p1').removeClass('text-light bg-danger border border-dark');
    $('#p2').removeClass('text-light bg-danger border border-dark');
}

const checkWinner = (currentPlayer, a, b, c) => {
    if(a.text() === currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer){
        winner = true;

        a.removeClass('text-info bg-dark');
        b.removeClass('text-info bg-dark');
        c.removeClass('text-info bg-dark');

        a.addClass('text-light bg-danger');
        b.addClass('text-light bg-danger');
        c.addClass('text-light bg-danger');

        if(currentPlayer === 'X'){
            currentPlayer = "Player 1";
        } else{
            currentPlayer = "Player 2";
        }
        $('#alertWinner').text(`Winner is ${currentPlayer}`)
        $('#alertWinner').show();
        console.log(`Winner is ${currentPlayer}`);
        
        endGame();
    }
}

const checkCombos = () => {
    checkWinner(currentPlayer, ...winningCombos[0]);
    checkWinner(currentPlayer, ...winningCombos[1]);
    checkWinner(currentPlayer, ...winningCombos[2]);
    checkWinner(currentPlayer, ...winningCombos[3]);
    checkWinner(currentPlayer, ...winningCombos[4]);
    checkWinner(currentPlayer, ...winningCombos[5]);
    checkWinner(currentPlayer, ...winningCombos[6]);
    checkWinner(currentPlayer, ...winningCombos[7]);

    if(turn === 9 && winner === false){
        endGame();
        $('#alertDraw').show();
    }
}


const startGame = () => {
    console.log("Start Game");
    console.log(turn++);
    currentPlayer = player1;
    console.log(currentPlayer);

    $('#p1').addClass("bg-danger border border-dark")

    $('#alertStart').show();

    $('.box').on('click', function(){
        $('#alertStart').hide();

        $(this).text(currentPlayer);

        if(turn > 4){
            console.log('winner?')
            checkCombos();
        }

        if(winner === false){

            if(currentPlayer === player1){
                currentPlayer = player2;
                console.log(turn++);
                $('#p2').addClass("text-light bg-danger border border-dark")
                $('#p1').removeClass("text-light bg-danger border border-dark")
            } else {
                currentPlayer = player1;
                console.log(turn++);
                $('#p1').addClass("text-light bg-danger border border-dark")
                $('#p2').removeClass("text-light bg-danger border border-dark")
            }
            
        }

    })

}

document.getElementById('startBtn').addEventListener('click', ()=> startGame());

document.getElementById('resetBtn').addEventListener('click', ()=> document.location.reload(true));