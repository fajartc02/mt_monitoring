<template>
  <v-container
    fluid
    grid-list-xl
    fill-height
    style="padding-top: 0px"  
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <v-form v-model="valid">
          <v-container>
            <v-layout>
              <v-flex
                xs12
                md5
              >
                <v-text-field
                  v-model="name_employee"
                  :rules="nameRules"
                  :counter="20"
                  label="Nama Karyawan"
                  prepend-icon="account_box"
                  outline
                  required
                ></v-text-field>
              </v-flex>
              <v-flex
                xs12
                md5
              >
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date_checked"
                      label="Date Checked Patrol"
                      prepend-icon="event"
                      readonly
                      outline
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker color="info" dark landscape v-model="date_checked" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex
                xs12
                md2
              >
                <v-btn color="success" outline>
                  Search
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <TableListPatrol/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TableListPatrol from '../components/material/TableListPatrol'
export default {
  data: () => ({
    valid: false,
    name_employee: '',
    nameRules: [
      v => v.length <= 20 || 'Name must be less than 20 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    date_checked: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  }),
  components: {
    TableListPatrol
  }
}
</script>
<style>
.v-date-picker-table .v-btn {
  padding: 0px;
}
</style>

