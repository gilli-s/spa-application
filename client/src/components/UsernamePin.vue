<template>
  <div class="container login-container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 login-form-1">
        <h3>Edit PIN</h3>
        <hr>
        <form>
          <div class="form-group" style="display: inline-table">
            <input   min="1" max="9" class="form-control" value="" required="required"
                   type = "number"
                   maxlength = "1"/>
            <input  min="1" max="9" class="form-control" value="" required="required"
                   type = "number"
                   maxlength = "1"/>
            <input min="1" max="9" class="form-control" value="" required="required"
                   type = "number"
                   maxlength = "1"/>
            <input min="1" max="9" class="form-control" value="" required="required"
                   type = "number"
                   maxlength = "1"/>
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
name: "UsernamePin"
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input {
  width: 20%;
  height: 50px;
  display: table-cell;
  margin-right: 5px;
  text-align: center;
  font-weight:bold;
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
