<script lang="ts">
  let rootClass = '';
  export { rootClass as class };
  export let icon = null;
  export let iconClass = '';
</script>

<span class="{rootClass} flex items-center">
  <svelte:component this={icon} class="{iconClass} w-4 h-4 mr-1" />
  <slot />
</span>
