<template>
  <div>
    <h1>VeeValidate Form</h1>
    <form>
      Name:<input name="name" v-model="name" v-validate="'required'" />
      <pre>{{ name }}</pre>
    </form>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      name: '',
    }
  }
}
</script>
