<script lang="ts">
  import Navbar from '@this/components/navigation/Navbar';
  import Sidebar from '@this/components/navigation/Sidebar';
  import { pageTitleStore as pageTitle } from './data/pageTitleStore';

  let open = false;

  // TODO: Fix
  const config = { seasonYear: 2021 };
</script>

<div class="flex flex-col h-screen">
  <Sidebar class="pt-10" bind:open />
  <Navbar bind:sidebar={open} label={$pageTitle} />
  <div class="flex-1 overflow-y-auto p-5">
    <slot />
  </div>
  <footer class="py-5 px-2 bg-gray-200">BJFC {config.seasonYear} Season</footer>
</div>
