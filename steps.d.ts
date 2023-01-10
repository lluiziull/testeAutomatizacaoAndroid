/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/loginPage.js');
type homePage = typeof import('homePage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
