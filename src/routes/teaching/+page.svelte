<script lang="ts">
  import { teaching } from '$lib/teaching';
</script>

<svelte:head>
  <title>Publications · Ibrahim Ismail-Adebiyi</title>
  <meta name="description" content="Teaching Experience for Ibrahim Ismail-Adebiyi." />
</svelte:head>

<h2>Teaching</h2>

{#each Teaching as t}
  <article>
    <h3>{t.title}</h3>
    <p>{t.authors}</p>
    <p>{t.venue}, {t.year}</p>
    <p>
      {#each t.links as link, i}
        {#if i > 0} / {/if}<a href={link.href}>{link.label}</a>
      {/each}
    </p>
  </article>
{/each}