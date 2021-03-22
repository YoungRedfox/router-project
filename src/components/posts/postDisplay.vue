<template>
    <div v-if="posts.length > 0" class="postContain" >
        <div class="onePostDisplay" v-for="post in posts" :key="post.id">
            <div class="onePostFoto">
                <FotoPost :urlImg="post.urlImg" altImg="post.altImg" />
            </div>
            <div class="onePostText">
                <TitlePost :title="post.title" />
                <DescriptionPost :description="post.description"/>
            </div>
            <div>
                <div class="onePostReaction">
                    <div><ValueReactionPost :valueReaction="post.reactionPlus" iconCode="fas fa-plus" /></div>
                    <div><ButtonIcon @click="addPlusReaction(post)" class="btnIcon-2" typeButton="button" icon="far fa-plus-square" /></div>
                </div>
                <div class="onePostReaction">
                    <div><ValueReactionPost :valueReaction="post.reactionMinus" iconCode="fas fa-minus" /></div>
                    <div><ButtonIcon @click="addMinusReaction(post)" className="btnIcon-1" typeButton="button" icon="far fa-minus-square" /></div>
                </div>     
                <div class="buttonEdit">
                    <ButtonDefault @click="editPost(post.id)" className="editBtn" valueButton="Edytuj"/>    
                </div>           
            </div>
        </div>
    </div>
    <div v-else>
        <p>Nie ma postów dla Ciebie</p>
    </div>
</template>

<script>
import FotoPost from "../../controls/foto";
import TitlePost from "../../controls/title";
import DescriptionPost from "../../controls/description";
import ValueReactionPost from "../../controls/reaction";
import postUpdata from "../../service/put.service";
import ButtonDefault from "../../controls/buttons/buttonDefault";
import ButtonIcon from "../../controls/buttons/buttonIcon";
export default {
    name: "displayPosts",
    components: {
        FotoPost,
        TitlePost,
        DescriptionPost,
        ValueReactionPost,
        ButtonDefault,
        ButtonIcon,
    },
    data(){
        return {
            // disabledButton: false,
            postArray: [ {     
                id: 2,
                title: "reprehenderit est deserunt velit ipsam",
                urlImg: "https://via.placeholder.com/600/92c952",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus consequuntur natus blanditiis nam placeat ipsum recusandae incidunt laborum, cupiditate soluta.",
                reaction: true,
                author: "typicode"
                },
                {                
                id: 3,
                title: "officia porro iure quia iusto qui ipsa ut modi",
                urlImg: "https://via.placeholder.com/600/771796",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus consequuntur natus blanditiis nam placeat ipsum recusandae incidunt laborum, cupiditate soluta.",
                reaction: false,
                author: "typicode"
                },]
        }
    },
    props: {
        posts: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        addPlusReaction(post){
            post.reactionPlus += 1
            // this.disabledButton = true
            postUpdata.putPost(post)
            console.log(post.reactionPlus);
        },
        addMinusReaction(post){
            post.reactionMinus += 1
            // this.disabledButton = true
            postUpdata.putPost(post)
            console.log(post.reactionMinus);
        },
        editPost(id){
            this.$router.push(`post/${id}`)
            window.scrollTo(0, 0);
            console.log(this.$router)
        }
    }
}

</script>

<style lang="scss">
    .postContain{
        max-width: 600px;
        margin: 40px auto 40px auto;
        .onePostDisplay {
            margin: 0 0 100px 0;
            padding: 20px;
            border: solid 1px rgb(228, 228, 228);
        }
        .onePostDisplay:last-child {
            margin: 0 0 0 0;
        }
        .onePostFoto {
            border: solid 1px rgb(228, 228, 228);
            max-width: 556px;
            max-height: 556px;

        }
        .onePostText {
            border: solid 1px rgb(228, 228, 228);
        }
        .onePostReaction {
            display: inline-block;
            padding: 5px;
        }
    }
</style>