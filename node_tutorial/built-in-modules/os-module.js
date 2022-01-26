
//OS module:
const os = require('os');

// infor about current user
const user = os.userInfo();
console.log('userInfo = ',user);

// method returns the system uptime in seconds
//tilda's are used for template strings!
console.log(`System Uptime = ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(`current os info = `,currentOS);
