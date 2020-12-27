<script lang="ts" context="module">
  import type { PreloadContext, PreloadPage } from '@sapper/common';

  export async function preload(this: PreloadContext.PreloadContext, page: PreloadPage.Page, _session: any) {
    const res = await this.fetch(`${page.path}${page.path === '/' ? 'index' : ''}.json`);
    const data = await res.json();
    return { state: data };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import CommitteeListPage from '@this/pages/CommitteeList';
  export let state = null;

  onMount(() => window.scrollTo(0, 0));
</script>

<CommitteeListPage {state} />
