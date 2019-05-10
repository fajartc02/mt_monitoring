// https://vuex.vuejs.org/en/actions.html
import db from '../firebase'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  //
  submitRegisterUserSim(context, data) {
    // firstName: '',
    // lastName: '',
    // mBSim: '',
    // mBStnk: '',
    // noPolisi: ''
    if (data.lastName === '') {
      var fullName = data.firstName
    } else {
      var fullName = `${data.firstName} ${data.lastName}`
    }
    db.ref(`members/`).push({
      fullName: fullName,
      // this field for unique
      shift: data.shift,
      noPolisi: data.noPolisi,
      checkedStatus: data.checkedStatus || '[]'
    })
    // db.ref(`members/${fullName}`).push({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   shift: data.shift,
    //   mBSim: data.mBSim,
    //   mBStnk: data.mBStnk,
    //   noPolisi: data.noPolisi
    // })
  },
  getUser({commit}) {
    axios.get('http://ec2-18-212-193-68.compute-1.amazonaws.com:3000/users')
    .then((result) => {
      commit('GET_USERS', result.data.data)
      console.log(result.data.data)
    }).catch((err) => {
      console.log(err.message);
    });
  },
  addUserDb(context, data) {
    axios.post(`http://localhost:3000/users`, {
      name: data.name,
      noreg: data.noreg,
      shift: data.shift,
      noPolice: data.noPolice,
      simValid: data.simValid,
      stnkValid: data.stnkValid
    })
    .then((result) => {
      console.log(result.data.data)
    }).catch((err) => {
      console.log(err.message);
    });
  },
  removeUserDb(context, data) {
    // console.log(data.id);
    
    axios.post(`http://localhost:3000/users/delete/${data.id}`)
    .then((result) => {
      console.log(result.data.data)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          setInterval(() => {
            window.history.go('http://localhost:8080/safetyPatrol')
          }, 1000)
        }
      })
    }).catch((err) => {
      console.log(err.message);
    });
  },
  patrolCheckedDb(context, data) {
    console.log(data.dateCheck);
    
    axios.post(`http://localhost:3000/users/patrolCheck/${data.id}`, {
      frLamp: data.frLamp,
      rrLamp: data.rrLamp,
      stopLamp: data.stopLamp,
      lfSein: data.lfSein,
      rgSein: data.rgSein,
      note: data.note,
      dateCheck: data.dateCheck
    })
    .then((result) => {
      console.log(result.data.data)
      if(result.data.data.n === 1) {
        console.log('Success');
      }
    }).catch((err) => {
      console.log(err.message);
    });
  }
  
}
