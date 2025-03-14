<template>
  <div>This is Test page</div>
  <div>
    <NuxtLink to="/test?test=12345">Query params available</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/example?test=12345">
      Query params disapear on redirect
    </NuxtLink>
  </div>
  <pre>{{ useRoute().query }}</pre>
</template>
