document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('resultSection').innerHTML = '';
});

document.getElementById('executeButton').addEventListener('click', () => {
    const queryTextarea = document.getElementById('queryTextarea');
    const resultSection = document.getElementById('resultSection');
    const startTime = performance.now();
    
    try {
        const [result] = db.exec(queryTextarea.value) || [];
        const endTime = performance.now();
        const executionTime = (endTime - startTime).toFixed(2);
        
        if (!result) {
            resultSection.innerHTML = `
                <div class="success">Query executed successfully. No results to display.</div>
                <div class="stats">Execution time: ${executionTime}ms</div>
            `;
            return;
        }
        
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        result.columns.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        result.values.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        
        resultSection.innerHTML = '';
        resultSection.appendChild(table);
        
        const stats = document.createElement('div');
        stats.textContent = `Found ${result.values.length} rows in ${executionTime}ms`;
        resultSection.prepend(stats);
        
    } catch (error) {
        resultSection.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
});