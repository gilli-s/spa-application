<template>
  <div class="container container-lrl">
    <h3>Events</h3>
    <hr>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Dates</th>
        <th>Participants</th>
      </tr>
      </thead>
      <tbody>
      <tr >
        <td>Example 1</td>
        <td>01.01.2021</td>
        <td>12</td>
      </tr>
      </tbody>
    </table>
    <div style="text-align: center; margin-top: 30px">
      <button>Add Event</button>
    </div>
  </div>
</template>

<script>
export default {
name: "Events"
}
</script>

<style scoped>
h3 {
  text-align: center;
}
.container-lrl {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;
  border-radius: 3px;
  background: #fff;
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
table {
  text-align: center;
}
tr {
  cursor: pointer;
}
button {
  font-weight: 600;
  background-color: #0062cc;
  color: #fff;
  width: 18%;
  border-radius: 1rem;
  padding-block: 5px;
  padding-inline: 24px;
  border: none;
  outline:none;
  cursor: pointer;
}
</style>
