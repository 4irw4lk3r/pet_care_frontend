<template>
  <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col s5">
        <label>Nome</label>
        <input type="text" name="name" v-model="owner.name" required/>
        </div>
        <div class="col s6">
        <label>Sobrenome</label>
        <input type="text" name="name" v-model="owner.lastname" required/>
        </div>
        <div class="col s1">
        <label>Idade</label>
        <input type="number" name="age" v-model="owner.age" required/>
        </div>
      </div>
      <div class="row">
        <div class="col s7">
        <label>Endereço</label>
        <input type="text" name="logradouro" v-model="owner.endereco.logradouro" required/>
        </div>
        <div class="col s1">
        <label>Número</label>
        <input type="number" name="numero" v-model="owner.endereco.numero" required/>
        </div>
        <div class="col s4">
        <label>Complemento</label>
        <input type="text" name="complemento" v-model="owner.endereco.complemento" required/>
        </div>
      </div>
      <div class="row">
        <div class="col s1">
        <label>DDD</label><input type="number" name="ddd" v-model="owner.contato.ddd" required/>
        </div>
        <div class="col s4">
        <label>telefone</label><input type="number"
        name="telefone" v-model="owner.contato.telefone" required/>
        </div>
         <div class="col s7">
        <label>e-mail</label><input type="text"
        name="telefone" v-model="owner.contato.email" required/>
        </div>
      </div>
      <div class="row">
        <div class="col s2 offset-s10">
          <button class="waves-effect waves-light green lighten-3 right btn"
           type="submit">Submit
            <i class="inline-icon mdi mdi-18px mdi-chevron-right-circle"></i>
          </button>
        </div>
      </div>
  </form>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const owner = ref({
      name: '',
      lastname: '',
      age: '',
      endereco: { logradouro: '', numero: '', complemento: '' },
      contato: { ddd: '', telefone: '', email: '' },
    });

    return { owner };
  },
};
</script>

<style scoped>
  form {
    background: white;
    margin: 20px 0 10px 0;
    padding: 20px;
    border-radius: 10px;
  }

  .inline-icon {
   vertical-align: bottom;
   font-size: 18px !important;
  }

  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
  }
</style>
