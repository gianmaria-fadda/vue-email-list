const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Vue Email List'
      };
    },
    created() {
      axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(function () {
            
          });
    }
  }).mount('#app');