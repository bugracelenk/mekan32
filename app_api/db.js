const mongoose = require("mongoose");
const dbURI = "mongodb+srv://yogi:yogi1234qwer@main.xnk1w.mongodb.net/mekan32?retryWrites=true&w=majority";
//var dbURI= 'mongodb+srv://mekan32:<password>@mekan32.1hc4v.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });

mongoose.connection.on("connected", function () {
  console.log("Mongoose " + dbURI + " adresindeki veritabanına bağlandı\n");
});
//Bağlantı hatası olduğunda konsola hata bilgisini yazdır
mongoose.connection.on("error", function (err) {
  console.log("Mongoose bağlantı hatası\n: " + err);
});
//Bağlantı  kesildiğinde konsola kesilme bilgisini yaz.
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose bağlantısı kesildi\n");
});

const kapat = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log("Mongoose kapatıldı\n " + msg);
    callback();
  });
}; // nodemon kullanıyorsanız ayrı bir kapatma işlemi gerekir.
process.once("SIGUSR2", () => {
  kapat("nodemon kapatıldı\n", () => {
    process.kill(process.pid, "SIGUSR2");
  });
}); // Uygulama kapandığında kapat.
process.on("SIGINT", () => {
  kapat("Uygulama kapatıldı\n", () => {
    process.exit(0);
  });
}); // Herokudan kapatma işlemi gerçekleşirse
process.on("SIGTERM", () => {
  kapat("heroku kapatıldı\n", () => {
    process.exit(0);
  });
});
