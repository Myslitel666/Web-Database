<script>
  import ProjectBox from "./ProjectBox.svelte";
  import { themeStore } from "svelte-elegant/stores";
  import { onMount } from "svelte";
  import { Stopwatch } from "svelte-elegant/icons-elegant";

  onMount(() => {});
</script>

<div class="page">
  <p>
    This website presents summaries of documentation for tools and frameworks
    essential for web developers.
  </p>
  <div class="container">
    <ProjectBox href="/attributions">
      <img src="/logo/java-script.png" style:height="50px" style:width="50px" />
      <div class="content">
        <div>
          <span>JavaScript</span>
        </div>
        <p
          style:font-size="16px"
          style:text-align="justify"
          style:text-justify="inter-word"
        >
          Turns static pages into dynamic apps.
        </p>
      </div></ProjectBox
    >
    <ProjectBox href="/attributions">
      <img src="/logo/type-script.svg" style:height="50px" style:width="50px" />
      <div class="content">
        <div>
          <span>TypeScript</span>
        </div>
        <p
          style:font-size="16px"
          style:text-align="justify"
          style:text-justify="inter-word"
        >
          Collected data for TypeScript.
        </p>
      </div>
    </ProjectBox>
    <ProjectBox href="/attributions">
      <img src="/logo/react.svg" style:height="50px" style:width="50px" />
      <div class="content">
        <div>
          <span>React</span>
        </div>
        <p
          style:font-size="16px"
          style:text-align="justify"
          style:text-justify="inter-word"
        >
          Collected data for React.
        </p>
      </div>
    </ProjectBox>
    <ProjectBox href="/attributions">
      <img src="/logo/svelte.svg" style:height="50px" style:width="50px" />
      <div class="content">
        <div>
          <span>Svelte</span>
        </div>
        <p
          style:font-size="16px"
          style:text-align="justify"
          style:text-justify="inter-word"
        >
          Collected data for Svelte.
        </p>
      </div>
    </ProjectBox>
    <ProjectBox href="/attributions">
      <img src="/logo/node-js.svg" style:height="50px" style:width="50px" />
      <div class="content">
        <div>
          <span>Node.js</span>
        </div>
        <p
          style:font-size="16px"
          style:text-align="justify"
          style:text-justify="inter-word"
        >
          Collected data for Node.js.
        </p>
      </div>
    </ProjectBox>
    <ProjectBox href="/attributions">
      <img src="/logo/next-js.svg" style:height="50px" style:width="50px" />
      <div class="content">
        <div>
          <span>Next.js</span>
        </div>
        <p
          style:font-size="16px"
          style:text-align="justify"
          style:text-justify="inter-word"
        >
          Collected data for Next.js.
        </p>
      </div>
    </ProjectBox>
    <ProjectBox href="/attributions">
      <img src="/logo/vs-code.svg" style:height="50px" style:width="50px" />
      <div class="content">
        <div>
          <span>Visual Studio Code</span>
        </div>
        <p
          style:font-size="16px"
          style:text-align="justify"
          style:text-justify="inter-word"
        >
          Collected data for Visual Studio Code.
        </p>
      </div>
    </ProjectBox>
  </div>
  <p>
    Logos of development tools are sourced from <a
      style:color={$themeStore.palette.primary}
      style:text-decoration="none"
      href="/attributions">attributions</a
    >.
  </p>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    margin-top: -7px;
    gap: 10px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* ← Это переносит на новую строку */
    gap: 10px;
  }

  .content {
    margin-left: 10px;
    gap: 15px;
    height: 100%;
    width: 100%;
    font-size: 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }

  .width {
    width: 6.75rem;
  }

  .mgn-top {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switch-container {
    display: flex;
    align-items: center;
    margin-top: 0.77rem;
  }
</style>
