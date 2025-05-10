class HttpResponse<Body = any> {
  statusCode: number;
  body: Body;

  constructor(statusCode: number, body: Body) {
    this.statusCode = statusCode;
    this.body = body;
  }
}

export { HttpResponse };
