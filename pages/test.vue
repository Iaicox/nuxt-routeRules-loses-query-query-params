<template>
  <div>This is Test page</div>
  <div>
    <NuxtLink to="/test?test=12345">Query params available</NuxtLink>
  </div>
  <div>
    <client-only>
      <NuxtLink to="/example?test=12345">
        Query params disapear on redirect
      </NuxtLink>
    </client-only>
  </div>
  <pre>{{ useRoute().query }}</pre>
</template>