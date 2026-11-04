<script lang="ts">
  import { teaching, type Teaching } from '$lib/teaching';

  const SEASON: Record<string, number> = { Spring: 0, Summer: 1, Fall: 2 };

  // 'Fall 2024' -> 20242 so terms compare chronologically
  function termKey(term: string): number {
    const [season, year] = term.trim().split(/\s+/);
    return Number(year) * 10 + (SEASON[season] ?? 0);
  }

  function sortedTerms(t: Teaching): string[] {
    return [...t.terms].sort((a, b) => termKey(a) - termKey(b));
  }

  // Long runs collapse to a range; short ones list every term
  function formatTerms(t: Teaching): string {
    const terms = sortedTerms(t);
    if (terms.length <= 3) return terms.join(', ');
    return `${terms[0]} – ${terms[terms.length - 1]} (${terms.length} terms)`;
  }

  function latest(t: Teaching): number {
    return Math.max(...t.terms.map(termKey));
  }

  // Most recent course first
  const courses = [...teaching].sort((a, b) => latest(b) - latest(a));
</script>

<svelte:head>
  <title>Teaching · Ibrahim Ismail-Adebiyi</title>
  <meta name="description" content="Teaching Experience for Ibrahim Ismail-Adebiyi." />
</svelte:head>

<h2>Teaching</h2>

{#if courses.length === 0}
  <p>No teaching entries yet.</p>
{:else}
  <ul class="teaching">
    {#each courses as course (course.code + course.role)}
      <li>
        <h3>
          <span class="code">{course.code}:</span>{course.title}
        </h3>
        <p class="meta">
          {course.role}, {course.institution}
          {#if course.instructor}
            <span class="instructor">(instructor: {course.instructor})</span>
          {/if}
        </p>
        <p class="terms" title={sortedTerms(course).join(', ')}>
          {formatTerms(course)}
        </p>
        {#if course.blurb}
          <p class="blurb">{course.blurb}</p>
        {/if}
        {#if course.links?.length}
          <p class="links">
            {#each course.links as link, i}
              {#if i > 0}<span aria-hidden="true"> / </span>{/if}
              <a href={link.href} target="_blank">{link.label}</a>
            {/each}
          </p>
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  .teaching {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .teaching li {
    padding: 1rem 0;
  }

  .teaching li + li {
    border-top: 1px solid color-mix(in srgb, currentColor 15%, transparent);
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1.05rem;
  }

  .code {
    font-weight: 700;
    margin-right: 0.35em;
  }

  p {
    margin: 0.15rem 0;
  }

  .meta,
  .terms {
    opacity: 0.75;
    font-size: 0.95rem;
  }

  .blurb {
    margin-top: 0.4rem;
    max-width: 70ch;
  }
</style>
