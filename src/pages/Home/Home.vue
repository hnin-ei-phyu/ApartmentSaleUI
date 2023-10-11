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
                :towns="town"
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
                :towns="items"
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
                :prices="prices"
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
    <CardGroup />
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
  import CardGroup from './Card/CardGroup.vue';
  export default {
     name: 'Home',
     components: {
          CardGroup,
     },
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
          items: ['Apartment','Girl Hostel','Boy Hostel','House'],
          prices: ['200000','300000','400000','500000'],
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
  