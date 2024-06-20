const navbar = document.querySelector('#navbar');
const container = document.querySelector('#container');
const newGrid = document.querySelector('#set-grid');
const dimensions = document.querySelector('.dimensions');




let gridRow, gridColumn, gridSquares = 16;



for(let i = 0; i < gridSquares; i++){
    gridColumn = document.createElement('div');
    gridColumn.classList.add('grid-column');


    dimensions.textContent = `Dimensions: ${gridSquares} * ${gridSquares}`;
    container.appendChild(gridColumn);

    for (let i = 0; i < gridSquares; i++){
         gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        gridRow.addEventListener('mouseenter', (e) => {
           e.target.style = 'background: #EA4335; border: 2px solid blue';
        });

        gridRow.addEventListener('mouseleave', (e) => {
            e.target.style.border = '1px solid #FBBC04';
        });

        gridColumn.appendChild(gridRow);
    }
}

function newGridCords() {
    if(gridSquares) {
        container.innerHTML = '';
        dimensions.textContent = `Dimensions: ${gridSquares} * ${gridSquares}`;

        
        for(let i = 0; i < gridSquares; i++){
            gridColumn = document.createElement('div');
            gridColumn.classList.add('grid-column');

            container.appendChild(gridColumn);
    
            for (let i = 0; i < gridSquares; i++){
                 gridRow = document.createElement('div');
                 gridRow.classList.add('grid-row');

                gridRow.addEventListener('mouseenter', (e) => {
                    let newColor = Math.round(Math.random() * 200);
                   e.target.style = `background:rgb(25, ${newColor}, ${newColor}); border: 2px solid blue`;
                });

                gridRow.addEventListener('mouseleave', (e) => {
                    e.target.style.border = '1px solid #FBBC04';
                });


                gridColumn.appendChild(gridRow);
            }
        }
        
    }
}


newGrid.addEventListener('click', () => {
    gridSquares = Number(prompt('Enter new grid Dimensions', 'maximum 100'));

    if(gridSquares > 100){
        alert('Please enter a number value not exceeding 100!');
    }else{
        newGridCords();
    }
});


