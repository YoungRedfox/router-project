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
        <DefaultInput 
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
            
        />
    </div>
</template>
<script>
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
            onePost: this.post
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
        post: {
            type: Object,
            default: () => {},
        }
    },
      methods: {
        changeValue(value, name){
            this.onePost[name] = value
            console.log(this.onePost)
        },
    }
}
</script>
<style lang="scss">

</style>
