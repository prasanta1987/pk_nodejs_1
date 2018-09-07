const fs = require('fs');

module.exports = function(request,response){
	switch(request.url){
		case '/':
		dataPath = './src/index.html';
		break;
		
		default:
		dataPath = './src/404.html';
		break;
		
		}
		fs.readFile(dataPath,function(err,data){
			if(err){
				response.writeHeader('404', {'Content-Type':'text/html'});
				response.end('<h1>Something Went Wrong</h1>');
				}
				if(data){
					response.writeHeader('200', {'Content-Type':'text/html'});
					response.write(data);
					response.end();
					}
				});
}

