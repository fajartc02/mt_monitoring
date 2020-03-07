<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <h2>Doorprize 1 Lucky Randomize QCC PASK3D</h2>
      <div class="container">
      <h2>Let's Start Your Lucky Randomizer</h2>
      <h1>{{random}}</h1>
      <h1>
        {{
          winners1.length === 0 ? 'Good Luck!' : winners1
        }}
      </h1>
      <form action="" id="join-us">
        <div class="fields">
          <span>
          <input placeholder="Total Kehadiran" type="text" v-model="totalKehadiran" />
          <input placeholder="Total Generate1" type="text" v-model="generate1" />
        </span>
        </div>
        <div class="submit">
          <input class="submit" value="START" type="button" @click="startRandom(1)" />
          <input class="submit" value="STOP" type="button" @click="stopRandom()"/>
        </div>
      </form>
    </div>
      <!-- <v-carousel
        delimiter-icon="X"
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel> -->
    </v-layout>
    <v-layout wrap>
      <h2>Doorprize 2 Lucky Randomize QCC PASK3D</h2>
      <div class="container">
      <h2>Let's Start Your Lucky Randomizer</h2>
      <h1>{{random2}}</h1>
      <h1>
        {{
          winners2.length === 0 ? 'Good Luck!' : winners2
        }}
      </h1>
      <form action="" id="join-us">
        <div class="fields">
          <span>
          <input placeholder="Total Kehadiran" type="text" v-model="totalKehadiran2" />
            <input placeholder="Total Generate2" type="text" v-model="generate2" />
          </span>
        </div>
        <div class="submit">
          <input class="submit" value="START" type="button" @click="startRandom2(1)" />
          <input class="submit" value="STOP" type="button" @click="stopRandom2()"/>
        </div>
      </form>
    </div>
      <!-- <v-carousel
        delimiter-icon="X"
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel> -->
    </v-layout>
        <!-- <input class="submit" value="Clear All" type="button" @click="clearAll()"/> -->
  </v-container>
</template>

<script>
// import { clearInterval } from 'timers';
// import { clearInterval } from 'timers';
var containWinners1 = []
var containWinners2 = []
var exceptWinner = ['26', '84', '19', '71', '85']
export default {
  data () {
    return {
      items: [
        {
          src: 'https://images7.alphacoders.com/447/thumb-1920-447698.jpg'
        },
        {
          src: 'https://images6.alphacoders.com/826/thumb-1920-826386.jpg'
        },
        {
          src: 'https://i.pinimg.com/originals/73/b5/40/73b5409ea49f820875e3f26a3f33ea1f.jpg'
        },
        {
          src: 'https://www.toyota.com.sg/showroom/new-models/-/media/2366F2C98A164E1FA604EA2D5037D5F8.jpg'
        }
      ],
      random: '',
      random2: '',
      winners1: [],
      winners2: [],
      status: 0,
      start: '',
      status2: 0,
      start2: '',
      totalKehadiran: '',
      totalKehadiran2: '',
      generate1: '',
      generate2: ''
    }
  },
  methods: {
    startRandom(val) {
    
      // this.random = Math.floor(Math.random() * 200) + 1
      console.log(this.totalKehadiran);
      if(this.totalKehadiran !== '') {
        var that = this
        this.start = setInterval(() => {
          this.random = Math.floor(Math.random() * this.totalKehadiran) + 1
          
          if(containWinners1.length < Number(this.generate1)) {
            if(containWinners1.indexOf(this.random) !== -1 || exceptWinner.indexOf(this.random) !== -1) {
              // nothimg
            } else {
              containWinners1.push(this.random)
            }
          }
        }, 100)
      } else {
        this.random = 'Gak Ada yang hadir Dunk'
      }
    },
    stopRandom() {
      clearInterval(this.start)
      if(containWinners1.length !== Number(this.generate1)) {
        this.startRandom()
      } else {
        this.winners1 = containWinners1
        this.random = ''
      }
    },
    startRandom2(val) {
    
      // this.random = Math.floor(Math.random() * 200) + 1
      if(this.totalKehadiran2 !== '') {
        var that = this
        this.start2 = setInterval(() => {
          this.random2 = Math.floor(Math.random() * this.totalKehadiran2) + 1
          
          if(containWinners2.length < Number(this.generate2)) {
            if(containWinners2.indexOf(this.random2) !== -1 || exceptWinner.indexOf(this.random) !== -1) {
              // nothing
            } else {
              if(containWinners1.indexOf(this.random2) === -1) {
                containWinners2.push(this.random2)
              }
            }
          }
        }, 100)
      } else {
        this.random2 = 'Gak Ada yang hadir Dunk'
      }
    },
    stopRandom2() {
      clearInterval(this.start2)
      if(containWinners2.length !== Number(this.generate2)) {
        this.startRandom2()
      } else {
        this.winners2 = containWinners2
        this.random2 = ''
      }
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=PT+Sans:400,400italic);

@import url(https://fonts.googleapis.com/css?family=Droid+Serif);

html, body{
  background:#2F1E27;
}

body{
  counter-reset:section;
  text-align:center;
}

.container{
  position:relative;
  /* top:100px; */
  background:#2F1E27;
}

.container h1, .container span{
  font-family:"Pt Sans", helvetica, sans-serif;
}

.container h1{
  text-align:center;
  color:#fff;
  font-weight:100;
  font-size:2em; 
  margin-bottom:10px;
}

.container h2{
  font-family:"droid serif";
  font-style:italic;
  color:#d3b6ca; 
  text-align:center;
  font-size:1.2em;
}

.container form span:before {
  counter-increment:section;
  content:counter(section);
  border:2px solid #4c2639;
  width:40px;
  height:40px;
  color:#fff;
  display:inline-block;
  border-radius:50%;
  line-height:1.6em;
  font-size:1.5em;
  position:relative;
  left:-22px;
  top:-11px;
  background:#2F1E27;
}

form{
  margin-top:25px;
  display:inline-block;
}

.fields{
  border-left:2px solid #4c2639
}

.container span{
    margin-bottom:22px; 
    display:inline-block;
}

.container span:last-child{
   margin-bottom:-11px;
}

input{
  border:none;
  outline:none;
  display:inline-block;
  height:34px;
  vertical-align:middle;
  position:relative;
  bottom:14px;
  right:9px;
  border-radius:22px;
  width:220px;
  box-sizing:border-box;
  padding:0 18px;
  color: white 
}

input[type="button"]{ 
  background:rgba(197,62,126,.33) ! important;
  color:#fff;
  position:relative;
  left:9px;
  top:25px; 
  width:100px;
  cursor:pointer;
}
input[type="button"]:hover{ 
  background:rgba(224, 67, 140, 0.33) ! important;
  color:#fff;
  position:relative;
  left:9px;
  top:25px; 
  width:100px;
  cursor:pointer;
}
</style>
