<script lang="ts">
  let rootClass = '';
  export { rootClass as class };
</script>

<div class={rootClass}>
  <slot />
</div>
