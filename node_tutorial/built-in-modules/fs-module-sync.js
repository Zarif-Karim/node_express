//file sync (blocking) demo

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./first.txt','utf8');
const second = readFileSync('./second.txt','utf8');

// console.log(first,second);

//writeFileSync('./result-sync.txt','Hello this is a sync write!');
writeFileSync('./result-sync.txt','Hello this is a sync write with append!',{flag : 'a'});
