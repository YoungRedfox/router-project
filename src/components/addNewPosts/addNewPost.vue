<template>
    <div class="containerAddPost">
        <div class="col-1">
            <div class="formAddNewPost">
                
                <div v-for="item in inputs" :key="item.idInput">
                    <DefaultInput 
                        :valueLabel="item.valueLabel"
                        :idInput="item.idInput"
                        :nameInput="item.nameInput"
                        :valueInput="newPost[item.nameInput]"
                        :className="item.className"
                        :classNameLabel="item.classNameLabel"
                        @change="changeValueInput($event, item.nameInput)"
                        @keyup="keyUp($event.length, item.idInput)"
                    />
                    
                </div>
                <DefaultTextarea 
                        valueLabel="Opis"
                        idTextarea="descriptionPost"
                        nameTextarea="description"
                        placeholderTextarea="Opis 75 znaków"
                        className="textareaPost"
                        classNameLabel="textareaDescriptionLabel"
                        :valueTextarea="newPost.description"
                        @change="changeValueTextarea($event)"
                    />
                <DefaultButton @click="addPost(newPost)" className="addPost" valueButton="Dodaj"/>
            </div>
        </div>
        <div class="col-2">
            <div class="onePostDisplay">
                <div class="onePostFoto">
                    <FotoPost :urlImg="this.newPost.urlImg" altImg="post.altImg" />
                </div>
                <div class="onePostText">
                    <TitlePost :title="this.newPost.title" />
                    <DescriptionPost :description="this.newPost.description"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DefaultInput from '../../controls/inputs/inputDefault'
import DefaultTextarea from '../../controls/inputs/textareaDafault'
import DefaultButton from '../../controls/buttons/buttonDefault'
import FotoPost from "../../controls/foto";
import TitlePost from "../../controls/title";
import DescriptionPost from "../../controls/description";
import postNew from "../../service/post.service";
export default {
    name: 'AddNewPost',
    components: {
        DefaultInput,
        DefaultTextarea,
        DefaultButton,
        FotoPost,
        TitlePost,
        DescriptionPost,
    },
    data(){
        return {
            newPost: {
                title: "Z palca",
                urlImg: "https://via.placeholder.com/600/92c952",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto labore quia fuga enim illo hic porro nobis at quae? Quaerat dolorem ullam repudiandae, dolorum at dolore! Distinctio nisi quam ducimus aliquam nam voluptates incidunt quia! Expedita, sit! Harum, numquam. Deleniti nesciunt ut earum quia voluptas consectetur, quis distinctio autem explicabo debitis, omnis molestias ex soluta, corrupti aperiam expedita rerum dolor. Alias hic placeat incidunt accusantium voluptate fugit, quo amet quisquam, voluptatum explicabo possimus laudantium?",
                reactionPlus: 0,
                reactionMinus: 0,
                author: "tipycode",
                validation: false  
                           
            },
            inputs: [
                {
                    valueLabel: "Tytuł:",
                    idInput: "titlePost",
                    nameInput: "title",
                    className: "inputTitlePost",
                    classNameLabel: "labelTitlePost",
                    valueInput: "this.newPost.title"
                },
                {
                    valueLabel: "URL Zdjęcia:",
                    idInput: "urlImgPost",
                    nameInput: "urlImg",
                    className: "inputUrlImgPost",
                    classNameLabel: "labelURLPost",
                    valueInput: "this.newPost.urlImg"
                },
                {
                    valueLabel: "Autor:",
                    idInput: "authorPost",
                    nameInput: "author",
                    className: "inputAuthorPost",
                    classNameLabel: "labelAuthorPost",
                    valueInput: "this.newPost.author"
                },
            ],
            showEvent: false,
            errors: ''
        }
    },
    methods: {
        addPost(post){
            postNew.postNewPost(post)
            this.$router.push("/posts")
        },
        changeValueInput(event, i){
            this.newPost[i] = event 
        },
        changeValueTextarea(event){
            this.newPost.description = event 
        },
        
    }
}
</script>
<style lang="scss">
    .containerAddPost{
        .col-1{
            display: inline-block;
            width: 60%;
            .formAddNewPost {
                width: 560px;
                margin: auto;
            }
            .addPost {
                background:    #ff0000;
                border-radius: 11px;
                padding:       10px 45px;
                color:         #ffffff;
                display:       inline-block;
                font:          normal bold 10px/1 "Open Sans", sans-serif;
                text-align:    center;
                width: 100%;
                margin-top: 10px;
            }
        }
        .col-2{
            display: inline-block;
            width: 40%;
            .onePostDisplay {
                margin: 0 0 100px 0;
                padding: 20px;
                max-width: 500px;
                border: solid 1px rgb(228, 228, 228);
                
                .onePostFoto {
                    border: solid 1px rgb(228, 228, 228);
                    max-width: 556px;
                    max-height: 556px;

                }
                .onePostText {
                    border: solid 1px rgb(228, 228, 228);
                }
            }
        }
    }
</style>