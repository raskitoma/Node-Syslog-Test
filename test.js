var syslog = require('syslog');
var logger = syslog.createClient(514, 'localhost'); // port, host (int, string)
// [MODULO]-[DESCRIPCION BASICA][USER][USER-AGENT][IP][EXTRAMSG(Exceptions, adicionales, msgs)]
// Grab user-agent
var ua = 'Mozilla bla bla bla...'; // del que se quiso logear
var ip = '192.168.1.234'; // del que se quiso logear
var user = 'test-user' // del que se quiso logear
var e = 'Test - Error capturado en excepcion si es que existe o la respuesta que provocó el error.'
log_msg = "[PP-FE]-[ERR401][" + user + "][" + ua + "][" + ip + "][" + e + "]";
logger.crit(log_msg);

