<script lang="ts" context="module">
  import type { PreloadContext, PreloadPage } from '@sapper/common';
  import { preload as preloadFn } from '@this/pages/AnchorList/preload';

  export function preload(this: PreloadContext.PreloadContext, page: PreloadPage.Page, session: any) {
    return preloadFn(this)(page, session);
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import AnchorListPage from '@this/pages/AnchorList';
  export let state = null;

  onMount(() => window.scrollTo(0, 0));
</script>

<AnchorListPage {state} />
