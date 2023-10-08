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
                      link   
                      :href="'/'"
                  >
                     Home
              </v-tab>
  
              <v-spacer></v-spacer>   
  
  
              <v-btn 
              outlined
              link
              :href="'/'"
              >
                  Logout <v-icon>login</v-icon>
              </v-btn>
  
            
              <v-menu
                  left
                  bottom
              >
              
              </v-menu>
          </v-app-bar>
        <!---nav bar-->
  

  <!--add card -->
  <div style="background-color: rgb(212, 213, 219);">
    <v-card-title>Create Advetisment Post</v-card-title>
    <v-container>
      <v-form outlined>
        <v-row align="center">
              <v-col 
                class="d-flex"
                cols="6"
                sm="5"
                >
              RoomType</v-col>
              <v-col
                class="d-flex"
                cols="6"
                sm="5"
              >
                <v-select
                  :items="items"
                  label="Price To"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col 
                class="d-flex"
                cols="6"
                sm="5">Price</v-col>
              <v-col
                class="d-flex"
                cols="6"
                sm="5"
              >
                <v-select
                  :items="items"
                  label="Price To"
                  outlined
                ></v-select>
              </v-col>
            </v-row>

            <v-row align="center">
              <v-col 
                class="d-flex"
                cols="6"
                sm="5">Address</v-col>
              <v-col
                class="d-flex"
                cols="6"
                sm="5"
              >
                <v-text-field label="Address"></v-text-field>
              </v-col>
            </v-row>

            <v-row align="center">
              <v-col 
                class="d-flex"
                cols="6"
                sm="5">PhoneNumber</v-col>
              <v-col
                class="d-flex"
                cols="6"
                sm="5"
              >
                <v-text-field label="Phone"></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        
      
        <v-card-actions>


        <v-spacer></v-spacer>

        <v-btn large
          class="ma-2"
          color="blue lighten-2"
          dark
          link
          :href="'/seller-home'"
        >
          <v-icon
            dark
            left
          >
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        </v-card-actions>

    </div>
    <!--add card --> 
  
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
     name: 'CardDetail',
     data () {
        return {
         
          cards: [
          { src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',roomType: 'Family room',location: 'Insein Township',title: 'Apartment',price: '120000 per month',date:'8/9/2023'},
          ],
          icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
          ],
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
      },
    }
  
  
  </script>
  