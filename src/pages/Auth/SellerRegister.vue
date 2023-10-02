<template>
    <div class="buyer-login">
      <!---nav bar-->
        <v-app-bar
            color="indigo lighten-1 "
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
            :href="'/seller-login'"
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

        <!--Login form-->
        <v-app style="background-color: #dee6e6;">
            <v-container>
                <v-layout wrap>
                    <v-flex sm12 md8 offset-md2>
                    <v-card 
                    elevation="6" 
                    light tag="section"
                    >
                        <v-card-title>
                        <v-layout align-center justify-space-between>
                            <h3 class="headline">
                            {{ platformName }}
                            </h3>
                            <v-flex>
                            <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right" src="../../assets/homelogo.png"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="ma-4">

                        <v-form>
                            <v-text-field
                                        outline
                                        label="Username"
                                        type="text"
                                        v-model="username"></v-text-field>
                            <v-text-field
                                        outline
                                        label="Email"
                                        type="text"
                                        v-model="email"></v-text-field>
                            <v-text-field
                                        outline
                                        hide-details
                                        label="Password"
                                        type="password"
                                        v-model="password"></v-text-field>
                        

                        </v-form>
                        </v-card-text>
                       
                        <v-card-actions class="ma-4 py-6">

                            <v-btn
                            depressed
                            class="success mx-4"
                            dark
                            :loading="loading"
                            @click="handleCreate()"
                            >
                                <v-icon >lock</v-icon>
                                Sign in
                            </v-btn>
                        </v-card-actions>
                        <v-card-text>
                            <p>Already have an account?</p>
                            <a href="/seller-login"><h1>Login here</h1></a>
                        </v-card-text>
                       
                    </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>

        <!--footer-->


        <v-footer
            dark
            padless
            class="indigo lighten-1 "
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
  import Seller from "../../api/seller"
  export default {
      name : "Seller-Register",
      data : function() {

        return {

            darkTheme: true,
            platformName: 'Register as Seller',
            loading: false,
            username: null,
            email: null,
            password: null,
            role: 2,

            slides: [
                {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                }
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
    methods : {
        handleCreate : async function() {
            this.loading = true;
            let seller = new Seller()
            let sellerObj = {
                username : this.username,
                email : this.email,
                password: this.password,
                role : this.role,
            }
            
            try {
                await seller.registerSeller(sellerObj)
                console.log("UserName :" , sellerObj.username)
                this.$router.push("/seller-home")
            } catch (error) {
                console.log("Error : ",error)
            }
            this.loading = false;
        }
    },
    computed : {
        token : function() {
            return this.$store.state.currentUser.token;
        }
    }
}
  </script>
  
  <style>
  
  </style>