<script lang="ts">
  import { projects } from '$lib/projects';

  let active = $state(projects[0]?.slug ?? '');
  let progress = $state(0);
  let articles: HTMLElement[] = [];
  let main: HTMLElement;

  let activeIndex = $derived(projects.findIndex((p) => p.slug === active));

    const latestYear = (period: string) => {
    const years = period.match(/\d{4}/g);
    return years ? Math.max(...years.map(Number)) : -Infinity;
  };

  let byNewest = $derived(
    [...projects].sort((a, b) => latestYear(b.period) - latestYear(a.period))
  );

  $effect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active = entry.target.id;
        }
      },
      { rootMargin: '-33% 0px -60% 0px' }
    );

    for (const el of articles) if (el) observer.observe(el);
    return () => observer.disconnect();
  });

  $effect(() => {
    const update = () => {
      if (!main) return;
      const { top, height } = main.getBoundingClientRect();
      const travel = height - window.innerHeight;
      progress = travel <= 0 ? 1 : Math.min(1, Math.max(0, -top / travel));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  });
</script>

<svelte:head>
  <title>Projects · Ibrahim Ismail-Adebiyi</title>
  <meta name="description" content="Projects by Ibrahim Ismail-Adebiyi." />
</svelte:head>

<h2>Projects</h2>

<div class="layout">
  <nav class="rail" aria-label="Projects">
    <div class="track" style="--progress: {progress}"></div>
    <ol>
      {#each projects as project, i (project.slug)}
        <li class:current={active === project.slug} class:read={i < activeIndex}>
          <a href="#{project.slug}" aria-current={active === project.slug ? 'true' : undefined}>
            {#if project.image}
              <img src={project.image} alt="" aria-hidden="true" />
            {:else}
              <span class="thumb-spacer" aria-hidden="true"></span>
            {/if}
            <span>{project.title}</span>
          </a>
        </li>
      {/each}
    </ol>
  </nav>

  <main bind:this={main}>
    {#each projects as project, i (project.slug)}
      <article
        class="project"
        class:no-image={!project.image}
        id={project.slug}
        bind:this={articles[i]}
      >
        <h3>{project.title}</h3>

        {#if project.image}
          <figure>
            <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
          </figure>
        {/if}

        <div class="prose">
          <p class="meta">{project.kind}, {project.period}</p>

          {#each project.body as paragraph}
            <p>{paragraph}</p>
          {/each}

          {#if project.links.length}
            <ul class="links">
              {#each project.links as link (link.href)}
                <li><a href={link.href} target="_blank">{link.label}</a></li>
              {/each}
            </ul>
          {/if}
        </div>
      </article>
    {/each}
  </main>
</div>

<nav class="index" aria-label="All projects">
  <h3>All projects</h3>
  <ol>
    {#each byNewest as project (project.slug)}
      <li>
        <a href="#{project.slug}">{project.title}</a>
        <span class="period">{project.period}</span>
      </li>
    {/each}
  </ol>
</nav>

<style>
  .layout {
    display: grid;
    grid-template-columns: 10rem minmax(0, 1fr);
    gap: 2rem;
    align-items: start;
  }


  .rail {
    position: sticky;
    top: 5rem;
    padding-left: 1rem;
  }

  .rail .track {
    position: absolute;
    left: 0;
    top: 0.4rem;
    bottom: 0.4rem;
    width: 1px;
    background: color-mix(in srgb, currentColor 15%, transparent);
  }

  .rail .track::after {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: calc(var(--progress, 0) * 100%);
    background: currentColor;
  }

  .rail ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .rail li {
    padding-block: 0.4rem;
  }

  .rail a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    opacity: 0.45;
    transition: opacity 0.25s;
  }

  .rail .read a {
    opacity: 0.7;
  }

  .rail .current a {
    opacity: 1;
  }

  .rail img {
    width: 1.75rem;
    height: 1.75rem;
    object-fit: cover;
    flex: none;
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 0.3s, transform 0.3s;
  }

  .rail .read img,
  .rail .current img {
    opacity: 1;
    transform: none;
  }

  .thumb-spacer {
    width: 1.75rem;
    flex: none;
  }


  .project {
    display: grid;
    grid-template-columns: minmax(0, 6fr) minmax(0, 8fr);
    grid-template-areas:
      'title title'
      'figure prose';
    column-gap: 2rem;
    align-items: start;
    padding-bottom: 5rem;
  }

  .project.no-image {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      'title'
      'prose';
  }

  .project h3 {
    grid-area: title;
    position: sticky;
    top: 0;
    margin: 0 0 1.5rem;
    padding-block: 0.75rem;
    background: var(--bg);
    border-bottom: 1px solid color-mix(in srgb, currentColor 12%, transparent);
    z-index: 1;
  }

  figure {
    grid-area: figure;
    margin: 0;
    position: sticky;
    top: 5rem;
    transform-origin: left center;
  }

  figure img {
    display: block;
    width: 100%;
    height: auto;
  }

    @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      figure {
        animation: handoff linear both;
        animation-timeline: view();
        animation-range: exit-crossing 0% exit 100%;
      }
    }
  }

  @keyframes handoff {
    to {
      transform: scale(0.3) translateX(-25%);
      opacity: 0;
    }
  }

  .prose {
    grid-area: prose;
    max-width: 78ch;
  }

  .prose p:first-child {
    margin-top: 0;
  }

  .meta {
    opacity: 0.7;
  }

  .links {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 2rem;
  }


  .index {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid color-mix(in srgb, currentColor 12%, transparent);
  }

  .index ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .index li {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    padding-block: 0.6rem;
  }

  .index li::after {
    content: '';
    order: 1;
    flex: 1;
    border-bottom: 1px dotted color-mix(in srgb, currentColor 30%, transparent);
  }

  .index .period {
    order: 2;
    opacity: 0.7;
    font-variant-numeric: tabular-nums;
  }

  a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
  }

  @media (max-width: 60rem) {
    .layout {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .rail {
      display: none;
    }

    .project,
    .project.no-image {
      grid-template-columns: 1fr;
      grid-template-areas: 'title' 'figure' 'prose';
      row-gap: 1.5rem;
      padding-bottom: 3rem;
    }

    figure {
      position: static;
      animation: none;
    }
  }
</style>