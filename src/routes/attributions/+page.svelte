<script>
  import { themeStore } from "svelte-elegant/stores";
</script>

<p class="header">Logo Attributions</p>
<div class="links">
  <p>
    1. “Node 9 SVG vector file” by alrra, from
    <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="https://www.svgrepo.com/svg/378837/node"
    >
      SVGRepo – Browser Logo Vectors
    </a>
    Licensed under MIT License
  </p>
  <p>
    2. “JavaScript Logo” by JavaScript Corp., source
    <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="https://commons.wikimedia.org/wiki/File:Javascript_Logo.png"
    >
      Wikipedia Commons
    </a>
    , licensed under CC BY-SA 4.0
  </p>
</div>

<style>
  .links {
    margin-top: 7px;
  }

  .header {
    font-size: 28px;
    margin-top: -7px;
    font-weight: 500;
  }
</style>
