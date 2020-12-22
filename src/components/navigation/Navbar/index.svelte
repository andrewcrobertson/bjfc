<script lang="ts">
  import Hamburger from '../Hamburger';

  export let sidebar = false;
  export let label: string = 'BJFC';
</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
  <nav class="flex items-center">
    <Hamburger bind:open={sidebar} />
    <div class="text-lg font-medium title-font px-3 py-1">{label}</div>
  </nav>
</header>
