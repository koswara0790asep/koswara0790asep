<template>
  <div>
<!-- category -->
    <v-container grid-list-md>
      <v-subheader>
        Random Category
        <v-spacer></v-spacer>

        <router-link to="/categories">See All</router-link>
      </v-subheader>
      <v-layout row wrap>

        <v-flex v-for="category in categories" xs6 :key="category.id">
          <v-card :to="'/category'+ category.slug">
            <v-img :src="getImage('/categories/'+category.image)" height="150px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <span class="tittle white--text text-block" v-text="category.name"></span>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

    <!-- Book -->
    <v-container grid-list-md>
      <v-subheader>
        Top Books
        <v-spacer></v-spacer>

        <router-link to="/books">See All</router-link>
      </v-subheader>
      <v-layout row wrap>

        <v-flex v-for="(book, index) in books" xs6 :key="index">
          <v-card :to="'/book'+ book.slug">
            <v-img :src="getImage('/books/'+book.cover)" height="150px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <span class="tittle white--text text-block" v-text="book.tittle"></span>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<style scoped>
  .text-block {
    position: absolute;
    bottom: 5px;
    left: 5px;
    background-color: black;
    padding-left: 5px;
    padding-right: 5px;
    opacity: 0.7;
    width: 100%;
  }
</style>

<script>
  export default {
    data: () => ({
      categories: [],
      books: []
    }),
    methods: {
      getImage (image){
        if(image!=null && image.length>0){
          return process.env.VUE_APP_BACKEND_URL+"images"+ image
        }

        return "/img/unvailable.jpg"
      },
    },
    created() {
      let count = 4

      this.axios.get('/categories/random/'+count)
      .then((response) => {
        let categories = response.data.data

        this.categories = categories
      })
      .catch((error) => {
        let responses = error.response
        console.log(responses)
      })
      count = 8

      this.axios.get('/books/top/'+count)
      .then((response) => {
        let books = response.data.data
        this.books = books
      })
      .catch((error) => {
        let responses = error.response
        console.log(responses)
      })
    }
  }
</script>