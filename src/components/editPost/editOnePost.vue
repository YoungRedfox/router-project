<template>
    <div>
        {{this.post}}
         <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="post.title"
                :counter="100"
                :rules="nameRules"
                label="Title"
                required
            ></v-text-field>
            <v-text-field
                v-model="post.urlImg"
                :rules="urlRules"
                label="Url image"
                required
            ></v-text-field>
            <v-text-field
                v-model="post.author"
                :counter="20"
                :rules="authorRules"
                label="Author"
                required
            ></v-text-field>
            <v-btn
                color="success"
                @click="xd"
                >
                italika
            </v-btn>
            <div class="test-div" contenteditable="true" v-html="post.description" @input="hendleDesc($event)">
              
            </div>  
            <v-btn
                color="success"
                @click="updataPost"
                >
                Updata
            </v-btn>
        </v-form>
        <!-- <DefaultInput 
            valueLabel="Tytuł:"
            idInput="titlePost"
            nameInput="title"
            :valueInput="post.title"
            className="inputTitlePost"
            classNameLabel="labelTitlePost"
            @change="changeValue($event, 'title')"
        /> -->
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
import updataPost from "../../service/put.service";
export default {
    name: 'EditOnePost',
    data(){
        return {
            idPost: this.$router.currentRoute.params.id,
            post: {},
            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length >= 3) || 'Name must be less than 10 characters',
            ],
            urlRules: [
                v => !!v || 'Link is required',
                v => (v && v.length >= 10) || 'Name must be less than 10 characters',
            ],
            authorRules: [
                v => !!v || 'Name author is required',
                v => (v && v.length >= 3) || 'Name must be less than 10 characters',
            ],
        }
    },
    components: {
        // DefaultInput,
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
        },
        updataPost(){
            updataPost.putPost(this.post)
        },
        xd(){
           let xd = document.execCommand("italic", false, null);
           console.log(xd)
        },
        hendleDesc(e){
            this.post.description = e.target.innerHTML
            console.log(e)
        }
    }
}
</script>
<style lang="scss">
    .test-div {
        min-width: 100px;
        min-height: 100px;
        background: lightgrey;
    }
</style>
