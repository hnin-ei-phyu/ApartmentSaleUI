<template>
    <div class="home-action-button mt-2 pe-4">
        <v-speed-dial fixed v-model="fab" absolute buttom right>
            <template v-slot:activator>
                <!--popup button activator-->
                <v-btn class="white--text" v-model="fab" :color="getCardColor()" fab>
                    <v-icon v-if="fab">mdi-close</v-icon>
                    <v-icon v-else>lock</v-icon>
                </v-btn>
            </template>

            <!-- log-out button -->
            <v-btn fab dark small @click="handleLogout">
                <v-btn :color="getCardColor()" large>logout<v-icon>logout</v-icon></v-btn>
            </v-btn>
        </v-speed-dial>
    </div>
</template>

<script>
export default {
  name: "HomeActionButton",
  data: function () {
    return {
      fab: false,
    };
  },
  methods: {
    handleLogout: function () {
      // Remove user from the global store
      this.$store.commit("setUser", null);
      // Remove auth token from the local-storage
      localStorage.removeItem("token");
      // Go to login page
      this.$router.push("/home");
    },
    getCardColor: function () {
      let isDarkTheme = this.$vuetify.theme.dark;
      if (isDarkTheme) {
        return this.$vuetify.theme.themes.dark.cardBackground + "44";
      } else {
        return "#1bb58c";
      }
    },
  },
};
</script>