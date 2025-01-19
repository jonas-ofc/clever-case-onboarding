<script>
export default {
name: 'LoginView',
}
</script>

<template>
    <form name="login-form" >
      <div class="">
        <label for="username">Username: </label>
        <input id="username" type="text" />
      </div>
      <div class="">
        <label for="password">Password: </label>
        <input id="password" type="password" />
      </div>
      <button class="" type="submit">
        Login
      </button>
    </form>
</template>


