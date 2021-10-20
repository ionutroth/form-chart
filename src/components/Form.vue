<template>
  <div class='d-flex justify-content-center'>
    <b-form @submit.prevent="addToList" class="w-50 shadow-lg border border-success" >
      <b-form-group
        label="First Name:"
        label-for="input-fn"
        class="m-3"
      >
        <b-form-input
          id="input-fn"
          v-model="firstName"
          type="text"
          placeholder="enter your first name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Last name:"
        label-for="input-ln"
        class="m-3"
      >
        <b-form-input
          id="input-ln"
          v-model="lastName"
          type="text"
          placeholder="enter your last name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email:"
        label-for="input-em"
        class="m-3"
      >
        <b-form-input
          id="input-em"
          v-model="email"
          type="text"
          placeholder="enter your email"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        label="First Grade:"
        label-for="input-gr1"
        class="m-3"
      >
        <b-form-input
          id="input-gr1"
          v-model="grade1"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Second Grade:"
        label-for="input-gr2"
        class="m-3"
      >
        <b-form-input
          id="input-gr2"
          v-model="grade2"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Third Grade:"
        label-for="input-gr3"
        class="m-3"
      >
        <b-form-input
          id="input-gr3"
          v-model="grade3"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Fourth Grade:"
        label-for="input-gr4"
        class="m-3"
      >
        <b-form-input
          id="input-gr4"
          v-model="grade4"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Fifth Grade:"
        label-for="input-gr5"
        class="m-3"
      >
        <b-form-input
          id="input-gr5"
          v-model="grade5"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Sixth Grade:"
        label-for="input-gr6"
        class="m-3"
      >
        <b-form-input
          id="input-gr6"
          v-model="grade6"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Seventh Grade:"
        label-for="input-gr7"
        class="m-3"
      >
        <b-form-input
          id="input-gr7"
          v-model="grade7"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="m-3">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
        firstName: '',
        lastName: '',
        email: "",
        grade1: 0,
        grade2: 0,
        grade3: 0,
        grade4: 0,
        grade5: 0,
        grade6: 0,
        grade7: 0
    }
  },
  methods:{
    addToList(){
      
      this.$store.commit('addToList', {
        fn: this.firstName, 
        ln: this.lastName, 
        em: this.email, 
        gr1: this.grade1, 
        gr2: this.grade2, 
        gr3: this.grade3, 
        gr4: this.grade4, 
        gr5: this.grade5, 
        gr6: this.grade6, 
        gr7: this.grade7
        })
      console.log(this.$store.state.list)
    }
  }
}
</script>
<style scoped>

</style>


