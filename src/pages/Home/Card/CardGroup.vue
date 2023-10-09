<template>
    <div>
      
  <!--items card -->
      <v-container>
            <v-row >
              <v-col 
                v-for="card in cards"
                :key="card"
                class="d-flex"
                cols="6"
                sm="3"
              >
                <v-card>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="auto"
                  >
                    
                  </v-img>

                  <v-card-text mx="4">
                   Price : {{card.price}}
                  </v-card-text>
                  <v-card-text mx="4">
                   posted Date : {{ card.date }}
                  </v-card-text>
  
                  <v-card-actions>
  
                    <v-btn 
                      color="#ffff00"
                      link
                      :href="'/detail'"
                    >
                      detail<v-icon>list</v-icon>

                    </v-btn>
  
                    <v-btn icon x-large color="green">
                      <v-icon>phone</v-icon>
                    </v-btn>
  
                     <v-spacer></v-spacer>
  
                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>
  
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
      </v-container>
    <!--items card --> 
  
  
    </div>
    
  </template>
  
  
  
  <script>
  export default {
     name: 'Home',
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
          
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
          icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
        cards: null,
        }
      },
    }
  
  
  </script>
  