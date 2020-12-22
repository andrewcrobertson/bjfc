<script lang="ts">
  import HomeIcon from '@this/components/icon/HomeIcon';
  import Hamburger from '../Hamburger';

  export let sidebar = false;
  export let label: string = 'BJFC';
</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
  <nav class="flex space-x-2 items-center">
    <Hamburger bind:open={sidebar} />
    <a class="flex items-center border border-gray-300 px-1 py-1" href="/"><HomeIcon class="w-7 h-7" /></a>
    <p class="text-lg font-medium title-font">{label}</p>
  </nav>
</header>
