class AppController {
  static getHomepage(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(process.argv[2]);
    response.end('Hello Holberton School!');
  }
}

export default AppController;
