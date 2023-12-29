<template>
    <!-- <div id="app"> -->
  <h1>Hello App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/hw">Hello World</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  {{ title }}
<!-- </div> -->
</template>

<script>

export default {
  name: 'homePage',
  props: {
    title: String
  }
}

</script>