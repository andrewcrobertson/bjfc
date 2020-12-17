<script lang="ts">
  import { onMount } from 'svelte';
  import CommitteeListPage from '@this/pages/CommitteeList';

  onMount(() => window.scrollTo(0, 0));
</script>

<CommitteeListPage />
