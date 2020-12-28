<script lang="ts">
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import ContactButton from '@this/components/button/ContactButton';
  import FingerPrintIcon from '@this/components/icon/FingerPrintIcon';
  import * as personGenderEnum from '@this/scripts/constants/personGenderEnum';
  import { personBackground } from '@this/scripts/constants/theme';
  import type { IContact } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let contact: IContact;

  const initials = contact.initials;
  const text = contact.name;
  const colour = personBackground[contact.gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-4 lg:p-6 text-sm">
    <AvatarHeading {colour} {initials} {text} />
    <div class="flex flex-col">
      <LabelledIcon class="border border-gray-300 border-dotted mt-2 px-3 py-3" iconClass="text-{colour}-500" icon={FingerPrintIcon}>
        {contact.relationship}
      </LabelledIcon>
      {#each contact.contactMethods as { type, value }}
        <ContactButton class="mt-2" {type} {value} {colour} />
      {/each}
    </div>
  </div>
</div>
