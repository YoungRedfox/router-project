<template>
    <div>
        <EditOnePost :post="post" />
    </div>
</template>
<script>
import EditOnePost from "../components/editPost/editOnePost"
import getData from "../service/get.service";
export default {
   name: 'EditPost',
   components: {
       EditOnePost,
   },
   data(){
       return{
           idPost: this.$router.currentRoute.params.id,
           post: {}
       }
   },
    created() {
        this.start();
    },
     methods: {
        start(){
          this.getData();
        },
        async getData(){
            let post = await getData.getOnePost(this.idPost);
            this.post = post.data
        }
    }
}
</script>
<style lang="scss">

</style>