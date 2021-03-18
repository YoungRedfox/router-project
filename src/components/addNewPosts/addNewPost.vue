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
                    />
                </div>
                <DefaultTextarea 
                        valueLabel="Opis"
                        idTextarea="descriptionPost"
                        nameTextarea="description"
                        placeholderTextarea="Opis 255 znaków"
                        className="textareaPost"
                        classNameLabel="textareaDescriptionLabel"
                        :valueTextarea="this.newPost.description"
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
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus consequuntur natus blanditiis nam placeat ipsum recusandae incidunt laborum, cupiditate soluta.",
                reactionPlus: 0,
                reactionMinus: 0,
                author: "tipycode"               
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
            ]
        }
    },
    methods: {
        addPost(post){
            console.log(post)
        }
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