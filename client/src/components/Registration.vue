<template>
  <form action="" class="registr-form">
    <div class="form-group">
      <label for="firstnameInput">First name</label>
      <input type="text" class="form-control" id="firstnameInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="lastnameInput">Last name</label>
      <input type="text" class="form-control" id="lastnameInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="countryInput">Country</label>
      <input type="text" class="form-control" id="countryInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="emailInput">E-mail</label>
      <input type="email" class="form-control" id="emailInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="passwordInput">Password</label>
      <input type="password" class="form-control" id="passwordInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="repeatpasswordInput">Repeat password</label>
      <input type="password" class="form-control" id="repeatpasswordInput" placeholder="">
    </div>
    <button type="submit" class="btn btn-primary">Ok</button>
    <button type="submit" class="btn btn-primary">Cancel</button>
  </form>
</template>

<script>
export default {
}
</script>

<style scoped>
 .registr-form{
   width: 50%;
   margin: 0 auto;
 }
</style>
