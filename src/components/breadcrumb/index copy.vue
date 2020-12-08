<template>
  <a-breadcrumb :separator="separator">
    <a-breadcrumb-item>
      <router-link to="/dashboard">
        <svg-icon icon-class="home" />
      </router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item
      v-for="route in routes"
      :key="route.path"
    >
      <router-link :to="route.path">
        {{ route.meta.title }}
      </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script>
import { useRoute } from 'vue-router'
import router from '@/router'
import { computed, watch, onMounted, ref } from 'vue'
export default {
  name: 'BreadCrumb',
  setup(props, ctx) {
    const route = useRoute()
    const goto = (item) => {
      router.push(item.path)
    }
    const matcheds = ref(route.matched.filter(v => v.path !== '/dashboard'))
    const getSeparator = (matcheds) => {
      if (matcheds.length > 1) {
        return '/'
      } else {
        return ''
      }
    }
    const separator = ref(getSeparator(matcheds))
    watch(
      () => route,
      (n) => {
        // console.log('=========',n.matched)
        matcheds.value = n.matched.filter(v => v.path !== '/dashboard')
        separator.value = getSeparator(n.matched)
      },
      {
        immediate: true
      })

    return {
      routes: matcheds,
      goto: goto,
      separator
    }
  }
}
</script>
