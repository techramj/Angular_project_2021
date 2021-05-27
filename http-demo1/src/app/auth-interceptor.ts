import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";


export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next:HttpHandler) {
    const modifedRequest = req.clone({
      headers: req.headers.append("auht","sample-text")
    });
    return next.handle(modifedRequest)
  }
}
