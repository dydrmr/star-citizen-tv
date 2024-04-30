async function loadData() {
    programs = await fetchCSV('./data/programs.csv');
    //commercials = await fetchCSV('./data/commercials.csv');
}

async function fetchCSV(url) {
    let csvString = null;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching CSV!\nURL: ${url}\nSTATUS: ${response.status}`);
        }
        csvString = await response.text();

    } catch (error) {
        throw new Error(`Error fetching CSV:\n${error}`);
    }

    const data = parseCSV(csvString);
    return data;
}

function parseCSV(csvString) {
    const lines = csvString.split("\n");
    const headers = lines[0].split(',').map(header => header.trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(value => value.trim());
        const obj = {};

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = values[j];
        }

        data.push(obj);
    }

    return data;
}