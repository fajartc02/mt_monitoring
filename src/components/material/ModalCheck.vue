<template>
  <v-layout row justify-center>
    <v-btn color="success" @click="dialog = true">Check</v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <FormCheckPatrol :propsEmployeeData="propsData"/>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import FormCheckPatrol from './FormCheckPatrol.vue'

  export default {
    data () {
      return {
        dialog: false,
        userData: {
          userName: '',
          noreg: '',
          id: ''
        }
      }
    },
    props: {
      propsData: Object
    },
    components: {
      FormCheckPatrol
    },
    methods: {
      idReceive(val) {
        // this.userData.name_employee = val.name
        // this.userData.noreg_employee = val.noreg
        // this.userData.id = val._id
      }
    },
    mounted() {
      if(this.dialog === false) {
      }
    }
  }
</script>

<style>
  .v-toolbar__content{
    margin-left: 0px!important;
  }
</style>