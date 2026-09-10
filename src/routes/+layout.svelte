<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#111111" />
</svelte:head>

<div class="page">
  <header>
    <h1>Ibrahim Ismail-Adebiyi</h1>
    <p class="role">Master's Student · University of Minnesota</p>
    <nav>
      <a href="/">home</a> /
      <a href="/publications">publications</a> /
      <a href="/projects">projects</a> /
      <a href="/cv.pdf">cv</a> /
      <a href="mailto:ismai128@umn.edu">email</a> /
      <a href="https://github.com/ibrahimiadebiyi">github</a> /
      <a href="https://scholar.google.com/citations?user=...">scholar</a>
    </nav>
  </header>

  <hr />
  <main>{@render children()}</main>
  <hr />

  <footer>
    Ibrahim Ismail-Adebiyi, {new Date().getFullYear()} /
    <a href="https://github.com/ibrahimiadebiyi/ibrahimiadebiyi.github.io">source</a>
  </footer>
</div>

<style>
  :global(:root) {
    color-scheme: dark;
    --bg: #0F4A48;
    --text: #DCEBE9;
    --muted: #8FB5B2;
    --accent: #F2B8A2;
    --rule: #1C6360;
  }
  :global(body) {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 15px;
    line-height: 1.7;
  }
  :global(a) { color: var(--accent); text-decoration: none; }
  :global(a:hover) { text-decoration: underline; }

  .page { max-width: 40rem; margin: 0 auto; padding: 3rem 1.25rem; }
  h1 { font-size: 1.5rem; margin: 0; }
  .role { color: var(--muted); margin: 0.25rem 0 1rem; }
  nav { color: var(--rule); font-size: 0.9rem; line-height: 2; }
  hr { border: none; border-top: 1px solid var(--rule); margin: 2rem 0; }
  footer { color: var(--muted); font-size: 0.85rem; }
</style>