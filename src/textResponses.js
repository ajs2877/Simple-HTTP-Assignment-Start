const hello = 'Hello World';

const getTimeString = () => {
    const d = new Date();
    const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return dateString;
};
const getTime = () => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(getTimeString());
    response.end();
};
const getHello = () => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(hello);
    response.end();
};

module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getTime = getTime;
module.exports.getHello = getHello;