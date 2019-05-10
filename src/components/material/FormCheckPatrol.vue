<template>
  <v-layout 
  justify-center
  align-center>
    <v-flex xs12 sm8>
      <form>
        <v-layout>
          <v-flex xs12 sm6>
            <v-text-field
              type="text"
              label="Name"
              v-model="propsUserData.userName"
              disabled
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 style="padding-left: 20px">
            <v-text-field
              type="text"
              label="Noreg"
              v-model="propsUserData.noreg"
              disabled
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-text-field
          type="date"
          label="Check Patrol Date"
          v-model="checkedUser.dateCheck"
          required
        ></v-text-field>
        <v-layout>
          <v-flex xs6 sm4>
            <v-select
              v-model="checkedUser.frlamp"
              :items="frLamp"
              label="Lampu Depan"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs6 sm4 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.rrLamp"
              :items="rrLamp"
              label="Lampu Belakang"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs6 sm4 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.stopLamp"
              :items="stopLamp"
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
              v-model="checkedUser.rgSein"
              :items="rgSein"
              label="Sign Kanan"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 style="margin-left: 10px">
            <v-select
              v-model="checkedUser.lfSein"
              :items="lfSein"
              label="Sign Kiri"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-text-field
          label="Comment"
          type="textarea"
          v-model="checkedUser.note"
          required
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
        <v-btn outline color="success" @click="submit">submit</v-btn>
        <!-- <v-btn outline color="success" @click="clear">clear</v-btn> -->
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import {mapActions, mapState} from 'vuex'

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
        frlamp: null,
        rrLamp: null,
        stopLamp: null,
        rgSein: null,
        lfSein: null,
        dateCheck: null, 
        note: null
      },
      frLamp: [
        'OK',
        'NG'
      ],
      rrLamp: [
        'OK',
        'NG'
      ],
      stopLamp: [
        'OK',
        'NG'
      ],
      rgSein: [
        'OK',
        'NG'
      ],
      lfSein: [
        'OK',
        'NG'
      ],
      checkbox: false
    }),

    props: {
      propsDataId: Object,
      propsUserData: Object
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
        this.checkedUser.id = this.propsUserData.id
        this.patrolCheckedDb(this.checkedUser)
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
      // console.log(this.propsDataId);
      
    }
  }
</script>