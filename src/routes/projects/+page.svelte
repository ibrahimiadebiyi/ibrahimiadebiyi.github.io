<script lang="ts">
  import { projects } from '$lib/projects';
</script>

<svelte:head>
  <title>Projects · Ibrahim Ismail-Adebiyi</title>
  <meta name="description" content="Projects by Ibrahim Ismail-Adebiyi." />
</svelte:head>

<h2>Projects</h2>

{#each projects as p}
  <article>
    <h3>{p.name}</h3>
    <p>{p.description}</p>
    <p>{p.year}</p>
    <p>
      {#each p.links as link, i}
        {#if i > 0} / {/if}<a href={link.href}>{link.label}</a>
      {/each}
    </p>
  </article>
{/each}