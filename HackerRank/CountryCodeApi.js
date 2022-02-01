'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
let axios = require("axios");

  async function getData(pageNr) {
    const url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNr}`;

    const response = await axios.get(url);
    const data = response.data;

    const currentPage = Number(data.page);
    const totalPages = Number(data.total_pages);

    let countryName = null;

    data.data.forEach(country => {
      if (country.alpha2Code === code) countryName = country.name;
    });

    if (!countryName && currentPage < totalPages) {
      return await getData(currentPage + 1);
    } else {
      return countryName;
    }
  }

  return await getData(0);
}

getCountryName("AF");

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const code = readLine().trim();

  const name = await getCountryName(code);

  ws.write(`${name}\n`);

}