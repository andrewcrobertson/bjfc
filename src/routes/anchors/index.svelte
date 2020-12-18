<script lang="ts">
  import { onMount } from 'svelte';
  import AnchorListPage from '@this/pages/AnchorList';

  onMount(() => window.scrollTo(0, 0));
</script>

<AnchorListPage />
