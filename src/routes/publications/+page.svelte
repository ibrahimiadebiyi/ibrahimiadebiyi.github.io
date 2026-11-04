<script lang="ts">
  import { publications } from '$lib/publications';
  import { base } from '$app/paths';

  // '/images/x.png' -> respects base path; full URLs pass through untouched
  const src = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);
</script>

<svelte:head>
  <title>Publications · Ibrahim Ismail-Adebiyi</title>
  <meta name="description" content="Research publications by Ibrahim Ismail-Adebiyi." />
</svelte:head>

<h2>Publications</h2>

{#each publications as p (p.title)}
  <article class:has-image={p.image}>
    {#if p.image}
      <img
        class="thumb"
        src={src(p.image)}
        alt={p.imageAlt ?? ''}
        width="200"
        height="150"
        loading="lazy"
        decoding="async"
      />
    {/if}
    <div class="body">
      <h3>{p.title}</h3>
      <p>{p.authors}</p>
      <p>{p.venue}, {p.year}</p>
      {#if p.links?.length}
        <p>
          {#each p.links as link, i}
            {#if i > 0} / {/if}<a href={src(link.href)} target="_blank">{link.label}</a>
          {/each}
        </p>
      {/if}
    </div>
  </article>
{/each}

<style>
  article {
    padding: 1rem 0;
  }

  article.has-image {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1.25rem;
    align-items: start;
  }

  /* Every photo renders at exactly 200×150, cropped to fill */
  .thumb {
    width: 200px;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    display: block;
  }

  .body h3 {
    margin-top: 0;
  }

  /* Stack on narrow screens */
  @media (max-width: 560px) {
    article.has-image {
      grid-template-columns: 1fr;
    }

    .thumb {
      width: 100%;
      max-width: 320px;
      height: auto;
      aspect-ratio: 4 / 3;
    }
  }
</style>