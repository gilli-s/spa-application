<template>
  <div>
    <h2>Login</h2>
    <form class="login-form">
      <div class="form-group">
        <label for="loginInput">Login</label>
        <input type="text" class="form-control" id="loginInput" placeholder="Enter login">
        <small id="emailHelp" class="form-text text-muted">We'll never share your login with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .login-form{
    width: 50%;
    margin: 0 auto;
  }
</style>
