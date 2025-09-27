<script>
  import TechnoBox from "./TechnoBox.svelte";
  import { themeStore } from "svelte-elegant/stores";
  import { onMount } from "svelte";
  import { getTechnologies } from "./fetch";

  let isInitialized = false;

  // Определяем массив технологий
  let technologies = [{ logo: "", name: "", description: "" }];

  onMount(async () => {
    technologies = await getTechnologies();
    isInitialized = true;
  });
</script>

<div class="page">
  <p>
    This website presents summaries of documentation for tools and frameworks
    essential for web developers.
  </p>

  {#if isInitialized}
    <div class="container">
      {#each technologies as tech}
        <TechnoBox href="/attributions">
          <img
            src={tech.logo}
            alt={tech.name}
            style:height="50px"
            style:width="50px"
          />
          <div class="content">
            <div>
              <span>{tech.name}</span>
            </div>
            <p
              style:font-size="16px"
              style:text-align="justify"
              style:text-justify="inter-word"
            >
              {tech.description}
            </p>
          </div>
        </TechnoBox>
      {/each}
    </div>
  {/if}

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
    flex-wrap: wrap;
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
</style>
