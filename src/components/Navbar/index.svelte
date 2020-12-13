<script>
  import Logo from '../Logo';
  import Hamburger from '../Hamburger';
  import Menu from '../Menu';

  export let sidebar = false;
</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
  <nav class="flex">
    <Hamburger bind:open={sidebar} />
    <Logo />
  </nav>

  <Menu />
</header>
