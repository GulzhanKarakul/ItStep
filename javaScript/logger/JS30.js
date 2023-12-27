//Виталий, ну эта домашка казалась такой легкой, пока я не поняла что забыла уже как все работало
// и блин информацию фиг найдешь, пришлось переводить. Хорошо что у меня есть мои кореша...

class Logger {
    static ERROR = 0;
    static INFO = 1;
    static WARNING = 2;
    static DEBUG = 3;
    static TRACE = 4;
  
    constructor(level, logAreaId) {
      this.level = level;
      this.logArea = logAreaId ? document.getElementById(logAreaId) : null;
    }
  
    setLevel(level) {
      this.level = level;
    }
  
    log(level, message) {
      if (level <= this.level) {
        let now = new Date().toISOString();
        let logLevel = this.getLogLevelString(level);
        let logMessage = `[${logLevel}] ${now} ${message}`;
  
        console.log(logMessage);
        if (this.logArea) {
          let color = this.getLogLevelColor(level);
          let p = document.createElement('p');
          p.style.color = color;
          p.textContent = logMessage;
          this.logArea.appendChild(p);
        }
      }
    }
  
    e() {
      this.log(Logger.ERROR, 'Это error сообщение');
    }
  
    i() {
      this.log(Logger.INFO, 'Это info сообщение');
    }
  
    w() {
      this.log(Logger.WARNING, 'Это warning сообщение');
    }
  
    d() {
      this.log(Logger.DEBUG, 'Это debug сообщение');
    }
  
    t() {
      this.log(Logger.TRACE, 'Это trace сообщение');
    }
  
    getLogLevelString(level) {
      switch (level) {
        case Logger.ERROR:
          return 'E';
        case Logger.INFO:
          return 'I';
        case Logger.WARNING:
          return 'W';
        case Logger.DEBUG:
          return 'D';
        case Logger.TRACE:
          return 'T';
        default:
          return '';
      }
    }
  
    getLogLevelColor(level) {
      switch (level) {
        case Logger.ERROR:
          return 'red';
        case Logger.INFO:
          return 'black';
        case Logger.WARNING:
          return 'orange';
        case Logger.DEBUG:
          return 'blue';
        case Logger.TRACE:
          return 'gray';
        default:
          return '';
      }
    }
  }

  let log = new Logger(Logger.DEBUG, 'log');
  
  log.e();
  log.i();
  log.w();
  log.d();
  log.t();

  // меняю log level
  log.setLevel(Logger.WARNING);

  log.e();
  log.i();
  log.w();
  log.d();
  log.t();