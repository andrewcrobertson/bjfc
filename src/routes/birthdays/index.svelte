<script lang="ts" context="module">
  import trimEnd from 'lodash/trimEnd';
  import type { PreloadContext, PreloadPage } from '@sapper/common';

  export async function preload(this: PreloadContext.PreloadContext, page: PreloadPage.Page, _session: any) {
    const res = await this.fetch(`${trimEnd(page.path, '/')}${page.path === '/' ? 'index' : ''}.json`);
    const data = await res.json();
    return { state: data };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import BirthdayAllPage from '@this/pages/BirthdayAll';
  export let state = null;

  onMount(() => window.scrollTo(0, 0));
</script>

<BirthdayAllPage {state} />
