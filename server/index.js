
module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  var morgan  = require('morgan'),
  intervalObj=null;
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });
  var WebSocketServer = require('ws').Server;  
  var ws = new WebSocketServer({port: 7000});


  ws.on('connection', function connection(ws) {  
    ws.on('message', function incoming(message) {
      ws.send(message+ "  " + new Date());
    });

    intervalObj = setInterval(function(){
      try{
          ws.send( "Send from server  " + new Date());
      }catch(e){
         clearInterval(intervalObj);
      }
    },5000);

  });

};
