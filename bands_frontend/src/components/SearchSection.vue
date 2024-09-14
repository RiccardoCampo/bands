<template>
  <div class="search">
    <input class="search"  v-model="text" placeholder="type an artist...">
    <button class="search" @click="$emit('searchClicked')"><search-icon height=31 width=31 iconColor="inherit"></search-icon></button>
  </div>
</template>

<script>

export default {
  name: 'SearchSection',
  data () {
    return {
      text: ""
    }
  }
}

</script>

<style scoped>
div.search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

input.search {
  font-family: regular;
  font-size: 1.6pc;
  background-color: var(--white);
  width: 500px;
  height: 28px;
  outline: none;
  border-width: 3px;
  border-color: var(--darkred);
  border-style: solid;
  color: var(--grey);
  transition: all 0.2s;
}

input.search:focus {
  border-color: var(--darkyellow);
}

button.search {
  background-color: var(--darkred);
  stroke: var(--darkyellow);
  border: none;
  transition: all 0.1s;
}

button.search:active {
  background-color: var(--darkyellow);
  stroke: var(--darkred);
}

</style>
