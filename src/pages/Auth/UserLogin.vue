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
            :href="'/buyer-register'"
            >
                Sign Up<v-icon>login</v-icon>
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

      <!--tabs bar-->


                

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
                            <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right" src="https://www.mobygames.com/images/i/12/25/1435075.png"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="ma-4">
                        <p>Sign in with your username and password:</p>
                        <v-form>
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
                        <v-divider></v-divider>

                        <v-card-actions class="ma-4 py-6">
                            <v-btn
                            depressed
                            class="success mx-4"
                            dark
                            :loading="loading"
                            @click="handleCreate()"
                            >
                                <v-icon >lock</v-icon>
                                Log in
                            </v-btn>
                        </v-card-actions>

                        <v-card-text>
                            <p>Don't have account?</p>
                            <a href="/buyer-register"><h1>Sign In here</h1></a>
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
                
            <v-spacer></v-spacer>
            <v-card-text class="white--text text-center">
                &copy; Copyright <strong><span style="color: #353797;">Techmation Myanmar</span></strong>. All Rights Reserved
              <div>Designed by Techmation Myanmar</div>
            </v-card-text>

        </v-footer>
        <!--footer-->

    

    </div>
  </template>
  <script>
  import Buyer from "../../api/buyer"
  export default {
      name : "Buyer-Login",
      data : function() {

        return {

            darkTheme: true,
            platformName: 'User Login',
            password: null,
            username: null,
            
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
    methods: {
        handleCreate : async function() {
            this.loading = true;
            
            try {
                let buyer = new Buyer()
                let buyerObj = {
                    email : this.email,
                    password : this.password
                }

                console.log(buyerObj)
                 let result = await buyer.buyerLogin(buyerObj)
                 console.log(result)
                 let token = result.data.token
                 console.log(token)
               
                 /**
                * Save the auth token and currently loggined user to
                * global storage
                */
                this.$store.commit("setUser", result.data);
                this.$store.commit("setToken", result.data.token);

                /**
                 * Save the auth token to browser's localstorage to save
                 * the current user for next logins
                 */
                localStorage.setItem("userToken", token);

                // Continue to Home page
                this.$router.push("/user-home")


            } catch (error) {
                console.log("Error :",error)
            }
            this.loading = false;
        }
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
    }
}
  </script>
  
  <style>
  
  </style>