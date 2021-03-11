<template>
    <div id="nav">
      <div class="col-1">
          <p class="img-logo">Logo</p>
      </div>
      <div class="col-2">
        <ul>
          <li class="menu-item" v-for="item in router" :key="item.path">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: "NavMain",
  data() {
    return {
      router: [
        {
          path: "/",
          name: "Home"
        },
        {
          path: "/posts",
          name: "Posts"
        },
        {
          path: "/addpost",
          name: "New post"
        },
      ]
    }
  }
}

</script>
<style lang="scss">
  div#nav {
      width: 100%;
      background: rgb(255, 255, 255);
      .col-1 {
          width: 49%;
          display: inline-block;
          color: #fff;
          text-align: center;
          padding: 10px 0px;
          .img-logo{
            color: #000;
          }
      }
      .col-2 {
        width: 49%;
        display: inline-block;
        color: #fff;
        text-align: center;
        padding: 10px 0px;
      }
      .menu-item{
        display: inline-block;
        margin-left: 10px;
      }
      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
  }
</style>