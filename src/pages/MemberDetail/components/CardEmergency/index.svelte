<script lang="ts">
  import PhoneButton from '@this/components/PhoneButton';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import FingerPrintIcon from '@this/icons/FingerPrintIcon';

  let rootClass = '';
  export { rootClass as class };
  export let contact: any = {};

  const { initials, name, phone1, phone2, relationship, gender } = contact;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font ml-2">{name}</h2>
    </div>
    <div class="flex flex-col -mb-3">
      <div class="mb-2 cursor-default px-6 py-3 inline-flex items-center leading-none text-sm border border-gray-300 border-dotted">
        <FingerPrintIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
        Relationship:
        {relationship}
      </div>
      <PhoneButton class="mb-2" label="Phone 1" phone={phone1} {colour} />
      <PhoneButton class="mb-2" label="Phone 2" phone={phone2} {colour} />
      <div class="mb-2 cursor-default px-6 py-3 inline-flex items-center leading-none text-sm border border-gray-300 border-dotted">&nbsp;</div>
    </div>
  </div>
</div>
