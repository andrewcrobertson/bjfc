<script lang="ts">
  let rootClass = '';
  export { rootClass as class };
  export let initials = '';
  export let text = '';
  export let colour = 'gray';
</script>

<div class="{rootClass} flex items-center">
  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
  <h2 class="text-lg font-medium title-font ml-2">{text}</h2>
</div>
