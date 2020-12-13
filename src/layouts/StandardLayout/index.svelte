<script lang="ts">
  import Navbar from '@this/components/Navbar';
  import Sidebar from '@this/components/Sidebar';

  let open = false;
</script>

<style>
  /* Hide scrollbar: https://stackoverflow.com/a/49278385/40167 */
  div {
    overflow: auto;
    max-height: 90vh;
    overflow-y: scroll;
    /* Firefox */
    scrollbar-width: none;
    /* Internet Explorer 10+ */
    -ms-overflow-style: none;
  }

  /* WebKit */
  div::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
</style>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<div>
  <slot />
</div>
