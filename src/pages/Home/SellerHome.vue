<template>
    <div class="seller-home">
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
          <v-container fluid  
          v-for="user in users"
          :key="user"
          >
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
                                        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
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
                                        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog1 = false"
                                        >
                                            Disagree
                                        </v-btn>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog1 = false"
                                        >
                                            Agree
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                            </div>
                        </div>

                        <v-card-title class="text-center"><h3>{{ user.username }} </h3> </v-card-title>     

                        
                    </div>

                    <div class="row justify-content-center" style="background-color: rgb(188, 214, 235); height: 500px;">

                        <v-card-text
                        v-for="user in users"
                        :key="user"
                        class="ms-12"
                        >
                            <h3><p>Full Name : {{ user.fullName }}</p> </h3> 
                            <h3><p>Email : {{ user.email }}</p> </h3>
                            <h3><p>Phone Number : {{ user.phoneNumber }}</p> </h3>
                            <h3><p>Address : {{ user.address }}</p> </h3>

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
                        
                            <v-tab
                            class="ms-12 d-flex" 
                            link
                            :href="'/addCard'"
                            >
                                <div class="display">
                                    <div>
                                    <v-icon
                                    size="100"
                                    color="red lighten-2"
                                    >widgets</v-icon>   
                                </div>
                                <div>Post Advertiment</div>
                                </div>
                            </v-tab>

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
    name    : "SellerHome",
    data : function() {
      return {
        dialog: false,
        dialog1: false,
        dialog2: false,
        items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                }
        ],
        users: [
                { fullName: 'Mike Masker',username: 'Mike',email: 'mike@gmail.com',phoneNumber: '09444142867',address: 'Kamayut township, Hledan street no.2',},
        ],

      }
    }
}
</script>
<style>
  
</style>