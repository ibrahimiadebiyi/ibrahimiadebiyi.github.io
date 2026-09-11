<script lang="ts">
  import { publications } from '$lib/publications';
</script>

<svelte:head>
  <title>Publications · Ibrahim Ismail-Adebiyi</title>
  <meta name="description" content="Research publications by Ibrahim Ismail-Adebiyi." />
</svelte:head>

<h2>Publications</h2>

{#each publications as p}
  <article>
    <h3>{p.title}</h3>
    <p>{p.authors}</p>
    <p>{p.venue}, {p.year}</p>
    <p>
      {#each p.links as link, i}
        {#if i > 0} / {/if}<a href={link.href}>{link.label}</a>
      {/each}
    </p>
  </article>
{/each}