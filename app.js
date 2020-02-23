const server = require('./server');
const port = process.env.PORT || 8000;

server.get('/status', (req, res) => { res.send('Status: Success'); });
server.listen(port, () => {
    //console.log('Node Js version:', process.version)
    console.log('pwa is running on port: %s', port);
});