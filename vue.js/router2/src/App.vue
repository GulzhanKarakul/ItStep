<template>
<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark"> 
    <div class="container-fluid"> 
      <a class="navbar-brand" href="#">Vue router</a> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"> 
        <span class="navbar-toggler-icon"></span> 
      </button> 
      <div class="collapse navbar-collapse" id="navbarColor01"> 
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
          <li class="nav-item"> 
            <router-link class="nav-link active" to="/pages/">Pages</router-link> 
          </li> 
          <li class="nav-item"> 
            <router-link class="nav-link active" aria-current="page" to="/items/">Items</router-link> 
          </li> 
          <li class="nav-item"> 
            <router-link class="nav-link active" aria-current="page" to="/items/0">Item 1</router-link> 
          </li> 
          <li class="nav-item"> 
            <router-link class="nav-link active" aria-current="page" to="/items/1">Item 2</router-link> 
          </li> 
          <li class="nav-item"> 
            <router-link class="nav-link active" aria-current="page" to="/first/">Redirect</router-link> 
          </li> 
        </ul> 
        <form class="d-flex" role="search"> 
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> 
          <button class="btn btn-outline-light" type="submit">Search</button> 
        </form> 
      </div> 
    </div> 
  </nav>


  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
