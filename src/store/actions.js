// https://vuex.vuejs.org/en/actions.html
import db from '../firebase'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  //
  submitRegisterUserSim(context, data) {
    if (data.lastName === '') {
      var fullName = data.firstName
    } else {
      var fullName = `${data.firstName} ${data.lastName}`
    }
    db.ref(`members/`).push({
      fullName: fullName,
      shift: data.shift,
      noPolisi: data.noPolisi,
      checkedStatus: data.checkedStatus || '[]'
    })
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
    axios.post(`http://localhost:3000/employees`, {
      name_employee: data.name_employee,
      noreg_employee: data.noreg_employee,
      shift: data.shift,
      no_polisi: data.no_polisi,
      berlaku_sim: data.berlaku_sim,
      berlaku_stnk: data.berlaku_stnk
    })
    .then((result) => {
      console.log(result.data.data)
    }).catch((err) => {
      console.log(err.message);
    });
  },
  editUserDb(context, data) {
    console.log(data);
    
    axios.put(`http://localhost:3000/employees/${data.id}`, {
      name_employee: data.name_employee,
      noreg_employee: data.noreg_employee,
      shift: data.shift,
      no_polisi: data.no_polisi,
      berlaku_sim: data.berlaku_sim,
      berlaku_stnk: data.berlaku_stnk
    })
    .then((result) => {
      console.log(result.data.data)
    }).catch((err) => {
      console.log(err.message);
    });
  },
  removeUserDb(context, data) {
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
        axios.delete(`http://localhost:3000/employees/${data.id}`)
        .then((result) => {
          console.log(result.data.data)
        }).catch((err) => {
          console.log(err.message);
        });
      }
    })
  },
  patrolCheckedDb(context, data) {
    axios.post(`http://localhost:3000/employees/checkedPatrol/${data.id}`, {
      lamp_fr: data.lamp_fr,
      lamp_rr: data.lamp_rr,
      lamp_br: data.lamp_br,
      sign_rg: data.sign_rg,
      sign_lf: data.sign_lf,
      spion_rg: data.spion_rg,
      spion_lf: data.spion_lf,
      sim_check: data.sim_check,
      asuransi_check: data.asuransi_check,
      stnk_check: data.stnk_check,
      helm_check: data.helm_check,
      klakson_check: data.klakson_check,
      sepatu_check: data.sepatu_check,
      roda_check: data.roda_check,
      jas_hujan: data.jas_hujan,
      spare_lamp_fr: data.spare_lamp_fr,
      spare_lamp_rr: data.spare_lamp_rr,
      note_atasan: data.note_atasan,
      date_checked: data.date_checked
    })
    .then((result) => {
      console.log(result.data.data)
      if(result.data.data.n === 1) {
        console.log('Success');
      } else {
        console.log('Nothing Update');
        
      }
    }).catch((err) => {
      console.log(err.message);
    });
  }
  
}
