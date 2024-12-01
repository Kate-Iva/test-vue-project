<template>
  <div :class="$style.buttonPanel+ ' ' + $style.textCenter">
    <button class="btn btn-primary" @click="openModal">Open Registration Form</button>
    <div :class="$style.modal + ' ' + $style.fade" tabindex="-1" role="dialog" v-if="modalVisible" @click.self="closeModal">
      <div :class="$style.modalDialog" role="document">
        <div :class="$style.modalContent">
          <div :class="$style.modalHeader">
            <h5 :class="$style.modalTitle">Registration Form</h5>
            <button type="button" :class="$style.close" @click="closeModal">
              <span>&times;</span>
            </button>
          </div>
          <div :class="$style.modalBody">
            <form @submit.prevent="handleSubmit">
              <div :class="$style.formGroup">
                <label for="name">Name:</label>
                <input type="text" v-model="form.name" :class="$style.formControl" id="name" placeholder="Ivan" required />
              </div>
              <div :class="$style.formGroup">
                <label for="email">Email:</label>
                <input type="email" v-model="form.email" :class="$style.formControl" id="email" placeholder="ivan@gmail.com" required />
              </div>
              <div :class="$style.formGroup">
                <label for="telephone">Telephone:</label>
                <input type="tel" v-model="form.telephone" :class="$style.formControl" id="telephone" placeholder="967956432" required />
              </div>
              <div :class="$style.formGroup">
                <label for="password">Password:</label>
                <input type="password" v-model="form.password" :class="$style.formControl" id="password" placeholder="********" required />
              </div>
              <div :class="$style.btnBlock">
              <button type="submit" class="btn btn-success">Register</button>
           </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const modalVisible = ref(false);
    const form = ref({
      name: '',
      email: '',
      telephone: '',
      password: '',
    });
    const openModal = () => {
      modalVisible.value = true;
      // Додайте клас "show" для модального вікна
      setTimeout(() => {
        const modalElement = document.querySelector('.modal');
        if (modalElement) {
          modalElement.classList.add('show');
          modalElement.style.display = 'block'; // Показати вікно
        }
      }, 0);
    };
    const closeModal = () => {
      modalVisible.value = false;
      const modalElement = document.querySelector('.modal');
      if (modalElement) {
        modalElement.classList.remove('show');
        modalElement.style.display = 'none'; // Сховати вікно
      }
    };
    const handleSubmit = () => {
      console.log('Form Data:', form.value);
      closeModal(); // Закрити модальне вікно після відправки
    };
    return {
      modalVisible,
      form,
      openModal,
      closeModal,
      handleSubmit,
    };
  },
};
</script>
<style module src="./ButtonPanel.module.css"></style>