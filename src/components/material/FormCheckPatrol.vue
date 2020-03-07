<template>
  <v-layout 
  justify-center
  align-center>
    <v-flex xs12 sm8>
      <form style="height: 100%">
        <v-layout>
          <v-flex xs12 sm6>
            <v-text-field
              type="text"
              label="Name"
              v-model="propsEmployeeData.name_employee"
              disabled
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 style="padding-left: 20px">
            <v-text-field
              type="text"
              label="Noreg"
              v-model="propsEmployeeData.noreg_employee"
              disabled
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-text-field
          type="date"
          label="Check Patrol Date"
          v-model="checkedUser.date_checked"
          required
        ></v-text-field>
        <v-layout>
          <v-flex xs6 sm4>
            <v-select
              v-model="checkedUser.lamp_fr"
              :items="lamp_fr"
              label="Lampu Depan"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs6 sm4 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.lamp_rr"
              :items="lamp_rr"
              label="Lampu Belakang"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs6 sm4 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.lamp_br"
              :items="lamp_br"
              label="Lampu Rem"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 sm6>
            <v-select
              v-model="checkedUser.sign_rg"
              :items="sign_rg"
              label="Sign Kanan"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.sign_lf"
              :items="sign_lf"
              label="Sign Kiri"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 sm6>
            <v-select
              v-model="checkedUser.spion_lf"
              :items="spion_lf"
              label="Spion Kanan"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.spion_rg"
              :items="spion_rg"
              label="Spion Kiri"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <!-- SIM and Sinar Mas -->
          <v-flex xs12 sm6>
            <v-select
              v-model="checkedUser.sim_check"
              :items="sim_check"
              label="Sim Status"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.asuransi_check"
              :items="asuransi_check"
              label="Sinar Mas Status"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <!-- STNK And helm_check -->
          <v-flex xs12 sm6>
            <v-select
              v-model="checkedUser.stnk_check"
              :items="stnk_check"
              label="Stnk Status"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.helm_check"
              :items="helm_check"
              label="helm_check"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <!-- roda_check and Rain Coat -->
          <v-flex xs12 sm6>
            <v-select
              v-model="checkedUser.roda_check"
              :items="roda_check"
              label="Roda"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.jas_hujan"
              :items="jas_hujan"
              label="Jas Hujan"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <!-- roda_check and Rain Coat -->
          <v-flex xs12 sm6>
            <v-select
              v-model="checkedUser.klakson_check"
              :items="klakson_check"
              label="klakson_check"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.sepatu_check"
              :items="sepatu_check"
              label="Sepatu"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <!-- roda_check and Rain Coat -->
          <v-flex xs12 sm6>
            <v-select
              v-model="checkedUser.spare_lamp_fr"
              :items="spare_lamp_fr"
              label="Spare Lampu Depan"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.spare_lamp_rr"
              :items="spare_lamp_rr"
              label="Spare Lampu Rem"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 sm12 style="margin-right: 5px" >
            <v-text-field
              label="Comment"
              type="textarea"
              v-model="checkedUser.note_atasan"
              required
            ></v-text-field>
          </v-flex>
          <v-btn outline color="success" @click="submit">submit</v-btn>
        </v-layout>
         <!-- <v-layout>
          <v-flex xs12 sm12>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </v-flex>
        </v-layout> -->
        <!-- <v-btn outline color="success" @click="clear">clear</v-btn> -->
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import {mapActions, mapState} from 'vuex'
import Swal from 'sweetalert2'

  export default {
    mixins: [validationMixin],

    validations: {
      select: { required },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      checkedUser: {
        lamp_fr: null,
        lamp_rr: null,
        lamp_br: null,
        sign_rg: null,
        sign_lf: null,
        spion_rg: null,
        spion_lf: null,
        sim_check: null,
        asuransi_check: null,
        stnk_check: null,
        helm_check: null,
        klakson_check: null,
        sepatu_check: null,
        roda_check: null,
        jas_hujan: null,
        spare_lamp_fr: null,
        spare_lamp_rr: null,
        date_checked: null, 
        note_atasan: null
      },
      lamp_fr: [
        'OK',
        'NG'
      ],
      lamp_rr: [
        'OK',
        'NG'
      ],
      lamp_br: [
        'OK',
        'NG'
      ],
      sign_rg: [
        'OK',
        'NG'
      ],
      sign_lf: [
        'OK',
        'NG'
      ],
      spion_lf: [
        'OK',
        'NG'
      ],
      spion_rg: [
        'OK',
        'NG'
      ],
      sim_check: [
        'OK',
        'NG'
      ],
      asuransi_check: [
        'OK',
        'NG'
      ],
      stnk_check: [
        'OK',
        'NG'
      ],
      helm_check: [
        'OK',
        'NG'
      ],
      klakson_check: [
        'OK',
        'NG'
      ],
      sepatu_check: [
        'OK',
        'NG'
      ],
      roda_check: [
        'OK',
        'NG'
      ],
      jas_hujan: [
        'OK',
        'NG'
      ],
      spare_lamp_fr: [
        'OK',
        'NG'
      ],
      spare_lamp_rr: [
        'OK',
        'NG'
      ],
      checkbox: false
    }),

    props: {
      propsEmployeeData: Object
    },

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    methods: {
      ...mapActions([
        'patrolCheckedDb'
      ]),
      submit () {
        this.$v.$touch()
        this.checkedUser.id = this.propsEmployeeData.id
        this.patrolCheckedDb(this.checkedUser)
        Swal.fire(
          'Success To Checked!',
          `${this.propsEmployeeData.name_employee} Checked`,
          'success'
        )
        setInterval(() => {
          window.history.go('http://localhost:8080/safetyPatrol')
        }, 1000)
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      }
    },
    mounted() {
    }
  }
</script>