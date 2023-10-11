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
          <v-row >
            <v-col cols="12">
              <v-card class="snow" height="800px">
                <v-card-title class="dark--text subtitle-1 font-weight-bold">
                  <v-btn
                    depressed
                    class="info mx-2"
                    dark
                    @click="() => this.$router.go(-1)"
                  >
                    <v-icon>keyboard_arrow_left</v-icon>
                    back to SellerHome
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    depressed
                    class="success mx-2"
                    dark
                    :loading="loading"
                    @click="handleCreate()"
                  >
                    <v-icon>save</v-icon>
                    create data
                  </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="mt-3 text-center">
                  <v-row>
                      <v-col
                      class="d-flex"
                      cols="6"
                      sm="6"
                      >
                      <v-select
                        :items="items"
                        label="Item"
                        v-model="item"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        filled
                        outlined
                        background-color="#fff"
                        label="Price"
                        color="primary darken-3"
                        v-model="price"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        filled
                        outlined
                        background-color="#fff"
                        label="Location"
                        color="primary darken-3"
                        v-model="location"
                      >
                      </v-text-field>
                    </v-col>

                    
                    <v-col cols="12" sm="6">
                      <v-text-field
                        filled
                        outlined
                        background-color="#fff"
                        label="Description"
                        color="primary darken-3"
                        v-model="description"
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        filled
                        outlined
                        background-color="#fff"
                        label="Detail"
                        color="primary darken-3"
                        v-model="detail"
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        filled
                        outlined
                        background-color="#fff"
                        label="Photo"
                        color="primary darken-3"
                        v-model="photo"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      
      

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
  import Merchandise from "../../../api/merchandise"
  export default {
     name: 'AddCard',
     data () {
        return {
         loading : false,
         item: null,
         price: null,
         location: null,
         description: null,
         photo: null,
         detail:null,
         owner: null,
         items: ['Apartment','Girl Hostel','Boy Hostel','House'],
        }
        
      },
      methods : {
        handleCreate : async function() {
          this.loading = true;
          

          try {
            let merchandise = new Merchandise()
            let itemObj = {
              item : this.item,
              price : this.price,
              location : this.location,
              description : this.description,
              photo: this.photo,
              detail: this.detail,
              owner: this.owner
            }
            let itemData = await merchandise.create(itemObj)
            console.log(itemData)
            this.$router.push("/seller-home")
          } catch (error) {
            console.log("Error : ", error)
            this.$store.dispatch("MAKE_ERROR","Cannot create Admin .")
          }
          this.loading = false ;
        }
      },
    }
  
  
  </script>
  