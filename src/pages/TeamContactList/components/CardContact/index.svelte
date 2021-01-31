<script lang="ts">
  import join from 'lodash/join';
  import type { IContact } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let contact: IContact;

  const text = contact.name;
  const relationship = contact.relationship;
  const contactMethods = join(contact.contactMethods, ', ');
</script>

<div class="{rootClass} flex text-sm">
  <h3 class="font-medium pr-2">{text}</h3>
  {relationship === '' ? '' : `(${relationship})`}
  {contactMethods}
</div>
