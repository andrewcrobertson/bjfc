<script lang="ts" context="module">
  import type { PreloadContext, PreloadPage } from '@sapper/common';
  import { preload as preloadFn } from '@this/pages/AnchorList/preload';

  export async function preload(this: PreloadContext.PreloadContext, page: PreloadPage.Page, session: any) {
    const res = await this.fetch(page.path);
    return await res.json();
    // return preloadFn(this)(page, session);
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import AnchorListPage from '@this/pages/AnchorList';
  export let state = null;

  onMount(() => window.scrollTo(0, 0));
</script>

<AnchorListPage {state} />
