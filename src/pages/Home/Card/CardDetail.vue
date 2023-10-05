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
      
  <!--detail card -->
  <v-container>
      <v-row 
        v-for="card in cards"
        :key="card"
      >
        <v-col
            cols="12"
            sm="6"
        >
            <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item>
                <v-sheet
                    height="100%"
                >
                    <v-img
                        :src="card.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="auto"
                    >
                    </v-img>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-col>
           
        <v-col
        cols="12"
        sm="6"
        >  

            <v-card>
                <v-card-title> {{ card.title }}</v-card-title>
            

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title> Room Type : {{ card.roomType }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Location : {{ card.location }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Price : {{ card.price }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Price : {{ card.price }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Price : {{ card.price }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>

              <v-btn large color="green">
                <v-icon>phone</v-icon>Contact
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn large
                class="ma-2"
                color="orange darken-2"
                dark
                link
                :href="'/'"
              >
                <v-icon
                  dark
                  left
                >
                  mdi-arrow-left
                </v-icon>Back
              </v-btn>
            </v-card-actions>

          </v-card>
         
        </v-col>
      </v-row>

    </v-container>
    <!--detail card --> 
  
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
     name: 'AddCard',
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
          { src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',roomType: 'Family room',location: 'Insein Township',title: 'Apartment',price: '120000 per month',date:'8/9/2023'},
          ],
          icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
            ],
            items: [
                    {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                    }
            ],
        }
      },
    }
  
  
  </script>
  