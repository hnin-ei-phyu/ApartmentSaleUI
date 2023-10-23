<template>
    <div>
      
  <!--items card -->
      <v-container>
            <v-row >
              <v-col 
                v-for="card in cards"
                :key="card"
                class="d-flex"
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
                      :href="'card-detail'"
                    >
                      detail<v-icon>list</v-icon>

                    </v-btn>
  
  
                     <v-spacer></v-spacer>
  
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
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
  import Merchandise from '../../api/merchandise'
  export default {
     name: 'CardGroup',
     data () {
        return {
          cards: [
          { src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',roomType: 'Family room',location: 'Insein Township',title: 'Apartment',price: '120000 per month',date:'8/9/2023'},
          ],
        }
      },
      methods: {
        loadItems: async function () {
          this.items = [];
          try {
            let merchandise = new Merchandise(this.itemId)
            let result = await merchandise.getInfo()
            console.log(result.data)
          } catch (error) {
            console.log(error);
          }
        } 
      }
    }
  
  
  </script>
  