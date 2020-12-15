<script lang="ts">
  export let open = false;
</script>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>

<aside class="absolute w-4/5 h-full bg-gray-200 border-r-2 shadow-lg" class:open>
  <nav class="p-12 text-xl">
    <a class="block" href="/" on:click={() => (open = false)}>Team List</a>
    <a class="block" href="/committee/" on:click={() => (open = false)}>Committee</a>
  </nav>
</aside>
