var config = {
  apiKey: "AIzaSyA7NtFdfzpyTnQmml97jOe2lo1_MNfWe1g",
  authDomain: "maintenancemonitoringkarawang.firebaseapp.com",
  databaseURL: "https://maintenancemonitoringkarawang.firebaseio.com",
  projectId: "maintenancemonitoringkarawang",
  storageBucket: "maintenancemonitoringkarawang.appspot.com",
  messagingSenderId: "600297601182"
};

const app = firebase.initializeApp(config)

let db = app.database()

export default db
