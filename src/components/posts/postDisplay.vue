<template>
    <div class="postContain">
        <div v-for="post in postArray" :key="post.id">
            <FotoPost :urlImg="post.urlImg" altImg="post.altImg" />
            <TitlePost :title="post.title" />
            <DescriptionPost :description="post.description"/>
        </div>
    </div>
</template>

<script>
import FotoPost from "../../controls/foto";
import TitlePost from "../../controls/title";
import DescriptionPost from "../../controls/description";
export default {
    name: "displayPosts",
    components: {
        FotoPost,
        TitlePost,
        DescriptionPost,
    },
    data(){
        return {
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
    }
}
</script>

<style lang="scss">
    .postContain{
        display: grid;
        grid-template-columns: auto auto auto;
    }
</style>