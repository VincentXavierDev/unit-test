<template>
  <div>
    <h1>Hello, world</h1>
    <h1 class="title">{{ title }}</h1>
    <input type="checkbox" v-model="isChecked">
    <input type="text" v-model="inputValue" />
    <span ref="span">Span</span>
    <button class="click-btn" @click="handleClick">Click me</button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted  } from "vue";

onMounted(() => {
  console.log("************************START APP****************************");
})
// import { defineProps, watch, computed, ref  } from 'vue';
// Define the 'message' prop with a default value and type
// const { message } = defineProps({
//   message: {
//     type: String, // Specify the type as String
//     default: 'Hello, World!' // Set a default value for the prop
//   }
// });

// Define a reactive data property 'message'
const TITLES = [
  'This is title 1',
  'This is title 2',
  'This is title 3',
  'This is title 4',
  'This is title 5',
  'This is title 6',
  'This is title 7',
  'This is title 8',
  'This is title 9',
  'This is title 10',
  'This is title 11',
  'This is title 12',
]
const title = ref('This is first website');
const inputValue = ref('Hello, World!');
const isClick = ref(false);
const isChecked = ref(false);
const randomTitle = ref(TITLES)

// Define a computed property 'reversedMessage'
// const reversedMessage = computed(() => {
//   // In this example, we reverse the 'message' prop
//   return message.value.split('').reverse().join('');
// });

// Watch for changes to 'updatedMessage'
watch(inputValue, (newValue, oldValue) => {
  console.log(`Change input value from ${oldValue} to ${newValue}`);
});

// Method to change the value of 'updatedMessage'
const handleClick = () => {
  isClick.value = true
  const index = Math.floor(Math.random() * 12)
  title.value = randomTitle.value[index];
};


</script>


<style></style>
