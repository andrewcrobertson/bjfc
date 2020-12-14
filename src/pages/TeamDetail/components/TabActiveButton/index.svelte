<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';
  export let tabId = '';
  const dispatch = createEventDispatcher();
</script>

<button class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4" on:click={() => dispatch('changeTab', { tabId })}>{tabId}</button>
