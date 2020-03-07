<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              :src="logo"
              height="34"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            MT Activity
            <!-- QCC EPKD -->
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <p style="padding-left: 15px">{{time}}</p>
        <v-list-tile
          v-if="responsive"
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
        <v-list-tile
          disabled
          active-class="primary"
          class="v-list-item v-list__tile--buy"
          to="/upgrade"
        >
          <v-list-tile-action>
            <v-icon>mdi-apple-ios</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="font-weight-light">
            Fajar Tri Cahyono Apps <br>
          </v-list-tile-title>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'
// import { setInterval } from 'timers';
import moment from 'moment'

export default {
  data: () => ({
    logo: 'https://static.skillshare.com/uploads/project/f7e2cf9b019ac29df95f23c004f73b40/70c2f841',
    time: '',
    // logo: 'https://qcconference.com/wp-content/themes/qcciir-v2.5/assets/img/B/logos/logo-qcc-white.svg',
    links: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Heijunka'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-baby-buggy',
        text: 'Order Parts'
      },
      {
        to: '/safetyPatrol',
        icon: 'mdi-alarm-light',
        text: 'Safety Patrol Check'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
    setInterval(() => {
      this.time = `${moment().format('dddd')}, ${moment().format('MMMM Do YYYY, h:mm:ss a')}`
    }, 1000)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

    a {
      text-decoration: none;
    }
  }
</style>
