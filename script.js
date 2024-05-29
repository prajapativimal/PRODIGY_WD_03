document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart');
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let currentPlayer = 'X';
    let board = Array(9).fill(null);

    const handleClick = (e) => {
        const cell = e.target;
        const index = cell.dataset.index;

        if (board[index] === null && !checkWinner()) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                alert(`${currentPlayer} wins!`);
            } else if (board.every(cell => cell !== null)) {
                alert('Draw!');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    };

    const checkWinner = () => {
        return winPatterns.some(pattern => {
            return pattern.every(index => board[index] === currentPlayer);
        });
    };

    const restartGame = () => {
        board = Array(9).fill(null);
        currentPlayer = 'X';
        cells.forEach(cell => {
            cell.textContent = '';
        });
    };

    cells.forEach(cell => cell.addEventListener('click', handleClick));
    restartButton.addEventListener('click', restartGame);
});
