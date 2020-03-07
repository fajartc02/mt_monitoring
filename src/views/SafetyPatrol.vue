<template>
  <div>
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12 sm3>
        <v-text-field 
        label="Authorization *just admin can added data" 
        type="password" 
        v-model="admin" 
        required>
        </v-text-field>
      </v-flex>
    </v-layout>
      <ModalRegister v-if="admin === 'true'"/>
    <v-container
      fluid
      grid-list-xl
      fill-height>
      <v-layout
        justify-center
        align-center
      >
        <v-flex xs12>
          <v-data-table
            :headers="headers"
            :items="users"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td style="width: 10px">{{props.index + 1}}</td>
              <td class="text-xs-left">{{ props.item.name_employee}}</td>
              <td class="text-xs-left">{{ props.item.noreg_employee}}</td>
              <td class="text-xs-left">{{ props.item.shift }}</td>
              <td class="text-xs-left">{{ props.item.no_polisi }}</td>

              <!-- Logic Condition MBSim -->
              <td>
                {{ props.item.simValidClient }}
              </td>

              <!-- Logic Condition MBStnk -->
              <td>
                {{ props.item.stnkValidClient }}
              </td>
              <td v-if="admin === 'true'">
                <ModalEditUser :propsData="props.item"/>
              </td>
              <td class="text-xs-center" v-else>
                <b>Auth Admin</b>
              </td>
              <td v-if="admin === 'true'">
                <v-btn outline color="error" @click="() => removeUser(props.item.id)">
                  Delete
                </v-btn>
              </td>
              <td class="text-xs-center" v-else>
                <b>Auth Admin</b>
              </td>
              <td class="text-xs-center" v-if="admin === 'true'">
                <ModalCheck :propsData="props.item"/>
              </td>
              <td class="text-xs-center" v-else>
                <b>Auth Admin</b>
              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout 
        justify-center
        align-center
      >
        <v-btn color="info" to="/safetyPatrol/list">
          Employees Check Patrol
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ModalRegister from '../components/material/ModalAddUser.vue'
import ModalEditUser from '../components/material/ModalEditUser.vue'
import { mapActions, mapState } from 'vuex';
import db from '../firebase.js'
import ModalCheck from '../components/material/ModalCheck.vue'
import axios from 'axios'
import moment from 'moment'

export default {
  data () {
    return {
      admin: 'true',
      confAdmin: false,
      headers: [
        {
          text: 'No',
          align: 'left'
        },
        { text: 'Name', value: 'name' },
        { text: 'Noreg', value: 'noreg' },
        { text: 'Shift', value: 'shift' },
        { text: 'No Polisi', value: 'noPolisi' },
        { text: 'Masa Berlaku SIM', value: 'mBSim' },
        { text: 'Masa Berlaku STNK', value: 'mBStnk' },
        { text: 'Edit', value: 'actions', align: 'center' },
        { text: 'Delete', value: 'actions', align: 'center' },
        { text: 'Check Patrol', value: 'check', align: 'center' },
      ],
      users: [],
      userId: ''
    }
  },
  methods: {
    ...mapActions([
      'getUser',
      'removeUserDb'
    ]),
    isAuth() {
      this.confAdmin = true
    },
    removeUser(id) {
      console.log(id);
      
      let idUser = {
        id
      }
      this.removeUserDb(idUser)
    }
  },
  components: {
    ModalRegister,
    ModalCheck,
    ModalEditUser
  },
  mounted() {
    // firebase hosting only allow https
    // http://ec2-18-212-193-68.compute-1.amazonaws.com:3000/users
    axios.get('http://localhost:3000/employees')
    .then((result) => {
      result.data.data.recordset.map(item => {
        return item.simValidClient = moment(item.berlaku_sim).calendar()
      })
      result.data.data.recordset.map(item => {
        return item.stnkValidClient = moment(item.berlaku_stnk).calendar()
      })
      this.users = result.data.data.recordset
      console.log(result.data.data.recordset)
    }).catch((err) => {
      console.log(err.message);
    })
  },
  computed: {
    ...mapState([
      'usersState'
    ])
  }
}
</script>

<style>
  .blinking{
    animation:blinkingText 2s infinite;
  }
  @keyframes blinkingText{
    0%{     color: #e72a2a;    }
    49%{    color: transparent; }
    50%{    color: #e72a2a; }
    99%{    color: transparent;  }
    100%{   color: #e72a2a;    }
  }
  .blinkingWarning{
    animation:blinkingText1 2s infinite;
  }
  @keyframes blinkingText1{
    0%{     color: #ee8208;    }
    49%{    color: transparent; }
    50%{    color: #ee8208; }
    99%{    color: transparent;  }
    100%{   color: #ee8208;    }
  }
</style>
