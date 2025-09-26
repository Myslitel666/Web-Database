<script>
  import { themeStore } from "svelte-elegant/stores";
</script>

<p class="header">Logo Attributions</p>
<div class="links" style:line-height="1.5">
  <p>
    1. “Node 9 SVG vector file” by alrra, MIT License, source
    <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="https://www.svgrepo.com/svg/378837/node"
    >
      SVGRepo – Browser Logo Vectors
    </a>
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
  <p>
    3. “TypeScript” by TypeScript, Public Domain, source
    <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="https://commons.wikimedia.org/wiki/File:Typescript.svg"
    >
      Wikimedia Commons
    </a>
  </p>
  <p>
    4. “Svelte Logo” by Rich Harris, MIT License, source
    <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="https://commons.wikimedia.org/wiki/File:Svelte_Logo.svg"
    >
      Wikimedia Commons
    </a>
  </p>
  <p>
    5. “Next.js wordmark” by Vercel, Public Domain, source
    <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="https://commons.wikimedia.org/wiki/File:Next.js_wordmark.svg"
    >
      Wikimedia Commons
    </a>
  </p>
  <p>
    5. “Visual Studio Code 1.35 Icon” by Microsoft, Public Domain, source
    <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg"
    >
      Wikimedia Commons
    </a>
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
