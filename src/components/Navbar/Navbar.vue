<template>
  <div class="navbar_wrap">
    <div class="logo"><i class="bi bi-film"></i></div>

    <div class="nav_items_wrap">
      <router-link :to="{ name: 'home' }"
        ><i class="bi bi-list"></i
      ></router-link>

      <router-link :to="{ name: 'my-movies' }"
        ><i class="bi bi-check2-circle"></i
      ></router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.navbar_wrap {
  width: 100%;

  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11111;
}
.navbar_wrap .logo {
  font-size: 40px;
  color: #fff;
  margin-left: 20px;
}
.navbar_wrap .nav_items_wrap {
}
.navbar_wrap .nav_items_wrap a {
  text-decoration: none;
  margin-right: 20px;
  color: #fff;
  transition: 0.3s ease;
  font-size: 35px;
}

.navbar_wrap .nav_items_wrap a:hover {
  color: red;
}
.navbar_wrap .nav_items_wrap a.router-link-active {
  color: red;
}
</style>
