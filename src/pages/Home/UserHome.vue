<template>
    <div class="buyer">
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
  
            
          </v-app-bar>
        <!---nav bar-->

        <HomeActionbutton />

        <v-app>
          <v-container fluid>
            <template>
          <div id="app">
         
                <div class="container bg-light">
                    <div class="row justify-content-center" style="background-color: rgb(212, 213, 219);">

                        <div class="col-lg-4 my-3 ms-12">
                            <img src="../../assets/man.png" alt="img-fluid" class="rounded-circle" style="width: 300px;">

                            <div class="d-flex justify-content-center">
                                
                                <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="290"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        color="primary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        >
                                        Update Photo
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title class="text-h5">
                                        Update Photo
                                        </v-card-title>
                                        <v-card-text>Are You Sure to Update?</v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog = false"
                                        >
                                            Cancle
                                        </v-btn>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog = false"
                                        >
                                            Save
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <v-spacer></v-spacer>
                                
                                <v-dialog
                                v-model="dialog1"
                                persistent
                                max-width="400"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        color="primary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        >
                                        Update Password
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title class="text-h5">
                                        Update Password
                                        </v-card-title>
                                        <v-card-text>Are You Ready to Update?</v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog1 = false"
                                        >
                                            Cancle
                                        </v-btn>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog1 = false"
                                        >
                                            Save
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                            </div>
                        </div>   

                        
                    </div>

                    <div class="row justify-content-center" style="background-color: rgb(188, 214, 235); height: 500px;">

                        <v-card-text
                            class="ms-12"
                        >
                            <h3><p>Name : {{ currentUser.username }}</p> </h3> 
                            <h3><p>Email : {{ currentUser.email }}</p> </h3>
                            <h3><p>Phone Number : {{ currentUser.phoneNumber }}</p> </h3>
                            <h3><p>Address : {{ currentUser.address }}</p> </h3>

                        <v-dialog
                        v-model="dialog2"
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
                                    label="Name*"

                                    ></v-text-field>
                                </v-col>
                               
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                    label="PhoneNumber*"

                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="nrcNumber*"
                                    
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Address*"
                                    
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
                                @click="dialog2 = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog2 = false"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        </v-card-text>

                    </div>
                </div>
         </div>
 
      </template>
          </v-container>
      </v-app>

      
     
    </div>
</template>
<script>
// import Buyer from "../../api/buyer"
import HomeActionbutton from '../Actionbutton/HomeActionbutton.vue';
export default {
    name    : "UserHome",
    components: {
        HomeActionbutton,
    },
    data : function() {
      return {
        buyerId: this.$route.id, // buyer document's Id
        dialog: false,
        dialog1: false,
        dialog2: false,
        loading: false,
        username : null,
        password : null,
        phoneNumber: null,
        nrcNumber: null,
        address: null,
        bio: null,
        role     : null,
        success  : null,
        buyer: [],
        items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                }
        ],
      }
    },
//     methods: {
//         handleUpdate: async function (){
//             console.log("I LOVE U !")
//             console.log(this.buyerId)
//            this.loading = true;
//             let buyer = new Buyer(this.buyerId);
//             let updateData = {
//                 username : this.username,
//                 address : this.address,
//                 phoneNumber : this.phoneNumber,
//                 nrcNumber : this.nrcNumber,
//                 bio : this.bio
//             }
//             console.log(updateData)
//             try {
//                 await buyer.updateInfo(updateData,this.token);
//                 this.success = true;
//                 this.loading = false;
//                 setTimeout(()=> {
//                     this.success = false;
//                 }, 5000)
//             } catch (error) {
//                 this.loading = false;
//                 console.log("Error :",error)
//             }
//         },
    
//    },
//    created: async function() {
//     this.loading = true;

//     try {
//         console.log("I'm lost again!")
//         let buyer = new Buyer(this.buyerId)
//         let result = await buyer.getInfo(this.token)
//         let data = result.data;

//         this.username = data.username
//         this.phoneNumber = data.phoneNumber
//         this.nrcNumber = data.nrcNumber
//         this.address = data.address
//         this.bio = data.bio
//         this.role = data.role

//         this.loading = false;
//     } catch (error) {
//         this.loading = false;
//         console.log("Error : ", error)
//     }
    
//    },
   computed: {
        // currently logged in user
        currentUser: function () {
            return this.$store.state.user.data;
        },
        // current user's token
        token: function () {
            return this.$store.state.token;
        },
    }
}
</script>
<style>
  
</style>