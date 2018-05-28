<template>
  <ul v-if="family">
    <li v-for="person in family" :key="person">
      <a href="#" v-if="person.name">
        <p>{{person.name}}</p>
        <p>{{person.spouse}}</p>
      </a>
      <tree-node
        v-if="person.children"
        :family="person.children"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: ['family'],
  name: 'tree-node'
}
</script>
