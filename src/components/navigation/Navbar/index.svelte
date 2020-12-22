<script lang="ts">
  import Logo from '../Logo';
  import Hamburger from '../Hamburger';

  export let sidebar = false;
  export let label: string = 'BJFC';
</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
  <nav class="flex">
    <Hamburger bind:open={sidebar} />
    <Logo {label} />
  </nav>
</header>
