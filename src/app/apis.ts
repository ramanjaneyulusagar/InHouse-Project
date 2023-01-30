export class apis {
  static url: any;
  // url:'http://localhost:8080/app',
  // searchApi:'http://localhost:8080/app/search/1/10',
  // uploadApi:'http://localhost:8080/app/uploadFile',
  // loginApi:'http://localhost:8080/app/login',
  // newUserApi:'http://localhost:8080/app/usersave',

  public static  SEARCH(){
   return 'http://localhost:8080/app/search/1/1000';
  }
  public static  LOGIN(){
    return 'http://localhost:8080/app/login';
   }
   public static  UPLOADFILE(){
    return 'http://localhost:8080/app/uploadFile';
   }
   public static  USERSAVE(){
    return 'http://localhost:8080/app/usersave';
   }
   url='http://localhost:8080/app/search';
   public static serachUrl(){
    return this.url
   }
}
