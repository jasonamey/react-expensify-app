// import firebase from 'firebase'

// var firebaseConfig = {
//     apiKey: "AIzaSyDVi01ME8X7sw6g86YwxiFUhbu2cWmqE7o",
//     authDomain: "expensify-d3ef4.firebaseapp.com",
//     projectId: "expensify-d3ef4",
//     storageBucket: "expensify-d3ef4.appspot.com",
//     messagingSenderId: "973379810370",
//     appId: "1:973379810370:web:b5bbbe96c1290a29cee9db"
//   };
//   // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore()

// db.collection('cities').doc('LA').set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })


// import firebase from 'firebase';
// import 'firebase/database';
 // var firebaseConfig = {
//   apiKey: "AIzaSyDVi01ME8X7sw6g86YwxiFUhbu2cWmqE7o",
//   authDomain: "expensify-d3ef4.firebaseapp.com",
//   projectId: "expensify-d3ef4",
//   storageBucket: "expensify-d3ef4.appspot.com",
//   messagingSenderId: "973379810370",
//   appId: "1:973379810370:web:b5bbbe96c1290a29cee9db"

//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);




// firebase.database().ref().set({
//     name: 'Andrew Mead'
//   });

// const database = firebase.database();
 
// export {firebase, database as default};


import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDVi01ME8X7sw6g86YwxiFUhbu2cWmqE7o",
  authDomain: "expensify-d3ef4.firebaseapp.com",
  projectId: "expensify-d3ef4",
  storageBucket: "expensify-d3ef4.appspot.com",
  messagingSenderId: "973379810370",
  appId: "1:973379810370:web:b5bbbe96c1290a29cee9db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.database().ref().set({
//   name : 'Jason Amey'
// })

const database = firebase.database()

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val() )
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 1200,
//   createdAt: 976123498763
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) =>{
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id : childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id : childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)     
// })

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error fetching data ', e)
//   })

// database.ref().set({
//   name: 'Jason',
//   age: 43,
//   isSingle: false,
//   location: {
//     city: 'New York',
//     country: 'United States'
//   },
//   job: {
//     title: 'Custodian',
//     company: 'Google'
//   },
//   location : {
//     city : "New York",
//     country : "United States"
//   }
// })
// .then(data => {console.log("that worked ", data)})
// .catch(e => {console.log("didn't work ", e)});

// database.ref().update({
//   'job/title' : 'Custodian Part Two'
// })

// database.ref('age').set({
//   age : 44
// })