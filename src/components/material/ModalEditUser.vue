<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="info" outline v-on="on">Edit</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Employee Data</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Name_employee*" v-model="propsData.name_employee" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Noreg_employee*" v-model="propsData.noreg_employee" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="No Polisi*" v-model="propsData.no_polisi" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <!-- <v-text-field label="Shift*" v-model="propsData.shift" required></v-text-field> -->
                <v-select
                  :items="['R', 'W', 'Non']"
                  v-model="propsData.shift"
                  label="Shift"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Masa Berlaku SIM*" type="date" v-model="propsData.berlaku_sim" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Masa Berlaku STNK*" type="date" v-model="propsData.berlaku_stnk" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="clearFields">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="editUser">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Swal from 'sweetalert2'

  export default {
    data: () => ({
      dialog: false,
      user: {
        name_employee: '',
        shift: '',
        berlaku_sim: '',
        berlaku_stnk: '',
        no_polisi: '',
        id: null
      }
    }),
    methods: {
      ...mapActions([
        'editUserDb'
      ]),
      editUser() {
        this.editUserDb(this.propsData)
        this.clearFields()
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        setInterval(() => {
          window.history.go('http://localhost:8080/safetyPatrol')
        }, 1000)
      },
      clearFields() {
        this.user = {
          name_employee: '',
          shift: '',
          berlaku_sim: '',
          berlaku_stnk: '',
          no_polisi: ''
        }
        this.dialog = false
      }
    },
    props: {
      propsData: Object
    },
    mounted() {
      this.propsData.berlaku_sim = this.propsData.berlaku_sim.slice(0,10)
      this.propsData.berlaku_stnk = this.propsData.berlaku_stnk.slice(0,10)
      // console.log(this.propsData);
    }
  }
</script>
