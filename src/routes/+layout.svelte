<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#0F4A48" />
</svelte:head>

<div class="page">
  <header>
    <h1>Ibrahim Ismail-Adebiyi</h1>
    <p class="role">Master's Student · University of Minnesota</p>
    <nav>
      <a href="/">home</a> /
      <a href="/teaching">teaching</a> /
      <a href="/projects">projects</a> /
      <a href="/publications">publications</a> /
      <a href="mailto:ibrahim.ismailadebiyi@gmail.com" target="_blank">email</a> /
      <a href="https://github.com/ibrahimiadebiyi" target="_blank">github</a> /
      <a href="https://www.linkedin.com/in/ibrahim-iadebiyi/" target="_blank">linkedin</a>
    </nav>
    <p class="banner">
      <span>
        looking for PhD positions in visualization that start in 2027 ·
        <a href="mailto:ibrahim.ismailadebiyi@gmail.com">get in touch</a>
      </span>
    </p>
  </header>

  <hr />
  <main>{@render children()}</main>
  <hr />

  <footer>
    Ibrahim Ismail-Adebiyi, {new Date().getFullYear()} /
    <a href="https://github.com/ibrahimiadebiyi/ibrahimiadebiyi.github.io" target="_blank">source</a> /
    design inspired by <a href="https://www.tannerkrewson.com" target="_blank">Tanner Krewson</a>
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
  :global(a:focus-visible) { outline: 1px solid var(--accent); outline-offset: 2px; }

  .page { max-width: 40rem; margin: 0 auto; padding: 3rem 1.25rem; }
  h1 { font-size: 1.5rem; margin: 0; }
  .role { color: var(--muted); margin: 0.25rem 0 1rem; }
  nav { color: var(--rule); font-size: 0.9rem; line-height: 2; }
  hr { border: none; border-top: 1px solid var(--rule); margin: 2rem 0; }
  footer { color: var(--muted); font-size: 0.85rem; }

  .banner {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    margin: 1.25rem 0 0;
    padding: 0.55rem 0.9rem;
    font-size: 0.9rem;
    line-height: 1.6;
    border: 1px solid var(--rule);
    border-left: 3px solid var(--accent);
    background: color-mix(in srgb, var(--accent) 6%, transparent);
    border-radius: 2px;
  }
  .dot {
    flex: none;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: var(--accent);
    transform: translateY(-0.05rem);
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 50%, transparent); }
    50%      { box-shadow: 0 0 0 0.35rem color-mix(in srgb, var(--accent) 0%, transparent); }
  }
  @media (prefers-reduced-motion: reduce) {
    .dot { animation: none; }
  }
</style>