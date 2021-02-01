<template>
  <div class="signup-form">
    <form>
      <h3>Add event</h3>
      <hr>
      <div class="form-group" style="margin-left: 30%">
        <img />
      </div>
      <div class="form-group">
        <div class="custom-file">
          <label class="custom-file-label" for="customFile">Choose image</label>
          <input type="file" accept="image/*" class="custom-file-input" id="customFile">
        </div>
      </div>
      <div class="form-group">
        <label>Event title</label>
        <input  type="text" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Start Date</label>
        <input  type="date" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>C1 Date</label>
        <input  type="date" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>C+1 Date</label>
        <input  type="date" class="form-control" required="required">
      </div>
      <div class="form-group">
        <label>Finish Date</label>
        <input  type="date" class="form-control" required="required">
      </div>
      <div class="form-group" style="text-align: center">
        <input type="submit" class="btn" value="Add" />
      </div>
      <div class="form-group" style="text-align: center">
        <button class="ForgetPwd">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
name: "AddEvent"
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  background-color: #dddddd;
}
.form-control {
  min-height: 41px;
  box-shadow: none;
  border-color: #ddd;
}
.signup-form {
  width: 425px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.signup-form h3 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
  text-align: center;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form label {
  font-weight: normal;
  font-size: 14px;
}
.btn {
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
  padding: 1.5%;
  width: 50%;
  border-radius: 1rem;
  border: none;
  outline:none;
  cursor: pointer;
}
.ForgetPwd{
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
