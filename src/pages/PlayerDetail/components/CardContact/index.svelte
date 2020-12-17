<script lang="ts">
  import ContactButton from '@this/components/ContactButton';
  import FingerPrintIcon from '@this/icons/FingerPrintIcon';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';

  let rootClass = '';
  export { rootClass as class };
  export let contact: any = {};

  // const type = contact.type
  const relationship = contact.relationship;
  const initials = contact.initials;
  const name = contact.name;
  // const assistInRole   = contact.assistInRole
  const contactMethods = contact.contactMethods;
  const gender = contact.gender;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-4 lg:p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font truncate ml-2">{name}</h2>
    </div>
    <div class="flex flex-col -mb-3">
      <div class="cursor-default inline-flex items-center text-sm border border-gray-300 border-dotted mb-2 px-3 py-3">
        <FingerPrintIcon class="inline w-5 h-5 mr-2 text-{colour}-500" />
        {relationship}
      </div>
      {#each contactMethods as { type, value }}
        <ContactButton class="mb-2" {type} {value} {colour} />
      {/each}
    </div>
  </div>
</div>
