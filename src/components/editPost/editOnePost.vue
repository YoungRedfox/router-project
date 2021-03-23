<template>
    <div>
        {{this.post}}
        <DefaultInput 
            valueLabel="Tytuł:"
            idInput="titlePost"
            nameInput="title"
            :valueInput="post.title"
            className="inputTitlePost"
            classNameLabel="labelTitlePost"
            @change="changeValue($event, 'title')"
        />
        <!-- <DefaultInput 
            valueLabel="URL Zdjęcia:"
            idInput="urlImgPost"
            nameInput="urlImg"
            :valueInput="onePost.urlImg"
            className="inputUrlImgPost"
            classNameLabel="labelURLPost"
        
        />
        <DefaultInput 
            valueLabel="Autor:"
            idInput="authorPost"
            nameInput="author"
            :valueInput="onePost.author"
            className="inputAuthorPost"
            classNameLabel="labelAuthorPost"
            
        /> -->
    </div>
</template>
<script>
import getData from "../../service/get.service";
import DefaultInput from '../../controls/inputs/inputDefault'
// import DefaultTextarea from '../../controls/inputs/textareaDafault'
// import DefaultButton from '../../controls/buttons/buttonDefault'
// import FotoPost from "../../controls/foto";
// import TitlePost from "../../controls/title";
// import DescriptionPost from "../../controls/description";
export default {
    name: 'EditOnePost',
    data(){
        return {
            idPost: this.$router.currentRoute.params.id,
            post: {}
        }
    },
    components: {
        DefaultInput,
        // DefaultTextarea,
        // DefaultButton,
        // FotoPost,
        // TitlePost,
        // DescriptionPost
    }, 
    props: {
      
    },
    created(){
        this.start();
    },
      methods: {
        changeValue(value, name){
            this.post[name] = value
            console.log(value)
        },
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
