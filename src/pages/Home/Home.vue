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
                :items="items"
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
                :items="items"
                label="Rent Or Buy"
                outlined
              ></v-select>
            </v-col>
  
            <v-col
              class="d-flex"
              cols="6"
              sm="3"
            >
              <v-select
                :items="items"
                label="Price From"
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col
              class="d-flex"
              cols="6"
              sm="3"
            >
              <v-select
                :items="items"
                label="Price To"
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
                v-for="card in cards"
                :key="card"
                class="d-flex"
                cols="6"
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
                
                  <v-card-text mx="4">
                   Price : {{card.price}}
                  </v-card-text>
                  <v-card-text mx="4">
                   posted Date : {{ card.date }}
                  </v-card-text>
  
                  <v-card-actions>
  
                    <v-btn 
                      color="#ffff00"
                      link
                      :href="'/detail'"
                    >
                      detail<v-icon>list</v-icon>

                    </v-btn>
  
                    <v-btn icon x-large color="green">
                      <v-icon>phone</v-icon>
                    </v-btn>
  
                     <v-spacer></v-spacer>
  
                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>
  
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
      </v-container>
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
  export default {
     name: 'Home',
     data () {
        return {
         
          slides: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ],
          cards: [
          {  src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',price: '120000 per month',date:'8/9/2023' },
          {  src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
          {  src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
          {  src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
          {  src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
          {  src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
          {  src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
          {  src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
          ],
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
          icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
        }
      },
      // methods: {
      //   loadItemInfo: async function() {
      //     this.loading = true;
      //     try {
      //       let card = new 
      //     } catch (error) {
            
      //     }
      //   }
      // }
    }
  
  
  </script>
  