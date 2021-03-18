<template>
  <div class="postsDisplay">
      <AddNewPost />
  </div>
</template>
<script>
import AddNewPost from "../components/addNewPosts/addNewPost";
export default {
    name: 'AddPost',
    components: {
        AddNewPost,
    }
}
</script>