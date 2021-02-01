<template>
  <div class="container container-lrl">
    <div class="form-group image-upload" style="margin-left: 30%">
      <img  class="avatar"/>
      <label for="file-input" style="vertical-align: bottom">
        <img   src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      </label>
      <input id="file-input" type="file"  />
    </div>
    <div class="notice notice-lg">
      <strong>Event information</strong>
      <img  data-toggle="modal" data-target="#exampleModalCenter" src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>Event Title:</label>&nbsp;<label class="label label-default"></label>
    </div>
    <div class="notice  notice-lg">
      <strong>Dates information</strong>
      <img data-toggle="modal" data-target="#exampleModalCenterDates" src="https://img.icons8.com/material/18/000000/pencil--v1.png"/>
      <hr>
      <label>Start Date:</label>&nbsp;
      <label class="label label-default"></label><br>
      <label>C1 Date:</label>&nbsp;
      <label class="label label-default"></label><br>
      <label>C+1 Date:</label>&nbsp;
      <label class="label label-default"></label><br>
      <label>Finish Date:</label>&nbsp;
      <label class="label label-default"></label>
    </div>
    <div class="notice notice-lg">
      <strong>Participants</strong>
      <hr>
      <label>Participants:</label>&nbsp;<label></label>
    </div>
    <div class="form-group" style="text-align: center">
      <button class="ForgetPwd">Documents</button>
    </div>
    <div class="form-group" style="text-align: center">
      <button  class="ForgetPwd">Back</button>
    </div>

    <!-- Modal Event title -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Change title</h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <label>Event Title:</label>
              <input type="text" class="form-control" value="" required="required"/>
            </div>
          </div>
          <div class="modal-footer">
            <button class="assign" data-dismiss="modal" style="width: auto;" >Save changes</button>
            <button class="btn btn-secondary" style="width: auto" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Event Dates  -->
    <div class="modal fade" id="exampleModalCenterDates" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitleDates" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitleDates">Change dates</h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group">
                <label>Start Date</label>
                <input type="date" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>C1 Date</label>
                <input type="date" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>C+1 Date</label>
                <input  type="date" class="form-control" required="required">
              </div>
              <div class="form-group">
                <label>Finish Date</label>
                <input type="date" class="form-control" required="required">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="assign" data-dismiss="modal" style="width: auto;">Save changes</button>
            <button class="btn btn-secondary" style="width: auto" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "EventDetail"
}
</script>

<style scoped>
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
strong {
  margin-right: 8px;
}

img {
  margin-top: -4px;
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

.notice-warning>strong {
  color: #FEAF20;
}

.notice-danger>strong {
  color: #d73814;
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
button {
  font-weight: 600;
  color: #fff;
  width: 50%;
  border-radius: 1rem;
  padding-block: 5px;
  padding-inline: 24px;
  border: none;
  outline:none;
  cursor: pointer;
}
.assign {
  background-color: #0062cc;
}
</style>
