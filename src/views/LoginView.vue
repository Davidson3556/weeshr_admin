<template>
  <div
    class="relative bg-center bg-no-repeat bg-cover"
    :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
  >
    <div class="flex flex-row justify-center min-h-screen mx-0">
      <div
        class="z-10 flex flex-col self-center hidden lg:flex p-10 sm:max-w-5xl xl:max-w-2xl transform -translate-y-[60%]"
      >
        <div
          class="flex-col self-start text-white lg:flex dark:text-indigo-300"
        >
          <img src="" class="mb-3" />
          <h1 class="mb-3 text-5xl font-bold">Weeshr Admin</h1>
          <p class="pr-3 max-w-[500px]">
            Unleash the power of seamless management and control with our admin
            tools.
          </p>
        </div>
      </div>

      <div
        class="z-10 flex flex-col self-center justify-center transform -translate-y-[80px]"
      >
        <div
          class="flex flex-col items-center self-center w-full text-white pb-14 lg:hidden dark:text-indigo-300"
        >
          <h1 class="mb-3 text-5xl font-bold">Weeshr Admin</h1>
          <p class="w-10/12 text-center">
            Unleash the power of seamless management and control with our admin
            tools.
          </p>
        </div>

        <div
          class="p-8 mx-auto bg-white dark:bg-slate-700 rounded-2xl w-[350px]"
        >
          <div class="mb-4">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-blue-300">
              Sign In
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Please sign in to your account.
            </p>
          </div>

          <div class="pt-4 space-y-5">
            <form @submit.prevent="login">
              <div class="flex flex-col space-y-2 field">
                <label
                  class="text-base font-medium tracking-wide text-gray-700 dark:text-indigo-300"
                  for="email"
                >
                  Email
                </label>
                <InputText
                  v-model="email"
                  aria-describedby="email-help"
                  type="email"
                  placeholder="user@gmail.com"
                  :class="{ 'p-invalid': errors.email }"
                  class="block"
                />
                <div class="h-[10px] flex items-center">
                  <small id="email-help" class="mt-0 p-error text-red">
                    {{ errors.email }}
                  </small>
                </div>
              </div>

              <div class="flex flex-col pt-2 space-y-2">
                <label
                  class="text-base font-medium tracking-wide text-gray-700 dark:text-indigo-300"
                  for="password"
                >
                  Password
                </label>
                <InputText
                  v-model="password"
                  aria-describedby="password-help"
                  placeholder="Enter your password"
                  type="password"
                  :class="{ 'p-invalid': errors.password }"
                />
                <div class="h-[10px] flex items-center">
                  <small id="password-help" class="p-error">
                    {{ errors.password }}
                  </small>
                </div>
              </div>

              <div class="flex items-center justify-between py-4 field">
                <div class="flex items-center">
                  <a
                    href="#"
                    class="text-indigo-800 hover:text-indigo-300 dark:text-indigo-300"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <Toast />
              <div class="flex w-full py-100">
                <Button
                  class="w-full overflow"
                  label="Sign In"
                  :rounded="true"
                  :loading="loading"
                  :handleButtonClick="onSubmit"
                />
              </div>
            </form>
          </div>

          <div class="pt-5 text-xs text-center text-gray-400">
            <span>
              Copyright © 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const loading = ref(false)
const toast = useToast()

const schema = yup.object({
  email: yup.string().required().email().label('Email address'),
  password: yup.string().required().min(6).label('Password'),
})

const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
})

const [email] = defineField('email')
const [password] = defineField('password')

const successMessages = [
  'Welcome, OliviaOps! Your daily dose of admin joy is here!',
  "Woohoo! OliviaOps just joined the admin party. Let's celebrate!",
  "Look up in the server room! It's OliviaOps – our superhero admin!",
  'Buckle up, OliviaOps! Your admin superpowers fueled by coffee are activated.',
  'Adventure awaits, OliviaOps! Ready to explore the admin universe?',
  'Abracadabra! OliviaOps, the Tech wizard, is in the house.',
  'Welcome, OliviaOps! The admin puzzle is ready for your genius touch.',
]

const show = () => {
  const randomIndex = Math.floor(Math.random() * successMessages.length)
  const randomMessage = successMessages[randomIndex]

  toast.add({
    severity: 'success',
    summary: 'Login successful ',
    detail: randomMessage,
    life: 2000,
  })
}

const onSubmit = handleSubmit((values) => {
  login()
})

const login = () => {
  console.log('Login started')

  loading.value = true

  // Simulate an asynchronous login process
  setTimeout(() => {
    loading.value = false

    show()

    // Add your logic for successful login here
  }, 2000) // Adjust the timeout duration as needed
}

const backgroundImages = [
  'https://res.cloudinary.com/drykej1am/image/upload/v1703539604/weeshr_admin/cltgg7aorzfbku6tcodq.jpg',
  'https://res.cloudinary.com/drykej1am/image/upload/v1703539599/weeshr_admin/zwyzwma2zqddwczmvtrq.jpg',
  'https://res.cloudinary.com/drykej1am/image/upload/v1703539593/weeshr_admin/ovd0fdxnikreyt3ya2w3.jpg',
]

const backgroundImage = ref(getRandomImage())

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length)
  return backgroundImages[randomIndex]
}
</script>
