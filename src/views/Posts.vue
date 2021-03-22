<template>
  <div class="postsDisplay">
      <Post :posts="fivePost"/>
  </div>
</template>
<script>
import getData from "../service/get.service";
import Post from "../components/posts/postDisplay";
export default {
  name: "PostDisplay",
    components: {
        Post,
    },
    data() {
      return {
        allPosts: [],
        fivePost: [],
      }
    },
    created() {
        this.start();
    },
    mounted() {
       window.onscroll = () => {
          const getElemendHTML = document.documentElement
          let addValue = getElemendHTML.scrollTop + window.innerHeight;
          let offsetHeight = getElemendHTML.offsetHeight;
          if(offsetHeight === addValue){
            const moreFivePost = this.allPosts.filter((item, index) => {
              if(index >= this.fivePost.length && index < this.fivePost.length + 5 ){
                return item;
              }
            })
            const addNextPost = this.fivePost.concat(moreFivePost)
            this.fivePost = addNextPost
          }
      }
    },
    methods: {
        start(){
          this.getData();
        },
        async getData(){
          let posts = await getData.getPosts();
          this.allPosts = posts.data.reverse();
          this.fivePost = this.allPosts.filter((item, index) => {
            if(index < 5) {
              return item;
            }
          })
        },
    }
}
</script>
<style lang="scss">

</style>