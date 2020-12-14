<script lang="ts">
  import Navbar from '@this/components/Navbar';
  import Sidebar from '@this/components/Sidebar';

  let open = false;
</script>

<div class="flex flex-col h-screen">
  <Sidebar bind:open />
  <Navbar bind:sidebar={open} />
  <div class="flex-1 overflow-y-auto p-5">
    <slot />
  </div>
  <footer class="py-5 px-2 bg-gray-200">BJFC</footer>
</div>
