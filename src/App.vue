<template>
  <v-app>
    <v-main>
      <component :is="$route.meta.Layout" />
      <router-view />
    </v-main>
  </v-app>
</template>
