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
<<<<<<< HEAD
                            <v-card-title > Name : {{ currentUser.username }} </v-card-title>
=======
<<<<<<< HEAD
                            <v-card-title> {{ currentUser.username}}</v-card-title>
=======
                            <v-card-title > Name : {{buyer.username }} </v-card-title>
>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903
>>>>>>> 1bb755469fce9cd0a4c642db51eafa97f4a470b9
                        

                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title> Email : {{ currentUser.email }} </v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Address : {{ currentUser.address }}</v-list-item-title>
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
                            class="ma-6"
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
                            <form @submit.prevent="handleUpdate()">
                            <v-container>
                                <v-row>
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                    label="userName*"
                                    :v-model="username"
                                    ></v-text-field>
                                </v-col>
                               
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                    label="PhoneNumer*"
                                    :v-model="phoneNumber"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                    label="nrcNumber*"
                                    :v-model="nrcNumber"                                 
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                    label="Address*"
                                    :v-model="address"                                   
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                    label="Bio*"
                                    :v-model="bio"                                   
                                    ></v-text-field>
                                </v-col>
                               
                                </v-row>
                            </v-container>
                            </form>
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
                                @click="handleUpdate(), dialog = false"
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
import Buyer from "../../api/buyer"
export default {
    name    : "UserHome",
    data : function() {
      return {
        buyerId: this.$route.id, // buyer document's Id
        dialog: false,
        loading: false,
<<<<<<< HEAD
        username : null,
        password : null,
        phoneNumber: null,
        nrcNumber: null,
        address: null,
        bio: null,
        role     : null,
        success  : null,
=======
        buyer: [],
        items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                }
        ],
<<<<<<< HEAD
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
=======
       
>>>>>>> 1bb755469fce9cd0a4c642db51eafa97f4a470b9

      }
    },
    methods: {
        handleUpdate: async function (){
            console.log("I LOVE U !")
            console.log(this.buyerId)
           this.loading = true;
            let buyer = new Buyer(this.buyerId);
            let updateData = {
                username : this.username,
                address : this.address,
                phoneNumber : this.phoneNumber,
                nrcNumber : this.nrcNumber,
                bio : this.bio
            }
            console.log(updateData)
            try {
                await buyer.updateInfo(updateData,this.token);
                this.success = true;
                this.loading = false;
                setTimeout(()=> {
                    this.success = false;
                }, 5000)
            } catch (error) {
                this.loading = false;
                console.log("Error :",error)
            }
        },
    
   },
   created: async function() {
    this.loading = true;

    try {
        console.log("I'm lost again!")
        let buyer = new Buyer(this.buyerId)
        let result = await buyer.getInfo(this.token)
        let data = result.data;

        this.username = data.username
        this.phoneNumber = data.phoneNumber
        this.nrcNumber = data.nrcNumber
        this.address = data.address
        this.bio = data.bio
        this.role = data.role

        this.loading = false;
    } catch (error) {
        this.loading = false;
        console.log("Error : ", error)
    }
<<<<<<< HEAD
    
   },
   computed: {
        // currently logged in user
        currentUser: function () {
            return this.$store.state.user.data;
        },
        // current user's token
        token: function () {
            return this.$store.state.token;
        },
    },
=======
>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903
>>>>>>> 1bb755469fce9cd0a4c642db51eafa97f4a470b9
}
</script>
<style>
  
</style>