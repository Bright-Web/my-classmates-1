<template>
  <div class="container">
    <h1>WHAT A VIEW!</h1>
  </div>
</template>

<script>
export default {
    name: 'coolness'
};
</script>

<style scoped>

.container{
  background: url('https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  height: 800px;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
h1{
  font-weight: 200;
  font-size: 4rem;
  background-color: rgba(241, 193, 138, 0.1);
  padding: 20px;
  color: rgba(255, 255, 255, 0.493);
}


</style>