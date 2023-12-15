<template>
  <div
    class="relative bg-center bg-no-repeat bg-cover"
    style="
      background-image: url(https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;fit=crop&amp;w=1951&amp;q=80);
    "
  >
    <div></div>
    <div class="justify-center min-h-screen mx-0 sm:flex sm:flex-row">
      <div
        class="z-10 flex flex-col self-center p-10 sm:max-w-5xl xl:max-w-2xl"
      >
        <div class="flex-col self-start hidden text-white lg:flex">
          <img src="" class="mb-3" />
          <h1 class="mb-3 text-5xl font-bold">Weeshr Admin</h1>
          <p class="pr-3">
            Unleash the power of seamless management and control with our admin
            tools.
          </p>
        </div>
      </div>
      <div class="z-10 flex self-center justify-center">
        <div class="p-12 mx-auto bg-white rounded-2xl w-100">
          <div class="mb-4">
            <h3 class="text-2xl font-semibold text-gray-800">Sign In</h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium tracking-wide text-gray-700">
                Email
              </label>
              <input
                class="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-800"
                type=""
                placeholder="user@gmail.com"
              />
            </div>
            <div class="space-y-2">
              <label
                class="mb-5 text-sm font-medium tracking-wide text-gray-700"
              >
                Password
              </label>
              <input
                class="content-center w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-800"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="w-4 h-4 bg-indigo-800 border-gray-300 rounded focus:ring-indigo-800"
                />
                <label
                  for="remember_me"
                  class="block ml-2 text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="text-indigo-800 hover:text-indigo-300">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-indigo-800 rounded-full shadow-lg cursor-pointer hover:bg-indigo-800"
              >
                Sign in
              </button>
            </div>
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

<script setup lang="ts"></script>
