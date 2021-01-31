<script lang="ts">
  import ContactMethod from '../ContactMethod';
  import type { IContact } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let contact: IContact;

  const text = contact.name;
</script>

<div class="{rootClass} flex text-sm">
  <h3 class="font-medium pr-2">{text}</h3>
  {contact.relationship}
  {#each contact.contactMethods as { type, value }}
    <ContactMethod class="ml-2" {type} {value} />
  {/each}
</div>
