<script lang="ts">
  import Navbar from '@this/components/Navbar';
  import Sidebar from '@this/components/Sidebar';

  let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<slot />
