<template>
  <div class="container container-lrl">
    <div class="form-group image-upload" style="margin-left: 30%">
      <img class="avatar"/>
      <label for="file-input" style="vertical-align: bottom">
        <img src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      </label>
      <input id="file-input" type="file"  />
    </div>
    <div class="notice notice-lg">
      <strong>Login information</strong>
      <a href="/username/login"><img src="https://img.icons8.com/material/18/000000/pencil--v1.png"/></a>
      <hr>
      <label>Email:</label>&nbsp;<label class="label label-default"></label><br>
      <label>Password:</label>&nbsp;<label class="label label-default"></label>
    </div>
    <div class="notice  notice-lg">
      <strong>Profile information</strong>
      <img src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>First name:</label>&nbsp;
      <label class="label label-default"></label><br>
      <label>Last name:</label>&nbsp;
      <label class="label label-default"></label><br>
      <label>Country:</label>&nbsp;
      <label class="label label-default"></label><br>
      <label>About:</label>&nbsp;
      <label class="label label-default"></label>
    </div>
    <div class="notice notice-lg">
      <strong>Personal Identification Number</strong>
      <img src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>PIN: ••••</label>
      <label class="pin-setting">Set PIN</label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
strong {
  margin-right: 8px;
}
.image-upload>input {
  display: none;
}
.avatar {
  margin-top: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  background-color: #dddddd;
}
img {
  margin-top: -4px;
  cursor: pointer;
}
.pin-setting {
  cursor: pointer;
  background-color: #7f7f84;
  padding: 1.5%;
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: 24%;
  border-radius: 1rem;
  font-weight: 400;
}
.container-lrl{
  margin-top: 5%;
  margin-bottom: 5%;
  width: 40%;
}

.notice {
  padding: 15px;
  background-color: #fafafa;
  border-left: 6px solid #7f7f84;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
  -moz-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
  box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
}

.notice-lg {
  padding: 35px;
  font-size: large;
}

.notice-success>strong {
  color: #80D651;
}
.notice-info {
  border-color: #0062cc;
}
.notice-info>strong {
  color: #0062cc;
}

.notice-warning>strong {
  color: #FEAF20;
}

.notice-danger>strong {
  color: #d73814;
}
</style>
