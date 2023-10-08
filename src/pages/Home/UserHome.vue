<template>
    <div class="user-home">
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
              :href="'/'"
              >
                  Logout<v-icon>login</v-icon>
            </v-btn>
          </v-app-bar>
        <!---nav bar-->

      <v-app>
          <v-container fluid >
            <template>
          <div id="app">
         
         <div class="container bg-light">
             <div class="row">
                 <div class="col-lg-5" style="background-color: rgb(188, 214, 235); height: 700px;">
                       <div class="text-center mb-3">
                         <img src="../../assets/man.png" alt="img-fluid" class="rounded-circle" style="width: 300px;">
                       </div>
                       <div class="d-flex justify-content-center">
                          <v-btn class="info">
                          update photo
                          </v-btn>
                           <v-spacer></v-spacer>
                          <v-btn class="info">
                          update password
                          </v-btn>
                      </div>
                      
                 </div>
                 <div class="col-lg-7" style="background-color: rgb(186, 200, 201);">
                     <div>
                         <h1>Profile </h1>
                     </div>
                     <hr>
                      
                     <v-card>
                            <v-card-title> {{ currentUser.username}}</v-card-title>
                        

                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title> Email : </v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Address : </v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="600px"
                        class="ms-12"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            update Info
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="text-h5">Update Profile</span>
                            </v-card-title>
                            <v-card-text>
                            <v-container>
                                <v-row>
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                    label="Full name*"

                                    ></v-text-field>
                                </v-col>
                               
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                    label="Nick name*"

                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Address*"
                                    
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="PhoneNumber*"
                                    type="phoneNumber"
                                    
                                    ></v-text-field>
                                </v-col>
                               
                                </v-row>
                            </v-container>
      
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-card>
                    

                 </div>
             </div>
         </div>
 
         </div>
      </template>
          </v-container>
      </v-app>
    </div>
</template>
<script>
export default {
    name    : "UserHome",
    data : function() {
      return {
        dialog: false,
        items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                }
        ],
        // users: [
        //         { username: 'Mike',email: 'mike@gmail.com',address: 'Kamayut township, Hledan street no.2',},
        // ],

      }
    },
    computed: {
        // currently logged in user
        currentUser: function () {
            return this.$store.state.currentUser.user;
        },
        // current user's token
        token: function () {
            return this.$store.state.currentUser.token;
        },
    },
}
</script>
<style>
  
</style>