<template>
  <div class="container login-container">
    <div class="flash_container">
      <flash-message transitionIn="animated swing" class="myCustomClass"></flash-message>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 login-form-1">
        <h3>Edit password</h3>
        <hr>
        <label>Email:</label>&nbsp;<label class="label label-default"></label><br>
        <form>
          <div class="form-group">
            <input type="password"  class="form-control" placeholder="Current password" value="" required="required"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="New password" value="" required="required"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Repeat password" value="" required="required"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn" value="Change" />
          </div>
        </form>
        <div class="form-group" >
          <button class="ForgetPwd">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.flash_container {
  margin-inline: auto;
  width: 50%;
}
.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
}

.login-form-1{
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
  color: #333;
  font-weight: bold;
  margin-top: 0;
  text-align: center;
}
.login-container form{
  padding: 10% 10% 0;
}
.btn {
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  outline:none;
  cursor: pointer;
}

.login-form-1 .ForgetPwd{
  width: 50%;
  padding: 1.5%;
  border: none;
  cursor: pointer;
  color: #0062cc;
  font-weight: 600;
  background-color: #ffffff;
  outline:none;
}
</style>
