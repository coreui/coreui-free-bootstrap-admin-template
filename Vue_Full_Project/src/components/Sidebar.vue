<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> Dashboard <span class="badge badge-info">NEW</span></router-link>
        </li>
        <li class="nav-title">
          UI Elements
        </li>
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/components'}" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-puzzle"></i> Components</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/components/buttons'" class="nav-link" exact><i class="icon-puzzle"></i> Buttons</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/social-buttons'" class="nav-link" exact><i class="icon-puzzle"></i> Social Buttons</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/cards'" class="nav-link" exact><i class="icon-puzzle"></i> Cards</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/forms'" class="nav-link" exact><i class="icon-puzzle"></i> Forms</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/modals'" class="nav-link" exact><i class="icon-puzzle"></i> Modals</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/switches'" class="nav-link" exact><i class="icon-puzzle"></i> Switches</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/components/tables'" class="nav-link" exact><i class="icon-puzzle"></i> Tables</router-link>
            </li>
          </ul>
        </router-link>
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/icons'}" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-star"></i> Icons</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/icons/font-awesome'" class="nav-link" exact><i class="icon-star"></i> Font Awesome</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/icons/simple-line-icons'" class="nav-link" exact><i class="icon-star"></i> Simple Line Icons</router-link>
            </li>
          </ul>
        </router-link>
        <li class="nav-item">
          <router-link :to="'/widgets'" class="nav-link" exact><i class="icon-calculator"></i> Widgets <span class="badge badge-info">NEW</span></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/charts'" class="nav-link" exact><i class="icon-pie-chart"></i> Charts</router-link>
        </li>
        <li class="divider"></li>
        <li class="nav-title">
          Extras
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick"><i class="icon-star"></i> Pages</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/pages/login'" class="nav-link" exact><i class="icon-star"></i> Login</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'/pages/register'" class="nav-link" exact><i class="icon-star"></i> Register</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'/pages/404'" class="nav-link" exact><i class="icon-star"></i> Error 404</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/pages/500'" class="nav-link" exact><i class="icon-star"></i> Error 500</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
