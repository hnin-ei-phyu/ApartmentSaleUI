<template>
    <div>
      <!---nav bar-->
        <v-app-bar
              color="blue-grey lighten-1"
              dark
              >
                
              <v-icon size="50" color="#000435">home </v-icon>
  
              <v-toolbar-title><strong> Homey </strong></v-toolbar-title>
      
  
              <v-tab
                  color="#dee6e6"
                      v-for="item in items"
                      :key="item"
                      :href="item.href"
                  >
                      {{ item.text }}
              </v-tab>
  
              <v-spacer></v-spacer>   
  
  
              <v-btn 
              outlined
              link
              :href="'/buyer-login'"
              >
                  Login <v-icon>login</v-icon>
              </v-btn>
  
              <v-tab
              link
              :href="'/seller-login'"
              >
              Login as seller 
              </v-tab>
  
              <v-menu
                  left
                  bottom
              >
              
              </v-menu>
          </v-app-bar>
        <!---nav bar-->
  
  
    <!--carousel slider-->
      <v-carousel height="300px">
        <v-carousel-item
          v-for="(slide,s) in slides"
          :key="s"
          :src="slide.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
         ></v-carousel-item>
      </v-carousel>
    <!--carousel slider-->
  
  <!--search box-->
    <div class="mx-6">
      <v-container outlined>
      <v-card-title>Search Here</v-card-title>
      <v-form outlined>
        <v-row align="center">
            <v-col
              class="d-flex"
              cols="6"
              sm="3"
            >
              <v-select
                :items="items"
                label="Type"
                outlined
              ></v-select>
            </v-col>
  
            <v-col
              class="d-flex"
              cols="6"
              sm="3"
            >
              <v-select
                :item1s="item1s"
                outlined
                label="City"
              ></v-select>
            </v-col>
  
            <v-col
              class="d-flex"
              cols="6"
              sm="3"
            >
              <v-select
                :towns="towns"
                label="Township"
                outlined
              ></v-select>
            </v-col>
  
            <v-col
              class="d-flex"
              cols="6"
              sm="3"
            >
              <v-select
                :prices="prices"
                label="Prices"
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
        </v-container>
      </div>
  <!--search box-->
      
  <!--items card -->
      <v-container>
            <v-row >
              <v-col 
                v-for="card in cardDatas"
                :key="card"
                class="d-flex"
                sm="3"
              >
                <v-card>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="auto"
                  >
                    
                  </v-img>

                  <v-card-title>
                    {{ card.item }}
                  </v-card-title>

                  <v-card-text mx="4">
                   Price : {{card.price}}
                  </v-card-text>

                  <v-card-text mx="4">
                   location : {{ card.location }}
                  </v-card-text>
  
                  <v-card-text mx="4">
                   Posted Date : {{ card.createdAt }}
                  </v-card-text>

                  <v-card-actions>
  
                    <v-btn 
                      color="#ffff00"
                      link
                      :href="'card-detail'"
                    >
                      detail<v-icon>list</v-icon>

                    </v-btn>
  
  
                     <v-spacer></v-spacer>
  
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
  
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
      </v-container>
      <div class="d-flex container">
        <div><v-btn class="info" >previous</v-btn></div> 
        <v-spacer></v-spacer>
        <div><v-btn class="info" @click="nextPage()">next</v-btn></div>
      </div>
  <!--items card --> 
  
    <!--footer-->
      <v-footer
      dark
      padless
      class="blue-grey lighten-1"
      >
          
        <v-card-text class="text-center">
                         
            <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            >
              <v-icon size="24px">
                  {{ icon }}
              </v-icon>
            </v-btn>
        </v-card-text> 
                  
              <v-divider></v-divider>
              <v-card-text class="white--text text-center">
                  &copy; Copyright <strong><span style="color: #353797;">Techmation Myanmar</span></strong>. All Rights Reserved
                <div>Designed by Techmation Myanmar</div>
              </v-card-text>
  
      </v-footer>
      <!--footer-->
  
  
    </div>
    
  </template>
  
  
  
  <script>
  import Merchandise from '../../api/merchandise';
  export default {
     name: 'Home',
     props: ['id'],
     data () {
        return {
          currentPage: 1,
          pages: [],
          loading : false,
          cardDatas: [],
          slides: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ],
          items: ['Apartment','Girl Hostel','Boy Hostel','House'],
          towns: ['Yangon','Taunggyi','Mandalay','Magway'],
          prices: ['200000','300000','400000','500000'],
          icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram', ],
        }
      },
      methods: {
        loadDatas: async function() {

          try {
            let merchandise = new Merchandise()
            let result = await merchandise.paginate()
            this.cardDatas = result.data.data
            console.log(result.data)
          } catch (error) {
            console.log("Unable to load Datas!");
          }
        },
        nextPage: async function() {
         this.page+1;
        }
      },
      created: function() {
         this.loadDatas();
      },
       

    }
  
  
  </script>
  