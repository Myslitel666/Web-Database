<script>
  import ProjectBox from "./ProjectBox.svelte";
  import { themeStore } from "svelte-elegant/stores";
  import { onMount } from "svelte";

  // Определяем массив технологий
  const technologies = [
    {
      logo: "/logo/java-script.png",
      name: "JavaScript",
      description: "Collected data for JavaScript.",
    },
    {
      logo: "/logo/type-script.svg",
      name: "TypeScript",
      description: "Collected data for TypeScript.",
    },
    {
      logo: "/logo/react.svg",
      name: "React",
      description: "Collected data for React.",
    },
    {
      logo: "/logo/svelte.svg",
      name: "Svelte",
      description: "Collected data for Svelte.",
    },
    {
      logo: "/logo/node-js.svg",
      name: "Node.js",
      description: "Collected data for Node.js.",
    },
    {
      logo: "/logo/next-js.svg",
      name: "Next.js",
      description: "Collected data for Next.js.",
    },
    {
      logo: "/logo/vs-code.svg",
      name: "Visual Studio Code",
      description: "Collected data for Visual Studio Code.",
    },
  ];

  onMount(() => {});
</script>

<div class="page">
  <p>
    This website presents summaries of documentation for tools and frameworks
    essential for web developers.
  </p>

  <div class="container">
    {#each technologies as tech}
      <ProjectBox href="/attributions">
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
      </ProjectBox>
    {/each}
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
