<script lang="ts">
  import CardContact from '../CardContact';
  import type { IContact } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let contacts: IContact[];
</script>

{#each contacts as contact}
  <CardContact class="{rootClass} w-full" {contact} />
{:else}
  <p class="p-4">There are no contacts</p>
{/each}
