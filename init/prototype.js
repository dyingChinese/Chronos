//@ts-check
//@ts-ignore
Date.prototype.getTimeFormatString = function (
    DateTimeFormatter = "yyyy-MM-dd HH:mm:ss"
  ) {
    const _date = new Date()
    const pad = (n) => (n < 10 ? "0" + n : n);
    const options = {
      yyyy: this.getFullYear(),
      MM: pad(this.getMonth() + 1),
      dd: pad(this.getDate()),
      HH: pad(this.getHours()),
      mm: pad(this.getMinutes()),
      ss: pad(this.getSeconds()),
    };
  
    let formattedDateTime = DateTimeFormatter;
    for (const token in options) {
      const regex = new RegExp(`(${token})`, "g");
      formattedDateTime = formattedDateTime.replace(regex, options[token]);
    }
  
    return formattedDateTime;
  };
  // @ts-ignore
  console.log(new Date().getTimeFormatString());
  ;
  