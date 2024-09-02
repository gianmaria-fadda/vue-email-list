const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Vue Email List',
        email: []
      };
    },
    created() {
      for (let i = 0; i < 10; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=> {
              console.log(i + 1 + ": " + response.data.response);
              this.email.push(response.data.response);
            });
      }
    }
  }).mount('#app');