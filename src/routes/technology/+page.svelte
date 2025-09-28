<script>
  import { page } from "$app/stores";
  import { getTechnology } from "./fetch";
  import { onMount } from "svelte";
  import { themeStore } from "svelte-elegant/stores";

  let technology = { name: "", description: "", logo: "", data_source: "" };
  let alias = "";
  let link = "";
  let isInitialized = false;

  async function getTechnologyAsync(technologyName) {
    technology = await getTechnology(technologyName);

    if (technology.data_source.includes(":")) {
      [alias, link] = technology.data_source.split(/:(.+)/); // второй параметр сохраняет двоеточия в ссылке
    }
  }

  $: technologyName = $page.url.searchParams.get("name");

  onMount(() => {
    if (technologyName) {
      getTechnologyAsync(technologyName);
    }
    isInitialized = true;
  });
</script>

{#if isInitialized}
  <div class="page">
    <div class="technology">
      <img
        src={technology.logo}
        alt="logo"
        style:height="100px"
        style:width="100px"
      />
      <div>
        <p style:font-size="16px">
          <span style:font-weight="600">Technology:</span>
          <span>{technology.name}</span>
        </p>
        <p style:font-size="16px">
          <span style:font-weight="600">Description:</span>
          <span>{technology.description}</span>
        </p>
        <p style:font-size="16px">
          <span style:font-weight="600">Data Source:</span>
          <a
            href={link}
            style:color={$themeStore.palette.primary}
            style:text-decoration="none">{alias}</a
          >
        </p>
      </div>
    </div>
  </div>
{/if}

<style>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .technology {
    display: flex;
    gap: 7px;
    align-items: center;
  }
</style>
